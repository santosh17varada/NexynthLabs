import {
  SecurityTrustReviewBanner,
  SecurityTrustSectionGrid,
} from "@/components/security-trust/SecurityTrustSections";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { securityPageCopy } from "@/config/security-trust";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("securityCenter");

export default function SecurityPage() {
  const { hero, disclaimer, closingCta } = securityPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <SecurityTrustReviewBanner message={disclaimer} />
      <SecurityTrustSectionGrid page="security" />

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">
          Edit content in src/config/security-trust.ts · No SOC 2, ISO 27001, or PCI certification
          is claimed on this page.
        </p>
      </Container>

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
