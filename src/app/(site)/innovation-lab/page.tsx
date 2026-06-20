import { InnovationLabSections } from "@/components/innovation-lab/InnovationLabSections";
import { InnovationLabSectionNav } from "@/components/innovation-lab/InnovationLabSectionNav";
import { InnovationLabStatusLegend } from "@/components/innovation-lab/InnovationLabStatusLegend";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  getInnovationLabItemCounts,
  getInnovationLabItemTotal,
  innovationLabPageCopy,
} from "@/config/innovation-lab";
import { buildInnovationLabPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("innovationLab");

export default function InnovationLabPage() {
  const { hero, disclaimer, footnote, closingCta } = innovationLabPageCopy;
  const counts = getInnovationLabItemCounts();
  const total = getInnovationLabItemTotal();

  return (
    <>
      <JsonLd data={buildInnovationLabPageJsonLd()} />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <Container className="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted sm:text-sm">
          {total} items · {counts.live} live · {counts.prototype} prototype · {counts.planned}{" "}
          planned · {counts.concept} concept
        </p>
        <InnovationLabStatusLegend />
      </Container>

      <InnovationLabSectionNav />

      <InnovationLabSections />

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
