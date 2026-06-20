import type { Lead, LeadSource, LeadStatus } from "@/types/lead";
import { leadSourceLabels } from "@/config/leads-crm";

const LEGACY_STATUS_MAP: Record<string, LeadStatus> = {
  new: "new",
  in_progress: "contacted",
  contacted: "contacted",
  qualified: "qualified",
  not_fit: "not_fit",
  closed: "closed",
};

const SOURCE_PAGE_FALLBACK: Partial<Record<LeadSource, string>> = {
  "contact-form": "/contact",
  "partner-form": "/partners",
  whatsapp_cta: "/contact",
  ai_readiness_score: "/ai-readiness-score",
  book_consultation: "/book-consultation",
  request_proposal: "/request-proposal",
  newsletter: "/",
};

function migrateStatus(raw: unknown): LeadStatus {
  if (typeof raw === "string" && raw in LEGACY_STATUS_MAP) {
    return LEGACY_STATUS_MAP[raw];
  }
  return "new";
}

function parseLeadSource(raw: unknown): LeadSource {
  const value = typeof raw === "string" ? raw : "contact-form";
  const allowed: LeadSource[] = [
    "contact-form",
    "partner-form",
    "whatsapp_cta",
    "ai_readiness_score",
    "book_consultation",
    "request_proposal",
    "newsletter",
    "careers",
    "other",
  ];
  return allowed.includes(value as LeadSource) ? (value as LeadSource) : "other";
}

function inferSourcePage(source: LeadSource, raw: unknown): string {
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim();
  }
  return SOURCE_PAGE_FALLBACK[source] ?? "unknown";
}

/** Normalize legacy rows from data/leads.json to the CRM Lite schema. */
export function normalizeLead(raw: Record<string, unknown>): Lead {
  const source = parseLeadSource(raw.source);
  const interestType = String(
    raw.interestType ?? raw.serviceInterest ?? "Not specified",
  );

  return {
    id: String(raw.id ?? ""),
    name: String(raw.name ?? ""),
    email: String(raw.email ?? ""),
    phone: String(raw.phone ?? ""),
    company: String(raw.company ?? ""),
    interestType,
    sourcePage: inferSourcePage(source, raw.sourcePage),
    message: String(raw.message ?? ""),
    source,
    status: migrateStatus(raw.status),
    notes: String(raw.notes ?? ""),
    createdAt: String(raw.createdAt ?? new Date().toISOString()),
  };
}

export function getLeadChannelLabel(source: LeadSource): string {
  return leadSourceLabels[source] ?? source;
}
