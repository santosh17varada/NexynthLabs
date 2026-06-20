import {
  VisionAiFutureSection,
  VisionDigitalFutureSection,
  VisionFounderQuoteSection,
  VisionGetPanditSection,
  VisionLongTermSection,
  VisionMarketplaceSection,
  VisionSectionNav,
  VisionWhySection,
} from "@/components/vision";
import { PageSection } from "@/components/layout/PageSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { visionPageContent } from "@/config/vision";
import { buildVisionPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("vision");

export default function VisionPage() {
  const { hero, disclaimer, closingCta } = visionPageContent;

  return (
    <>
      <JsonLd data={buildVisionPageJsonLd()} />

      <MarketingHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        variant="dark"
      />

      <VisionSectionNav />
      <VisionFounderQuoteSection />
      <VisionWhySection />
      <VisionDigitalFutureSection />
      <VisionAiFutureSection />
      <VisionMarketplaceSection />
      <VisionGetPanditSection />
      <VisionLongTermSection />

      <PageSection variant="muted" divider={false} containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
          {disclaimer}
        </p>
      </PageSection>

      <CtaBanner
        id="vision-cta"
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
