import { EcosystemProductGrid } from "@/components/product-ecosystem/EcosystemProductGrid";
import { EcosystemProductStatusBadge } from "@/components/product-ecosystem/EcosystemProductStatusBadge";
import { ProductEcosystemHeroSection } from "@/components/product-ecosystem/ProductEcosystemHeroSection";
import { ProductDemoSection } from "@/components/product-demo";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  ecosystemComingSoon,
  ecosystemPageCopy,
  ecosystemPlatforms,
  ecosystemStatusLabels,
  getLiveEcosystemProducts,
} from "@/config/product-ecosystem";
import type { EcosystemProductStatus } from "@/types/product-ecosystem";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("productEcosystem");

const statusOrder: EcosystemProductStatus[] = [
  "live",
  "in_progress",
  "planned",
  "coming_soon",
];

export default function ProductEcosystemPage() {
  const { platforms, comingSoon, disclaimer, footnote, closingCta } =
    ecosystemPageCopy;
  const liveCount = getLiveEcosystemProducts().length;

  return (
    <>
      <ProductEcosystemHeroSection />

      <Container className="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-3 text-center text-xs text-muted">
          {liveCount} live product{liveCount === 1 ? "" : "s"} in the ecosystem today.
        </p>
        <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          aria-label="Status legend"
        >
          {statusOrder.map((status) => (
            <EcosystemProductStatusBadge key={status} status={status} />
          ))}
          <span className="sr-only">
            Status meanings: {statusOrder.map((s) => ecosystemStatusLabels[s]).join(", ")}
          </span>
        </div>
      </Container>

      <EcosystemProductGrid
        eyebrow={platforms.eyebrow}
        title={platforms.title}
        description={platforms.description}
        products={ecosystemPlatforms}
      />

      <ProductDemoSection demoId="marketplace-lifecycle" variant="surface" />

      <EcosystemProductGrid
        eyebrow={comingSoon.eyebrow}
        title={comingSoon.title}
        description={comingSoon.description}
        products={ecosystemComingSoon}
        variant="muted"
      />

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">{footnote}</p>
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
