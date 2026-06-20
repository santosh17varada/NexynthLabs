import { GetPanditHeroMockupStack } from "@/components/getpandit/GetPanditUiPreview";
import {
  GetPanditFaqSection,
  GetPanditMarketingFeatures,
  GetPanditProblemSection,
} from "@/components/getpandit/GetPanditMarketingSections";
import { GetPanditEcosystemStorySection } from "@/components/getpandit/GetPanditEcosystemStorySection";
import { ProductDemoSection } from "@/components/product-demo";
import { VisualStoryStack } from "@/components/visual-story";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  marketingHeroFooterLinkClass,
  marketingHeroGlassButtonClass,
} from "@/components/ui/variants";
import { getPanditMarketingCopy } from "@/config/getpandit-marketing";
import { getPanditVisualStories } from "@/config/visual-story";
import { buildGetPanditPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("getpandit");

export default function GetPanditPage() {
  const { hero, finalCta } = getPanditMarketingCopy;
  const jsonLd = buildGetPanditPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingHero
        variant="product"
        badge="Live product"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        media={
          <GetPanditHeroMockupStack urlBar={hero.mockup.urlBar} />
        }
        actions={
          <>
            <Button
              href={hero.primaryCta.href}
              external={hero.primaryCta.external}
              variant="gradient"
              size="lg"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="glass"
              size="lg"
              className={marketingHeroGlassButtonClass}
            >
              {hero.secondaryCta.label}
            </Button>
          </>
        }
        footer={
          <>
            Or{" "}
            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={marketingHeroFooterLinkClass}
            >
              {hero.tertiaryCta.label} →
            </a>
          </>
        }
      />
      <GetPanditProblemSection />
      <GetPanditEcosystemStorySection surface="page" />
      <VisualStoryStack
        stories={getPanditVisualStories}
        variants={["surface", "default"]}
      />
      <ProductDemoSection demoId="getpandit-booking-flow" variant="default" showConsultationCta />
      <GetPanditMarketingFeatures />
      <ProductDemoSection demoId="vendor-journey" variant="muted" />
      <ProductDemoSection demoId="pandit-onboarding" variant="surface" />
      <GetPanditFaqSection />

      <CtaBanner
        id="getpandit-cta"
        title={finalCta.title}
        description={finalCta.description}
        primaryLabel={finalCta.primary.label}
        primaryHref={finalCta.primary.href}
        primaryExternal={finalCta.primary.external}
        secondaryLabel={finalCta.secondary.label}
        secondaryHref={finalCta.secondary.href}
      />
    </>
  );
}
