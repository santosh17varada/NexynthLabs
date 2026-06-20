import Link from "next/link";
import { CaseStudiesHeroVisual } from "@/components/case-studies/CaseStudiesHeroVisual";
import {
  CaseStudiesDisclaimer,
  CaseStudiesFeaturedSection,
  CaseStudiesGridSection,
} from "@/components/case-studies/CaseStudiesSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  marketingHeroFooterLinkClass,
  marketingHeroGlassButtonClass,
} from "@/components/ui/variants";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import {
  getFeaturedCaseStudies,
  getPublishedCaseStudies,
} from "@/config/portfolio";
import { buildCaseStudiesPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("caseStudies");

export default function CaseStudiesPage() {
  const published = getPublishedCaseStudies();
  const featured = getFeaturedCaseStudies();
  const featuredIds = new Set(featured.map((study) => study.id));
  const remaining = published.filter((study) => !featuredIds.has(study.id));
  const { hero, finalCta } = caseStudiesPageCopy;

  return (
    <>
      <JsonLd data={buildCaseStudiesPageJsonLd()} />
      <MarketingHero
        variant="product"
        badge="Proof"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        media={<CaseStudiesHeroVisual />}
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
            Every study follows our{" "}
            <Link href="#story-template" className={marketingHeroFooterLinkClass}>
              Challenge → Outcome
            </Link>{" "}
            narrative template.
          </>
        }
      />
      <CaseStudiesFeaturedSection studies={featured} />
      {remaining.length > 0 ? (
        <CaseStudiesGridSection studies={remaining} />
      ) : null}
      <CaseStudiesDisclaimer />

      <CtaBanner
        id="case-studies-cta"
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
