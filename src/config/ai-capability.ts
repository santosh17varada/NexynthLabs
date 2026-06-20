import { brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";

export type AiArchitectureVariant =
  | "hero-stack"
  | "strategy"
  | "agentic"
  | "workflow"
  | "integrations"
  | "llm-platform"
  | "assistants"
  | "retrieval"
  | "enterprise"
  | "governance";

export type AiCapabilityHighlight = {
  id: string;
  title: string;
  description: string;
};

export type AiCapabilityPillar = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  highlights: readonly AiCapabilityHighlight[];
  architecture: AiArchitectureVariant;
  cta?: { label: string; href: string };
};

export const aiCapabilityCopy = {
  hero: {
    eyebrow: "AI in production",
    title: "AI systems built to ship",
    description:
      "Beyond prototypes. Real AI systems solving real business problems.",
    primaryCta: { label: "Book AI consultation", href: bookConsultationHref("ai") },
    secondaryCta: { label: "AI Readiness Score", href: "/ai-readiness-score" },
    tertiaryCta: { label: "View AI showcase", href: "/ai-showcase" },
  },
  strategy: {
    eyebrow: "AI strategy",
    title: "From assessment to production — with clear phases",
    description:
      "We align AI initiatives to business outcomes before writing prompts or picking models. Every engagement starts with workflow mapping, risk boundaries, and a phased delivery plan.",
    phases: [
      {
        id: "discover",
        step: "01",
        title: "Discover & prioritize",
        description:
          "Map workflows, data access, and success metrics. Identify quick wins versus platform investments.",
      },
      {
        id: "design",
        step: "02",
        title: "Design & prototype",
        description:
          "Architecture for models, retrieval, tools, and human-in-the-loop checkpoints — with eval criteria defined early.",
      },
      {
        id: "deliver",
        step: "03",
        title: "Deliver & govern",
        description:
          "Ship to staging and production with monitoring, cost controls, and documentation your team can own.",
      },
    ],
    architecture: "strategy" as const,
  },
  pillars: [
    {
      id: "agentic-ai",
      eyebrow: "Agentic AI",
      title: "Multi-step agents that plan, call tools, and stay in scope",
      description:
        "Agentic workflows for operations, research, and customer journeys — with tool permissions, approval gates, and reasoning traces teams can audit.",
      bullets: [
        "Tool-calling with scoped credentials",
        "Human approval on sensitive actions",
        "Step traces for debugging and compliance",
        "Fallbacks when confidence is low",
      ],
      highlights: [
        {
          id: "ops-copilot",
          title: "Operations copilot",
          description: "Query internal systems, draft updates, and open tickets with role-based limits.",
        },
        {
          id: "research-agent",
          title: "Research agent",
          description: "Synthesize sources with citations and configurable allowlists.",
        },
        {
          id: "onboarding-agent",
          title: "Onboarding agent",
          description: "Guide users through setup with persistent progress and human handoff.",
        },
      ],
      architecture: "agentic",
      cta: { label: "Explore agentic AI", href: bookConsultationHref("ai") },
    },
    {
      id: "workflow-automation",
      eyebrow: "Workflow automation",
      title: "Intelligent automation beyond brittle rules",
      description:
        "Combine deterministic triggers with model-assisted classification — for intake, routing, approvals, and notifications across ops teams.",
      bullets: [
        "Event and schedule-driven automations",
        "Document extraction to structured fields",
        "Exception queues with confidence scoring",
        "Audit logs for compliance-sensitive flows",
      ],
      highlights: [
        {
          id: "intake-routing",
          title: "Smart intake routing",
          description: "Classify inbound requests and route to the right queue automatically.",
        },
        {
          id: "doc-processing",
          title: "Document processing",
          description: "Extract fields from PDFs and forms with human review on low confidence.",
        },
        {
          id: "sla-escalation",
          title: "SLA escalations",
          description: "Remind owners and escalate when milestones slip — without manual chasing.",
        },
      ],
      architecture: "workflow",
      cta: { label: "Automate a workflow", href: bookConsultationHref("ai") },
    },
    {
      id: "ai-integrations",
      eyebrow: "AI integrations",
      title: "Embed intelligence in web, mobile, and backend surfaces",
      description:
        "Unified gateways for models, messaging, CRM, and internal APIs — so product teams ship AI features without rewiring every client.",
      bullets: [
        "Next.js and React copilot widgets",
        "Mobile cloud-assisted features",
        "Webhooks and API orchestration",
        "Provider swap without client rewrites",
      ],
      highlights: [
        {
          id: "web-embed",
          title: "Web embeds",
          description: "SSR-safe assistants, command palettes, and contextual help panels.",
        },
        {
          id: "mobile-ai",
          title: "Mobile AI",
          description: "Voice, vision, and smart forms with offline-friendly fallbacks.",
        },
        {
          id: "api-gateway",
          title: "AI gateway",
          description: "Rate limits, key rotation, and unified logging across providers.",
        },
      ],
      architecture: "integrations",
      cta: { label: "Plan integrations", href: "/contact?service=ai-solutions" },
    },
    {
      id: "llm-platforms",
      eyebrow: "LLM platforms",
      title: "Model layers with evals, routing, and cost control",
      description:
        "Platform thinking for LLM features — prompt management, model routing, latency budgets, and evaluation harnesses before scale.",
      bullets: [
        "Prompt and version management patterns",
        "Model routing by task and cost tier",
        "Eval suites for regression detection",
        "Token budgeting and caching strategies",
      ],
      highlights: [
        {
          id: "multi-model",
          title: "Multi-model routing",
          description: "Route tasks to the right model tier with fallbacks and timeouts.",
        },
        {
          id: "eval-harness",
          title: "Eval harness",
          description: "Golden datasets and automated checks before production promotion.",
        },
        {
          id: "cost-controls",
          title: "Cost controls",
          description: "Per-tenant budgets, caching, and batch where latency allows.",
        },
      ],
      architecture: "llm-platform",
      cta: { label: "Design LLM platform", href: bookConsultationHref("ai") },
    },
    {
      id: "ai-assistants",
      eyebrow: "AI assistants",
      title: "Assistants that respect context, tone, and escalation",
      description:
        "Customer-facing and internal assistants with session memory, policy alignment, and clear paths to human support — not unbounded chatbots.",
      bullets: [
        "Retrieval over approved knowledge bases",
        "Confidence thresholds before auto-reply",
        "Brand tone and policy guardrails",
        "Ticket creation and human handoff",
      ],
      highlights: [
        {
          id: "support-deflection",
          title: "Support deflection",
          description: "Answer FAQs from help docs with fallback to human agents.",
        },
        {
          id: "agent-assist",
          title: "Agent assist",
          description: "Suggest replies and summarize threads while humans stay in control.",
        },
        {
          id: "multilingual",
          title: "Multilingual readiness",
          description: "Hindi, English, and regional language patterns with glossary control.",
        },
      ],
      architecture: "assistants",
      cta: { label: "Design an assistant", href: bookConsultationHref("ai") },
    },
    {
      id: "retrieval-systems",
      eyebrow: "Retrieval systems",
      title: "RAG pipelines with permissioned, fresh context",
      description:
        "Embeddings, chunking strategies, and vector stores wired to your data boundaries — so models answer from sources teams trust.",
      bullets: [
        "Chunking and metadata strategies",
        "Vector stores and hybrid search",
        "PII boundaries and access control",
        "Freshness monitoring and re-indexing",
      ],
      highlights: [
        {
          id: "hybrid-search",
          title: "Hybrid search",
          description: "Combine keyword and semantic retrieval for higher precision.",
        },
        {
          id: "permissioned-rag",
          title: "Permissioned RAG",
          description: "Scope retrieval to user roles and document classifications.",
        },
        {
          id: "quality-monitors",
          title: "Quality monitors",
          description: "Track drift, stale indexes, and citation coverage over time.",
        },
      ],
      architecture: "retrieval",
      cta: { label: "Review retrieval design", href: bookConsultationHref("ai") },
    },
    {
      id: "enterprise-ai",
      eyebrow: "Enterprise AI",
      title: "AI for regulated, multi-team environments",
      description:
        "Tenant isolation, SSO-ready patterns, observability, and deployment models suited to enterprises — described as architecture readiness, not certifications.",
      bullets: [
        "Environment separation (dev/stage/prod)",
        "Tenant-scoped data and prompts",
        "Centralized logging and audit trails",
        "On-prem or VPC deployment options",
      ],
      highlights: [
        {
          id: "multi-tenant",
          title: "Multi-tenant patterns",
          description: "Isolate customer data, prompts, and retrieval indexes per tenant.",
        },
        {
          id: "observability",
          title: "Observability",
          description: "Trace requests, tool calls, and model outcomes for ops teams.",
        },
        {
          id: "deployment",
          title: "Deployment flexibility",
          description: "Cloud-native defaults with paths for private networking when required.",
        },
      ],
      architecture: "enterprise",
      cta: { label: "Discuss enterprise AI", href: "/request-proposal" },
    },
    {
      id: "ai-governance",
      eyebrow: "AI governance",
      title: "Guardrails, policy, and human oversight by design",
      description:
        "Governance is not a slide — it is escalation paths, allowlists, eval gates, and documentation so teams know what the system can and cannot do.",
      bullets: [
        "Policy-aligned prompts and outputs",
        "Human-in-the-loop on high-risk actions",
        "Allowlists for tools and data sources",
        "Incident playbooks and rollback paths",
      ],
      highlights: [
        {
          id: "guardrails",
          title: "Output guardrails",
          description: "Block, rewrite, or escalate responses that violate policy.",
        },
        {
          id: "access-control",
          title: "Access control",
          description: "Role-based limits on agents, tools, and retrieved documents.",
        },
        {
          id: "eval-gates",
          title: "Eval gates",
          description: "Promotion criteria before features reach production traffic.",
        },
      ],
      architecture: "governance",
      cta: { label: "Review governance model", href: "/guides/ai-agent-guardrails-checklist" },
    },
  ] satisfies readonly AiCapabilityPillar[],
  whyNexynth: {
    eyebrow: "Why Nexynth AI",
    title: `Why teams choose ${brandName} for AI engineering`,
    description:
      "We combine product thinking, platform discipline, and honest readiness labels — so AI initiatives ship sustainably, not as one-off demos.",
    reasons: [
      {
        id: "outcome-first",
        title: "Outcome-first scoping",
        description: "Every use case ties to workflow impact — not novelty for its own sake.",
      },
      {
        id: "human-loop",
        title: "Human-in-the-loop",
        description: "Escalation and approval paths are designed in, not bolted on after incidents.",
      },
      {
        id: "platform-native",
        title: "Platform-native delivery",
        description: "Web, mobile, APIs, and data layers planned together from architecture review.",
      },
      {
        id: "honest-labels",
        title: "Honest readiness labels",
        description: "We describe what is live, in progress, or planned — without vanity metrics.",
      },
      {
        id: "india-context",
        title: "India-first context",
        description: "Language, trust, and domain nuance for devotional tech, marketplaces, and enterprise.",
      },
      {
        id: "long-term",
        title: "Long-term ownership",
        description: "Documentation and handoffs so your team can operate models and agents after launch.",
      },
    ],
  },
  finalCta: {
    title: "Ready to scope your next AI initiative?",
    description:
      "Share your workflows, data landscape, and timeline. We will propose a phased plan — from quick wins to agentic automation — without locking you into unused API spend.",
    primary: { label: "Book free consultation", href: bookConsultationHref("ai") },
    secondary: { label: "Try AI Readiness Score", href: "/ai-readiness-score" },
  },
  disclaimer:
    "Capabilities on this page describe engineering patterns and services — not live AI APIs on the corporate marketing site. Outcomes depend on data quality, scope, and team adoption.",
} as const;

export function getAiCapabilityPillar(id: string) {
  return aiCapabilityCopy.pillars.find((pillar) => pillar.id === id);
}
