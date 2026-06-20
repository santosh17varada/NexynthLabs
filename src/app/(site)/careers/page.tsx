import {
  CareersBenefitsSection,
  CareersCultureSection,
  CareersEngineeringSection,
  CareersGrowthSection,
  CareersHiringProcessSection,
  CareersOpenPositionsSection,
  CareersSectionNav,
} from "@/components/careers";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { careersIntro, careersPageCopy } from "@/config/careers";
import { getCareersMailtoLink } from "@/config/site";
import { buildCareersPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("careers");

export default function CareersPage() {
  const { applyCta, disclaimer, footnote } = careersPageCopy;

  return (
    <>
      <JsonLd data={buildCareersPageJsonLd()} />

      <MarketingHero
        eyebrow={careersIntro.eyebrow}
        title={careersIntro.title}
        description={careersIntro.description}
        variant="dark"
      >
        <Button href="#open-positions" variant="gradient" size="lg">
          View open roles
        </Button>
        <Button
          href={getCareersMailtoLink()}
          external
          variant="glass"
          size="lg"
          className="border-on-dark/25 text-on-dark hover:bg-white/10"
        >
          Email careers
        </Button>
      </MarketingHero>

      <CareersSectionNav />

      <PageSection variant="muted" divider={false} containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
      </PageSection>

      <CareersCultureSection />
      <CareersEngineeringSection />
      <CareersGrowthSection />
      <CareersBenefitsSection />
      <CareersHiringProcessSection />
      <CareersOpenPositionsSection />

      <PageSection variant="default" divider={false} containerClassName="py-8 sm:py-10">
        <p className="text-center text-xs text-muted">{footnote}</p>
      </PageSection>

      <CtaBanner
        id="careers-apply"
        title={applyCta.title}
        description={applyCta.description}
        primaryLabel={applyCta.primaryLabel}
        primaryHref={getCareersMailtoLink()}
        primaryExternal
        secondaryLabel={applyCta.secondaryLabel}
        secondaryHref={applyCta.secondaryHref}
      />
    </>
  );
}
