import type { ReactNode } from "react";
import { CaseStudyHeroMedia } from "@/components/case-studies/CaseStudyHeroMedia";
import Link from "next/link";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getCaseStudyHomeExcerpt,
  getHomeFeaturedCaseStudy,
  getHomeFeaturedSuccessStories,
  getSuccessStoryPrimaryOutcome,
  homeCaseStudiesCopy,
} from "@/config/home-case-studies";
import { getCaseStudyPath, getCaseStudyStatusLabel } from "@/config/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import type { ClientSuccessStory } from "@/types/client-success";

function StoryPillar({
  label,
  children,
  compact = false,
}: {
  label: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/70 p-3 sm:p-4">
      <p className="text-eyebrow font-semibold text-electric-blue">{label}</p>
      <p
        className={`mt-1.5 text-sm leading-relaxed text-muted sm:text-base ${compact ? "line-clamp-3" : "line-clamp-4"}`}
      >
        {children}
      </p>
    </div>
  );
}

function FeaturedCaseStudyCard({ study }: { study: CaseStudy }) {
  const hero = study.images[0];
  const href = getCaseStudyPath(study.slug);
  const excerpt = getCaseStudyHomeExcerpt(study);

  return (
    <article className="overflow-hidden rounded-ds-lg border border-border/70 bg-surface shadow-soft transition-shadow hover:shadow-elevated hover:shadow-primary/5 sm:rounded-ds-xl">
      <div className="flex flex-col lg:flex-row lg:items-start">
        {hero ? (
          <div className="w-full shrink-0 overflow-hidden border-b border-border/60 bg-primary/[0.04] lg:w-[42%] lg:max-w-[26rem] lg:border-b-0 lg:border-r">
            <CaseStudyHeroMedia
              src={hero.src}
              alt={hero.alt}
              embedded
              className="w-full"
            />
          </div>
        ) : null}

        <div className="w-full p-5 sm:p-6 lg:w-[58%] lg:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary-foreground sm:text-xs">
              Flagship
            </span>
            <span className="rounded-full bg-electric-violet/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
              {getCaseStudyStatusLabel(study)}
            </span>
            <span className="text-xs font-medium text-muted">{study.industry}</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {study.projectName}
          </h3>
          <p className="mt-2 text-base font-medium text-electric-violet sm:text-lg">{study.title}</p>

          <div className="mt-5 grid gap-3">
            <StoryPillar label="Problem">{excerpt.problem}</StoryPillar>
            <StoryPillar label="Solution">{excerpt.solution}</StoryPillar>
            <StoryPillar label="Outcome">{excerpt.outcome}</StoryPillar>
          </div>

          <div className="mobile-cta-stack mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Button href={href} variant="gradient" size="lg">
              Read case study
            </Button>
            <Button href={study.cta.primary.href} variant="outline" size="lg" external={study.cta.primary.external}>
              {study.cta.primary.label}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SuccessStoryCard({ story }: { story: ClientSuccessStory }) {
  const outcome = getSuccessStoryPrimaryOutcome(story);

  return (
    <article className="group flex h-full flex-col rounded-ds-lg border border-border/70 bg-surface p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-electric-blue/35 hover:shadow-elevated sm:p-6">
      <p className="text-eyebrow font-semibold text-muted">{story.segment}</p>
      <h4 className="mt-3 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        {story.title}
      </h4>

      <div className="mt-5 space-y-4">
        <StoryPillar label="Problem" compact>
          {story.problem}
        </StoryPillar>
        <StoryPillar label="Solution" compact>
          {story.solution}
        </StoryPillar>
        <StoryPillar label="Outcome">{outcome}</StoryPillar>
      </div>

      {story.cta ? (
        <Link
          href={story.cta.href}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet group-hover:underline"
        >
          {story.cta.label} →
        </Link>
      ) : null}
    </article>
  );
}

export function HomeCaseStudiesSection() {
  const copy = homeCaseStudiesCopy;
  const featuredStudy = getHomeFeaturedCaseStudy();
  const successStories = getHomeFeaturedSuccessStories();

  if (!featuredStudy && successStories.length === 0) {
    return null;
  }

  return (
    <HomeSectionShell id="case-studies" variant="surface">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      {featuredStudy ? (
        <div className="mt-10 lg:mt-12">
          <p className="mb-4 text-eyebrow font-semibold text-electric-blue">
            {copy.featuredLabel}
          </p>
          <FeaturedCaseStudyCard study={featuredStudy} />
        </div>
      ) : null}

      {successStories.length > 0 ? (
        <div className="mt-12 lg:mt-16">
          <SectionHeading
            title={copy.successStoriesTitle}
            description={copy.successStoriesDescription}
          />
          <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      ) : null}

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{copy.disclaimer}</p>

      <div className="mobile-cta-stack mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
        <Button href={copy.ctas.caseStudies.href} variant="gradient" size="lg">
          {copy.ctas.caseStudies.label}
        </Button>
        <Button href={copy.ctas.clientSuccess.href} variant="outline" size="lg">
          {copy.ctas.clientSuccess.label}
        </Button>
      </div>
    </HomeSectionShell>
  );
}
