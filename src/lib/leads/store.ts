import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Lead, LeadInput, LeadStatus, LeadUpdate } from "@/types/lead";
import { normalizeLead } from "@/lib/leads/normalize";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function readNormalizedLeads(): Promise<Lead[]> {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    const raw = await readFile(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw) as Record<string, unknown>[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.map((row) => normalizeLead(row));
  } catch {
    await writeFile(LEADS_FILE, "[]", "utf8");
    return [];
  }
}

async function writeLeads(leads: Lead[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
}

export async function createLead(input: LeadInput): Promise<Lead> {
  const leads = await readNormalizedLeads();

  const lead: Lead = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    company: input.company,
    interestType: input.interestType,
    sourcePage: input.sourcePage?.trim() || "unknown",
    message: input.message,
    source: input.source ?? "contact-form",
    status: "new",
    notes: input.notes?.trim() ?? "",
    createdAt: new Date().toISOString(),
  };

  leads.unshift(lead);
  await writeLeads(leads);

  return lead;
}

export async function listLeads(): Promise<Lead[]> {
  const leads = await readNormalizedLeads();
  return leads.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const leads = await readNormalizedLeads();
  return leads.find((lead) => lead.id === id) ?? null;
}

export async function updateLead(
  id: string,
  patch: LeadUpdate,
): Promise<Lead | null> {
  const leads = await readNormalizedLeads();
  const index = leads.findIndex((lead) => lead.id === id);

  if (index === -1) return null;

  leads[index] = {
    ...leads[index],
    ...(patch.status !== undefined ? { status: patch.status } : {}),
    ...(patch.notes !== undefined ? { notes: patch.notes } : {}),
  };

  await writeLeads(leads);
  return leads[index];
}

/** @deprecated Use updateLead */
export async function updateLeadStatus(
  id: string,
  status: LeadStatus,
): Promise<Lead | null> {
  return updateLead(id, { status });
}

export function getLeadsFilePath(): string {
  return LEADS_FILE;
}

export function isDatabaseLeadBackend(): boolean {
  return false;
}
