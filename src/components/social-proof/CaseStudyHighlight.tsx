import { CaseStudyHeroMedia } from "@/components/case-studies/CaseStudyHeroMedia";
import Link from "next/link";
import type { CaseStudyHighlight } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type CaseStudyHighlightCardProps = {
  highlight: CaseStudyHighlight;
  className?: string;
};

function StoryPillar({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/70 p-3 sm:p-4">
      <p className="text-eyebrow font-semibold text-electric-blue">{label}</p>
      <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function CaseStudyHighlightCard({ highlight, className }: CaseStudyHighlightCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-ds-xl border border-border/70 bg-surface shadow-soft transition-shadow hover:shadow-elevated",
        className,
      )}
    >
      <div className="grid lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start">
        {highlight.image ? (
          <div className="h-fit self-start overflow-hidden border-b border-border/60 bg-primary/[0.03] lg:border-b-0 lg:border-r">
            <CaseStudyHeroMedia
              src={highlight.image.src}
              alt={highlight.image.alt}
              embedded
              className="w-full"
            />
          </div>
        ) : null}

        <div className="p-5 sm:p-6 lg:p-7">
          <div className="flex flex-wrap items-center gap-2">
            {highlight.featured ? (
              <span className="rounded-full bg-primary px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary-foreground sm:text-xs">
                Featured
              </span>
            ) : null}
            <span className="rounded-full bg-electric-violet/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
              {highlight.statusLabel}
            </span>
            {highlight.industry ? (
              <span className="text-xs font-medium text-muted">{highlight.industry}</span>
            ) : null}
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
            {highlight.projectName}
          </h3>
          <p className="mt-1.5 text-base font-medium text-electric-violet sm:text-lg">
            {highlight.title}
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{highlight.summary}</p>

          {highlight.pillars && highlight.pillars.length > 0 ? (
            <div className="mt-5 grid gap-3">
              {highlight.pillars.map((pillar) => (
                <StoryPillar key={pillar.label} label={pillar.label} text={pillar.text} />
              ))}
            </div>
          ) : null}

          <div className="mt-5">
            <Link
              href={highlight.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

type CaseStudyHighlightGridProps = {
  highlights: readonly CaseStudyHighlight[];
  className?: string;
};

export function CaseStudyHighlightGrid({ highlights, className }: CaseStudyHighlightGridProps) {
  if (highlights.length === 0) return null;

  return (
    <div className={cn("space-y-8", className)}>
      {highlights.map((highlight) => (
        <CaseStudyHighlightCard key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}
