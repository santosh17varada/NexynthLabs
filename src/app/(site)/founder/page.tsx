import {
  FounderBackgroundSection,
  FounderExperienceSection,
  FounderFutureVisionSection,
  FounderIntroSection,
  FounderLessonsSection,
  FounderSectionNav,
  FounderWhyGetPanditSection,
  FounderWhyNexynthSection,
} from "@/components/founder";
import { PageSection } from "@/components/layout/PageSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { founderPageContent } from "@/config/founder-story";
import { buildFounderPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("founderStory");

export default function FounderPage() {
  const { hero, disclaimer, closingCta } = founderPageContent;

  return (
    <>
      <JsonLd data={buildFounderPageJsonLd()} />

      <MarketingHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        variant="dark"
      />

      <FounderSectionNav />
      <FounderIntroSection />
      <FounderBackgroundSection />
      <FounderExperienceSection />
      <FounderWhyNexynthSection />
      <FounderWhyGetPanditSection />
      <FounderLessonsSection />
      <FounderFutureVisionSection />

      <PageSection variant="muted" divider={false} containerClassName="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
          {disclaimer}
        </p>
      </PageSection>

      <CtaBanner
        id="founder-cta"
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
