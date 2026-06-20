import { flagshipProductName } from "@/config/site-values";

export type HomeProductIcon = "getpandit" | "ai" | "web" | "mobile";

export type HomeProductItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: HomeProductIcon;
  flagship?: boolean;
  badge?: string;
};

export const homeProductsCopy = {
  eyebrow: "Products",
  title: "What we build and run",
  description:
    "Each product ships on its own domain with its own release cycle. We label readiness honestly — live, integration-ready, or planned.",
  footerCta: { label: "View all products", href: "/products" },
} as const;

export const homeProductItems: readonly HomeProductItem[] = [
  {
    id: "getpandit",
    title: flagshipProductName,
    description:
      "Live marketplace for pandit discovery and pooja booking — independent domain, payment and messaging integration-ready.",
    href: "/getpandit",
    icon: "getpandit",
    flagship: true,
    badge: "Live",
  },
  {
    id: "ai-platforms",
    title: "AI Platforms",
    description:
      "LLM features, automation pipelines, and agent workflows — scoped with evals and guardrails before production.",
    href: "/ai-showcase",
    icon: "ai",
  },
  {
    id: "enterprise-web",
    title: "Enterprise Web Apps",
    description:
      "Fast marketing sites, modular APIs, and cloud-native delivery for teams that need dependable releases.",
    href: "/technology",
    icon: "web",
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    description:
      "Native-feeling iOS and Android experiences with clear backends — product builds, not template clones.",
    href: "/contact?service=mobile-app-development",
    icon: "mobile",
  },
] as const;
