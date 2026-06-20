import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { hasApprovedTestimonials, testimonialsPageCopy } from "@/config/testimonials";
import { buildTestimonialsPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("testimonials");

export default function TestimonialsPage() {
  const hasQuotes = hasApprovedTestimonials();
  const { hero, heroEmpty, disclaimer, footnote } = testimonialsPageCopy;
  const heroCopy = hasQuotes ? hero : heroEmpty;

  return (
    <>
      <JsonLd data={buildTestimonialsPageJsonLd()} />
      <MarketingHero
        eyebrow={heroCopy.eyebrow}
        title={heroCopy.title}
        description={heroCopy.description}
      />

      {hasQuotes ? (
        <Container className="py-8 sm:py-10">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
            {disclaimer}
          </p>
        </Container>
      ) : null}

      <Container className="pb-12 sm:pb-16 lg:pb-20">
        <TestimonialsGrid />
        <p className="mt-10 text-center text-xs text-muted">{footnote}</p>
      </Container>

      <CtaBanner
        title="Want to share feedback?"
        description="Partners and clients with approved quotes can contact us — we never publish names without permission."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Client success stories"
        secondaryHref="/client-success"
      />
    </>
  );
}
