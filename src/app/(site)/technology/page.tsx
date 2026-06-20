import { TechnologyExcellenceSections } from "@/components/technology-excellence/TechnologyExcellenceSections";
import { TechnologySectionNav } from "@/components/technology-excellence/TechnologySectionNav";
import { PageSection } from "@/components/layout/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getTechnologyCapabilityCount,
  technologyExcellencePageCopy,
} from "@/config/technology-excellence";
import { buildTechnologyPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("technologyExcellence");

export default function TechnologyExcellencePage() {
  const { hero, disclaimer, closingCta } = technologyExcellencePageCopy;
  const capabilityCount = getTechnologyCapabilityCount();

  return (
    <>
      <JsonLd data={buildTechnologyPageJsonLd()} />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Button href="/services" variant="outline" size="lg">
          Our services
        </Button>
        <Button href="/book-consultation" variant="gradient" size="lg">
          Book free consultation
        </Button>
      </MarketingHero>

      <PageSection variant="muted" containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-3 text-center text-xs text-muted">
          {capabilityCount} capabilities across AI, web, mobile, cloud, DevOps, integrations,
          and security.
        </p>
      </PageSection>

      <TechnologySectionNav />

      <TechnologyExcellenceSections />

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
