import type { Lead } from "@/types/lead";
import { leadCrmFields } from "@/config/leads-crm";
import { getLeadChannelLabel } from "@/lib/leads/normalize";

function escapeCsvCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function leadToExportRow(lead: Lead): Record<string, string> {
  return {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    interestType: lead.interestType,
    sourcePage: lead.sourcePage,
    message: lead.message,
    source: getLeadChannelLabel(lead.source),
    status: lead.status,
    notes: lead.notes,
    createdAt: lead.createdAt,
  };
}

export function exportLeadsToCsv(leads: Lead[]): string {
  const exportFields = leadCrmFields;
  const keys = exportFields.map((f) => f.key);

  const header = exportFields.map((f) => escapeCsvCell(f.label)).join(",");
  const rows = leads.map((lead) => {
    const row = leadToExportRow(lead);
    return keys.map((key) => escapeCsvCell(row[key] ?? "")).join(",");
  });

  return [header, ...rows].join("\n");
}
