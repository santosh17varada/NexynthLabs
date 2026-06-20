import { brandName } from "@/config/site-values";
import { bookConsultationHref } from "@/config/book-consultation";

export const caseStudiesPageCopy = {
  hero: {
    eyebrow: "Case studies",
    title: "How we ship platforms that earn trust",
    description: `Published delivery stories from ${brandName} — the challenge, our approach, architecture decisions, execution, and honest outcomes. No fabricated metrics or vanity uplift claims.`,
    primaryCta: { label: "Discuss your project", href: "/contact" },
    secondaryCta: { label: "Book consultation", href: bookConsultationHref() },
  },
  featured: {
    eyebrow: "Featured",
    title: "Flagship work & deep dives",
    description:
      "Long-form narratives on product platforms and integration-heavy delivery — starting with our devotional booking flagship.",
  },
  allStudies: {
    eyebrow: "All studies",
    title: "Published case studies",
    description:
      "Only published studies appear here. Product platforms such as GetPandit run on their own domains; these pages explain the engineering behind them.",
  },
  narrativeLabels: {
    challenge: "Challenge",
    approach: "Approach",
    architecture: "Architecture",
    execution: "Execution",
    outcome: "Outcome",
  },
  metaLabels: {
    project: "Project",
    customer: "Customer",
    industry: "Industry",
    status: "Status",
    technologies: "Technologies",
  },
  metrics: {
    eyebrow: "Outcomes",
    title: "Readiness & delivery signals",
    disclaimer:
      "Metrics describe platform readiness and documented delivery — not unaudited revenue, user totals, or percentage uplift unless explicitly verified with the client.",
  },
  disclaimer:
    "Case studies describe engineering and product outcomes in plain language. Quotes and metrics use honest attribution — placeholder or illustrative content is labeled accordingly.",
  finalCta: {
    title: "Want outcomes like these?",
    description:
      "Share your industry, problem statement, and integrations. We will scope an honest delivery plan with clear readiness labels.",
    primary: { label: "Book consultation", href: bookConsultationHref() },
    secondary: { label: "Client success stories", href: "/client-success" },
  },
} as const;

/** @deprecated Use caseStudiesPageCopy — kept for portfolio.ts re-export compatibility. */
export const legacyCaseStudiesPageCopy = {
  hero: caseStudiesPageCopy.hero,
  listIntro: caseStudiesPageCopy.allStudies.description,
  detailLabels: {
    project: caseStudiesPageCopy.metaLabels.project,
    customer: caseStudiesPageCopy.metaLabels.customer,
    industry: caseStudiesPageCopy.metaLabels.industry,
    problem: caseStudiesPageCopy.narrativeLabels.challenge,
    solution: caseStudiesPageCopy.narrativeLabels.approach,
    technologies: caseStudiesPageCopy.metaLabels.technologies,
    businessValue: caseStudiesPageCopy.narrativeLabels.outcome,
    status: caseStudiesPageCopy.metaLabels.status,
  },
} as const;

export const caseStudyStorySteps = [
  { step: "01", key: "challenge" as const },
  { step: "02", key: "approach" as const },
  { step: "03", key: "architecture" as const },
  { step: "04", key: "execution" as const },
  { step: "05", key: "outcome" as const },
] as const;

export const caseStudyMetricStatusLabels = {
  live: "Live",
  ready: "Integration-ready",
  "in-progress": "In progress",
  planned: "Planned",
  qualitative: "Qualitative",
} as const;
