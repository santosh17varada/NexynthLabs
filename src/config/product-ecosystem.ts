import { brandName, flagshipProductName } from "@/config/site-values";
import type { EcosystemProduct } from "@/types/product-ecosystem";

const getPanditBase = "https://getpandit.com";

export const ecosystemPageCopy = {
  hero: {
    eyebrow: "Product ecosystem",
    title: "Platforms we are building",
    description: `${brandName} ships products on dedicated domains with honest readiness labels. Only offerings marked Live are available today — everything else is in progress, planned, or coming soon.`,
  },
  platforms: {
    eyebrow: "Core platforms",
    title: "Nexynth Labs product line",
    description:
      "From devotional services to enterprise automation — each product has its own roadmap, domain strategy, and integration model.",
  },
  comingSoon: {
    eyebrow: "Pipeline",
    title: "Coming soon",
    description:
      "Early concepts and future launches. These are not live products — share your interest if a roadmap item fits your organisation.",
  },
  disclaimer:
    "Status labels reflect current readiness only. Live means the product is available on its stated domain. In Progress, Planned, and Coming Soon are not marketed as live offerings.",
  footnote: `Edit product entries in src/config/product-ecosystem.ts — no CMS backend required in phase 3.`,
  closingCta: {
    title: "Explore a product partnership?",
    description:
      "Whether you are investing, distributing, or co-building — tell us which platform interests you and how you would like to collaborate.",
    primary: { label: "Partner enquiry", href: "/partners" },
    secondary: { label: "View live products", href: "/products" },
  },
} as const;

export const ecosystemStatusLabels = {
  live: "Live",
  in_progress: "In Progress",
  planned: "Planned",
  coming_soon: "Coming Soon",
} as const;

/**
 * Core ecosystem platforms. Only mark `live` when the product is publicly available.
 */
export const ecosystemPlatforms: readonly EcosystemProduct[] = [
  {
    id: "getpandit",
    name: flagshipProductName,
    status: "live",
    category: "flagship",
    tagline: "Online pandit booking for pooja services",
    description: `${flagshipProductName} is ${brandName}'s live flagship — pandit discovery, pooja packages, and ceremony scheduling on getpandit.com. The corporate site links externally only.`,
    highlights: [
      "Live on getpandit.com",
      "Pooja catalog and calendar-aware booking",
      "Payment and messaging integration readiness",
      "Separate from nexynthlabs.com releases",
    ],
    links: [
      { label: "Product overview", href: "/getpandit" },
      { label: "Visit getpandit.com", href: getPanditBase, external: true },
      { label: "Case study", href: "/case-studies/getpandit" },
    ],
  },
  {
    id: "ai-agents-platform",
    name: "AI Agents Platform",
    status: "in_progress",
    category: "platform",
    tagline: "Agentic workflows for web, mobile, and ops",
    description:
      "A reusable agents layer for customer support, internal ops, and product automation — designed with human-in-the-loop guardrails and integration slots for LLM providers.",
    highlights: [
      "Agent orchestration and escalation patterns",
      "Web and mobile embedding readiness",
      "Evals and audit trails before production",
      "Not a publicly launched product yet",
    ],
    links: [
      { label: "AI Showcase", href: "/ai-showcase" },
      { label: "Discuss AI roadmap", href: "/contact?service=ai-solutions" },
    ],
  },
  {
    id: "temple-management",
    name: "Temple Management Platform",
    status: "planned",
    category: "platform",
    tagline: "Operations and seva programmes for temple partners",
    description:
      "Planned platform for temple profiles, events, seva listings, and structured enquiry or booking handoffs — aligned with GetPandit partnership models.",
    highlights: [
      "Temple profile and event catalog concepts",
      "Partner onboarding workflows (planned)",
      "Operational dashboards in roadmap",
      "Not live — partnership discussions welcome",
    ],
    links: [{ label: "Temple partner enquiry", href: "/partners" }],
  },
  {
    id: "vendor-marketplace",
    name: "Vendor Marketplace",
    status: "planned",
    category: "marketplace",
    tagline: "Ritual vendors connected to family journeys",
    description:
      "Planned marketplace for florists, catering, décor, and ancillary ritual vendors — attachable to pooja packages and community bookings.",
    highlights: [
      "Vendor onboarding checkpoints (planned)",
      "Service attachment to ceremony packages",
      "Quality and fulfilment signals in design",
      "Not live — early partner conversations only",
    ],
    links: [
      { label: "Vendor partner model", href: "/partners" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    id: "enterprise-automation",
    name: "Enterprise Automation Suite",
    status: "in_progress",
    category: "suite",
    tagline: "BPA and integration fabric for enterprises",
    description:
      "Business process automation, API integrations, and workflow tooling for corporate clients — separate from consumer-facing devotional products.",
    highlights: [
      "Workflow automation and system connectors",
      "Cloud and on-prem integration patterns",
      "Delivered as services engagements today",
      "Productised suite — not publicly launched",
    ],
    links: [
      { label: "Enterprise services", href: "/services" },
      { label: "Start a conversation", href: "/contact?service=enterprise-integrations" },
    ],
  },
] as const;

export const ecosystemComingSoon: readonly EcosystemProduct[] = [
  {
    id: "community-ritual-planner",
    name: "Community Ritual Planner",
    status: "coming_soon",
    category: "coming_soon",
    tagline: "Group ceremonies and association-led bookings",
    description:
      "Future tool for cultural organisations and associations to coordinate group poojas, member referrals, and shared trust branding.",
    highlights: [
      "Group booking patterns (concept)",
      "Member referral programmes",
      "Shared trust signals with partners",
    ],
    links: [{ label: "Express interest", href: "/partners" }],
  },
  {
    id: "devotional-content-hub",
    name: "Devotional Content Hub",
    status: "coming_soon",
    category: "coming_soon",
    tagline: "Authentic ritual guidance and multilingual content",
    description:
      "Planned content layer for pooja descriptions, family guidance, and scholarly review workflows — supporting discovery across products.",
    highlights: [
      "Multilingual content readiness",
      "Scholarly review workflows (planned)",
      "Transparent service detail for families",
    ],
    links: [{ label: "Partner on content", href: "/partners" }],
  },
  {
    id: "local-services-network",
    name: "Local Services Network",
    status: "coming_soon",
    category: "coming_soon",
    tagline: "City-scale discovery for trusted local services",
    description:
      "Early concept for multi-city rollout with community launch partners — discovery, pilots, and feedback into product roadmaps.",
    highlights: [
      "City launch playbooks (concept)",
      "Community trust and local coordination",
      "Not scheduled for public launch",
    ],
    links: [{ label: "City launch partners", href: "/partners" }],
  },
] as const;

export function getLiveEcosystemProducts(): EcosystemProduct[] {
  return ecosystemPlatforms.filter((product) => product.status === "live");
}

export function getEcosystemProductById(id: string): EcosystemProduct | undefined {
  return [...ecosystemPlatforms, ...ecosystemComingSoon].find(
    (product) => product.id === id,
  );
}
