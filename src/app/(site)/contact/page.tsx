import Link from "next/link";
import { ContactEnterpriseForm } from "@/components/contact/ContactEnterpriseForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  marketingHeroFooterLinkClass,
  marketingHeroGlassButtonClass,
} from "@/components/ui/variants";
import { contactExperienceCopy } from "@/config/contact-experience";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildContactPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("contact");

export default function ContactPage() {
  const { hero, disclaimer } = contactExperienceCopy;

  return (
    <>
      <JsonLd data={buildContactPageJsonLd()} />
      <MarketingHero
        variant="enterprise"
        badge="Enterprise"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        actions={
          <>
            <Button href={hero.primaryCta.href} variant="gradient" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href="#contact-form"
              variant="glass"
              size="lg"
              className={marketingHeroGlassButtonClass}
            >
              Submit an enquiry
            </Button>
          </>
        }
        footer={
          <>
            Already know your path?{" "}
            <Link href="/request-proposal" className={marketingHeroFooterLinkClass}>
              Request a proposal
            </Link>{" "}
            for scoped delivery.
          </>
        }
      />
      <PageSection size="wide" variant="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <ContactSidebar />
          <ContactEnterpriseForm />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted sm:text-sm">
          {disclaimer}
        </p>
      </PageSection>

      <CtaBanner
        id="contact-cta"
        title="Need a scoped proposal?"
        description="Share requirements, integrations, and timeline — we'll respond with an honest delivery plan."
        primaryLabel="Request proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Book consultation"
        secondaryHref="/book-consultation"
      />
    </>
  );
}
