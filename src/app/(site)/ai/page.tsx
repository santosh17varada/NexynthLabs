import Link from "next/link";
import { AiHeroArchitectureVisual } from "@/components/ai/AiArchitectureDiagram";
import {
  AiCapabilityDisclaimer,
  AiCapabilityPillars,
  AiStrategySection,
  AiWhyNexynthSection,
} from "@/components/ai/AiCapabilitySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualStoryStack } from "@/components/visual-story";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  marketingHeroFooterLinkClass,
  marketingHeroGlassButtonClass,
} from "@/components/ui/variants";
import { aiCapabilityCopy } from "@/config/ai-capability";
import { aiVisualStories } from "@/config/visual-story";
import { buildAiCapabilityPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("aiCapability");

export default function AiCapabilityPage() {
  const { hero, finalCta } = aiCapabilityCopy;

  return (
    <>
      <JsonLd data={buildAiCapabilityPageJsonLd()} />

      <MarketingHero
        variant="product"
        badge="AI capability"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        media={<AiHeroArchitectureVisual />}
        actions={
          <>
            <Button href={hero.primaryCta.href} variant="gradient" size="lg">
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
            Explore the{" "}
            <Link href={hero.tertiaryCta.href} className={marketingHeroFooterLinkClass}>
              {hero.tertiaryCta.label}
            </Link>{" "}
            for use-case examples.
          </>
        }
      />
      <AiStrategySection />
      <VisualStoryStack stories={aiVisualStories} variants={["surface", "default"]} />
      <AiCapabilityPillars />
      <AiWhyNexynthSection />
      <AiCapabilityDisclaimer />

      <CtaBanner
        id="ai-cta"
        title={finalCta.title}
        description={finalCta.description}
        primaryLabel={finalCta.primary.label}
        primaryHref={finalCta.primary.href}
        secondaryLabel={finalCta.secondary.label}
        secondaryHref={finalCta.secondary.href}
      />
    </>
  );
}
