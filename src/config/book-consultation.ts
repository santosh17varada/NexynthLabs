import { brandName } from "@/config/site-values";
import type { LeadSource } from "@/types/lead";
import type { ConsultationTopicId, ConsultationTopicOption } from "@/types/book-consultation";

export const BOOK_CONSULTATION_LEAD_SOURCE: LeadSource = "book_consultation";

export const consultationTopics: readonly ConsultationTopicOption[] = [
  { id: "ai", label: "AI" },
  { id: "web-app", label: "Web App" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "getpandit-partnership", label: "GetPandit Partnership" },
  { id: "integrations", label: "Payment/SMS/WhatsApp Integration" },
  { id: "other", label: "Other" },
] as const;

export const consultationTopicLabels: Record<ConsultationTopicId, string> = {
  ai: "AI",
  "web-app": "Web App",
  "mobile-app": "Mobile App",
  "getpandit-partnership": "GetPandit Partnership",
  integrations: "Payment/SMS/WhatsApp Integration",
  other: "Other",
};

export function resolveConsultationTopicLabel(id: string): string {
  if (id in consultationTopicLabels) {
    return consultationTopicLabels[id as ConsultationTopicId];
  }
  return id.trim() || "Not specified";
}

export function getConsultationTopicOptions() {
  return [
    { value: "", label: "Select a topic" },
    ...consultationTopics.map((topic) => ({
      value: topic.id,
      label: topic.label,
    })),
  ];
}

const TOPIC_PARAM_ALIASES: Record<string, ConsultationTopicId> = {
  ai: "ai",
  "ai-solutions": "ai",
  "ai-showcase": "ai",
  discovery: "ai",
  web: "web-app",
  "web-app": "web-app",
  mobile: "mobile-app",
  "mobile-app": "mobile-app",
  getpandit: "getpandit-partnership",
  "getpandit-partnership": "getpandit-partnership",
  integrations: "integrations",
  payment: "integrations",
  sms: "integrations",
  whatsapp: "integrations",
  other: "other",
};

export function getInitialConsultationTopic(
  topicParam: string | null,
): ConsultationTopicId | "" {
  if (!topicParam?.trim()) return "";
  const normalized = topicParam.trim().toLowerCase();
  return TOPIC_PARAM_ALIASES[normalized] ?? "";
}

export function bookConsultationHref(topic?: ConsultationTopicId | string): string {
  if (!topic) return "/book-consultation";
  const resolved = getInitialConsultationTopic(topic) || topic;
  return `/book-consultation?topic=${encodeURIComponent(resolved)}`;
}

export const bookConsultationPageCopy = {
  hero: {
    eyebrow: "Consultation",
    title: "Book a consultation",
    description: `Tell us what you're building. ${brandName} reviews your topic, timing, and context — then follows up to schedule a discovery call. Slots are confirmed manually; no online calendar yet.`,
  },
  formTitle: "Request your consultation",
  formNote:
    "Name, email, and topic are required. Preferred date is indicative — we will confirm availability by email or phone.",
  calendarNote:
    "Online scheduling (Google Calendar / Calendly) is not connected yet. See project docs for the planned integration.",
  submitLabel: "Request consultation",
  successMessage:
    "Thank you. Your consultation request has been received. We will contact you to confirm a time.",
} as const;
