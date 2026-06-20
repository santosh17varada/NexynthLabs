import { brandName } from "@/config/site-values";

export type HomeTrustMetricIcon =
  | "product"
  | "ai"
  | "cloud"
  | "marketplace";

export type HomeTrustMetric = {
  id: string;
  label: string;
  description: string;
  icon: HomeTrustMetricIcon;
};

export const homeTrustCopy = {
  eyebrow: "How we earn trust",
  title: "Honest products, honest communication",
  description: `${brandName} publishes readiness labels instead of inflated counters. We share metrics only when they are verified.`,
  footnote:
    "Positioning pillars — not performance statistics. Specific numbers are shared per engagement when verified.",
} as const;

export const homeTrustMetrics: readonly HomeTrustMetric[] = [
  {
    id: "product-led",
    label: "Product-led engineering",
    description:
      "Roadmaps shaped around live products — starting with GetPandit on its own domain.",
    icon: "product",
  },
  {
    id: "ai-first",
    label: "AI-first delivery",
    description:
      "LLM features and automation introduced with evals and human oversight before production.",
    icon: "ai",
  },
  {
    id: "cloud-ready",
    label: "Cloud-ready architecture",
    description:
      "Static-first marketing, modular APIs, and AWS-friendly patterns designed to scale.",
    icon: "cloud",
  },
  {
    id: "marketplace",
    label: "Marketplace depth",
    description:
      "Multi-sided booking, catalog, and partner flows from spiritual-commerce and local marketplace work.",
    icon: "marketplace",
  },
] as const;
