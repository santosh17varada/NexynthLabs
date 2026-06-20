import { DevelopersSectionNav } from "@/components/developers/DevelopersSectionNav";
import { DevelopersSections } from "@/components/developers/DevelopersSections";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { Card } from "@/components/ui/Card";
import { developersPageCopy } from "@/config/developers";
import { siteConfig } from "@/config/site";
import { buildWebPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("developers");

export default function DevelopersPage() {
  const { hero, disclaimer, footnote, closingCta } = developersPageCopy;
  const pageSeo = siteConfig.seo.pages.developers;
  const jsonLd = buildWebPageJsonLd(pageSeo.title, pageSeo.description, "/developers");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <DevelopersSectionNav />

      <Container className="py-8 sm:py-10">
        <Card className="border-dashed border-electric-blue/40 bg-electric-blue/5 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-muted sm:text-base">{disclaimer}</p>
        </Card>
      </Container>

      <DevelopersSections />

      <Container className="pb-12 sm:pb-16">
        <p className="text-center text-xs text-muted">{footnote}</p>
      </Container>

      <CtaBanner
        title={closingCta.title}
        description={closingCta.description}
        primaryLabel={closingCta.primaryLabel}
        primaryHref={closingCta.primaryHref}
        secondaryLabel={closingCta.secondaryLabel}
        secondaryHref={closingCta.secondaryHref}
      />
    </>
  );
}
