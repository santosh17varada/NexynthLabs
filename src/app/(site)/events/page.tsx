import { EventSectionNav } from "@/components/events/EventSectionNav";
import { EventsSections } from "@/components/events/EventsSections";
import { EventStatusLegend } from "@/components/events/EventStatusLegend";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MarketingHero } from "@/components/ui/MarketingHero";
import {
  eventsPageCopy,
  getEventItemCounts,
  getEventItemTotal,
} from "@/config/events";
import { buildEventsPageJsonLd, createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("events");

export default function EventsPage() {
  const { hero, disclaimer, footnote, closingCta } = eventsPageCopy;
  const counts = getEventItemCounts();
  const total = getEventItemTotal();

  return (
    <>
      <JsonLd data={buildEventsPageJsonLd()} />
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <Container className="py-8 sm:py-10">
        <p className="mx-auto max-w-3xl text-center text-sm text-muted sm:text-base">
          {disclaimer}
        </p>
        <p className="mt-4 text-center text-xs text-muted sm:text-sm">
          {total} listings · {counts.upcoming} upcoming · {counts.planned} planned ·{" "}
          {counts.completed} completed
        </p>
        <EventStatusLegend />
      </Container>

      <EventSectionNav />

      <EventsSections />

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
