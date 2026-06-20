import { MediaKitFounderProfileSection } from "@/components/leadership/LeadershipEmbeds";
import { MediaKitSectionNav } from "@/components/media-kit/MediaKitSectionNav";
import { MediaKitSections } from "@/components/media-kit/MediaKitSections";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { Card } from "@/components/ui/Card";
import { mediaKitPageCopy } from "@/config/media-kit";
import { buildWebPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createPageMetadataFromKey("mediaKit");

export default function MediaKitPage() {
  const { hero, disclaimer, footnote } = mediaKitPageCopy;
  const pageSeo = siteConfig.seo.pages.mediaKit;
  const jsonLd = buildWebPageJsonLd(pageSeo.title, pageSeo.description, "/media-kit");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <MediaKitSectionNav />

      <Container className="py-8 sm:py-10">
        <Card className="border-dashed border-electric-blue/40 bg-electric-blue/5 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-muted sm:text-base">{disclaimer}</p>
        </Card>
      </Container>

      <MediaKitSections />
      <MediaKitFounderProfileSection />

      <Container className="pb-12 sm:pb-16">
        <p className="text-center text-xs text-muted">{footnote}</p>
      </Container>

      <CtaBanner
        title="Need something not listed?"
        description="Send a press enquiry with your deadline, publication, and required formats."
        primaryLabel="Press enquiry"
        primaryHref="/contact?intent=press"
        secondaryLabel="Resources"
        secondaryHref="/resources"
      />
    </>
  );
}
