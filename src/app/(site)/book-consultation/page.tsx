import { BookConsultationForm } from "@/components/book-consultation/BookConsultationForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { bookConsultationPageCopy } from "@/config/book-consultation";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("bookConsultation");

export default function BookConsultationPage() {
  const { hero, formTitle, formNote, calendarNote } = bookConsultationPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{formTitle}</h2>
            <p className="mt-2 text-sm text-muted">{formNote}</p>
            <div className="mt-6">
              <BookConsultationForm />
            </div>
          </Card>
          <p className="mt-6 text-center text-xs text-muted">{calendarNote}</p>
        </div>
      </Container>
    </>
  );
}
