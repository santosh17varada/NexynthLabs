import Link from "next/link";
import { RoadmapReadinessBadge } from "@/components/roadmap/RoadmapStatusBadge";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getRoadmapItemsByCategory,
  roadmapCategories,
  roadmapPageCopy,
  roadmapScopeLabels,
} from "@/config/roadmap";
import type { RoadmapCategory, RoadmapCategoryGroup } from "@/types/roadmap";
import { cn } from "@/lib/cn";

const categoryAccent: Record<RoadmapCategory, string> = {
  now: "border-electric-blue/40 bg-electric-blue/10 text-electric-blue",
  next: "border-primary/30 bg-primary/10 text-primary",
  future: "border-border bg-surface text-muted",
};

const categoryDot: Record<RoadmapCategory, string> = {
  now: "border-electric-blue bg-electric-blue shadow-[0_0_0_4px_rgba(59,130,246,0.15)]",
  next: "border-primary bg-primary shadow-[0_0_0_4px_rgba(30,58,95,0.12)]",
  future: "border-border bg-muted shadow-[0_0_0_4px_rgba(0,0,0,0.04)]",
};

function RoadmapTimelineItem({
  title,
  summary,
  scope,
  readiness,
  product,
  targetDate,
  links,
  category,
  isLast,
}: {
  title: string;
  summary: string;
  scope: keyof typeof roadmapScopeLabels;
  readiness: import("@/types/roadmap").RoadmapItemReadiness;
  product: string;
  targetDate?: string;
  links?: readonly { label: string; href: string; external?: boolean }[];
  category: RoadmapCategory;
  isLast: boolean;
}) {
  return (
    <li className="relative grid gap-4 pb-8 sm:grid-cols-[auto_1fr] sm:gap-6 sm:pb-10">
      <div className="flex flex-col items-center sm:pt-2">
        <span
          className={cn("z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2", categoryDot[category])}
          aria-hidden="true"
        />
        {!isLast ? (
          <span className="hidden w-px flex-1 bg-border sm:block" aria-hidden="true" />
        ) : null}
      </div>

      <Card as="article" variant="glass" padding="sm" className="min-w-0 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <RoadmapReadinessBadge readiness={readiness} />
          <span className="rounded-ds-full bg-electric-violet/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
            {product}
          </span>
          <span className="rounded-ds-full bg-surface px-2 py-0.5 text-xs font-medium text-muted">
            {roadmapScopeLabels[scope]}
          </span>
        </div>
        <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">{title}</h3>
        {targetDate ? (
          <p className="mt-1 text-xs font-medium text-electric-violet">Target: {targetDate}</p>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{summary}</p>
        {links && links.length > 0 ? (
          <div className="mt-4 flex flex-col gap-1">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                >
                  {link.label} →
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
                >
                  {link.label} →
                </Link>
              ),
            )}
          </div>
        ) : null}
      </Card>
    </li>
  );
}

function RoadmapCategoryLane({ group }: { group: RoadmapCategoryGroup }) {
  const items = getRoadmapItemsByCategory(group.category);

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      id={`roadmap-${group.category}`}
      className="scroll-mt-28"
      aria-labelledby={`roadmap-heading-${group.category}`}
    >
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span
            className={cn(
              "inline-flex rounded-ds-full border px-3 py-1 text-xs font-bold uppercase tracking-wider",
              categoryAccent[group.category],
            )}
          >
            {group.label}
          </span>
          <h2
            id={`roadmap-heading-${group.category}`}
            className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {group.label} on the roadmap
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {group.description}
          </p>
        </div>
        <p className="text-sm font-medium text-muted">
          {items.length} item{items.length === 1 ? "" : "s"}
        </p>
      </div>

      <ol className="relative">
        {items.map((item, index) => (
          <RoadmapTimelineItem
            key={item.id}
            title={item.title}
            summary={item.summary}
            scope={item.scope}
            readiness={item.readiness}
            product={item.product}
            targetDate={item.targetDate}
            links={item.links}
            category={group.category}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

export function RoadmapProductSpotlight() {
  const { productSpotlight } = roadmapPageCopy;

  return (
    <PageSection variant="muted" divider={false} containerClassName="py-10 sm:py-12">
      <div className="overflow-hidden rounded-ds-xl border border-electric-blue/20 bg-gradient-to-br from-electric-blue/5 via-surface to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow={productSpotlight.eyebrow}
          title={productSpotlight.title}
          description={productSpotlight.description}
        />
        <div className="mobile-cta-stack mt-6">
          <Button href={productSpotlight.cta.href} variant="gradient" size="lg">
            {productSpotlight.cta.label}
          </Button>
        </div>
      </div>
    </PageSection>
  );
}

export function RoadmapTimeline() {
  return (
    <PageSection variant="default" divider={false}>
      <div className="space-y-16 lg:space-y-20">
        {roadmapCategories.map((group, index) => (
          <div
            key={group.category}
            className={cn(index > 0 && "border-t border-border/60 pt-16 lg:pt-20")}
          >
            <RoadmapCategoryLane group={group} />
          </div>
        ))}
      </div>
    </PageSection>
  );
}

export function RoadmapCategoryNav({ counts }: { counts: Record<RoadmapCategory, number> }) {
  return (
    <nav
      aria-label="Roadmap categories"
      className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      {roadmapCategories.map((group) => {
        const count = counts[group.category];
        if (count === 0) return null;

        return (
          <a
            key={group.category}
            href={`#roadmap-${group.category}`}
            className={cn(
              "inline-flex min-h-11 items-center rounded-ds-full border px-4 text-sm font-medium transition-colors",
              categoryAccent[group.category],
              "hover:opacity-90",
            )}
          >
            {group.label} ({count})
          </a>
        );
      })}
    </nav>
  );
}
