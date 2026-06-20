import { brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";
import type { ClientSuccessStory } from "@/types/client-success";

export const clientSuccessPageCopy = {
  hero: {
    eyebrow: "Client success",
    title: "Anonymous outcomes from real delivery",
    description: `${brandName} shares anonymized engagement patterns — problem, approach, solution, and qualitative outcomes. No client names, logos, or fabricated performance metrics.`,
  },
  disclaimer:
    "Stories are anonymized composites or permission-scrubbed summaries for illustration. Outcomes describe delivery results in plain language — not audited KPIs, revenue figures, or percentage uplift claims.",
  footnote: "Edit stories in src/config/client-success.ts. For named product work, see Case Studies.",
  sectionLabels: {
    problem: "Problem",
    approach: "Approach",
    solution: "Solution",
    outcome: "Outcome",
    technologies: "Technologies",
  },
  closingCta: {
    title: "Facing a similar challenge?",
    description:
      "Share your context under NDA if needed. We will scope an honest phased plan — no inflated benchmarks.",
    primary: { label: "Book free consultation", href: bookConsultationHref() },
    secondary: { label: "Contact us", href: "/contact" },
  },
} as const;

export const clientSuccessStories: readonly ClientSuccessStory[] = [
  {
    id: "partner-onboarding",
    title: "Temple & vendor partner intake",
    segment: "Spiritual services · B2B partnerships (anonymized)",
    problem:
      "A growing devotional services network needed a consistent way to collect temple and vendor partner details, eligibility documents, and integration expectations — without exposing a half-built product login on the public marketing site.",
    approach:
      "Workshopped partner types, manual onboarding steps, and future self-service boundaries. Prioritized enquiry-only capture on the corporate domain with clear readiness labels until authenticated portals ship on product domains.",
    solution:
      "Config-driven partner readiness pages, structured enquiry forms with interest routing, and documentation that separates corporate marketing from GetPandit product authentication. Partner ops review enquiries in a single queue with source tagging.",
    outcomes: [
      "Single enquiry path for temple, vendor, and technology partners",
      "Readiness copy that avoids implying live partner logins before they exist",
      "Ops handoff fields standardized for faster qualification calls",
      "Architecture slots documented for future partner dashboards",
    ],
    technologies: [
      "Next.js · config-driven pages",
      "Lead capture API · source tagging",
      "Partner portal readiness (enquiry-only)",
      "WhatsApp click-to-chat hooks",
    ],
    cta: {
      label: "Partner enquiry",
      href: "/partners/portal#apply",
    },
    published: true,
  },
  {
    id: "corporate-lead-ops",
    title: "Corporate marketing lead operations",
    segment: "Professional services · inbound marketing (anonymized)",
    problem:
      "Multiple public forms — contact, consultation booking, AI readiness, and partner interest — risked fragmenting inbound leads across inboxes without a shared review workflow for a small ops team.",
    approach:
      "Mapped each public capture point to a normalized lead schema, defined honest disclaimers on self-assessment tools, and kept storage file-based for the corporate site until a managed database migration is justified.",
    solution:
      "Unified lead API with source normalization, staff-only admin review on the corporate site, and export paths for CRM handoff. Self-assessment tools label results as indicative tiers — not certifications.",
    outcomes: [
      "All major forms write to one reviewable lead store",
      "Source and topic fields preserved for prioritization",
      "No public login or multi-tenant CRM claims on the marketing site",
      "Clear migration notes for PostgreSQL when volume warrants it",
    ],
    technologies: [
      "Next.js App Router",
      "Signed admin sessions",
      "JSON lead store · export API",
      "Consultation & enquiry form variants",
    ],
    cta: {
      label: "Discuss lead workflows",
      href: bookConsultationHref("integrations"),
    },
    published: true,
  },
  {
    id: "ai-readiness-discovery",
    title: "AI readiness discovery for services teams",
    segment: "B2B services · automation discovery (anonymized)",
    problem:
      "Prospects asked for AI automation help but arrived with uneven understanding of data readiness, human oversight, and integration constraints — leading to misaligned scoping calls.",
    approach:
      "Designed a lightweight public self-assessment with tiered, non-certification results and optional lead capture. Emphasized human review and escalation in follow-up messaging rather than promising autonomous deployment.",
    solution:
      "Ten-question AI Readiness Score on the corporate site with client-side scoring, API persistence, and consultation CTAs tied to topic selection. Sales uses tiers to open honest conversations about guardrails and phased pilots.",
    outcomes: [
      "Shared vocabulary for readiness before paid discovery",
      "Tier labels explicitly marked indicative — not professional certification",
      "Consultation bookings include assessment context when provided",
      "No live agent APIs exposed on the marketing domain",
    ],
    technologies: [
      "React · TypeScript",
      "Client-side scoring · API persistence",
      "Book consultation integration",
      "Config-driven question bank",
    ],
    cta: {
      label: "Try AI Readiness Score",
      href: "/ai-readiness-score",
    },
    published: true,
  },
] as const;

export function getPublishedClientSuccessStories(): ClientSuccessStory[] {
  return clientSuccessStories.filter((story) => story.published);
}
