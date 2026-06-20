import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getPanditMetricsPageCopy,
  getPanditMetricStatusLabels,
  getPanditSuccessMetrics,
} from "@/config/getpandit-metrics";
import type { GetPanditMetricStatus } from "@/types/getpandit-metrics";

const statusStyles: Record<GetPanditMetricStatus, string> = {
  "platform-ready": "bg-electric-violet/15 text-foreground",
  "integration-ready": "bg-primary/10 text-primary",
  "in-progress": "bg-amber-500/15 text-foreground",
  planned: "bg-surface text-muted border border-border",
};

type GetPanditSuccessMetricsProps = {
  variant?: "section" | "embedded";
  showHeading?: boolean;
  showDisclaimer?: boolean;
};

export function GetPanditSuccessMetrics({
  variant = "section",
  showHeading = true,
  showDisclaimer = true,
}: GetPanditSuccessMetricsProps) {
  const { eyebrow, title, description, disclaimer, footnote } = getPanditMetricsPageCopy;

  const grid = (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {getPanditSuccessMetrics.map((metric) => (
        <Card key={metric.id} as="article" className="flex h-full flex-col p-5 sm:p-6">
          <span
            className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[metric.status]}`}
          >
            {getPanditMetricStatusLabels[metric.status]}
          </span>
          <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">
            {metric.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {metric.description}
          </p>
        </Card>
      ))}
    </div>
  );

  const disclaimerBlock = showDisclaimer && (
    <div className="mt-8 space-y-2 rounded-xl border border-border/70 bg-background/50 px-4 py-3 sm:px-5">
      <p className="text-sm font-medium text-foreground">{disclaimer}</p>
      <p className="text-xs leading-relaxed text-muted">{footnote}</p>
    </div>
  );

  if (variant === "embedded") {
    return (
      <div className="space-y-0">
        {showHeading && (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        )}
        {grid}
        {disclaimerBlock}
      </div>
    );
  }

  return (
    <section className="border-t border-border/60 bg-surface" aria-labelledby="getpandit-metrics">
      <Container className="py-16 sm:py-20">
        {showHeading && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}
        {grid}
        {disclaimerBlock}
      </Container>
    </section>
  );
}
