import { brandName, flagshipProductName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import type { InnovationLabSection, InnovationLabStatus } from "@/types/innovation-lab";

export const innovationLabStatusLabels: Record<InnovationLabStatus, string> = {
  concept: "Concept",
  prototype: "Prototype",
  planned: "Planned",
  live: "Live",
};

export const innovationLabStatusDescriptions: Record<InnovationLabStatus, string> = {
  concept: "Ideation or whiteboard — no committed build",
  prototype: "Demo, mock, or staging only — not production SLA",
  planned: "Scoped work with prerequisites — not in active public release",
  live: "Publicly available on stated domain or corporate route",
};

export const innovationLabPageCopy = {
  hero: {
    eyebrow: "Innovation Lab",
    title: "Experiments, prototypes, and what comes next",
    description: `${brandName} publishes R&D directions honestly — concepts and prototypes are not marketed as shipped products. Status labels on every item: Concept, Prototype, Planned, or Live.`,
  },
  disclaimer:
    "Innovation Lab content is illustrative R&D communication only. Concept and Prototype items are not production offerings. Live means a capability is publicly available on its stated product domain — not a guarantee of enterprise SLA or nationwide coverage.",
  footnote: "Edit sections in src/config/innovation-lab.ts — no live experiment APIs are wired on this marketing page.",
  closingCta: {
    title: "Co-build or pilot with us?",
    description:
      "Share which experiment or product direction interests you. We prioritise partners who accept honest readiness labels and phased delivery.",
    primary: { label: "Book free consultation", href: bookConsultationHref("ai") },
    secondary: { label: "Partner enquiry", href: "/partners" },
  },
} as const;

export const innovationLabSections: readonly InnovationLabSection[] = [
  {
    id: "ai-experiments",
    eyebrow: "AI experiments",
    title: "AI Experiments",
    description:
      "Time-boxed explorations in summarisation, retrieval, and workflow assistance — evaluated before any production commitment.",
    items: [
      {
        id: "rag-help-center",
        title: "RAG over approved help content",
        status: "prototype",
        description:
          "Retrieval-augmented Q&A scoped to static help articles — not connected to live customer data on this site.",
        highlights: [
          "Citation-first answers with confidence thresholds",
          "No production PII in lab datasets",
          "Eval cases before client-facing rollout",
        ],
        cta: { label: "Discuss AI pilots", href: bookConsultationHref("ai") },
      },
      {
        id: "doc-extraction",
        title: "Document extraction playground",
        status: "concept",
        description:
          "Structured field extraction from invoices and onboarding PDFs — design stage only.",
        highlights: [
          "Human review on every extracted field",
          "Template library per vertical",
          "Cost caps per document batch",
        ],
      },
      {
        id: "eval-harness",
        title: "LLM eval harness",
        status: "planned",
        description:
          "Internal harness for regression tests on prompts, tools, and model swaps — scheduled for platform engineering.",
        highlights: [
          "Golden datasets per use case",
          "Latency and token dashboards",
          "Gate before production promotion",
        ],
      },
    ],
  },
  {
    id: "automation-concepts",
    eyebrow: "Automation",
    title: "Automation Concepts",
    description:
      "Business process patterns we design for clients and products — most are concepts until a pilot sponsor is confirmed.",
    items: [
      {
        id: "order-exception-queue",
        title: "Order exception routing",
        status: "concept",
        description:
          "Route billing and fulfilment mismatches to ops queues with model-assisted triage — not deployed on nexynthlabs.com.",
        highlights: [
          "Confidence-scored suggestions only",
          "ERP webhook integration patterns",
          "Audit log per automated action",
        ],
      },
      {
        id: "onboarding-checklist-bot",
        title: "Onboarding checklist automation",
        status: "prototype",
        description:
          "Conversational checklist for vendor and partner onboarding — demo flows in staging environments only.",
        highlights: [
          "Template-driven steps per partner type",
          "Escalation to human ops",
          "Progress persistence design",
        ],
        cta: { label: "Automation enquiry", href: bookConsultationHref("ai") },
      },
      {
        id: "scheduled-reporting",
        title: "Scheduled ops reporting",
        status: "planned",
        description:
          "Weekly digest emails from warehouse queries — planned for internal ops before client packaging.",
        highlights: [
          "Read-only data sources",
          "Anomaly highlights section",
          "Opt-in recipients per workspace",
        ],
      },
    ],
  },
  {
    id: "future-product-ideas",
    eyebrow: "Horizon",
    title: "Future Product Ideas",
    description:
      "Directional platforms beyond the current live line — subject to partnership, capital, and domain validation.",
    items: [
      {
        id: "temple-ops-suite",
        title: "Temple operations suite",
        status: "concept",
        description:
          "Seva scheduling, donor communications, and event publishing for partner temples — not a live SKU.",
        highlights: [
          "Extends GetPandit partner model",
          "Multilingual content workflows",
          "Separation from corporate marketing site",
        ],
        cta: { label: "Temple partner track", href: "/partners/portal?interest=temple#apply" },
      },
      {
        id: "local-services-marketplace",
        title: "Local services marketplace",
        status: "concept",
        description:
          "Hyperlocal booking for home and community services adjacent to devotional workflows — early ideation.",
        highlights: [
          "Trust and verification primitives",
          "Shared payment and messaging layer",
          "City-by-city launch discipline",
        ],
      },
      {
        id: "enterprise-automation-hub",
        title: "Enterprise automation hub",
        status: "planned",
        description:
          "B2B workspace for workflow automations and agent templates — services-led before productisation.",
        highlights: [
          "Tenant isolation from day one",
          "Connector catalog for India stacks",
          "Usage-based pricing research",
        ],
        cta: { label: "Product partnership", href: "/partners" },
      },
    ],
  },
  {
    id: "agentic-ai-research",
    eyebrow: "Agentic AI",
    title: "Agentic AI Research",
    description:
      "Multi-step agents with tool boundaries — research tracks emphasise human approval and auditability over autonomy hype.",
    items: [
      {
        id: "tool-boundary-agents",
        title: "Tool-boundary agent patterns",
        status: "prototype",
        description:
          "Agents limited to explicit API allowlists — demonstrated in internal demos, not customer production.",
        highlights: [
          "Step traces for reviewers",
          "Credential scoping per tool",
          "Kill switch per session",
        ],
        cta: { label: "AI Showcase", href: "/ai-showcase" },
      },
      {
        id: "human-approval-gates",
        title: "Human approval gates",
        status: "planned",
        description:
          "Standard middleware for sensitive actions — payments, refunds, account changes require explicit approver.",
        highlights: [
          "Role-based approval matrix",
          "Slack or email escalation hooks",
          "Immutable decision log",
        ],
      },
      {
        id: "multi-agent-orchestration",
        title: "Multi-agent orchestration sketches",
        status: "concept",
        description:
          "Planner/worker splits for research and ops — whiteboard and notebook stage only.",
        highlights: [
          "Avoid unbounded agent fan-out",
          "Shared memory with TTL",
          "Cost ceiling per workflow",
        ],
      },
    ],
  },
  {
    id: "getpandit-evolution",
    eyebrow: flagshipProductName,
    title: "GetPandit Evolution",
    description: `Roadmap-facing evolution for ${flagshipProductName} on getpandit.com — live items are on the product domain; others are planned or in progress.`,
    items: [
      {
        id: "gp-public-booking",
        title: "Public booking on getpandit.com",
        status: "live",
        description:
          "Core pandit discovery and pooja booking experience on the dedicated product domain — not hosted on nexynthlabs.com.",
        highlights: [
          "Live product domain",
          "Corporate site links externally only",
          "Independent release cadence",
        ],
        cta: {
          label: `Visit ${flagshipProductName}`,
          href: "https://getpandit.com",
          external: true,
        },
      },
      {
        id: "gp-temple-dashboards",
        title: "Temple partner dashboards",
        status: "planned",
        description:
          "Self-service profiles and seva management for temple partners — manual onboarding until portal ships.",
        highlights: [
          "Partner Portal readiness page live",
          "No public temple login yet",
          "Enquiry-led onboarding today",
        ],
        cta: { label: "Partner Portal", href: "/partners/portal" },
      },
      {
        id: "gp-vendor-marketplace",
        title: "Vendor marketplace attachments",
        status: "concept",
        description:
          "Florists, catering, and décor attached to ceremony packages — design and partner research phase.",
        highlights: [
          "Quality checkpoints per vendor",
          "Pilot city strategy",
          "Fulfilment SLAs under review",
        ],
        cta: { label: "Vendor partners", href: "/partners/portal?interest=vendor#apply" },
      },
      {
        id: "gp-ai-assist",
        title: "Family guidance AI assist",
        status: "prototype",
        description:
          "Optional drafting help for pooja descriptions and FAQs — human-reviewed content only; not autonomous booking.",
        highlights: [
          "Scholarly review before publish",
          "No medical or legal advice",
          "Escalation to human support",
        ],
      },
    ],
  },
  {
    id: "prototype-showcase",
    eyebrow: "Showcase",
    title: "Prototype Showcase",
    description:
      "Demos and UI explorations shared in sales and partner conversations — prototypes are not production SLAs.",
    items: [
      {
        id: "admin-lead-crm-lite",
        title: "Lead CRM lite (corporate admin)",
        status: "live",
        description:
          "File-based lead review for enquiries on this corporate site — staff admin only, not a multi-tenant SaaS product.",
        highlights: [
          "data/leads.json storage today",
          "PostgreSQL migration planned",
          "Not marketed as external CRM",
        ],
      },
      {
        id: "ai-readiness-widget",
        title: "AI Readiness Score",
        status: "live",
        description:
          "Public 10-question self-assessment with tier results — lead capture optional; scoring runs client-side with API persistence.",
        highlights: [
          "Route: /ai-readiness-score",
          "Indicative tiers only",
          "Not professional certification",
        ],
        cta: { label: "Try the score", href: "/ai-readiness-score" },
      },
      {
        id: "status-trust-pages",
        title: "Status & trust center pages",
        status: "live",
        description:
          "Config-maintained status placeholders and security/trust narratives — not live infrastructure monitoring.",
        highlights: [
          "Honest non-monitoring disclaimer",
          "Legal review banners",
          "No false compliance claims",
        ],
        cta: { label: "System status", href: "/status" },
      },
      {
        id: "mobile-booking-mock",
        title: "Mobile booking UI mock",
        status: "prototype",
        description:
          "React Native screen flows for ceremony booking — design prototype without app store release from Innovation Lab.",
        highlights: [
          "Figma and component spikes",
          "Shared API contracts with web",
          "Accessibility review checklist",
        ],
        cta: { label: "Mobile consultation", href: bookConsultationHref("mobile-app") },
      },
    ],
  },
] as const;

export function getInnovationLabItemCounts(): Record<InnovationLabStatus, number> {
  const counts: Record<InnovationLabStatus, number> = {
    concept: 0,
    prototype: 0,
    planned: 0,
    live: 0,
  };

  for (const section of innovationLabSections) {
    for (const item of section.items) {
      counts[item.status] += 1;
    }
  }

  return counts;
}

export function getInnovationLabItemTotal(): number {
  return innovationLabSections.reduce((sum, section) => sum + section.items.length, 0);
}

export function getFeaturedInnovationLabItems(count = 3) {
  return innovationLabSections.flatMap((section) => section.items).slice(0, count);
}
