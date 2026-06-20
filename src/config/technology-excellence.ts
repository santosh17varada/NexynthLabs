import { address, brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import type { TechnologySection } from "@/types/technology-excellence";

/**
 * Technology excellence capabilities — edit here.
 * Describes delivery strengths; does not claim vendor certifications unless verified.
 */
export const technologyExcellencePageCopy = {
  hero: {
    eyebrow: "Technology",
    title: "The stack behind our products",
    description: `${brandName} builds and integrates with modern tools — from ${address.city} to production across India. Seven areas: AI, web, mobile, cloud, DevOps, integrations, and security.`,
  },
  disclaimer:
    "Capability overview for services and product work — not a certification list. Specific vendors and scopes are confirmed per engagement.",
  footnote: "Edit sections in src/config/technology-excellence.ts — config-driven, no CMS required.",
  closingCta: {
    title: "Need this on your product?",
    description:
      "Share your architecture, integrations, and timeline. We'll recommend a phased plan.",
    primary: { label: "Book a consultation", href: bookConsultationHref() },
    secondary: { label: "View services", href: "/services" },
  },
} as const;

export const technologyExcellenceSections: readonly TechnologySection[] = [
  {
    id: "ai",
    eyebrow: "AI",
    title: "AI & intelligent automation",
    description:
      "Practical agent and automation layers — always with human oversight, evals, and clear escalation before production.",
    capabilities: [
      {
        id: "ai-agents",
        name: "AI Agents",
        tagline: "Agentic workflows · support · ops",
        description:
          "LLM-backed agents for customer support, internal ops, and product features — designed with guardrails, tool routing, and measurable outcomes.",
        highlights: [
          "Human-in-the-loop escalation",
          "RAG and tool-use patterns",
          "Evals before production rollout",
        ],
      },
    ],
  },
  {
    id: "web",
    eyebrow: "Web",
    title: "Web & API foundations",
    description:
      "TypeScript-first web applications and APIs with clear boundaries between marketing sites, product domains, and service layers.",
    capabilities: [
      {
        id: "nextjs",
        name: "Next.js",
        tagline: "App Router · SSR · static-first marketing",
        description:
          "Corporate and product marketing sites on Next.js with SEO, performance baselines, and config-driven content — including this site.",
        highlights: [
          "App Router and React Server Components",
          "Static generation for public pages",
          "Metadata, sitemap, and structured data",
        ],
      },
      {
        id: "nestjs",
        name: "NestJS",
        tagline: "Modular APIs · validation · integrations",
        description:
          "Backend services with structured modules for auth, webhooks, CRM hooks, and third-party providers — suited to product and enterprise APIs.",
        highlights: [
          "REST and webhook endpoints",
          "DTO validation and guards",
          "Integration-ready service layers",
        ],
      },
    ],
  },
  {
    id: "mobile",
    eyebrow: "Mobile",
    title: "Mobile experiences",
    description:
      "Cross-platform apps that share logic with web products while respecting native performance and store guidelines.",
    capabilities: [
      {
        id: "react-native",
        name: "React Native",
        tagline: "iOS & Android from one codebase",
        description:
          "Mobile apps for discovery, booking adjuncts, and partner tools — aligned with web APIs and design systems where it reduces duplication.",
        highlights: [
          "Shared TypeScript models with web",
          "Mobile-first UX and accessibility",
          "Store-ready build and release patterns",
        ],
      },
    ],
  },
  {
    id: "cloud",
    eyebrow: "Cloud",
    title: "Cloud & data",
    description:
      "Deployable on AWS with document stores and managed services that support staging, observability, and cost-aware scaling.",
    capabilities: [
      {
        id: "aws",
        name: "AWS",
        tagline: "Compute · storage · managed services",
        description:
          "Hosting patterns on AWS — serverless functions, containers, object storage, and managed databases — chosen per workload and budget.",
        highlights: [
          "Multi-environment staging pipelines",
          "CDN and HTTPS termination",
          "Secrets via environment configuration",
        ],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        tagline: "Flexible document models",
        description:
          "Document databases for product catalogs, lead stores, content revisions, and integration event logs where schema flexibility helps iteration.",
        highlights: [
          "Atlas or self-managed options",
          "Indexing and aggregation for ops views",
          "Migration path from file-based prototypes",
        ],
      },
    ],
  },
  {
    id: "devops",
    eyebrow: "DevOps",
    title: "DevOps & delivery",
    description:
      "Automated pipelines, observability, and release discipline so marketing and product teams can ship with confidence.",
    capabilities: [
      {
        id: "devops",
        name: "DevOps",
        tagline: "CI/CD · observability · release discipline",
        description:
          "Git-based workflows, lint gates, preview deploys, and runbooks — from corporate static sites to product API releases.",
        highlights: [
          "Git-based workflows and PR checks",
          "Production smoke tests and rollback paths",
          "Performance and uptime baselines",
        ],
      },
    ],
  },
  {
    id: "integrations",
    eyebrow: "Integrations",
    title: "Messaging, payments & India-ready APIs",
    description:
      "Integration architecture prepared early — webhooks, reconciliation, and compliance awareness for Indian telecom and payments norms.",
    capabilities: [
      {
        id: "whatsapp-apis",
        name: "WhatsApp APIs",
        tagline: "Cloud API · click-to-chat · templates",
        description:
          "WhatsApp Business Cloud API, Twilio, and Gupshup integration slots — from corporate click-to-chat to transactional templates on product domains.",
        highlights: [
          "Webhook and delivery receipts",
          "Template and session message patterns",
          "Corporate vs product domain separation",
        ],
      },
      {
        id: "sms-gateways",
        name: "SMS gateways",
        tagline: "DLT-aware transactional SMS",
        description:
          "MSG91, Twilio, and similar gateways for OTP, booking updates, and alerts — with India DLT registration awareness in solution design.",
        highlights: [
          "Transactional vs promotional routes",
          "Provider failover considerations",
          "Status callbacks and logging",
        ],
      },
      {
        id: "payment-gateways",
        name: "Payment gateways",
        tagline: "Razorpay · PayU · reconciliation",
        description:
          "Secure checkout, webhooks, and reconciliation for product bookings and B2B invoicing — integration-ready on GetPandit and client platforms.",
        highlights: [
          "Webhook signature verification",
          "Idempotent payment handlers",
          "Refund and settlement visibility",
        ],
      },
    ],
  },
  {
    id: "security",
    eyebrow: "Security",
    title: "Security & trust",
    description:
      "Baseline practices for auth, data handling, and admin access — strengthened per engagement and compliance needs.",
    capabilities: [
      {
        id: "security",
        name: "Security",
        tagline: "Auth · sessions · least privilege",
        description:
          "Signed admin sessions, env-based secrets, HTTPS everywhere, and role-gated CMS access — with roadmap for rate limiting, hashing, and audit logs.",
        highlights: [
          "No secrets in source config",
          "Admin routes behind middleware",
          "Lead and PII handling per privacy policy",
        ],
      },
    ],
  },
] as const;

export function getTechnologyCapabilityCount(): number {
  return technologyExcellenceSections.reduce(
    (total, section) => total + section.capabilities.length,
    0,
  );
}

export function getTechnologySectionNav() {
  return technologyExcellenceSections.map((section) => ({
    id: section.id,
    label: section.eyebrow,
    href: `#${section.id}`,
  }));
}
