import { InnovationLabItemCard } from "@/components/innovation-lab/InnovationLabItemCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innovationLabSections } from "@/config/innovation-lab";

export function InnovationLabSections() {
  return (
    <>
      {innovationLabSections.map((section, index) => {
        const isAlt = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={isAlt ? "border-t border-border/60 bg-surface" : "border-t border-border/60"}
            aria-labelledby={`innovation-section-${section.id}`}
          >
            <Container className="py-14 sm:py-16 lg:py-20">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {section.items.map((item) => (
                  <InnovationLabItemCard key={item.id} item={item} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
