import type { IllustrationMeta } from "@/illustrations/types";

export const illustrationCatalog: readonly IllustrationMeta[] = [
  {
    category: "getpandit",
    title: "GetPandit",
    description:
      "Booking journey — discovery, catalog, scheduling, and notifications on a dedicated product domain.",
    variants: ["hero", "flow", "compact"],
  },
  {
    category: "ai",
    title: "AI",
    description: "Agentic flows — intent, planner, retrieval, governance, and audited responses.",
    variants: ["hero", "flow", "compact"],
  },
  {
    category: "engineering",
    title: "Engineering",
    description: "Client surfaces, domain services, data layer, and delivery pipeline.",
    variants: ["hero", "flow", "compact"],
  },
  {
    category: "cloud",
    title: "Cloud",
    description: "CDN, edge TLS, and compute tiers — static-first with API paths.",
    variants: ["hero", "flow", "compact"],
  },
  {
    category: "marketplace",
    title: "Marketplace",
    description: "Two-sided platform — demand, supply, and trust layers with honest readiness labels.",
    variants: ["hero", "flow", "compact"],
  },
  {
    category: "analytics",
    title: "Analytics",
    description: "Logs, events, metrics pipeline, and readiness dashboards — not vanity KPIs.",
    variants: ["hero", "flow", "compact"],
  },
] as const;

export const illustrationFrameworkCopy = {
  title: "Nexynth illustration framework",
  description:
    "Inline SVG diagrams with shared primitives — no stock photography. Import NexynthIllustration or category components directly.",
  usage: `import { NexynthIllustration } from "@/illustrations";

<NexynthIllustration category="ai" variant="hero" tone="dark" framed />`,
} as const;
