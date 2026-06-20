import { TechnologyCapabilityCard } from "@/components/technology-excellence/TechnologyCapabilityCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologyExcellenceSections } from "@/config/technology-excellence";

export function TechnologyExcellenceSections() {
  return (
    <>
      {technologyExcellenceSections.map((section, index) => {
        const isAlt = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={
              isAlt
                ? "border-t border-border/60 bg-surface"
                : "border-t border-border/60"
            }
            aria-labelledby={`tech-section-${section.id}`}
          >
            <Container className="py-14 sm:py-16 lg:py-20">
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
              />
              <div
                className={`mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 ${
                  section.capabilities.length === 1
                    ? "max-w-xl"
                    : section.capabilities.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.capabilities.map((capability) => (
                  <TechnologyCapabilityCard key={capability.id} capability={capability} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
