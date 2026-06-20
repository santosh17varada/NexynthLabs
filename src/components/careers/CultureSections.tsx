import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CultureSection } from "@/types/careers-culture";

export function CultureSections({ sections }: { sections: readonly CultureSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const isAlt = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={isAlt ? "border-t border-border/60 bg-surface" : "border-t border-border/60"}
            aria-labelledby={`culture-section-${section.id}`}
          >
            <Container className="py-14 sm:py-16 lg:py-20">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
                {section.items.map((item) => (
                  <Card key={item.title} as="article" className="h-full p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
