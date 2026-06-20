import { BrandSectionNav } from "@/components/brand/BrandSectionNav";
import {
  BrandAccessibilitySection,
  BrandColorSection,
  BrandComponentSection,
  BrandFoundationsSection,
  BrandGradientSection,
  BrandIconographySection,
  BrandIllustrationSection,
  BrandLogoSection,
  BrandMotionSection,
  BrandProductDemoSection,
  BrandProductShowcaseSection,
  BrandSocialProofSection,
  BrandSpacingSection,
  BrandTypographySection,
} from "@/components/brand/BrandDocSections";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { marketingHeroGlassButtonClass } from "@/components/ui/variants";
import { brandMeta } from "@/brand/tokens";
import { brandPageCopy } from "@/brand/guidelines";
import { buildBrandSystemPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("brandSystem");

export default function BrandSystemPage() {
  const { hero, disclaimer, finalCta } = brandPageCopy;
  const jsonLd = buildBrandSystemPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MarketingHero
        variant="enterprise"
        badge={`v${brandMeta.version}`}
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
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
            Tokens live in{" "}
            <code className="rounded bg-midnight/60 px-1.5 py-0.5 font-mono text-xs text-electric-cyan">
              src/brand/tokens.ts
            </code>{" "}
            and{" "}
            <code className="rounded bg-midnight/60 px-1.5 py-0.5 font-mono text-xs text-electric-cyan">
              globals.css
            </code>
            .
          </>
        }
      />
      <BrandSectionNav />
      <BrandFoundationsSection />
      <BrandLogoSection />
      <BrandSpacingSection />
      <BrandTypographySection />
      <BrandColorSection />
      <BrandGradientSection />
      <BrandIconographySection />
      <BrandIllustrationSection />
      <BrandMotionSection />
      <BrandSocialProofSection />
      <BrandProductShowcaseSection />
      <BrandProductDemoSection />
      <BrandComponentSection />
      <BrandAccessibilitySection />

      <PageSection variant="default" divider={false} containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
          {disclaimer}
        </p>
      </PageSection>

      <CtaBanner
        id="brand-cta"
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
