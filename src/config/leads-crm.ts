import type { LeadSource, LeadStatus } from "@/types/lead";

/** CRM Lite field catalog — used by admin UI and export. */
export const leadCrmFields = [
  { key: "name", label: "Name", public: true },
  { key: "email", label: "Email", public: true },
  { key: "phone", label: "Phone", public: true },
  { key: "company", label: "Company", public: true },
  { key: "interestType", label: "Interest Type", public: true },
  { key: "sourcePage", label: "Source Page", public: true },
  { key: "message", label: "Message", public: true },
  { key: "source", label: "Channel", public: false },
  { key: "status", label: "Status", public: false },
  { key: "notes", label: "Notes", public: false },
  { key: "createdAt", label: "Created Date", public: false },
] as const;

export const leadCrmStatuses: readonly {
  value: LeadStatus;
  label: string;
}[] = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "not_fit", label: "Not Fit" },
  { value: "closed", label: "Closed" },
] as const;

export const leadCrmStatusLabels: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  not_fit: "Not Fit",
  closed: "Closed",
};

export const leadCrmStatusStyles: Record<LeadStatus, string> = {
  new: "bg-electric-violet/15 text-foreground",
  contacted: "bg-primary/10 text-primary",
  qualified: "bg-emerald-500/15 text-foreground",
  not_fit: "bg-surface text-muted border border-border",
  closed: "bg-muted/20 text-muted",
};

export const leadSourceLabels: Record<LeadSource, string> = {
  "contact-form": "Contact form",
  "partner-form": "Partner form",
  whatsapp_cta: "WhatsApp CTA",
  ai_readiness_score: "AI Readiness Score",
  book_consultation: "Book consultation",
  request_proposal: "Request proposal (RFP)",
  newsletter: "Newsletter",
  careers: "Careers",
  other: "Other",
};

/**
 * Phase 2 storage: file-based `data/leads.json`.
 * Phase 3 TODO: PostgreSQL — see docs/nexynth-labs/14-lead-crm-lite-guide.md
 */
export const leadCrmStorage = {
  mode: "file" as const,
  filePath: "data/leads.json",
  hasDatabaseBackend: false,
} as const;

export const LEAD_STATUS_VALUES = leadCrmStatuses.map((s) => s.value);
