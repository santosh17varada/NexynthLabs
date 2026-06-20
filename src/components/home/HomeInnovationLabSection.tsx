import Link from "next/link";
import { InnovationLabStatusBadge } from "@/components/innovation-lab/InnovationLabStatusBadge";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getHomeInnovationLabSections,
  getInnovationLabSectionPath,
  getSectionStatusCounts,
  homeInnovationLabCopy,
  homeInnovationLabStatusOrder,
  innovationLabStatusDescriptions,
} from "@/config/home-innovation-lab";
import type { InnovationLabSection } from "@/types/innovation-lab";

function StatusLegend() {
  const copy = homeInnovationLabCopy;

  return (
    <div className="mt-8 rounded-ds-lg border border-border/70 bg-surface/80 p-5 sm:p-6">
      <p className="text-eyebrow font-semibold text-electric-blue">
        {copy.statusLegendTitle}
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {homeInnovationLabStatusOrder.map((status) => (
          <li key={status} className="flex items-start gap-3">
            <InnovationLabStatusBadge status={status} />
            <span className="text-sm leading-relaxed text-muted">
              {innovationLabStatusDescriptions[status]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InnovationLabCategoryCard({ section }: { section: InnovationLabSection }) {
  const copy = homeInnovationLabCopy;
  const statusCounts = getSectionStatusCounts(section);
  const featuredItems = section.items.slice(0, copy.featuredItemLimit);
  const sectionHref = getInnovationLabSectionPath(section.id);
  const isFlagshipTrack = section.id === "getpandit-evolution";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-ds-lg border shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated hover:shadow-primary/5 ${
        isFlagshipTrack
          ? "border-electric-blue/40 bg-gradient-to-br from-surface via-surface to-electric-violet/[0.06]"
          : "border-border/70 bg-surface hover:border-electric-blue/35"
      }`}
    >
      <div
        className={`h-1 w-full ${isFlagshipTrack ? "bg-gradient-brand" : "bg-gradient-to-r from-primary/40 via-electric-violet/50 to-primary/40"}`}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-eyebrow font-semibold text-electric-blue">
              {section.eyebrow}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {section.title}
            </h3>
          </div>
          {isFlagshipTrack ? (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary-foreground">
              Flagship track
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {section.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {homeInnovationLabStatusOrder.map((status) =>
            statusCounts[status] > 0 ? (
              <span
                key={status}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 text-xs text-muted"
              >
                <InnovationLabStatusBadge status={status} />
                <span>{statusCounts[status]}</span>
              </span>
            ) : null,
          )}
        </div>

        <ul className="mt-5 flex-1 space-y-3 border-t border-border/60 pt-5">
          {featuredItems.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-border/60 bg-background/60 px-3 py-3 sm:px-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <InnovationLabStatusBadge status={item.status} />
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <Link
          href={sectionHref}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet group-hover:underline"
        >
          View {section.title.toLowerCase()} →
        </Link>
      </div>
    </article>
  );
}

export function HomeInnovationLabSection() {
  const copy = homeInnovationLabCopy;
  const sections = getHomeInnovationLabSections();

  return (
    <HomeSectionShell id="innovation-lab" variant="default">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <StatusLegend />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className={section.id === "getpandit-evolution" ? "md:col-span-2" : undefined}
          >
            <InnovationLabCategoryCard section={section} />
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{copy.disclaimer}</p>

      <div className="mobile-cta-stack mt-8">
        <Button href={copy.cta.href} variant="gradient" size="lg">
          {copy.cta.label}
        </Button>
      </div>
    </HomeSectionShell>
  );
}
