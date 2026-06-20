import { CaseStudyGetPanditVisual } from "@/components/case-studies/CaseStudyGetPanditVisual";
import { CaseStudyHeroMedia } from "@/components/case-studies/CaseStudyHeroMedia";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import { getCaseStudyPath, getCaseStudyStatusLabel } from "@/config/portfolio";
import { getCaseStudyExcerpt, getCaseStudyNarrative } from "@/lib/case-studies";
import { getPanditMockupVariant, isGetPanditPortfolioImage } from "@/lib/getpandit-visual";
import type { CaseStudy } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyFeaturedProps = {
  study: CaseStudy;
  className?: string;
};

function StoryPreview({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div className="rounded-ds-lg border border-glass-border bg-glass/80 p-4 backdrop-blur-sm sm:p-5">
      <p className="text-eyebrow text-electric-blue">{label}</p>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted sm:text-base">
        {children}
      </p>
    </div>
  );
}

export function CaseStudyFeatured({ study, className }: CaseStudyFeaturedProps) {
  const hero = study.images[0];
  const href = getCaseStudyPath(study.slug);
  const statusLabel = getCaseStudyStatusLabel(study);
  const narrative = getCaseStudyNarrative(study);
  const excerpt = getCaseStudyExcerpt(study);
  const { narrativeLabels } = caseStudiesPageCopy;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-ds-xl border border-glass-border bg-surface shadow-elevated transition-shadow hover:shadow-glow",
        className,
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        {hero ? (
          isGetPanditPortfolioImage(hero.src) ? (
            <CaseStudyGetPanditVisual
              variant={getPanditMockupVariant(hero.src)}
              caption={hero.caption}
              ariaLabel={hero.alt}
              embedded
              className="w-full shrink-0 overflow-hidden border-b border-border/60 lg:w-[42%] lg:max-w-[26rem] lg:border-b-0 lg:border-r lg:rounded-none lg:rounded-l-ds-xl"
            />
          ) : (
            <div className="w-full shrink-0 overflow-hidden border-b border-border/60 bg-primary/[0.03] lg:w-[42%] lg:max-w-[26rem] lg:border-b-0 lg:border-r">
              <CaseStudyHeroMedia src={hero.src} alt={hero.alt} embedded className="w-full" />
            </div>
          )
        ) : null}

        <div className="w-full p-5 sm:p-6 lg:w-[58%] lg:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-gradient-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-on-dark sm:text-xs">
              Featured
            </span>
            <span className="rounded-full bg-electric-violet/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
              {statusLabel}
            </span>
            <span className="text-xs font-medium text-muted">{study.industry}</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            <Link href={href} className="transition-colors hover:text-electric-blue">
              {study.projectName}
            </Link>
          </h3>
          <p className="mt-2 text-base font-medium text-electric-violet sm:text-lg">
            {study.title}
          </p>
          <p className="mt-3 text-sm text-muted">{study.customerName}</p>

          <div className="mt-5 grid gap-3">
            <StoryPreview label={narrativeLabels.challenge}>
              {excerpt.challenge}
            </StoryPreview>
            <StoryPreview label={narrativeLabels.outcome}>
              {excerpt.outcome}
            </StoryPreview>
          </div>

          {study.technologies.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {study.technologies.slice(0, 4).map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mobile-cta-stack mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Button href={href} variant="gradient" size="lg">
              Read full story
            </Button>
            <Button
              href={study.cta.primary.href}
              variant="outline"
              size="lg"
              external={study.cta.primary.external}
            >
              {study.cta.primary.label}
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted lg:hidden">
            {narrative.approach.summary.slice(0, 120)}…
          </p>
        </div>
      </div>
    </article>
  );
}
