import { caseStudyMetricStatusLabels } from "@/config/case-studies-page";
import type { ProductSuccessMetric, ProductSuccessMetricStatus } from "@/types/social-proof";
import { cn } from "@/lib/cn";

const statusStyles: Record<ProductSuccessMetricStatus, string> = {
  live: "bg-electric-cyan/15 text-foreground border-electric-cyan/25",
  ready: "bg-electric-blue/10 text-foreground border-electric-blue/20",
  "in-progress": "bg-amber-500/15 text-foreground border-amber-500/25",
  planned: "bg-surface text-muted border-border/70",
  qualitative: "bg-electric-violet/10 text-foreground border-electric-violet/20",
};

type ProductSuccessMetricCardProps = {
  metric: ProductSuccessMetric;
};

export function ProductSuccessMetricCard({ metric }: ProductSuccessMetricCardProps) {
  return (
    <article className="flex h-full flex-col rounded-ds-lg border border-glass-border bg-glass/90 p-5 shadow-soft backdrop-blur-sm sm:p-6">
      {metric.status ? (
        <span
          className={cn(
            "inline-flex w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold",
            statusStyles[metric.status],
          )}
        >
          {caseStudyMetricStatusLabels[metric.status]}
        </span>
      ) : null}
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
        {metric.label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {metric.value}
      </p>
      {metric.description ? (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {metric.description}
        </p>
      ) : null}
    </article>
  );
}

type ProductSuccessMetricsProps = {
  metrics: readonly ProductSuccessMetric[];
  eyebrow?: string;
  title?: string;
  showHeading?: boolean;
  showDisclaimer?: boolean;
  disclaimer?: string;
  className?: string;
};

export function ProductSuccessMetrics({
  metrics,
  eyebrow = "Outcomes",
  title = "Readiness & delivery signals",
  showHeading = true,
  showDisclaimer = true,
  disclaimer,
  className,
}: ProductSuccessMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <section className={cn("space-y-6", className)} aria-labelledby="product-success-metrics">
      {showHeading ? (
        <div>
          <p className="text-eyebrow text-electric-blue">{eyebrow}</p>
          <h2
            id="product-success-metrics"
            className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl"
          >
            {title}
          </h2>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <ProductSuccessMetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {showDisclaimer ? (
        <p className="rounded-ds-md border border-border/60 bg-surface/80 px-4 py-3 text-xs leading-relaxed text-muted sm:text-sm">
          {disclaimer ??
            "Values describe readiness and delivery signals — not vanity KPIs or unverified performance statistics."}
        </p>
      ) : null}
    </section>
  );
}
