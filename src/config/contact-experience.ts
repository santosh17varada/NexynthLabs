import { brandName, flagshipProductName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import { partnerEnquiryOptions } from "@/config/contact";
import { serviceCatalog } from "@/config/services";

export type ContactInquiryId =
  | "consultation"
  | "project"
  | "partnership"
  | "product"
  | "getpandit"
  | "business";

export type QualificationFieldType = "select" | "text" | "textarea";

export type QualificationField = {
  id: string;
  label: string;
  type: QualificationFieldType;
  required?: boolean;
  placeholder?: string;
  options?: readonly { value: string; label: string }[];
};

export type ContactInquiryOption = {
  id: ContactInquiryId;
  title: string;
  description: string;
  eyebrow: string;
};

const timelineOptions = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP / urgent" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Exploring / no fixed date" },
] as const;

const budgetOptions = [
  { value: "", label: "Select budget range" },
  { value: "under-5l", label: "Under ₹5L" },
  { value: "5l-15l", label: "₹5L – ₹15L" },
  { value: "15l-50l", label: "₹15L – ₹50L" },
  { value: "50l-plus", label: "₹50L+" },
  { value: "undisclosed", label: "Prefer to discuss on call" },
] as const;

const teamSizeOptions = [
  { value: "", label: "Select team size" },
  { value: "solo", label: "Solo / founder" },
  { value: "2-10", label: "2–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "50-plus", label: "50+ people" },
] as const;

const projectStageOptions = [
  { value: "", label: "Select stage" },
  { value: "idea", label: "Idea / concept" },
  { value: "prototype", label: "Prototype or MVP" },
  { value: "live-product", label: "Live product — needs extension" },
  { value: "migration", label: "Migration or replatform" },
] as const;

const productOptions = [
  { value: "", label: "Select product" },
  { value: flagshipProductName.toLowerCase(), label: flagshipProductName },
  { value: "custom-platform", label: "Custom platform / greenfield" },
  { value: "mobile-app", label: "Mobile app" },
  { value: "ai-product", label: "AI-powered product" },
  { value: "other", label: "Other product" },
] as const;

const getpanditRoleOptions = [
  { value: "", label: "Select your interest" },
  { value: "family-booking", label: "Family / devotee booking" },
  { value: "pandit-partner", label: "Pandit partner onboarding" },
  { value: "temple-vendor", label: "Temple / vendor partnership" },
  { value: "media-press", label: "Media / press" },
  { value: "other", label: "Other GetPandit enquiry" },
] as const;

const consultationGoalOptions = [
  { value: "", label: "Select primary goal" },
  { value: "discovery", label: "Discovery / scope a new build" },
  { value: "ai", label: "AI or automation strategy" },
  { value: "integrations", label: "Payments, SMS, or WhatsApp integrations" },
  { value: "mobile", label: "Mobile app delivery" },
  { value: "partnership", label: "Partnership or co-build" },
  { value: "other", label: "Other" },
] as const;

export const contactExperienceCopy = {
  hero: {
    eyebrow: "Contact",
    title: "Tell us what you're building",
    description: `Share your project, partnership, or product question. ${brandName} routes every enquiry — consultation, delivery, partnership, product, or ${flagshipProductName}.`,
    primaryCta: { label: "Book a consultation", href: bookConsultationHref() },
  },
  form: {
    title: "Send an enquiry",
    description:
      "Three steps — intent, context, and your details. We typically respond within two business days.",
    stepLabels: ["Intent", "Qualify", "Details"] as const,
    fieldsRequired: "Fields marked with * are required.",
    back: "Back",
    continue: "Continue",
    submit: "Send enquiry",
    submitting: "Sending...",
    requestConsultation: "Request consultation",
    successEnquiry:
      "Thank you. Your enquiry has been received. Our team will follow up within two business days.",
    successConsultation:
      "Thank you. Your consultation request has been received. We will contact you to confirm a time.",
  },
  sidebar: {
    title: "Reach us directly",
    description:
      "Prefer email, phone, or WhatsApp? Use the channels below — or book a structured discovery call.",
    businessTitle: "Business contact",
    businessDescription:
      "Procurement, billing, legal, or general correspondence — reach our Hyderabad team directly.",
  },
  businessCta: {
    title: "Business & general enquiries",
    description:
      "Direct channels for procurement, vendor paperwork, press, or urgent operational matters.",
    emailLabel: "Email the team",
    phoneLabel: "Call us",
    consultationLabel: "Book a consultation",
    proposalLabel: "Request a proposal",
  },
  disclaimer:
    "Enquiries are stored securely for follow-up. We do not sell contact data. Calendar booking is confirmed manually until online scheduling ships.",
} as const;

export const contactInquiryOptions: readonly ContactInquiryOption[] = [
  {
    id: "consultation",
    eyebrow: "Discovery",
    title: "Consultation",
    description: "Scope a new build — goals, timeline, and stack.",
  },
  {
    id: "project",
    eyebrow: "Delivery",
    title: "Project inquiry",
    description: "Engineering work — web, mobile, cloud, AI, or integrations.",
  },
  {
    id: "partnership",
    eyebrow: "Partnerships",
    title: "Partnership inquiry",
    description: "Investors, technology allies, temple/vendor, or co-build models.",
  },
  {
    id: "product",
    eyebrow: "Products",
    title: "Product inquiry",
    description: "Custom platforms, mobile apps, or AI product engineering.",
  },
  {
    id: "getpandit",
    eyebrow: flagshipProductName,
    title: "GetPandit inquiry",
    description: "Booking, pandit onboarding, temple partnerships, or press.",
  },
  {
    id: "business",
    eyebrow: "Direct",
    title: "Business contact",
    description: "Email, phone, or WhatsApp — procurement and general business.",
  },
] as const;

export const contactQualificationFields: Record<
  ContactInquiryId,
  readonly QualificationField[]
> = {
  consultation: [
    {
      id: "primaryGoal",
      label: "Primary goal",
      type: "select",
      required: true,
      options: consultationGoalOptions,
    },
    {
      id: "timeline",
      label: "Desired timeline",
      type: "select",
      required: true,
      options: timelineOptions,
    },
    {
      id: "teamSize",
      label: "Organisation size",
      type: "select",
      options: teamSizeOptions,
    },
    {
      id: "context",
      label: "What should we prepare for the call?",
      type: "textarea",
      placeholder: "Current stack, integrations, stakeholders, or blockers.",
    },
  ],
  project: [
    {
      id: "projectStage",
      label: "Project stage",
      type: "select",
      required: true,
      options: projectStageOptions,
    },
    {
      id: "timeline",
      label: "Target timeline",
      type: "select",
      required: true,
      options: timelineOptions,
    },
    {
      id: "budgetRange",
      label: "Budget range (indicative)",
      type: "select",
      options: budgetOptions,
    },
    {
      id: "integrations",
      label: "Key integrations or constraints",
      type: "textarea",
      placeholder: "Payments, CRM, WhatsApp, auth, compliance, etc.",
    },
  ],
  partnership: [
    {
      id: "partnershipModel",
      label: "Partnership model",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select partnership type" },
        ...partnerEnquiryOptions,
      ],
    },
    {
      id: "geography",
      label: "Geography / market",
      type: "text",
      placeholder: "City, region, or country",
    },
    {
      id: "timeline",
      label: "Timeline",
      type: "select",
      options: timelineOptions,
    },
    {
      id: "partnershipContext",
      label: "Partnership context",
      type: "textarea",
      placeholder: "Audience, model, and what you are looking for from Nexynth.",
    },
  ],
  product: [
    {
      id: "productFocus",
      label: "Product focus",
      type: "select",
      required: true,
      options: productOptions,
    },
    {
      id: "projectStage",
      label: "Current stage",
      type: "select",
      required: true,
      options: projectStageOptions,
    },
    {
      id: "timeline",
      label: "Timeline",
      type: "select",
      options: timelineOptions,
    },
    {
      id: "productContext",
      label: "Product context",
      type: "textarea",
      placeholder: "Users, problem statement, and must-have integrations.",
    },
  ],
  getpandit: [
    {
      id: "getpanditRole",
      label: "Your interest",
      type: "select",
      required: true,
      options: getpanditRoleOptions,
    },
    {
      id: "geography",
      label: "City / region",
      type: "text",
      placeholder: "Where services are needed",
    },
    {
      id: "timeline",
      label: "Timeline",
      type: "select",
      options: timelineOptions,
    },
    {
      id: "getpanditContext",
      label: "Additional context",
      type: "textarea",
      placeholder: "Ceremony type, partner type, or questions about getpandit.com",
    },
  ],
  business: [],
};

