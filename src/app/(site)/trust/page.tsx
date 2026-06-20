import {
  ComplianceRoadmapSection,
  SecurityTrustReviewBanner,
  SecurityTrustSectionGrid,
} from "@/components/security-trust/SecurityTrustSections";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { trustPageCopy } from "@/config/security-trust";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("trustCenter");

export default function TrustPage() {
  const { hero, disclaimer, closingCta } = trustPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <SecurityTrustReviewBanner message={disclaimer} />
      <SecurityTrustSectionGrid page="trust" />
      <ComplianceRoadmapSection />

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">
          Policies remain drafts until legal counsel review. See Privacy Policy and Disclaimer for
          published notices.
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
