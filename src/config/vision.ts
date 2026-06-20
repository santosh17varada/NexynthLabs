import {
  address,
  brandName,
  companyName,
  flagshipProductName,
} from "@/config/site-values";
import type { VisionHighlight, VisionNavItem, VisionPhase, VisionTheme } from "@/types/vision";

export const visionPageContent = {
  hero: {
    eyebrow: "Vision",
    title: "Building products people trust — for decades",
    description: `${brandName} exists to turn complex ideas into dependable software — AI-native platforms, marketplace products, and enterprise systems grounded in ${address.city}, built for India and beyond.`,
    founderQuote: {
      message: `We started ${brandName} because ideas deserve production-grade software — not brochure sites that crumble when real users arrive. Our vision is long-term: ship honestly, separate marketing from product domains, and let AI amplify human judgment rather than replace it.`,
      name: "Santosh Kumar Varada",
      role: "Founder, CEO & Managing Director",
      cta: { label: "Read founder story", href: "/founder" },
    },
  },
  sectionNav: [
    { id: "why-nexynth-exists", label: "Why we exist" },
    { id: "future-digital-products", label: "Digital products" },
    { id: "ai-driven-future", label: "AI future" },
    { id: "marketplace-innovation", label: "Marketplaces" },
    { id: "getpandit-vision", label: "GetPandit" },
    { id: "long-term-direction", label: "Direction" },
  ] satisfies readonly VisionNavItem[],
  whyNexynthExists: {
    eyebrow: "Purpose",
    title: "Why Nexynth exists",
    paragraphs: [
      `${companyName} was formed where devotional services, local commerce, and enterprise software intersect — domains that demand clarity, cultural respect, and engineering discipline.`,
      `Too many teams ship marketing narratives without production systems. We separate corporate storytelling from product delivery so families, partners, and clients can trust what is live today versus what is still in progress.`,
      `Based in ${address.city}, we build for India-first realities — multilingual journeys, mobile-first discovery, and integrations partners can reuse without starting from scratch every quarter.`,
    ],
    highlights: [
      {
        id: "trust",
        title: "Trust by design",
        description:
          "Honest readiness labels, separate product domains, and no fabricated growth metrics on the corporate site.",
      },
      {
        id: "products",
        title: "Products over pitches",
        description:
          "Flagship software on dedicated domains — nexynthlabs.com explains; getpandit.com delivers.",
      },
      {
        id: "craft",
        title: "Craft that lasts",
        description:
          "Config-driven content, typed stacks, and documented integrations for the next engineer or partner.",
      },
    ] satisfies readonly VisionHighlight[],
  },
  digitalProductsFuture: {
    eyebrow: "Horizon",
    title: "The future of digital products",
    description:
      "Products will be composable, AI-augmented, and honest about readiness — especially in categories where trust matters more than novelty.",
    themes: [
      {
        id: "dedicated-domains",
        title: "Dedicated product domains",
        description:
          "Each platform owns its release cadence, booking flows, and operational tooling — independent from corporate marketing stability.",
      },
      {
        id: "config-driven",
        title: "Config-driven experiences",
        description:
          "Marketing, SEO, and product narratives evolve through typed config — faster iteration without fragile page-by-page edits.",
      },
      {
        id: "mobile-first",
        title: "Mobile-first by default",
        description:
          "Discovery, scheduling, and support flows designed for thumbs and intermittent connectivity — not desktop-only demos.",
      },
      {
        id: "integration-ready",
        title: "Integration-ready cores",
        description:
          "Payments, messaging, CRM, and analytics slots planned early so partners scale without repeated platform rewrites.",
      },
    ] satisfies readonly VisionTheme[],
  },
  aiDrivenFuture: {
    eyebrow: "AI",
    title: "AI-driven future",
    description:
      "Practical AI with guardrails — agentic workflows, retrieval pipelines, and human oversight where stakes are high. No hype, no unverified benchmark claims.",
    pillars: [
      {
        id: "agentic",
        title: "Agentic workflows with scope",
        description:
          "Multi-step agents that plan, call tools, and escalate — with permissions, audit trails, and approval gates teams can trust.",
      },
      {
        id: "retrieval",
        title: "Retrieval that respects context",
        description:
          "RAG and knowledge products built with eval harnesses, PII boundaries, and domain-aware chunking — not generic chat wrappers.",
      },
      {
        id: "human-loop",
        title: "Humans in the loop",
        description:
          "Automation accelerates operations; people remain accountable for devotional services, partner quality, and high-risk decisions.",
      },
      {
        id: "governance",
        title: "Governance from day one",
        description:
          "Cost controls, monitoring, and documentation so AI features ship with the same rigor as core product engineering.",
      },
    ] satisfies readonly VisionHighlight[],
  },
  marketplaceInnovation: {
    eyebrow: "Platforms",
    title: "Marketplace innovation",
    description: `Marketplaces like ${flagshipProductName} need structured supply, transparent discovery, and booking state machines — patterns we refine and reuse across verticals.`,
    items: [
      {
        id: "supply",
        title: "Structured supply",
        description:
          "Partner onboarding, verification checkpoints, and service catalogs that scale without losing quality signals.",
      },
      {
        id: "discovery",
        title: "Calm discovery",
        description:
          "Search, filters, and profiles that help families compare ritual scope and expertise — not guess from unstructured listings.",
      },
      {
        id: "booking",
        title: "Booking discipline",
        description:
          "Calendar-aware scheduling, ceremony detail capture, and status updates families can follow without phone tag.",
      },
      {
        id: "ecosystem",
        title: "Ecosystem expansion",
        description:
          "Temple management, vendor networks, and regional rollout patterns — each on honest readiness labels, not vanity KPIs.",
      },
    ] satisfies readonly VisionHighlight[],
  },
  getPanditVision: {
    eyebrow: "Flagship",
    title: `${flagshipProductName} vision`,
    paragraphs: [
      `Families deserve better than fragmented referrals and opaque pooja packages. ${flagshipProductName} brings structure to pandit discovery, ceremony booking, and partner operations on getpandit.com.`,
      `The product runs on its own domain so booking, payments, and notifications mature independently from this corporate site. We describe readiness honestly — platform milestones, not inflated user or revenue figures.`,
      `Long term, ${flagshipProductName} becomes the reference implementation for devotional marketplaces: trust signals, multilingual journeys, and partner tooling other verticals can learn from.`,
    ],
    links: [
      { label: `${flagshipProductName} overview`, href: "/getpandit" },
      { label: "Case study", href: "/case-studies/getpandit" },
      { label: "Product ecosystem", href: "/products/ecosystem" },
    ],
    highlights: [
      "Live flagship on getpandit.com",
      "Mobile-first booking architecture",
      "Partner onboarding in progress",
      "Payment & messaging integration-ready",
    ],
  },
  longTermDirection: {
    eyebrow: "Direction",
    title: "Long-term direction",
    description:
      "Directional phases — not dated guarantees. Scope and timing evolve with customers, partners, and product milestones.",
    phases: [
      {
        id: "near-term",
        period: "Near term",
        title: "Strengthen the live flagship",
        items: [
          `Advance ${flagshipProductName} platform readiness on getpandit.com`,
          "Expand partner and temple conversation channels",
          "Production posture for CRM, analytics, and integration placeholders",
        ],
      },
      {
        id: "mid-term",
        period: "Mid term",
        title: "Ecosystem & automation",
        items: [
          "Client and partner pilots for AI agents and enterprise automation",
          "Progress temple management and vendor marketplace concepts with justified partnerships",
          "Operational CMS and lead tooling for marketing and sales teams",
        ],
      },
      {
        id: "long-term",
        period: "Long term",
        title: "National scale with trust",
        items: [
          "Multi-city rollout patterns with regional partner models",
          "Responsible AI and compliance alignment as regulations evolve",
          "Ecosystem products on dedicated domains with clear ownership",
        ],
      },
    ] satisfies readonly VisionPhase[],
  },
  disclaimer:
    "Company vision only — not investment advice, forward-looking guarantees, or unverified metrics. Product availability follows status labels on the product ecosystem and innovation lab pages.",
  closingCta: {
    title: "Align on the direction that fits your goals",
    description:
      "Partnerships, services, product conversations, or ecosystem collaboration — we welcome thoughtful enquiries.",
    primary: { label: "Book consultation", href: "/book-consultation" },
    secondary: { label: "Partner with us", href: "/partners" },
  },
} as const;
