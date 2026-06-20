import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroMockupStack } from "@/components/product-showcase/HeroMockupStack";
import {
  ecosystemSurfaceIcons,
  readinessStatusStyles,
  resolveEcosystemSurfaceStatus,
} from "@/config/product-showcase";
import type { ProductShowcaseDefinition } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type ProductShowcaseSectionProps = {
  definition: ProductShowcaseDefinition;
  showSectionHeading?: boolean;
  sectionTitle?: string;
};

function ReadinessBadge({ status, label }: { status: string; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ring-1 ring-inset sm:text-xs",
        readinessStatusStyles[status] ?? readinessStatusStyles.planned,
      )}
    >
      {label}
    </span>
  );
}

export function ProductShowcaseSection({
  definition,
  showSectionHeading = true,
  sectionTitle,
}: ProductShowcaseSectionProps) {
  const headingTitle =
    sectionTitle ?? `Flagship product: ${definition.title}`;

  return (
    <div className="space-y-8 lg:space-y-14">
      {showSectionHeading ? (
        <SectionHeading
          eyebrow={definition.badge}
          title={headingTitle}
          description={definition.domainNote}
        />
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              {definition.badge}
            </span>
            {definition.mockup.urlBar ? (
              <span className="max-w-full truncate rounded-full border border-border/70 bg-surface px-3 py-1 text-xs font-semibold text-muted">
                <span className="sm:hidden">Live product</span>
                <span className="hidden sm:inline">Live on {definition.mockup.urlBar}</span>
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:mt-5 sm:text-3xl lg:text-4xl">
            {definition.title}
          </h3>
          <p className="mt-2 text-base font-medium text-electric-violet sm:text-lg">{definition.tagline}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {definition.summary}
          </p>

          <div className="mobile-cta-stack mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Button href={definition.ctas.explore.href} variant="gradient" size="lg">
              {definition.ctas.explore.label}
            </Button>
            {definition.ctas.partner ? (
              <Button href={definition.ctas.partner.href} variant="outline" size="lg">
                {definition.ctas.partner.label}
              </Button>
            ) : null}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted">{definition.domainNote}</p>
        </div>

        <HeroMockupStack
          productId={definition.productId}
          mockup={definition.mockup}
          overlay={definition.heroOverlay}
        />
      </div>

      <div>
        <SectionHeading
          eyebrow="Surfaces"
          title={definition.ecosystemTitle}
          description={definition.ecosystemDescription}
        />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
          {definition.ecosystemSurfaces.map((surface) => {
            const { status, statusLabel } = resolveEcosystemSurfaceStatus(
              definition.productId,
              surface.metricId,
            );
            return (
              <Card
                key={surface.id}
                as="article"
                className="relative overflow-hidden border-border/70 p-4 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-bold text-primary"
                    aria-hidden="true"
                  >
                    {ecosystemSurfaceIcons[surface.id] ?? surface.label.slice(0, 3)}
                  </span>
                  <ReadinessBadge status={status} label={statusLabel} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">{surface.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{surface.description}</p>
                <p className="mt-4 text-xs font-medium text-muted">{statusLabel}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Readiness"
          title={definition.readinessTitle}
          description={definition.readinessDescription}
        />
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
          {definition.readinessMetrics.map((metric) => (
            <Card
              key={metric.id}
              as="article"
              className="flex h-full flex-col border-border/70 p-4 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h4 className="text-base font-semibold text-foreground sm:text-lg">
                  {metric.title}
                </h4>
                <ReadinessBadge status={metric.status} label={metric.statusLabel} />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-6 rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-muted">
          {definition.disclaimer}
        </p>
      </div>
    </div>
  );
}
