import { ServiceStatusList } from "@/components/status/ServiceStatusList";
import { ServiceStatusBadge } from "@/components/status/ServiceStatusBadge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getOverallServiceHealth,
  getServiceHealthCounts,
  serviceHealthStatusLabels,
  statusPageCopy,
} from "@/config/status-page";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("statusPage");

export default function StatusPage() {
  const { hero, disclaimer, footnote, closingCta, lastReviewedAt } = statusPageCopy;
  const overall = getOverallServiceHealth();
  const counts = getServiceHealthCounts();

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <Container className="py-8 sm:py-10">
        <Card className="mx-auto max-w-3xl border-border/70 p-5 text-center sm:p-8">
          <p className="text-sm font-medium text-muted">Overall status</p>
          <div className="mt-4 flex justify-center">
            <ServiceStatusBadge status={overall} />
          </div>
          <p className="mt-4 text-sm text-muted">
            {counts.operational} operational · {counts.degraded} degraded ·{" "}
            {counts.maintenance} maintenance · {counts.planned} planned
          </p>
          {lastReviewedAt && (
            <p className="mt-2 text-xs text-muted">
              Last reviewed (config): {lastReviewedAt}
            </p>
          )}
        </Card>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
      </Container>

      <section className="border-t border-border/60 bg-surface">
        <ServiceStatusList />
      </section>

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">{footnote}</p>
        <p className="mt-2 text-center text-xs text-muted">
          Status labels: {Object.values(serviceHealthStatusLabels).join(" · ")}
        </p>
      </Container>

      <CtaBanner
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primary.label}
        primaryHref={closingCta.primary.href}
        secondaryLabel={closingCta.secondary.label}
        secondaryHref={closingCta.secondary.href}
      />
    </>
  );
}
