import { ApprovedCustomerQuotes } from "@/components/social-proof/ApprovedCustomerQuotes";
import { CaseStudyHighlightsSection } from "@/components/social-proof/CaseStudyHighlightsSection";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { TrustIndicatorGrid } from "@/components/social-proof/TrustIndicatorGrid";
import { Button } from "@/components/ui/Button";
import { homeSocialProofCopy } from "@/config/home-social-proof";
import { getCaseStudyHighlights, trustIndicators } from "@/config/social-proof";
import { hasApprovedTestimonials } from "@/config/testimonials";

export function HomeSocialProofSection() {
  const copy = homeSocialProofCopy;
  const hasQuotes = hasApprovedTestimonials();
  const caseHighlights = getCaseStudyHighlights(hasQuotes ? 1 : 2);

  if (caseHighlights.length === 0 && !hasQuotes) {
    return null;
  }

  return (
    <SocialProofSection
      id="social-proof"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      disclaimerKind="trust"
      disclaimer={copy.disclaimer}
      showDisclaimer
      variant="default"
    >
      <TrustIndicatorGrid
        indicators={trustIndicators}
        tone="light"
        className="mt-8 sm:mt-10"
      />

      <div className="mt-10 lg:mt-12">
        <div
          className={
            hasQuotes
              ? "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10"
              : undefined
          }
        >
          {caseHighlights.length > 0 ? (
            <CaseStudyHighlightsSection
              highlights={caseHighlights}
              label={hasQuotes ? copy.caseStudyLabel : copy.caseStudiesFallbackLabel}
              variant={hasQuotes ? "compact" : "inline"}
            />
          ) : null}

          {hasQuotes ? (
            <ApprovedCustomerQuotes
              limit={2}
              label={copy.testimonialsLabel}
              columns={1}
            />
          ) : null}
        </div>

        {caseHighlights.length > 0 ? (
          <div className="mobile-cta-stack mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap">
            <Button href={copy.ctas.caseStudies.href} variant="gradient" size="lg">
              {copy.ctas.caseStudies.label}
            </Button>
            {hasQuotes ? (
              <Button href={copy.ctas.testimonials.href} variant="outline" size="lg">
                {copy.ctas.testimonials.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </SocialProofSection>
  );
}
