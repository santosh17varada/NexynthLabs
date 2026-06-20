import { bookConsultationHref } from "@/config/book-consultation";

export type HomeCapabilityIcon =
  | "ai"
  | "cloud"
  | "marketplace"
  | "design"
  | "api"
  | "analytics";

export type HomeCapabilityItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: HomeCapabilityIcon;
};

export const homeCapabilitiesCopy = {
  eyebrow: "How we work",
  title: "Engineering for product teams",
  description:
    "Six delivery disciplines — from AI automation to analytics — with clear scopes and no fabricated metrics.",
  footerCta: { label: "View all services", href: "/services" },
} as const;

export const homeCapabilityItems: readonly HomeCapabilityItem[] = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Use-case discovery, LLM integration, and agent workflows with production guardrails.",
    href: "/ai-showcase",
    icon: "ai",
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    description:
      "Infrastructure as code, CI/CD, and observability — static-first where it improves performance.",
    href: "/technology",
    icon: "cloud",
  },
  {
    id: "marketplace-platforms",
    title: "Marketplace Platforms",
    description:
      "Multi-sided booking and catalog systems — informed by GetPandit patterns and honest readiness labels.",
    href: "/products/ecosystem",
    icon: "marketplace",
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "UX flows, information architecture, and engineering-ready specs — aligned with how Nexynth ships.",
    href: "/contact?service=product-engineering",
    icon: "design",
  },
  {
    id: "api-backend",
    title: "API & Backend",
    description:
      "REST layers, auth, and data mapping between business tools — phased, measurable rollouts.",
    href: "/contact?service=enterprise-integrations",
    icon: "api",
  },
  {
    id: "analytics-dashboards",
    title: "Analytics & Dashboards",
    description:
      "Operational views when you have real signals to show — no vanity dashboards or invented KPIs.",
    href: "/contact?service=ai-solutions",
    icon: "analytics",
  },
] as const;

export const homeCapabilitiesConsultCta = {
  label: "Book a consultation",
  href: bookConsultationHref(),
} as const;

/** @deprecated Use homeCapabilityItems */
export const homeCapabilityGroups = homeCapabilityItems;
