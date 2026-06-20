import { brandName } from "@/config/site-values";

export type HomeWhyReasonIcon =
  | "strategy"
  | "ai"
  | "security"
  | "ux"
  | "iteration"
  | "ownership";

export type HomeWhyReason = {
  id: string;
  title: string;
  description: string;
  icon: HomeWhyReasonIcon;
};

export const homeWhyCopy = {
  eyebrow: "Why Nexynth",
  title: "Product thinking, not agency theater",
  description: `${brandName} partners with teams that need strategy, engineering, and long-term ownership — clear scopes, honest labels, no vanity metrics.`,
  footnote:
    "These describe how we work — not guarantees of identical outcomes for every engagement.",
  ctas: {
    about: { label: "About us", href: "/about" },
    contact: { label: "Get in touch", href: "/contact" },
  },
} as const;

export const homeWhyReasons: readonly HomeWhyReason[] = [
  {
    id: "strategy-to-launch",
    title: "Strategy to launch",
    description:
      "Discovery, phased roadmaps, and honest readiness labels — from concept through first production release.",
    icon: "strategy",
  },
  {
    id: "ai-native",
    title: "AI-native by default",
    description:
      "Automation and agents embedded in the stack with evals, escalation paths, and clear scope boundaries.",
    icon: "ai",
  },
  {
    id: "secure-scalable",
    title: "Secure, scalable platforms",
    description:
      "Auth, HTTPS, environment separation, and cloud patterns for trust-heavy products — described accurately.",
    icon: "security",
  },
  {
    id: "modern-ux",
    title: "Interfaces that respect users",
    description:
      "Accessible layouts and calm copy for devotional and enterprise contexts — mobile-aware from day one.",
    icon: "ux",
  },
  {
    id: "fast-iteration",
    title: "Ship without rewrites",
    description:
      "Config-driven content, modular services, and CI-friendly repos so teams improve continuously.",
    icon: "iteration",
  },
  {
    id: "long-term-ownership",
    title: "Built to be owned",
    description:
      "Codebases, docs, and handoffs designed for your team to run the platform years after launch.",
    icon: "ownership",
  },
] as const;

export const homeWhyFeaturedReasonIds = [
  "strategy-to-launch",
  "ai-native",
  "secure-scalable",
] as const;

export function getHomeWhyFeaturedReasons(): readonly HomeWhyReason[] {
  const featured = new Set<string>(homeWhyFeaturedReasonIds);
  return homeWhyReasons.filter((reason) => featured.has(reason.id));
}
