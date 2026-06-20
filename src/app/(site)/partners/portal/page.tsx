import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import {
  PartnerPortalReadinessBanner,
  PartnerPortalTypeSections,
  PartnerPortalTypesIntro,
} from "@/components/partner-portal/PartnerPortalSections";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { WhatsAppCtaCard } from "@/components/whatsapp/WhatsAppCtaCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  partnerPortalPageCopy,
  partnerPortalReadinessNotice,
  partnerPortalTypes,
} from "@/config/partner-portal";
import { whatsAppPageCopy } from "@/config/whatsapp";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("partnerPortal");

export default function PartnerPortalPage() {
  const { hero, typesIntro, apply, closingCta } = partnerPortalPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Button href="#apply" variant="gradient" size="lg">
          Apply to partner
        </Button>
        <Button href="/partners" variant="outline" size="lg">
          All partnerships
        </Button>
      </MarketingHero>

      <PartnerPortalReadinessBanner message={partnerPortalReadinessNotice} />

      <Container className="space-y-16 py-16 sm:space-y-20 sm:py-20 lg:py-24">
        <PartnerPortalTypesIntro
          eyebrow={typesIntro.eyebrow}
          title={typesIntro.title}
          description={typesIntro.description}
          types={partnerPortalTypes}
        />

        <PartnerPortalTypeSections types={partnerPortalTypes} />
      </Container>

      <section
        id="apply"
        className="scroll-mt-24 border-t border-border/60 bg-surface"
        aria-labelledby="partner-portal-apply-title"
      >
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <h2
                id="partner-portal-apply-title"
                className="text-xl font-semibold text-foreground sm:text-2xl"
              >
                {apply.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{apply.note}</p>
              <p className="mt-4 text-sm text-muted">
                Partner Portal self-service login is planned for a future phase. Submissions use
                the same secure enquiry pipeline as /partners — reviewed manually by our team.
              </p>
              <div className="mt-8">
                <ContactDetails />
              </div>
              <WhatsAppCtaCard
                page="/partners/portal"
                title={whatsAppPageCopy.partners.title}
                description={whatsAppPageCopy.partners.description}
                prefilledMessage={whatsAppPageCopy.partners.prefilledMessage}
                context="partners"
              />
            </div>
            <Card className="p-6 sm:p-8">
              <LeadCaptureForm mode="partner" submitLabel={apply.ctaLabel} />
            </Card>
          </div>
        </Container>
      </section>

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
