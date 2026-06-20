import { brandName, flagshipProductName } from "@/config/site-values";
import type { RoadmapCategory, RoadmapCategoryGroup, RoadmapItem } from "@/types/roadmap";

export const roadmapCategoryLabels: Record<RoadmapCategory, string> = {
  now: "Now",
  next: "Next",
  future: "Future",
};

export const roadmapReadinessLabels = {
  live: "Live",
  in_progress: "In progress",
  planned: "Planned",
  exploratory: "Exploratory",
} as const;

export const roadmapScopeLabels = {
  product: "Product",
  corporate: "Corporate site",
  platform: "Platform",
  integration: "Integration",
} as const;

export const roadmapPageCopy = {
  framework: {
    cmsNote:
      "Edit roadmap categories and items in src/config/roadmap.ts. Future CMS module: roadmap (planned) — map category, readiness, product, and links without component changes.",
  },
  hero: {
    eyebrow: "Public roadmap",
    title: "What we're building — honestly",
    description: `${brandName} groups milestones into Now, Next, and Future — product-led, without invented delivery dates. Status reflects engineering understanding today, not guarantees.`,
  },
  productSpotlight: {
    eyebrow: "Flagship focus",
    title: `${flagshipProductName} leads the Now lane`,
    description: `Live booking on getpandit.com anchors our product roadmap. Corporate platform work runs in parallel — separate domains, shared engineering discipline.`,
    cta: { label: "Explore GetPandit", href: "/getpandit" },
  },
  disclaimer:
    "Roadmap items reflect current understanding only — not commitments, investment advice, or guaranteed timelines. Dates appear only when explicitly configured and approved.",
  footnote: `Edit items in src/config/roadmap.ts. Product-specific roadmaps on getpandit.com may differ.`,
  closingCta: {
    title: "Interested in where we're headed?",
    description:
      "Partners and clients can align early on planned integrations and platform work.",
    primary: { label: "Partner with us", href: "/partners" },
    secondary: { label: "Product ecosystem", href: "/products/ecosystem" },
  },
} as const;

export const roadmapCategories: readonly RoadmapCategoryGroup[] = [
  {
    category: "now",
    label: roadmapCategoryLabels.now,
    description:
      "Live today or actively in build — flagship product work, platform operations, and integrations we are shipping now.",
  },
  {
    category: "next",
    label: roadmapCategoryLabels.next,
    description:
      "Defined scope with prerequisites — queued after current lanes clear, not yet in active development.",
  },
  {
    category: "future",
    label: roadmapCategoryLabels.future,
    description:
      "Directional bets — timing and scope evolve with partners, regulation, and product learning.",
  },
] as const;

/**
 * Public roadmap items — edit categories and readiness honestly.
 * Add `targetDate` only when leadership approves a date for public display.
 */
