import { AiShowcaseMetrics } from "@/components/ai-showcase/AiShowcaseMetrics";
import { AiShowcaseSections } from "@/components/ai-showcase/AiShowcaseSections";
import { AiAssistantSection } from "@/components/ai-assistant/AiAssistantPlaceholder";
import { ProductDemoSection } from "@/components/product-demo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { aiShowcasePageCopy } from "@/config/ai-showcase";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("aiShowcase");

export default function AiShowcasePage() {
  const { hero, heroCta, closingCta, disclaimer } = aiShowcasePageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Button href={heroCta.primary.href} variant="gradient" size="lg">
          {heroCta.primary.label}
        </Button>
        <Button href={heroCta.secondary.href} variant="outline" size="lg">
          {heroCta.secondary.label}
        </Button>
        <Button href="/ai-readiness-score" variant="outline" size="lg">
          AI Readiness Score
        </Button>
      </MarketingHero>

      <AiShowcaseMetrics />
      <ProductDemoSection demoId="ai-workflow" variant="surface" showConsultationCta />
      <AiShowcaseSections />

      <Container className="py-8 sm:py-10">
        <p className="text-center text-xs text-muted sm:text-sm">{disclaimer}</p>
      </Container>

      <AiAssistantSection />

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
