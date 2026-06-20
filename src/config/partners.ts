import { brandName, flagshipProductName } from "@/config/site-values";

export type PartnerOpportunity = {
  id: string;
  title: string;
  description: string;
  highlights: readonly string[];
  enquiryInterest: string;
};

export const partnersPageCopy = {
  hero: {
    eyebrow: "Partners",
    title: "Build with Nexynth Labs",
    description: `Partner on products, platforms, and devotional technology — from ${flagshipProductName} to what comes next. Share your interest; our team follows up.`,
  },
  whyPartner: {
    eyebrow: "Why partner",
    title: `Why ${brandName}`,
    description:
      "Product engineering discipline with India-first domain depth — spiritual services, local commerce, and trust-heavy categories.",
    items: [
      {
        title: "Product-first delivery",
        description:
          "Flagship products run on dedicated domains with clear release ownership — partners plug into real platforms, not slide decks.",
      },
      {
        title: "Integration-ready architecture",
        description:
          "Payments, messaging, CRM, and AI slots are designed early so partnerships scale without rewrites.",
      },
      {
        title: "Honest readiness communication",
        description:
          "We publish platform readiness — not inflated user or revenue claims — so investors and partners can plan with clarity.",
      },
      {
        title: "Hyderabad roots, national ambition",
        description:
          "Based in Hyderabad with delivery patterns suited to multi-city expansion across India.",
      },
    ],
  },
  investorCta: {
    title: "Investor enquiries",
    description:
      "We welcome conversations with angels, funds, and strategic investors aligned with devotional technology, local services, and B2B2C platforms. Share your thesis, timeline, and areas of interest.",
    primaryLabel: "Submit investor enquiry",
    primaryHref: "#partner-form",
    secondaryLabel: "Email our team",
    secondaryMailtoSubject: `Investor enquiry — ${brandName}`,
  },
  form: {
    title: "Partner enquiry",
    note: "Tell us about your organisation, partnership model, and goals. Fields marked with * are required.",
  },
} as const;

export const productOpportunities: readonly PartnerOpportunity[] = [
  {
    id: "platform-co-build",
    title: "Platform co-build",
    description:
      "Co-develop vertical platforms in devotional services, local booking, or community marketplaces with shared roadmap ownership.",
    highlights: [
      "Joint discovery and milestone planning",
      "Shared engineering and go-to-market cadence",
      "Clear IP and revenue model upfront",
    ],
    enquiryInterest: "product-opportunity",
  },
  {
    id: "white-label",
    title: "White-label & licensed modules",
    description:
      "License booking, scheduling, or notification modules for partners who bring distribution and domain expertise.",
    highlights: [
      "Configurable branding and workflows",
      "API-first integration options",
      "Operational playbooks for launch markets",
    ],
    enquiryInterest: "product-opportunity",
  },
  {
    id: "go-to-market",
    title: "Go-to-market alliances",
    description:
      "Pair our product stack with your channels — temples, communities, enterprises, or regional networks.",
    highlights: [
      "Pilot programmes in target cities",
      "Joint marketing and trust signals",
      "Success metrics tied to readiness, not vanity counts",
    ],
    enquiryInterest: "general-partner",
  },
] as const;

export const getPanditPartnershipOpportunities: readonly PartnerOpportunity[] = [
  {
    id: "pandit-network",
    title: "Pandit network expansion",
    description:
      "Onboard verified pandits and ritual experts onto GetPandit with structured profiles, availability, and service catalogs.",
    highlights: [
      "Profile and verification workflows",
      "Pooja package standardisation",
      "Booking notifications on product domain",
    ],
    enquiryInterest: "getpandit-partnership",
  },
  {
    id: "city-launch",
    title: "City & community launch partners",
    description:
      "Lead localized rollout in new geographies with community trust and on-ground coordination.",
    highlights: [
      "Launch playbooks and support materials",
      "Co-branded discovery campaigns",
      "Feedback loops into product roadmap",
    ],
    enquiryInterest: "getpandit-partnership",
  },
  {
    id: "ritual-content",
    title: "Ritual content & service design",
    description:
      "Partner on authentic pooja descriptions, packages, and family guidance content within the platform catalog.",
    highlights: [
      "Scholarly review workflows",
      "Multilingual content readiness",
      "Transparent service detail for families",
    ],
    enquiryInterest: "getpandit-partnership",
  },
] as const;

export const templeVendorPartnerModel: readonly PartnerOpportunity[] = [
  {
    id: "temple-partners",
    title: "Temple partners",
    description:
      "List temple events, seva programmes, and ceremony slots with clear booking or enquiry handoffs on getpandit.com.",
    highlights: [
      "Dedicated temple profile pages",
      "Event and seva catalog structures",
      "Operational dashboards (in progress)",
    ],
    enquiryInterest: "temple-vendor-partner",
  },
  {
    id: "vendor-marketplace",
    title: "Vendor & service partners",
    description:
      "Florists, catering, décor, and ancillary ritual service providers connected to family booking journeys.",
    highlights: [
      "Attach services to pooja packages",
      "Vendor onboarding checkpoints",
      "Quality and fulfilment signals",
    ],
    enquiryInterest: "temple-vendor-partner",
  },
  {
    id: "community-orgs",
    title: "Community & cultural organisations",
    description:
      "Associations and cultural bodies that connect members with trusted pandits and ceremony services.",
    highlights: [
      "Group booking patterns",
      "Member referral programmes",
      "Shared trust branding",
    ],
    enquiryInterest: "temple-vendor-partner",
  },
] as const;

export const technologyPartnerships: readonly PartnerOpportunity[] = [
  {
    id: "payment-messaging",
    title: "Payment & messaging providers",
    description:
      "Razorpay, PayU, MSG91, Gupshup, Twilio, and WhatsApp Business integrations for GetPandit and client platforms.",
    highlights: [
      "Integration-ready configuration architecture",
      "Webhook and reconciliation patterns",
      "DLT and compliance awareness for India",
    ],
    enquiryInterest: "technology-partnership",
  },
  {
    id: "cloud-infra",
    title: "Cloud & infrastructure",
    description:
      "Hosting, observability, and security partners for scalable product deployments.",
    highlights: [
      "Multi-environment staging pipelines",
      "Performance and uptime baselines",
      "Cost-aware serverless and container patterns",
    ],
    enquiryInterest: "technology-partnership",
  },
  {
    id: "ai-platforms",
    title: "AI & data platforms",
    description:
      "LLM providers, vector databases, and analytics tooling for automation and agentic features.",
    highlights: [
      "Responsible AI guardrails",
      "Evals before production rollout",
      "Corporate + product separation",
    ],
    enquiryInterest: "technology-partnership",
  },
] as const;

export function getPartnerEnquiryHref(interest: string): string {
  return `/partners?interest=${encodeURIComponent(interest)}#partner-form`;
}
