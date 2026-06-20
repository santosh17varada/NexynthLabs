import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialProofDisclaimer } from "@/components/social-proof/SocialProofDisclaimer";
import { TrustIndicatorGrid } from "@/components/social-proof/TrustIndicatorGrid";
import { homeTrustCopy } from "@/config/home-trust";
import { trustIndicators } from "@/config/social-proof";

export function HomeTrustMetricsSection() {
  const copy = homeTrustCopy;

  return (
    <HomeDarkSection id="trust-metrics">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        tone="dark"
      />

      <TrustIndicatorGrid
        indicators={trustIndicators}
        tone="dark"
        animated
        className="mt-10 sm:mt-12"
      />

      <SocialProofDisclaimer
        kind="trust"
        text={copy.footnote}
        className="mt-8 max-w-3xl border-glass-border-dark bg-glass-dark/30 text-on-dark-muted"
      />
    </HomeDarkSection>
  );
}
