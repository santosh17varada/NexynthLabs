import { AiReadinessScoreForm } from "@/components/ai-readiness-score/AiReadinessScoreForm";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { aiReadinessPageCopy } from "@/config/ai-readiness-score";
import { brandName } from "@/config/site-values";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("aiReadinessScore");

export default function AiReadinessScorePage() {
  const { hero } = aiReadinessPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <Container className="py-12 sm:py-16 lg:py-20">
        <AiReadinessScoreForm />
        <p className="mt-10 text-center text-xs text-muted">
          Self-assessment only — not professional advice. Scores are indicative for discovery
          conversations with {brandName}.
        </p>
      </Container>
    </>
  );
}
