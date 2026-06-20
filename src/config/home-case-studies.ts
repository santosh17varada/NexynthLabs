import { flagshipProductName } from "@/config/site-values";
import { getCaseStudyBySlug, getFeaturedCaseStudies } from "@/config/portfolio";
import { getPublishedClientSuccessStories } from "@/config/client-success";
import type { CaseStudy } from "@/types/portfolio";
import type { ClientSuccessStory } from "@/types/client-success";

export const homeCaseStudiesCopy = {
  eyebrow: "Delivery stories",
  title: "Case studies & delivery stories",
  description:
    "Products launched, platforms modernized, and customer experiences transformed.",
  featuredLabel: "Featured case study",
  successStoriesTitle: "Success story highlights",
  successStoriesDescription:
    "Anonymized engagement summaries — illustrative patterns only, not audited KPIs or percentage uplift claims.",
  disclaimer:
    "Outcomes describe delivery and platform readiness in plain language. We do not publish client revenue, user totals, or unverified performance statistics on this site.",
  ctas: {
    caseStudies: { label: "View all case studies", href: "/case-studies" },
    clientSuccess: { label: "Client success stories", href: "/client-success" },
  },
  featuredCaseStudySlug: "getpandit",
  featuredSuccessStoryIds: ["partner-onboarding", "ai-readiness-discovery"] as const,
} as const;

export function getHomeFeaturedCaseStudy(): CaseStudy | undefined {
  const bySlug = getCaseStudyBySlug(homeCaseStudiesCopy.featuredCaseStudySlug);
  if (bySlug) return bySlug;

  return getFeaturedCaseStudies()[0];
}

export function getHomeFeaturedSuccessStories(): ClientSuccessStory[] {
  const published = getPublishedClientSuccessStories();
  const featured = homeCaseStudiesCopy.featuredSuccessStoryIds
    .map((id) => published.find((story) => story.id === id))
    .filter((story): story is ClientSuccessStory => story !== undefined);

  if (featured.length > 0) return featured;

  return published.slice(0, 2);
}

export const homeCaseStudyExcerpts: Record<
  string,
  { problem: string; solution: string; outcome: string }
> = {
  getpandit: {
    problem:
      "Families need reliable pandit discovery, clear pooja packages, and ceremony scheduling — generic appointment software does not reflect ritual context or the trust families expect.",
    solution: `${flagshipProductName} on getpandit.com — structured pandit profiles, pooja catalogs, calendar-aware scheduling, and architecture prepared for payment and messaging integrations, separate from the corporate site.`,
    outcome:
      "Dedicated live product domain with documented corporate separation — enabling independent releases, clearer SEO, and honest readiness labels instead of vanity metrics.",
  },
};

export const getPanditCaseStudyFeatureChips = [
  "Verified Pandits",
  "Pooja Catalog",
  "Smart Scheduling",
  "Payment Ready",
  "Mobile First",
] as const;

export function getCaseStudyPrimaryOutcome(study: CaseStudy): string {
  const excerpt = homeCaseStudyExcerpts[study.slug];
  if (excerpt) return excerpt.outcome;
  return study.businessValue[0] ?? study.summary;
}

export function getCaseStudyHomeExcerpt(study: CaseStudy) {
  const excerpt = homeCaseStudyExcerpts[study.slug];
  if (excerpt) return excerpt;

  return {
    problem: study.problemStatement,
    solution: study.solution,
    outcome: study.businessValue[0] ?? study.summary,
  };
}

export function getSuccessStoryPrimaryOutcome(story: ClientSuccessStory): string {
  return story.outcomes[0] ?? story.solution;
}
