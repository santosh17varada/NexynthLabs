import { PartnerFounderVisionSection } from "@/components/leadership/LeadershipEmbeds";
import { PartnerEnquiryForm } from "@/components/forms/LeadCaptureForm";
import {
  PartnerOpportunityGrid,
  PartnerWhyGrid,
} from "@/components/partners/PartnerSections";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppCtaCard } from "@/components/whatsapp/WhatsAppCtaCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getPanditPartnershipOpportunities,
  partnersPageCopy,
  productOpportunities,
  technologyPartnerships,
  templeVendorPartnerModel,
} from "@/config/partners";
import { whatsAppPageCopy } from "@/config/whatsapp";
import { getMailtoLink } from "@/config/site";
import { buildPartnersPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("partners");

export default function PartnersPage() {
  const { hero, whyPartner, investorCta, form } = partnersPageCopy;

  return (
    <>
      <JsonLd data={buildPartnersPageJsonLd()} />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Button href="#partner-form" variant="gradient" size="lg">
          Partner enquiry
        </Button>
        <Button href="/partners/portal" variant="outline" size="lg">
          Partner Portal readiness
        </Button>
        <Button href="#investor-cta" variant="outline" size="lg">
          Investor information
        </Button>
      </MarketingHero>

      <PartnerFounderVisionSection />

      <Container className="space-y-16 py-16 sm:space-y-20 sm:py-20 lg:py-24">
        <PartnerWhyGrid
          eyebrow={whyPartner.eyebrow}
          title={whyPartner.title}
          description={whyPartner.description}
          items={whyPartner.items}
        />

        <PartnerOpportunityGrid
          eyebrow="Products"
          title="Product opportunities"
          description="Ways to collaborate on new and existing Nexynth Labs platforms beyond a single feature request."
          items={productOpportunities}
        />

        <PartnerOpportunityGrid
          eyebrow="GetPandit"
          title="GetPandit partnership opportunities"
          description="Grow India's trusted pandit booking platform on getpandit.com — separate from this corporate site."
          items={getPanditPartnershipOpportunities}
        />

        <PartnerOpportunityGrid
          eyebrow="Ecosystem"
          title="Temple, vendor & service partner model"
          description="Bring temples, vendors, and community organisations into structured discovery and booking flows."
          items={templeVendorPartnerModel}
        />

        <PartnerOpportunityGrid
          eyebrow="Technology"
          title="Technology partnership"
          description="Infrastructure, payments, messaging, and AI providers that help our products scale responsibly."
          items={technologyPartnerships}
        />
      </Container>

      <div id="investor-cta">
        <CtaBanner
          title={investorCta.title}
          description={investorCta.description}
          primaryLabel={investorCta.primaryLabel}
          primaryHref={investorCta.primaryHref}
          secondaryLabel={investorCta.secondaryLabel}
          secondaryHref={getMailtoLink(investorCta.secondaryMailtoSubject)}
        />
      </div>

      <section
        id="partner-form"
        className="scroll-mt-24 border-t border-border/60 bg-surface"
        aria-labelledby="partner-form-title"
      >
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <h2
                id="partner-form-title"
                className="text-xl font-semibold text-foreground sm:text-2xl"
              >
                {form.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{form.note}</p>
              <p className="mt-4 text-sm text-muted">
                No public login is required. Submissions use the same secure enquiry pipeline as
                our contact page and are reviewed by the Nexynth Labs team.
              </p>
              <div className="mt-8">
                <ContactDetails />
              </div>
              <WhatsAppCtaCard
                page="/partners"
                title={whatsAppPageCopy.partners.title}
                description={whatsAppPageCopy.partners.description}
                prefilledMessage={whatsAppPageCopy.partners.prefilledMessage}
                context="partners"
              />
            </div>
            <Card className="p-6 sm:p-8">
              <PartnerEnquiryForm />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
