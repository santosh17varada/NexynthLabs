import { ClientSuccessSectionNav } from "@/components/client-success/ClientSuccessSectionNav";
import { ClientSuccessStories } from "@/components/client-success/ClientSuccessStories";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  clientSuccessPageCopy,
  getPublishedClientSuccessStories,
} from "@/config/client-success";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("clientSuccess");

export default function ClientSuccessPage() {
  const { hero, disclaimer, footnote, closingCta } = clientSuccessPageCopy;
  const storyCount = getPublishedClientSuccessStories().length;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <Container className="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted sm:text-sm">
          {storyCount} anonymized {storyCount === 1 ? "story" : "stories"} · qualitative outcomes
          only
        </p>
      </Container>

      <ClientSuccessSectionNav />

      <ClientSuccessStories />

      <Container className="border-t border-border/60 py-8">
        <p className="text-center text-xs text-muted">{footnote}</p>
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
