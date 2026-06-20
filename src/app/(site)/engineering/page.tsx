import Link from "next/link";
import { EngineeringHeroVisual } from "@/components/engineering/EngineeringDiagram";
import { EngineeringRequestPathSection } from "@/components/engineering/EngineeringRequestPathSection";
import {
  EngineeringDisclaimer,
  EngineeringPhilosophySection,
  EngineeringPillars,
  EngineeringTechStackSection,
} from "@/components/engineering/EngineeringSections";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  marketingHeroFooterLinkClass,
  marketingHeroGlassButtonClass,
} from "@/components/ui/variants";
import { engineeringExcellenceCopy } from "@/config/engineering-excellence";
import { buildEngineeringPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("engineeringExcellence");

export default function EngineeringExcellencePage() {
  const { hero, finalCta } = engineeringExcellenceCopy;
  const jsonLd = buildEngineeringPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingHero
        variant="product"
        badge="Engineering"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        media={<EngineeringHeroVisual />}
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
            See also{" "}
            <Link href={hero.tertiaryCta.href} className={marketingHeroFooterLinkClass}>
              {hero.tertiaryCta.label}
            </Link>{" "}
            for intelligent systems delivery.
          </>
        }
      />
      <EngineeringPhilosophySection />
      <EngineeringRequestPathSection />
      <EngineeringPillars />
      <EngineeringTechStackSection />
      <EngineeringDisclaimer />

      <CtaBanner
        id="engineering-cta"
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
