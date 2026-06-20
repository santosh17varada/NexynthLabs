import { ApprovedCustomerQuotes } from "@/components/social-proof/ApprovedCustomerQuotes";
import { CaseStudyHighlightsSection } from "@/components/social-proof/CaseStudyHighlightsSection";
import { PartnerLogoGrid } from "@/components/social-proof/PartnerLogoGrid";
import { ProductTrustIndicators } from "@/components/social-proof/ProductTrustIndicators";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { TechnologyTrustBadges } from "@/components/social-proof/TechnologyTrustBadges";
import { TrustIndicatorGrid } from "@/components/social-proof/TrustIndicatorGrid";
import {
  getPublicPartnerLogos,
  socialProofContentCopy,
  trustIndicators,
} from "@/config/social-proof-content";
import { hasApprovedTestimonials } from "@/config/testimonials";
import type { SocialProofBlockConfig } from "@/types/social-proof";

type SocialProofBlockProps = {
  block: SocialProofBlockConfig;
};

export function SocialProofBlock({ block }: SocialProofBlockProps) {
  if (block.enabled === false) {
    return null;
  }

  switch (block.type) {
    case "approvedQuotes": {
      if (!hasApprovedTestimonials()) {
        return (
          <CaseStudyHighlightsSection
            limit={block.limit ?? 1}
            variant="section"
            title={socialProofContentCopy.caseStudyHighlights.fallbackTitle}
            description={socialProofContentCopy.caseStudyHighlights.fallbackDescription}
            showDisclaimer
          />
        );
      }

      const copy = socialProofContentCopy.approvedQuotes;
      return (
        <SocialProofSection
          eyebrow={block.eyebrow ?? copy.eyebrow}
          title={block.title ?? copy.title}
          description={block.description ?? copy.description}
          disclaimerKind="testimonial"
          showDisclaimer={block.showDisclaimer ?? true}
          variant="surface"
        >
          <ApprovedCustomerQuotes limit={block.limit ?? 3} columns={block.limit === 1 ? 1 : 2} />
        </SocialProofSection>
      );
    }

    case "caseStudyHighlights":
      return (
        <CaseStudyHighlightsSection
          limit={block.limit ?? 1}
          variant="section"
          eyebrow={block.eyebrow}
          title={block.title}
          description={block.description}
          showDisclaimer={block.showDisclaimer}
        />
      );

    case "technologyTrustBadges":
      return (
        <TechnologyTrustBadges
          variant="section"
          limit={block.limit}
          eyebrow={block.eyebrow}
          title={block.title}
          description={block.description}
          showDisclaimer={block.showDisclaimer}
          animated
        />
      );

    case "productTrustIndicators": {
      const productSlug = block.productSlug ?? "getpandit";
      return (
        <ProductTrustIndicators
          productSlug={productSlug}
          variant="section"
          eyebrow={block.eyebrow}
          title={block.title}
          description={block.description}
          showDisclaimer={block.showDisclaimer}
        />
      );
    }

    case "partnerLogos": {
      const copy = socialProofContentCopy.partnerLogos;
      const logos = getPublicPartnerLogos().filter((logo) => logo.status === "approved");
      if (logos.length === 0) return null;

      return (
        <SocialProofSection
          eyebrow={block.eyebrow ?? copy.eyebrow}
          title={block.title ?? copy.title}
          description={block.description ?? copy.description}
          disclaimerKind="partnerLogo"
          showDisclaimer={block.showDisclaimer}
          variant="muted"
        >
          <PartnerLogoGrid logos={logos} columns={4} />
        </SocialProofSection>
      );
    }

    case "trustIndicators": {
      const copy = socialProofContentCopy.trustIndicators;
      const items = block.limit ? trustIndicators.slice(0, block.limit) : trustIndicators;

      return (
        <SocialProofSection
          eyebrow={block.eyebrow ?? copy.eyebrow}
          title={block.title ?? copy.title}
          description={block.description ?? copy.description}
          disclaimerKind="trust"
          showDisclaimer={block.showDisclaimer ?? true}
        >
          <TrustIndicatorGrid indicators={items} animated />
        </SocialProofSection>
      );
    }

    default:
      return null;
  }
}

type SocialProofBlocksProps = {
  blocks: readonly SocialProofBlockConfig[];
};

export function SocialProofBlocks({ blocks }: SocialProofBlocksProps) {
  return (
    <>
      {blocks.map((block) => (
        <SocialProofBlock key={block.id} block={block} />
      ))}
    </>
  );
}
