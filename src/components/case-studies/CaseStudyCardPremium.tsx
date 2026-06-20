import { CaseStudyGetPanditVisual } from "@/components/case-studies/CaseStudyGetPanditVisual";
import { CaseStudyHeroMedia } from "@/components/case-studies/CaseStudyHeroMedia";
import Link from "next/link";
import { getCaseStudyPath, getCaseStudyStatusLabel } from "@/config/portfolio";
import { getCaseStudyExcerpt } from "@/lib/case-studies";
import { isGetPanditPortfolioImage, getPanditMockupVariant } from "@/lib/getpandit-visual";
import type { CaseStudy } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyCardPremiumProps = {
  study: CaseStudy;
  className?: string;
};

export function CaseStudyCardPremium({ study, className }: CaseStudyCardPremiumProps) {
  const hero = study.images[0];
  const href = getCaseStudyPath(study.slug);
  const statusLabel = getCaseStudyStatusLabel(study);
  const excerpt = getCaseStudyExcerpt(study);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-ds-xl border border-glass-border bg-glass/90 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-elevated",
        className,
      )}
    >
      {hero ? (
        isGetPanditPortfolioImage(hero.src) ? (
          <CaseStudyGetPanditVisual
            variant={getPanditMockupVariant(hero.src)}
            ariaLabel={hero.alt}
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <CaseStudyHeroMedia src={hero.src} alt={hero.alt} embedded className="aspect-[16/9]" />
        )
      ) : null}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-eyebrow text-electric-blue">{study.industry}</p>
          <span className="rounded-full bg-electric-violet/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground">
            {statusLabel}
          </span>
          {study.featured ? (
            <span className="rounded-full bg-gradient-brand-subtle px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground">
              Featured
            </span>
          ) : null}
        </div>

        <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          <Link href={href} className="transition-colors hover:text-electric-blue">
            {study.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">
          {study.projectName}
          <span className="text-muted/70"> · {study.customerName}</span>
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {study.summary}
        </p>

        <p className="mt-4 rounded-ds-md border border-border/50 bg-surface/80 px-3 py-2 text-sm text-muted">
          <span className="font-semibold text-foreground">Outcome: </span>
          <span className="line-clamp-2">{excerpt.outcome}</span>
        </p>

        {study.technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {study.technologies.slice(0, 3).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
            {study.technologies.length > 3 ? (
              <li className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted">
                +{study.technologies.length - 3}
              </li>
            ) : null}
          </ul>
        ) : null}

        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue group-hover:underline"
        >
          Read case study →
        </Link>
      </div>
    </article>
  );
}
