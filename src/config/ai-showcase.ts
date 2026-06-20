import { brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import type {
  AiShowcaseMetric,
  AiShowcaseSection,
} from "@/types/ai-showcase";

export const aiShowcasePageCopy = {
  hero: {
    eyebrow: "AI Showcase",
    title: "Practical AI for products that ship",
    description: `${brandName} designs automation, agents, and intelligent experiences for web and mobile — grounded in business outcomes, not hype. Explore how we apply AI across services, platforms, and future product ideas.`,
  },
  heroCta: {
    primary: { label: "Book free consultation", href: bookConsultationHref("ai") },
    secondary: { label: "View AI services", href: "/services" },
  },
  metricsIntro: "How we think about delivery",
  closingCta: {
    title: "Ready to explore AI for your product?",
    description:
      "Share your workflows, data landscape, and timeline. We will propose a phased plan — from quick wins to agentic automation — without locking you into unused API spend.",
    primary: { label: "Book free consultation", href: bookConsultationHref("ai") },
    secondary: { label: "See case studies", href: "/case-studies" },
  },
  disclaimer:
    "Illustrative capabilities only. No live AI APIs are connected on this marketing page.",
} as const;

export const aiShowcaseMetrics: readonly AiShowcaseMetric[] = [
  { value: "Outcome-first", label: "Every use case tied to measurable workflow or revenue impact" },
  { value: "Human-in-loop", label: "Escalation paths and auditability built into agent designs" },
  { value: "Platform-ready", label: "Web, mobile, and integration layers planned from day one" },
] as const;

export const aiShowcaseSections: readonly AiShowcaseSection[] = [
  {
    id: "ai-automation-services",
    eyebrow: "Services",
    title: "AI automation services",
    description:
      "End-to-end delivery for teams that need automation without rebuilding their entire stack — from document flows to intelligent routing.",
    items: [
      {
        id: "workflow-automation",
        title: "Intelligent workflow automation",
        description:
          "Automate repetitive ops — intake, approvals, notifications, and handoffs — with rules plus model-assisted classification.",
        highlights: [
          "Trigger-based and scheduled automations",
          "Document extraction and structured outputs",
          "Audit logs for compliance-sensitive teams",
        ],
        cta: { label: "Automate a workflow", href: bookConsultationHref("ai") },
      },
      {
        id: "llm-feature-delivery",
        title: "LLM feature delivery",
        description:
          "Ship summarization, drafting, search, and Q&A inside your product with guardrails, evals, and cost controls.",
        highlights: [
          "Prompt and retrieval architecture",
          "Fallbacks when models are uncertain",
          "Latency and token budgeting",
        ],
        cta: { label: "Plan an LLM feature", href: bookConsultationHref("ai") },
      },
      {
        id: "data-pipeline-ai",
        title: "AI-ready data pipelines",
        description:
          "Prepare embeddings, feature stores, and event streams so models have fresh, permissioned context.",
        highlights: [
          "ETL and vector store patterns",
          "PII handling and access boundaries",
          "Monitoring for drift and quality",
        ],
        cta: { label: "Review data readiness", href: bookConsultationHref("ai") },
      },
    ],
  },
  {
    id: "agentic-ai-use-cases",
    eyebrow: "Agentic AI",
    title: "Agentic AI use cases",
    description:
      "Multi-step agents that plan, call tools, and complete tasks — with clear scopes so they stay reliable in production.",
    items: [
      {
        id: "ops-copilot",
        title: "Operations copilot",
        description:
          "An agent that queries internal APIs, drafts updates, and opens tickets — always with human approval on sensitive actions.",
        highlights: [
          "Tool-calling with scoped credentials",
          "Step-by-step reasoning traces",
          "Role-based action limits",
        ],
        cta: { label: "Explore ops agents", href: bookConsultationHref("ai") },
      },
      {
        id: "research-agent",
        title: "Research & synthesis agent",
        description:
          "Gather sources, compare options, and produce briefs for product, legal, or sales teams.",
        highlights: [
          "Citation-first summaries",
          "Configurable source allowlists",
          "Export to docs and CRM notes",
        ],
        cta: { label: "Design a research agent", href: bookConsultationHref("ai") },
      },
      {
        id: "onboarding-agent",
        title: "Customer onboarding agent",
        description:
          "Guide new users through setup, validate inputs, and personalize next steps based on segment and behavior.",
        highlights: [
          "Conversational checklist flows",
          "Progress persistence across sessions",
          "Handoff to human success teams",
        ],
        cta: { label: "Improve onboarding", href: bookConsultationHref("ai") },
      },
    ],
  },
  {
    id: "business-process-automation",
    eyebrow: "BPA",
    title: "Business process automation",
    description:
      "Map legacy processes into modern, observable automations — reducing manual work without losing control.",
    items: [
      {
        id: "order-to-cash",
        title: "Order-to-cash assistance",
        description:
          "Automate quote follow-ups, invoice matching, and exception queues for finance and operations teams.",
        highlights: [
          "Exception routing with confidence scores",
          "ERP and spreadsheet connectors",
          "Monthly close acceleration",
        ],
        cta: { label: "Streamline finance ops", href: bookConsultationHref("ai") },
      },
      {
        id: "hr-onboarding-bpa",
        title: "HR & vendor onboarding",
        description:
          "Collect documents, verify fields, and notify stakeholders when onboarding milestones complete.",
        highlights: [
          "Template-driven checklists",
          "SLA reminders and escalations",
          "Secure document intake",
        ],
        cta: { label: "Automate onboarding", href: bookConsultationHref("ai") },
      },
      {
        id: "inventory-reconciliation",
        title: "Inventory & fulfillment signals",
        description:
          "Flag mismatches across WMS, marketplaces, and spreadsheets before they become customer issues.",
        highlights: [
          "Anomaly detection on stock levels",
          "Alert playbooks for ops leads",
          "Dashboard-friendly summaries",
        ],
        cta: { label: "Reduce manual reconciliation", href: bookConsultationHref("ai") },
      },
    ],
  },
  {
    id: "ai-customer-support",
    eyebrow: "Support",
    title: "AI-powered customer support",
    description:
      "Deflect repetitive tickets, assist agents in real time, and keep brand tone consistent across channels.",
    items: [
      {
        id: "deflection-layer",
        title: "Self-service deflection",
        description:
          "Answer FAQs and troubleshoot common issues using your help center, policies, and product docs.",
        highlights: [
          "Retrieval over approved knowledge bases",
          "Confidence thresholds before auto-reply",
          "Seamless ticket creation fallback",
        ],
        cta: { label: "Reduce ticket volume", href: bookConsultationHref("ai") },
      },
      {
        id: "agent-assist",
        title: "Agent assist & copilot",
        description:
          "Suggest replies, summarize threads, and surface relevant macros while humans stay in control.",
        highlights: [
          "Tone and policy alignment",
          "One-click insert for agents",
          "Quality sampling for coaching",
        ],
        cta: { label: "Empower support teams", href: bookConsultationHref("ai") },
      },
      {
        id: "multilingual-support",
        title: "Multilingual support readiness",
        description:
          "Serve Hindi, English, and regional language customers with translation and locale-aware responses.",
        highlights: [
          "Language detection on inbound messages",
          "Glossary for brand and product terms",
          "Human review for sensitive topics",
        ],
        cta: { label: "Plan multilingual AI", href: bookConsultationHref("ai") },
      },
    ],
  },
  {
    id: "ai-web-mobile-integrations",
    eyebrow: "Integrations",
    title: "AI integrations for web & mobile platforms",
    description:
      "Embed intelligence into the surfaces your customers already use — with shared APIs and consistent governance.",
    items: [
      {
        id: "web-copilot-widgets",
        title: "Web copilot widgets",
        description:
          "In-app assistants, command palettes, and contextual help embedded in Next.js and React dashboards.",
        highlights: [
          "SSR-safe loading patterns",
          "Session-scoped memory",
          "Feature flags for gradual rollout",
        ],
        cta: { label: "Embed on web", href: bookConsultationHref("ai") },
      },
      {
        id: "mobile-ai-features",
        title: "Mobile AI features",
        description:
          "On-device and cloud-assisted experiences for iOS and Android — voice, vision, and smart forms.",
        highlights: [
          "Offline-friendly fallbacks",
          "Push-triggered proactive tips",
          "App store privacy disclosures",
        ],
        cta: { label: "Ship on mobile", href: bookConsultationHref("ai") },
      },
      {
        id: "api-orchestration",
        title: "API & webhook orchestration",
        description:
          "Connect CRMs, billing, messaging, and internal microservices behind a single AI gateway.",
        highlights: [
          "Rate limits and key rotation",
          "Unified logging across providers",
          "Swap models without client rewrites",
        ],
        cta: { label: "Architect integrations", href: bookConsultationHref("ai") },
      },
    ],
  },
  {
    id: "future-ai-product-ideas",
    eyebrow: "Horizon",
    title: "Future AI product ideas",
    description:
      "Concepts we are exploring with partners and flagship products — designed for India-first trust, language, and scale.",
    items: [
      {
        id: "vertical-copilots",
        title: "Vertical industry copilots",
        description:
          "Domain-tuned assistants for devotional services, local commerce, education, and field operations.",
        highlights: [
          "Regulatory and cultural context",
          "Partner data moats",
          "Monetization via workflow depth",
        ],
        cta: { label: "Co-build a vertical copilot", href: bookConsultationHref("ai") },
      },
      {
        id: "voice-first-booking",
        title: "Voice-first booking agents",
        description:
          "Natural-language scheduling for services like pandit bookings, home services, and appointments.",
        highlights: [
          "Telephony and WhatsApp entry points",
          "Calendar and payment handoffs",
          "Human escalation for edge cases",
        ],
        cta: { label: "Explore voice agents", href: bookConsultationHref("ai") },
      },
      {
        id: "trust-safety-layer",
        title: "Trust & safety intelligence layer",
        description:
          "Cross-product moderation, fraud signals, and quality scoring for marketplaces and communities.",
        highlights: [
          "Risk scoring with explainability",
          "Appeals and reviewer queues",
          "Shared policies across apps",
        ],
        cta: { label: "Discuss trust AI", href: bookConsultationHref("ai") },
      },
    ],
  },
] as const;
