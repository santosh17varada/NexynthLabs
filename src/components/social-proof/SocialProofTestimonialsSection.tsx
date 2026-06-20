import { ApprovedCustomerQuotes } from "@/components/social-proof/ApprovedCustomerQuotes";
import { CaseStudyHighlightsSection } from "@/components/social-proof/CaseStudyHighlightsSection";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { Button } from "@/components/ui/Button";
import { socialProofContentCopy } from "@/config/social-proof-content";
import { socialProofHomeCopy } from "@/config/social-proof";
import { hasApprovedTestimonials } from "@/config/testimonials";

export function SocialProofTestimonialsSection() {
  const hasQuotes = hasApprovedTestimonials();
  const copy = socialProofHomeCopy.testimonials;
  const fallbackCopy = socialProofContentCopy.caseStudyHighlights;

  if (!hasQuotes) {
    return (
      <CaseStudyHighlightsSection
        limit={2}
        variant="section"
        eyebrow={fallbackCopy.eyebrow}
        title={fallbackCopy.fallbackTitle}
        description={fallbackCopy.fallbackDescription}
        showDisclaimer
      />
    );
  }

  return (
    <SocialProofSection
      id="testimonials"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      disclaimerKind="testimonial"
      showDisclaimer
      variant="surface"
    >
      <ApprovedCustomerQuotes limit={3} columns={3} />
      <div className="mt-8">
        <Button href={copy.cta.href} variant="outline">
          {copy.cta.label}
        </Button>
      </div>
    </SocialProofSection>
  );
}
