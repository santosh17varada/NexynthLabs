import {
  RoadmapCategoryNav,
  RoadmapProductSpotlight,
  RoadmapTimeline,
} from "@/components/roadmap/RoadmapTimeline";
import { PageSection } from "@/components/layout/PageSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getRoadmapItemCounts,
  roadmapCategoryLabels,
  roadmapPageCopy,
} from "@/config/roadmap";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildRoadmapPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("publicRoadmap");

export default function RoadmapPage() {
  const { hero, disclaimer, footnote, closingCta } = roadmapPageCopy;
  const counts = getRoadmapItemCounts();
  const total = counts.now + counts.next + counts.future;

  return (
    <>
      <JsonLd data={buildRoadmapPageJsonLd()} />

      <MarketingHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        variant="dark"
      />

      <PageSection variant="surface" divider={false} containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted sm:text-sm">
          {total} items · {counts.now} {roadmapCategoryLabels.now.toLowerCase()} ·{" "}
          {counts.next} {roadmapCategoryLabels.next.toLowerCase()} · {counts.future}{" "}
          {roadmapCategoryLabels.future.toLowerCase()}
        </p>
        <RoadmapCategoryNav counts={counts} />
      </PageSection>

      <RoadmapProductSpotlight />
      <RoadmapTimeline />

      <PageSection variant="muted" divider={false} containerClassName="py-8 sm:py-10">
        <p className="text-center text-xs text-muted">{footnote}</p>
        <p className="mt-3 text-center text-xs text-muted">{roadmapPageCopy.framework.cmsNote}</p>
      </PageSection>

      <CtaBanner
        id="roadmap-cta"
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
