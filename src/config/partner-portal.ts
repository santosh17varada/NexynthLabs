import { brandName, flagshipProductName } from "@/config/site-values";
import type { PartnerPortalType } from "@/types/partner-portal";

export const partnerPortalReadinessNotice =
  "Partner Portal login is not available yet. This page describes readiness, benefits, and how to apply. All applications use the partner enquiry form — no public account is created on submit.";

export const partnerPortalPageCopy = {
  hero: {
    eyebrow: "Partner portal",
    title: "Partner Portal readiness",
    description: `How ${brandName} partners onboard across temples, services, technology, vendors, and investors — before the self-service portal launches. Apply via enquiry today; our team reviews every submission manually.`,
  },
  typesIntro: {
    eyebrow: "Partner types",
    title: "Who we partner with",
    description:
      "Five partnership tracks with distinct benefits, onboarding steps, and eligibility. Content is config-driven — update src/config/partner-portal.ts as programmes evolve.",
  },
  apply: {
    title: "Apply to partner",
    note: "Select your partnership interest in the form. Fields marked with * are required. No login or portal access is issued automatically.",
    ctaLabel: "Submit partner application",
  },
  closingCta: {
    title: "Explore the full partners page",
    description:
      "See product opportunities, GetPandit programmes, and technology alliances in one place.",
    primary: { label: "View all partnerships", href: "/partners" },
    secondary: { label: "Book consultation", href: "/book-consultation" },
  },
} as const;

