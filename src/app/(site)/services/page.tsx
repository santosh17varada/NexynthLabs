import { ServicesCatalog, ServicesCatalogSummary } from "@/components/services/ServicesCatalog";
import { PageSection } from "@/components/layout/PageSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { servicesPageCopy } from "@/config/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServicesPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={buildServicesPageJsonLd()} />
      <MarketingHero
        eyebrow={servicesPageCopy.hero.eyebrow}
        title={servicesPageCopy.hero.title}
        description={servicesPageCopy.hero.description}
        variant="dark"
      />
      <PageSection>
        <ServicesCatalog />
      </PageSection>
      <PageSection variant="muted" containerClassName="py-8 sm:py-10">
        <ServicesCatalogSummary />
      </PageSection>
      <CtaBanner
        title="Not sure where to start?"
        description="Tell us about your product, timeline, and integrations — we'll recommend the right path."
        primaryLabel="Book a consultation"
        primaryHref="/book-consultation"
        secondaryLabel="Send an enquiry"
        secondaryHref="/contact"
      />
    </>
  );
}
