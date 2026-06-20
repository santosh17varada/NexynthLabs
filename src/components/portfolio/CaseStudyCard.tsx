import { CaseStudyHeroMedia } from "@/components/case-studies/CaseStudyHeroMedia";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { getCaseStudyPath, getCaseStudyStatusLabel } from "@/config/portfolio";
import type { CaseStudy } from "@/types/portfolio";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const hero = study.images[0];
  const href = getCaseStudyPath(study.slug);
  const statusLabel = getCaseStudyStatusLabel(study);

  return (
    <Card as="article" className="flex h-full flex-col overflow-hidden p-0">
      {hero && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-primary/5">
          <CaseStudyHeroMedia src={hero.src} alt={hero.alt} embedded className="h-full" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-eyebrow font-semibold text-electric-blue">
            {study.industry}
          </p>
          <span className="rounded-full bg-electric-violet/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground">
            {statusLabel}
          </span>
        </div>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          <Link href={href} className="transition-colors hover:text-electric-violet">
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
        {study.businessValue[0] && (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            <span className="font-medium text-foreground">Business value: </span>
            {study.businessValue[0]}
          </p>
        )}
        {study.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {study.technologies.slice(0, 3).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
            {study.technologies.length > 3 && (
              <li className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted">
                +{study.technologies.length - 3} more
              </li>
            )}
          </ul>
        )}
        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          {study.cta.primary.label.includes("Visit")
            ? "Read case study →"
            : `${study.cta.primary.label} →`}
        </Link>
      </div>
    </Card>
  );
}
