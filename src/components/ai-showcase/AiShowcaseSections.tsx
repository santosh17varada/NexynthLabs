import { AiShowcaseCard } from "@/components/ai-showcase/AiShowcaseCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiShowcaseSections } from "@/config/ai-showcase";

export function AiShowcaseSections() {
  return (
    <>
      {aiShowcaseSections.map((section, index) => {
        const isAlt = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={isAlt ? "border-t border-border/60 bg-surface" : "border-t border-border/60"}
            aria-labelledby={`ai-section-${section.id}`}
          >
            <Container className="py-14 sm:py-16 lg:py-20">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {section.items.map((item) => (
                  <AiShowcaseCard key={item.id} item={item} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
