import Link from "next/link";
import { DevelopersItemCard } from "@/components/developers/DevelopersItemCard";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developerSections, developersPageCopy } from "@/config/developers";
import type { DeveloperItemsSection, DeveloperVisionSection } from "@/types/developers";

function ApiVisionSection({ section }: { section: DeveloperVisionSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-border/60"
      aria-labelledby={`developer-section-${section.id}`}
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <Card className="mt-8 p-5 sm:p-8">
          <p className="text-base leading-relaxed text-muted sm:text-lg">{section.summary}</p>
          <h3
            id={`developer-section-${section.id}`}
            className="mt-8 text-sm font-semibold uppercase tracking-wide text-foreground"
          >
            Design principles
          </h3>
          <ul className="mt-4 space-y-3">
            {section.principles.map((principle) => (
              <li key={principle} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                  aria-hidden="true"
                />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </Card>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
          {developersPageCopy.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DeveloperItemsSectionBlock({ section }: { section: DeveloperItemsSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-border/60 bg-surface"
      aria-labelledby={`developer-section-${section.id}`}
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div
          id={`developer-section-${section.id}`}
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6"
        >
          {section.items.map((item) => (
            <DevelopersItemCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DevelopersSections() {
  return (
    <>
      {developerSections.map((section) =>
        section.id === "api-vision" ? (
          <ApiVisionSection key={section.id} section={section} />
        ) : (
          <DeveloperItemsSectionBlock key={section.id} section={section} />
        ),
      )}
    </>
  );
}