export const partnerPortalTypes: readonly PartnerPortalType[] = [
  {
    id: "temple",
    label: "Temple Partners",
    summary:
      "Temples and religious institutions that list events, seva programmes, and ceremony discovery on getpandit.com.",
    benefits: [
      "Dedicated temple profile and discovery on the product domain",
      "Structured seva and event catalog templates",
      "Booking or enquiry handoffs with family-friendly detail",
      "Co-marketing support for launch cities",
      "Roadmap input into temple dashboard features (in progress)",
    ],
    process: [
      {
        step: 1,
        title: "Intro enquiry",
        description:
          "Share temple name, location, leadership contact, and primary seva or event categories.",
      },
      {
        step: 2,
        title: "Readiness review",
        description:
          "We assess content accuracy, operational contacts, and alignment with platform policies.",
      },
      {
        step: 3,
        title: "Profile setup",
        description:
          "Work with our team to draft profiles, media, and service descriptions — manual onboarding until portal self-service ships.",
      },
      {
        step: 4,
        title: "Pilot launch",
        description:
          "Go live in a controlled market with feedback loops before wider promotion.",
      },
    ],
    eligibility: [
      "Registered temple or recognised religious institution in India",
      "Authorised representative for partnerships and listings",
      "Accurate ritual and seva descriptions with scholarly review where needed",
      "Willingness to maintain updated schedules and contact paths",
    ],
    enquiryInterest: "temple-vendor-partner",
  },
  {
    id: "service",
    label: "Service Partners",
    summary:
      "Pandits, ritual experts, and ceremony service providers expanding verified availability on GetPandit.",
    benefits: [
      "Verified professional profiles with service catalogs",
      "Booking notifications and calendar coordination (product domain)",
      "Package standardisation for common poojas and ceremonies",
      "Quality signals and family trust markers",
      "City and community launch support",
    ],
    process: [
      {
        step: 1,
        title: "Application",
        description:
          "Submit credentials, service areas, languages, and sample pooja packages.",
      },
      {
        step: 2,
        title: "Verification",
        description:
          "Identity, experience, and reference checks aligned with platform standards.",
      },
      {
        step: 3,
        title: "Catalog onboarding",
        description:
          "Define packages, pricing bands, and availability rules with our operations team.",
      },
      {
        step: 4,
        title: "Go live",
        description:
          "Receive bookings on getpandit.com with ongoing performance and quality reviews.",
      },
    ],
    eligibility: [
      "Practising pandit or authorised ritual service provider",
      "Service coverage in supported launch cities or willing to pilot",
      "Transparent pricing and fulfilment commitments",
      "Compliance with platform conduct and family communication standards",
    ],
    enquiryInterest: "getpandit-partnership",
  },
  {
    id: "technology",
    label: "Technology Partners",
    summary:
      "Infrastructure, payments, messaging, AI, and integration providers that help Nexynth Labs products scale.",
    benefits: [
      "Integration-ready architecture slots in product and client work",
      "Joint solution design for India-specific compliance (DLT, payments, WhatsApp)",
      "Co-marketing for certified connector patterns",
      "Early access to roadmap integration points",
      "Technical discovery with engineering leads",
    ],
    process: [
      {
        step: 1,
        title: "Capability brief",
        description:
          "Share APIs, SLAs, sandbox access, and supported use cases (payments, SMS, WhatsApp, cloud, AI).",
      },
      {
        step: 2,
        title: "Technical fit",
        description:
          "Architecture review with Nexynth Labs engineering — security, webhooks, and cost model.",
      },
      {
        step: 3,
        title: "Pilot integration",
        description:
          "Implement in staging with eval cases before production rollout on product or client stacks.",
      },
      {
        step: 4,
        title: "Partnership listing",
        description:
          "Documented connector pattern and optional public alliance mention when appropriate.",
      },
    ],
    eligibility: [
      "Production-grade APIs or platforms with India support",
      "Clear documentation, sandbox, and commercial terms",
      "Security and data-handling practices suitable for trust-heavy products",
      "Dedicated partner or solutions contact",
    ],
    enquiryInterest: "technology-partnership",
  },
  {
    id: "vendor",
    label: "Vendors",
    summary:
      "Florists, catering, décor, and ancillary vendors attached to family booking journeys on GetPandit.",
    benefits: [
      "Attach services to pooja and ceremony packages",
      "Vendor profile and fulfilment checkpoints",
      "Demand from existing booking flows as markets mature",
      "Operational playbooks for quality and delivery",
      "Feedback into vendor marketplace roadmap",
    ],
    process: [
      {
        step: 1,
        title: "Vendor enquiry",
        description:
          "Describe categories (floral, catering, décor, etc.), cities, and capacity.",
      },
      {
        step: 2,
        title: "Quality review",
        description:
          "Samples, references, and fulfilment SLAs reviewed by operations.",
      },
      {
        step: 3,
        title: "Catalog linkage",
        description:
          "Connect vendor offerings to relevant pooja packages and booking paths.",
      },
      {
        step: 4,
        title: "Market activation",
        description:
          "Launch in pilot cities with monitoring before broader marketplace promotion.",
      },
    ],
    eligibility: [
      "Registered business or verifiable sole proprietor in India",
      "Fulfilment track record in target categories and cities",
      "Transparent pricing and cancellation policies",
      "Alignment with devotional and family-sensitive brand standards",
    ],
    enquiryInterest: "temple-vendor-partner",
  },
  {
    id: "investor",
    label: "Investors",
    summary:
      "Angels, funds, and strategic investors aligned with devotional technology, local services, and B2B2C platforms.",
    benefits: [
      "Direct access to founder-led product narrative",
      "Honest readiness metrics — no inflated user or revenue claims",
      `Visibility into ${flagshipProductName} and corporate product roadmap`,
      "Structured diligence materials when appropriate",
      "Alignment with long-term India-first spiritual tech vision",
    ],
    process: [
      {
        step: 1,
        title: "Thesis share",
        description:
          "Submit investment focus, cheque size, timeline, and areas of interest.",
      },
      {
        step: 2,
        title: "Intro call",
        description:
          "Discovery conversation with leadership on product, market, and capital needs.",
      },
      {
        step: 3,
        title: "Diligence",
        description:
          "Materials shared under mutual NDA when both sides proceed.",
      },
      {
        step: 4,
        title: "Decision",
        description:
          "Term discussion or pass with clear feedback — no automated investor portal yet.",
      },
    ],
    eligibility: [
      "Accredited or institutional investor per applicable regulations",
      "Thesis fit with devotional tech, local services, or B2B2C platforms",
      "Patience for product-led growth and honest milestone communication",
      "Respect for separation between corporate site and product domains",
    ],
    enquiryInterest: "investor-enquiry",
  },
] as const;

export function getPartnerPortalEnquiryHref(typeId: string): string {
  return `/partners/portal?interest=${encodeURIComponent(typeId)}#apply`;
}

export function getPartnerPortalType(id: string): PartnerPortalType | undefined {
  return partnerPortalTypes.find((type) => type.id === id);
}
