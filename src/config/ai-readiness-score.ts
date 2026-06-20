import { brandName } from "@/config/site-values";
import type { AiReadinessQuestion, AiReadinessTier } from "@/types/ai-readiness-score";

export const aiReadinessTierLabels: Record<AiReadinessTier, string> = {
  beginner: "Beginner",
  emerging: "Emerging",
  ready: "Ready",
  advanced: "Advanced",
} as const;

export const aiReadinessPageCopy = {
  hero: {
    eyebrow: "AI readiness",
    title: "AI Readiness Score",
    description: `A 10-question self-assessment for teams exploring AI with ${brandName}. Get an instant tier — Beginner, Emerging, Ready, or Advanced — and optional follow-up from our team.`,
  },
  formTitle: "Your details",
  formNote: "Name and email are required. We use your score to tailor follow-up — no automated sales spam.",
  questionsTitle: "Answer honestly",
  questionsNote: "Each question uses a 1–4 scale (1 = not yet, 4 = strongly in place).",
  submitLabel: "See my score",
  backendNote:
    "If lead storage is temporarily unavailable, your score still displays on this page. Results may not be saved until the server accepts submissions.",
} as const;

export const aiReadinessTierDescriptions: Record<
  AiReadinessTier,
  { summary: string; nextSteps: readonly string[] }
> = {
  beginner: {
    summary:
      "AI is early on your roadmap. Focus on one measurable workflow, data access, and executive alignment before scaling spend.",
    nextSteps: [
      "Document a single high-friction workflow to automate",
      "Review the AI Showcase for practical use cases",
      "Book a discovery conversation when you have a clear outcome in mind",
    ],
  },
  emerging: {
    summary:
      "Foundations are forming — pilots, data, or sponsorship exist but production guardrails and KPIs need strengthening.",
    nextSteps: [
      "Define human-in-the-loop escalation for any customer-facing AI",
      "Run a time-boxed pilot with eval cases before wider rollout",
      "Align privacy review with your counsel before production data use",
    ],
  },
  ready: {
    summary:
      "Your organisation shows solid readiness for phased AI delivery — integrations, governance, and measurement are largely in place.",
    nextSteps: [
      "Prioritise one production use case with clear ROI",
      "Instrument cost and quality metrics from day one",
      "Consider agent patterns with audit logs and tool boundaries",
    ],
  },
  advanced: {
    summary:
      "Strong AI operating practices — suitable for broader automation, agentic workflows, and platform investments with discipline.",
    nextSteps: [
      "Expand successful pilots with shared platform components",
      "Share learnings across product and ops teams",
      "Partner on vertical use cases in spiritual tech or enterprise automation",
    ],
  },
} as const;

/**
 * Score thresholds (inclusive min, exclusive max except last tier).
 * 10 questions × 1–4 points → 10–40 total.
 */
export const aiReadinessTierThresholds: readonly {
  tier: AiReadinessTier;
  minScore: number;
  maxScore: number;
}[] = [
  { tier: "beginner", minScore: 10, maxScore: 17 },
  { tier: "emerging", minScore: 17, maxScore: 24 },
  { tier: "ready", minScore: 24, maxScore: 32 },
  { tier: "advanced", minScore: 32, maxScore: 41 },
] as const;

export const aiReadinessQuestions: readonly AiReadinessQuestion[] = [
  {
    id: "q1-outcomes",
    prompt: "We tie AI initiatives to documented business outcomes (not hype demos).",
    options: [
      { value: 1, label: "Not yet" },
      { value: 2, label: "Discussed informally" },
      { value: 3, label: "Documented for some projects" },
      { value: 4, label: "Standard for new AI work" },
    ],
  },
  {
    id: "q2-data",
    prompt: "Teams can access relevant data, docs, or knowledge bases for AI projects.",
    options: [
      { value: 1, label: "Mostly siloed or unavailable" },
      { value: 2, label: "Partial access with manual effort" },
      { value: 3, label: "Centralised for key domains" },
      { value: 4, label: "API-ready and well governed" },
    ],
  },
  {
    id: "q3-sponsorship",
    prompt: "Executive or leadership sponsorship exists for AI experimentation.",
    options: [
      { value: 1, label: "No sponsorship" },
      { value: 2, label: "Individual champion only" },
      { value: 3, label: "Department-level support" },
      { value: 4, label: "Organisation-level mandate" },
    ],
  },
  {
    id: "q4-experience",
    prompt: "Engineering or ops staff have hands-on experience with LLMs or automation tools.",
    options: [
      { value: 1, label: "No experience" },
      { value: 2, label: "Ad hoc experiments" },
      { value: 3, label: "Successful internal pilots" },
      { value: 4, label: "Production experience" },
    ],
  },
  {
    id: "q5-human-loop",
    prompt: "Human review and escalation paths are defined for AI-assisted decisions.",
    options: [
      { value: 1, label: "Not considered" },
      { value: 2, label: "Informal review" },
      { value: 3, label: "Documented for pilots" },
      { value: 4, label: "Enforced in production" },
    ],
  },
  {
    id: "q6-kpis",
    prompt: "We measure AI initiatives with clear KPIs (time saved, quality, revenue, etc.).",
    options: [
      { value: 1, label: "No KPIs" },
      { value: 2, label: "Anecdotal only" },
      { value: 3, label: "KPIs for pilots" },
      { value: 4, label: "KPIs tracked ongoing" },
    ],
  },
  {
    id: "q7-integrations",
    prompt: "Our systems expose APIs, webhooks, or integration layers suitable for AI tooling.",
    options: [
      { value: 1, label: "Mostly manual" },
      { value: 2, label: "Some APIs" },
      { value: 3, label: "Integration patterns in place" },
      { value: 4, label: "Mature integration fabric" },
    ],
  },
  {
    id: "q8-budget",
    prompt: "Budget or capacity is allocated for AI experimentation and iteration.",
    options: [
      { value: 1, label: "No budget" },
      { value: 2, label: "Ad hoc / unfunded" },
      { value: 3, label: "Pilot budget approved" },
      { value: 4, label: "Ongoing AI line item" },
    ],
  },
  {
    id: "q9-privacy",
    prompt: "Privacy, security, and compliance are part of AI planning (not afterthoughts).",
    options: [
      { value: 1, label: "Not addressed" },
      { value: 2, label: "Informal awareness" },
      { value: 3, label: "Checklist for projects" },
      { value: 4, label: "Legal/security engaged early" },
    ],
  },
  {
    id: "q10-evals",
    prompt: "We run evals, pilots, or staged rollouts before production AI features.",
    options: [
      { value: 1, label: "Ship directly to users" },
      { value: 2, label: "Informal testing" },
      { value: 3, label: "Structured pilots" },
      { value: 4, label: "Eval suites before launch" },
    ],
  },
] as const;

import type { LeadSource } from "@/types/lead";

export const AI_READINESS_LEAD_SOURCE: LeadSource = "ai_readiness_score";