export function getProjectServiceOptions() {
  return [
    { value: "", label: "Select a service area" },
    ...serviceCatalog.map((service) => ({
      value: service.id,
      label: service.title,
    })),
  ];
}

export function getPartnershipInterestOptions() {
  return [
    { value: "", label: "Select partnership interest" },
    ...partnerEnquiryOptions,
  ];
}

const INQUIRY_PARAM_MAP: Record<string, ContactInquiryId> = {
  consultation: "consultation",
  consult: "consultation",
  project: "project",
  partnership: "partnership",
  partner: "partnership",
  product: "product",
  getpandit: "getpandit",
  business: "business",
  general: "business",
};

export function getInitialContactInquiry(
  intentParam: string | null,
  serviceParam: string | null,
  interestParam: string | null,
): ContactInquiryId {
  if (intentParam) {
    const normalized = intentParam.trim().toLowerCase();
    if (INQUIRY_PARAM_MAP[normalized]) {
      return INQUIRY_PARAM_MAP[normalized];
    }
  }

  if (interestParam) {
    const normalized = interestParam.trim().toLowerCase();
    if (normalized.includes("getpandit") || normalized === "pandit") {
      return "getpandit";
    }
    if (normalized.includes("partner") || normalized.includes("investor")) {
      return "partnership";
    }
    if (normalized.includes("product")) {
      return "product";
    }
  }

  if (serviceParam) {
    return "project";
  }

  return "consultation";
}

