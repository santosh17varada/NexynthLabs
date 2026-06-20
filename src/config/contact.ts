import { serviceCatalog } from "@/config/services";

export const contactPageCopy = {
  hero: {
    eyebrow: "Contact",
    title: "Let's connect",
    description:
      "For partnerships, services, careers, or product questions. Public visitors can browse and submit enquiries — no login required.",
  },
  formTitle: "Send an enquiry",
  formNote: "Fields marked with * are required.",
  reachTitle: "Reach our team",
  reachDescription:
    "Use the form or contact us directly. We typically respond within two business days.",
};

export const generalServiceInterestOptions = [
  { value: "general", label: "General enquiry" },
  { value: "getpandit-partnership", label: "GetPandit partnership" },
  { value: "other", label: "Other" },
] as const;

/** Partner & investor enquiry types (used on /partners and contact form). */
export const partnerEnquiryOptions = [
  { value: "investor-enquiry", label: "Investor enquiry" },
  { value: "general-partner", label: "General partnership" },
  { value: "product-opportunity", label: "Product opportunity" },
  { value: "getpandit-partnership", label: "GetPandit partnership" },
  { value: "temple-vendor-partner", label: "Temple / vendor / service partner" },
  { value: "technology-partnership", label: "Technology partnership" },
] as const;

export type PartnerEnquiryValue = (typeof partnerEnquiryOptions)[number]["value"];

export function getPartnerInterestOptions() {
  return [
    { value: "", label: "Select partnership interest" },
    ...partnerEnquiryOptions,
  ];
}

export function resolvePartnerInterestLabel(value: string): string | undefined {
  return partnerEnquiryOptions.find((opt) => opt.value === value)?.label;
}

export function getServiceInterestOptions() {
  return [
    { value: "", label: "Select a service interest" },
    ...serviceCatalog.map((service) => ({
      value: service.id,
      label: service.title,
    })),
    ...generalServiceInterestOptions,
  ];
}

export function resolveServiceInterestLabel(value: string): string {
  if (!value) return "Not specified";
  const fromCatalog = serviceCatalog.find((service) => service.id === value);
  if (fromCatalog) return fromCatalog.title;
  const partner = resolvePartnerInterestLabel(value);
  if (partner) return partner;
  const general = generalServiceInterestOptions.find((opt) => opt.value === value);
  if (general) return general.label;
  return value;
}

export function getInitialPartnerInterest(
  interestParam: string | null,
  intent: string | null,
): string {
  const map: Record<string, PartnerEnquiryValue> = {
    investor: "investor-enquiry",
    "investor-enquiry": "investor-enquiry",
    partner: "general-partner",
    "general-partner": "general-partner",
    product: "product-opportunity",
    "product-opportunity": "product-opportunity",
    getpandit: "getpandit-partnership",
    "getpandit-partnership": "getpandit-partnership",
    temple: "temple-vendor-partner",
    "temple-partners": "temple-vendor-partner",
    service: "getpandit-partnership",
    "service-partners": "getpandit-partnership",
    vendor: "temple-vendor-partner",
    vendors: "temple-vendor-partner",
    investors: "investor-enquiry",
    "temple-vendor-partner": "temple-vendor-partner",
    technology: "technology-partnership",
    "technology-partnership": "technology-partnership",
  };

  if (interestParam && map[interestParam]) {
    return map[interestParam];
  }
  if (intent === "partner") return "getpandit-partnership";
  if (intent === "investor") return "investor-enquiry";
  return "";
}

export function getInitialServiceInterest(
  serviceParam: string | null,
  intent: string | null,
): string {
  if (serviceParam) {
    const match = serviceCatalog.find((s) => s.id === serviceParam);
    if (match) return match.id;
  }
  if (intent === "partner") return "getpandit-partnership";
  return "";
}
