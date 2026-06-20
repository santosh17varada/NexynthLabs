import { FaqCenter } from "@/components/faq/FaqCenter";
import { PageSection } from "@/components/layout/PageSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { faqPageCopy, getPublishedFaqs } from "@/config/faqs";
import { buildFaqPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("faq");

export default function FaqPage() {
  const published = getPublishedFaqs();
  const jsonLd = buildFaqPageJsonLd(published);

  return (
    <>
      <JsonLd data={jsonLd} />
      <MarketingHero
        eyebrow={faqPageCopy.hero.eyebrow}
        title={faqPageCopy.hero.title}
        description={faqPageCopy.hero.description}
      />
      <PageSection variant="surface">
        <FaqCenter />
        <p className="mt-10 text-center text-xs text-muted">{faqPageCopy.footnote}</p>
      </PageSection>
      <CtaBanner
        title="Questions left?"
        description="Our team responds to enquiries directly — no chatbot on this site."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Book consultation"
        secondaryHref="/book-consultation"
      />
    </>
  );
}