export function formatQualificationBlock(
  inquiry: ContactInquiryId,
  answers: Record<string, string>,
): string {
  const fields = contactQualificationFields[inquiry];
  const lines = fields
    .map((field) => {
      const value = answers[field.id]?.trim();
      if (!value) return null;
      const label =
        field.type === "select"
          ? field.options?.find((opt) => opt.value === value)?.label ?? value
          : value;
      return `${field.label}: ${label}`;
    })
    .filter(Boolean);

  if (lines.length === 0) return "";

  return `\n\n--- Lead qualification (${inquiry}) ---\n${lines.join("\n")}`;
}

export function resolveContactInterestType(
  inquiry: ContactInquiryId,
  details: {
    serviceInterest?: string;
    partnershipInterest?: string;
    productFocus?: string;
    getpanditRole?: string;
    consultationTopic?: string;
  },
): string {
  switch (inquiry) {
    case "consultation":
      return `Consultation: ${details.consultationTopic || "General"}`;
    case "project":
      return `Project: ${details.serviceInterest || "General"}`;
    case "partnership":
      return `Partnership: ${details.partnershipInterest || "General"}`;
    case "product":
      return `Product: ${details.productFocus || "General"}`;
    case "getpandit":
      return `GetPandit: ${details.getpanditRole || "General enquiry"}`;
    case "business":
      return "Business contact";
    default:
      return "General enquiry";
  }
}

export function mapConsultationTopicFromGoal(goal: string): string {
  const map: Record<string, string> = {
    ai: "ai",
    integrations: "integrations",
    mobile: "mobile-app",
    partnership: "getpandit-partnership",
    discovery: "web-app",
    other: "other",
  };
  return map[goal] ?? "other";
}
