import type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudyNarrative,
  CaseStudyNarrativeKey,
  CaseStudyStorySection,
} from "@/types/portfolio";

export const CASE_STUDY_NARRATIVE_LABELS: Record<CaseStudyNarrativeKey, string> = {
  challenge: "Challenge",
  approach: "Approach",
  architecture: "Architecture",
  execution: "Execution",
  outcome: "Outcome",
};

export const CASE_STUDY_NARRATIVE_ORDER: readonly CaseStudyNarrativeKey[] = [
  "challenge",
  "approach",
  "architecture",
  "execution",
  "outcome",
];

export function getCaseStudyNarrative(study: CaseStudy): CaseStudyNarrative {
  if (study.narrative) {
    return study.narrative;
  }

  return {
    challenge: { summary: study.problemStatement },
    approach: { summary: study.solution },
    architecture: {
      summary:
        "Architecture details are documented in the full case study. Structured narrative sections can be added via CMS when available.",
      bullets: study.technologies.slice(0, 4),
    },
    execution: {
      summary:
        "Delivery followed phased releases with integration readiness labels — payment, messaging, and admin tooling scoped per milestone.",
    },
    outcome: {
      summary: study.businessValue[0] ?? study.summary,
      bullets: study.businessValue,
    },
  };
}

export function getCaseStudyNarrativeSection(
  study: CaseStudy,
  key: CaseStudyNarrativeKey,
): CaseStudyStorySection {
  return getCaseStudyNarrative(study)[key];
}

export function getCaseStudyMetrics(study: CaseStudy): CaseStudyMetric[] {
  return study.metrics ? [...study.metrics] : [];
}

export function getCaseStudyPrimaryMetric(study: CaseStudy): CaseStudyMetric | undefined {
  return study.metrics?.[0];
}

export function getCaseStudyExcerpt(study: CaseStudy): {
  challenge: string;
  outcome: string;
} {
  const narrative = getCaseStudyNarrative(study);
  return {
    challenge: narrative.challenge.summary,
    outcome: narrative.outcome.bullets?.[0] ?? narrative.outcome.summary,
  };
}
