import { brandName, email } from "@/config/site-values";
import type { LeadSource } from "@/types/lead";
import type {
  RequestProposalBudgetId,
  RequestProposalProjectTypeId,
  RequestProposalTimelineId,
} from "@/types/request-proposal";

export const REQUEST_PROPOSAL_LEAD_SOURCE: LeadSource = "request_proposal";

export const requestProposalProjectTypes = [
  { id: "ai", label: "AI" },
  { id: "web-app", label: "Web App" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "cloud", label: "Cloud" },
  { id: "integration", label: "Integration" },
  { id: "getpandit-partnership", label: "GetPandit Partnership" },
  { id: "other", label: "Other" },
] as const satisfies readonly { id: RequestProposalProjectTypeId; label: string }[];

export const requestProposalProjectTypeLabels: Record<
  RequestProposalProjectTypeId,
  string
> = {
  ai: "AI",
  "web-app": "Web App",
  "mobile-app": "Mobile App",
  cloud: "Cloud",
  integration: "Integration",
  "getpandit-partnership": "GetPandit Partnership",
  other: "Other",
};

export const requestProposalBudgetRanges = [
  { id: "unsure", label: "Not sure yet" },
  { id: "under-5l", label: "Under ₹5 lakh" },
  { id: "5l-15l", label: "₹5 lakh – ₹15 lakh" },
  { id: "15l-50l", label: "₹15 lakh – ₹50 lakh" },
  { id: "50l-plus", label: "₹50 lakh+" },
  { id: "discuss", label: "Prefer to discuss" },
] as const satisfies readonly { id: RequestProposalBudgetId; label: string }[];

export const requestProposalBudgetLabels: Record<RequestProposalBudgetId, string> = {
  unsure: "Not sure yet",
  "under-5l": "Under ₹5 lakh",
  "5l-15l": "₹5 lakh – ₹15 lakh",
  "15l-50l": "₹15 lakh – ₹50 lakh",
  "50l-plus": "₹50 lakh+",
  discuss: "Prefer to discuss",
};

export const requestProposalTimelines = [
  { id: "asap", label: "ASAP" },
  { id: "1-3-months", label: "1–3 months" },
  { id: "3-6-months", label: "3–6 months" },
  { id: "6-plus-months", label: "6+ months" },
  { id: "flexible", label: "Flexible" },
] as const satisfies readonly { id: RequestProposalTimelineId; label: string }[];

export const requestProposalTimelineLabels: Record<RequestProposalTimelineId, string> =
  {
    asap: "ASAP",
    "1-3-months": "1–3 months",
    "3-6-months": "3–6 months",
    "6-plus-months": "6+ months",
    flexible: "Flexible",
  };

const PROJECT_TYPE_PARAM_ALIASES: Record<string, RequestProposalProjectTypeId> = {
  ai: "ai",
  web: "web-app",
  "web-app": "web-app",
  mobile: "mobile-app",
  "mobile-app": "mobile-app",
  cloud: "cloud",
  integration: "integration",
  integrations: "integration",
  getpandit: "getpandit-partnership",
  "getpandit-partnership": "getpandit-partnership",
  other: "other",
};

export function getInitialRequestProposalProjectType(
  param: string | null,
): RequestProposalProjectTypeId | "" {
  if (!param?.trim()) return "";
  const normalized = param.trim().toLowerCase();
  return PROJECT_TYPE_PARAM_ALIASES[normalized] ?? "";
}

export function requestProposalHref(
  projectType?: RequestProposalProjectTypeId | string,
): string {
  if (!projectType) return "/request-proposal";
  const resolved = getInitialRequestProposalProjectType(projectType) || projectType;
  return `/request-proposal?projectType=${encodeURIComponent(resolved)}`;
}

export function resolveRequestProposalProjectTypeLabel(id: string): string {
  if (id in requestProposalProjectTypeLabels) {
    return requestProposalProjectTypeLabels[id as RequestProposalProjectTypeId];
  }
  return id.trim() || "Not specified";
}

export function resolveRequestProposalBudgetLabel(id: string): string {
  if (id in requestProposalBudgetLabels) {
    return requestProposalBudgetLabels[id as RequestProposalBudgetId];
  }
  return id.trim() || "Not specified";
}

export function resolveRequestProposalTimelineLabel(id: string): string {
  if (id in requestProposalTimelineLabels) {
    return requestProposalTimelineLabels[id as RequestProposalTimelineId];
  }
  return id.trim() || "Not specified";
}

export function getRequestProposalProjectTypeOptions() {
  return [
    { value: "", label: "Select project type" },
    ...requestProposalProjectTypes.map((type) => ({
      value: type.id,
      label: type.label,
    })),
  ];
}

export function getRequestProposalBudgetOptions() {
  return [
    { value: "", label: "Select budget range (optional)" },
    ...requestProposalBudgetRanges.map((range) => ({
      value: range.id,
      label: range.label,
    })),
  ];
}

export function getRequestProposalTimelineOptions() {
  return [
    { value: "", label: "Select timeline (optional)" },
    ...requestProposalTimelines.map((timeline) => ({
      value: timeline.id,
      label: timeline.label,
    })),
  ];
}

export function buildRequestProposalMailto(body: {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  requirements: string;
}): string {
  const subject = encodeURIComponent(
    `RFP request — ${resolveRequestProposalProjectTypeLabel(body.projectType)}`,
  );
  const lines = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.phone ? `Phone: ${body.phone}` : null,
    body.company ? `Company: ${body.company}` : null,
    `Project type: ${resolveRequestProposalProjectTypeLabel(body.projectType)}`,
    body.budgetRange
      ? `Budget: ${resolveRequestProposalBudgetLabel(body.budgetRange)}`
      : null,
    body.timeline
      ? `Timeline: ${resolveRequestProposalTimelineLabel(body.timeline)}`
      : null,
    "",
    "Requirements:",
    body.requirements,
  ].filter((line): line is string => line !== null);

  const mailBody = encodeURIComponent(lines.join("\n"));
  return `mailto:${email}?subject=${subject}&body=${mailBody}`;
}

export const requestProposalPageCopy = {
  hero: {
    eyebrow: "Request proposal",
    title: "Request a proposal (RFP)",
    description: `Tell ${brandName} about your project scope, budget band, and timeline. We review every submission manually — no automated bid portal or public login.`,
  },
  formTitle: "Proposal request form",
  formNote:
    "Fields marked * are required. Submissions are stored for staff review when the lead API is available; otherwise use the email fallback shown after errors.",
  successMessage:
    "Thank you. Your proposal request has been received. Our team will follow up by email.",
  submitLabel: "Submit proposal request",
  fallbackNote: `If submission fails, email us directly at ${email} with the same details.`,
  processSteps: [
    {
      title: "Submit scope",
      description: "Share requirements, budget band, and timeline — honest ranges are fine.",
    },
    {
      title: "Discovery call",
      description: "We clarify goals, integrations, and constraints before quoting.",
    },
    {
      title: "Written proposal",
      description: "Phased scope, assumptions, and readiness labels — no inflated promises.",
    },
  ],
} as const;