export const roadmapItems: readonly RoadmapItem[] = [
  {
    id: "getpandit-mvp",
    title: `${flagshipProductName} platform`,
    category: "now",
    readiness: "live",
    product: flagshipProductName,
    scope: "product",
    summary: `Live flagship on getpandit.com — discovery, pooja catalog, and calendar-aware booking flows. Corporate site links externally only.`,
    links: [
      { label: "Product page", href: "/getpandit" },
      { label: "Visit getpandit.com", href: "https://getpandit.com", external: true },
    ],
  },
  {
    id: "payment-gateway",
    title: "Payment gateway",
    category: "now",
    readiness: "in_progress",
    product: flagshipProductName,
    scope: "integration",
    summary: `Integration-ready architecture on ${flagshipProductName} — Razorpay / PayU patterns, webhooks, and reconciliation slots. Not claimed as fully live until product confirms production cutover.`,
    links: [{ label: "Case study", href: "/case-studies/getpandit" }],
  },
  {
    id: "whatsapp-booking",
    title: "WhatsApp booking",
    category: "now",
    readiness: "in_progress",
    product: flagshipProductName,
    scope: "integration",
    summary:
      "Corporate click-to-chat and lead logging live. WhatsApp Business API templates and product-domain transactional messaging remain in progress.",
    links: [{ label: "Contact WhatsApp CTA", href: "/contact" }],
  },
  {
    id: "admin-platform",
    title: "Admin platform",
    category: "now",
    readiness: "in_progress",
    product: brandName,
    scope: "platform",
    summary:
      "Signed-session admin shell, role-based modules, and interactive leads inbox. Database-backed editors and per-user auth are planned next.",
    links: [{ label: "Admin login", href: "/admin/login" }],
  },
  {
    id: "ai-assistant",
    title: "AI agents platform",
    category: "now",
    readiness: "in_progress",
    product: brandName,
    scope: "platform",
    summary:
      "Agentic workflows with human-in-the-loop guardrails — showcase content and client pilots. No live public AI product claimed yet.",
    links: [
      { label: "AI capability", href: "/ai" },
      { label: "AI showcase", href: "/ai-showcase" },
    ],
  },
  {
    id: "corporate-seo",
    title: "Corporate SEO foundation",
    category: "now",
    readiness: "live",
    product: brandName,
    scope: "corporate",
    summary:
      "Dynamic metadata, Open Graph, canonical URLs, sitemap.xml, robots.txt, and structured data across public routes.",
  },
  {
    id: "lead-crm-lite",
    title: "Lead CRM Lite",
    category: "now",
    readiness: "live",
    product: brandName,
    scope: "corporate",
    summary:
      "Contact and partner enquiries with status workflow, notes, source tracking, and admin CSV export (file backend).",
    links: [{ label: "Contact", href: "/contact" }],
  },
  {
    id: "analytics-readiness",
    title: "Analytics readiness",
    category: "now",
    readiness: "live",
    product: brandName,
    scope: "corporate",
    summary:
      "GA, GTM, Meta Pixel, and LinkedIn placeholders with conditional scripts and safe no-op event tracking.",
  },
  {
    id: "vendor-portal",
    title: "Vendor portal",
    category: "next",
    readiness: "planned",
    product: flagshipProductName,
    scope: "product",
    summary:
      "Marketplace for ritual vendors attachable to pooja packages — onboarding, fulfilment signals, and partner model documented.",
    links: [{ label: "Product ecosystem", href: "/products/ecosystem" }],
  },
  {
    id: "mobile-apps",
    title: "Native mobile apps",
    category: "next",
    readiness: "planned",
    product: flagshipProductName,
    scope: "product",
    summary:
      "React Native apps for discovery and booking adjuncts — aligned with web APIs. Store release not announced.",
    links: [{ label: "Technology", href: "/technology" }],
  },
  {
    id: "database-cms",
    title: "Database-backed CMS",
    category: "next",
    readiness: "planned",
    product: brandName,
    scope: "platform",
    summary:
      "PostgreSQL persistence, in-browser editors, and lead migration from file storage — including roadmap module integration.",
  },
  {
    id: "pandit-onboarding",
    title: "Pandit partner onboarding",
    category: "next",
    readiness: "planned",
    product: flagshipProductName,
    scope: "product",
    summary:
      "Self-serve intake flows for pandit partners — verification checkpoints and catalog setup on the product domain.",
    links: [{ label: "Partner with us", href: "/partners" }],
  },
  {
    id: "temple-management",
    title: "Temple management platform",
    category: "future",
    readiness: "exploratory",
    product: "Temple platform",
    scope: "product",
    summary:
      "Temple profiles, seva programmes, and structured handoffs — contingent on partner demand and roadmap priority.",
    links: [{ label: "Partners", href: "/partners" }],
  },
  {
    id: "multi-city-rollout",
    title: "Multi-city product rollout",
    category: "future",
    readiness: "exploratory",
    product: flagshipProductName,
    scope: "product",
    summary:
      "City launch playbooks with community partners — directional scale pattern for GetPandit and ecosystem products.",
    links: [{ label: "Vision", href: "/vision" }],
  },
  {
    id: "cookie-consent-analytics",
    title: "Cookie consent & production analytics",
    category: "future",
    readiness: "exploratory",
    product: brandName,
    scope: "corporate",
    summary:
      "Consent banner and production enablement of tracking IDs after legal review — env placeholders exist today.",
    links: [{ label: "Trust center", href: "/trust" }],
  },
] as const;

/** @deprecated Use roadmapCategories */
export const roadmapGroups = roadmapCategories.map((group) => ({
  ...group,
  status: group.category,
}));

/** @deprecated Use roadmapReadinessLabels */
export const roadmapStatusLabels = roadmapReadinessLabels;

export function getRoadmapItemsByCategory(category: RoadmapCategory): RoadmapItem[] {
  return roadmapItems.filter((item) => item.category === category);
}

/** @deprecated Use getRoadmapItemsByCategory */
export function getRoadmapItemsByStatus(category: RoadmapCategory): RoadmapItem[] {
  return getRoadmapItemsByCategory(category);
}

export function getRoadmapItemCounts(): Record<RoadmapCategory, number> {
  return roadmapCategories.reduce(
    (counts, group) => {
      counts[group.category] = getRoadmapItemsByCategory(group.category).length;
      return counts;
    },
    { now: 0, next: 0, future: 0 } as Record<RoadmapCategory, number>,
  );
}

export function getRoadmapProducts(): string[] {
  return [...new Set(roadmapItems.map((item) => item.product))];
}
