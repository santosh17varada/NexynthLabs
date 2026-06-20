import type { ContentStatus } from "@/types/content";

export type CaseStudyStatus = ContentStatus;

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type CaseStudyCtaGroup = {
  primary: CaseStudyCta;
  secondary?: CaseStudyCta;
};

/** Narrative section — maps to CMS rich-text + optional bullet list. */
export type CaseStudyStorySection = {
  summary: string;
  bullets?: readonly string[];
};

/** Five-part storytelling template for case study detail pages. */
export type CaseStudyNarrative = {
  challenge: CaseStudyStorySection;
  approach: CaseStudyStorySection;
  architecture: CaseStudyStorySection;
  execution: CaseStudyStorySection;
  outcome: CaseStudyStorySection;
};

export type CaseStudyMetricStatus =
  | "live"
  | "ready"
  | "in-progress"
  | "planned"
  | "qualitative";

/** Outcome or readiness metric — not vanity KPIs unless verified. */
export type CaseStudyMetric = {
  id: string;
  label: string;
  value: string;
  description?: string;
  status?: CaseStudyMetricStatus;
};

export type CaseStudyQuote = {
  text: string;
  attribution: string;
  role?: string;
  image?: CaseStudyImage;
};

export type CaseStudy = {
  id: string;
  slug: string;
  projectName: string;
  customerName: string;
  industry: string;
  title: string;
  summary: string;
  /** @deprecated Prefer `narrative.challenge` — kept for CMS migration and admin previews. */
  problemStatement: string;
  /** @deprecated Prefer `narrative.approach` — kept for CMS migration and admin previews. */
  solution: string;
  technologies: readonly string[];
  /** @deprecated Prefer `narrative.outcome.bullets` — kept for CMS migration and cards. */
  businessValue: readonly string[];
  images: readonly CaseStudyImage[];
  status: CaseStudyStatus;
  /** Public-facing status on cards and detail (e.g. Live). Defaults to capitalized `status`. */
  statusLabel?: string;
  publishedAt: string;
  featured: boolean;
  cta: CaseStudyCtaGroup;
  /** Structured storytelling — primary source when present. */
  narrative?: CaseStudyNarrative;
  /** Optional outcome or readiness metrics. */
  metrics?: readonly CaseStudyMetric[];
  /** Optional pull quote — use real attribution only. */
  quote?: CaseStudyQuote;
};

export type CaseStudyNarrativeKey = keyof CaseStudyNarrative;
