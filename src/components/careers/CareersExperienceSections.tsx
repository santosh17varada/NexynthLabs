import Link from "next/link";
import { PageSection } from "@/components/layout/PageSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { innerLinkClass } from "@/components/ui/variants";
import { careersPageCopy } from "@/config/careers";
import { cn } from "@/lib/cn";

function ValueGrid({
  items,
  columns = 2,
}: {
  items: readonly { id: string; title: string; description: string }[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 3
      ? "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      : "mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6";

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <Card key={item.id} variant="glass" padding="sm" as="article" className="h-full sm:p-6">
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export function CareersCultureSection() {
  const section = careersPageCopy.culture;

  return (
    <PageSection id="culture" variant="default" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <ValueGrid items={section.values} />
      <Link
        href={section.culturePageHref}
        className={cn("mt-8 inline-flex min-h-11 items-center text-sm", innerLinkClass)}
      >
        Full culture deep-dive →
      </Link>
    </PageSection>
  );
}

export function CareersEngineeringSection() {
  const section = careersPageCopy.engineeringPrinciples;

  return (
    <PageSection id="engineering" variant="surface" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <ValueGrid items={section.principles} columns={3} />
    </PageSection>
  );
}

export function CareersGrowthSection() {
  const section = careersPageCopy.growth;

  return (
    <PageSection id="growth" variant="muted" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <ValueGrid items={section.items} />
    </PageSection>
  );
}

export function CareersBenefitsSection() {
  const section = careersPageCopy.benefits;

  return (
    <PageSection id="benefits" variant="default" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <ValueGrid items={section.items} columns={3} />
      <p className="mt-8 max-w-3xl text-sm text-muted">{section.disclaimer}</p>
    </PageSection>
  );
}

export function CareersHiringProcessSection() {
  const section = careersPageCopy.hiringProcess;

  return (
    <PageSection id="hiring-process" variant="dark" className="scroll-mt-28">
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        tone="dark"
      />
      <ol className="mt-10 space-y-0">
        {section.steps.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              "relative grid gap-4 pb-10 sm:grid-cols-[auto_1fr] sm:gap-6",
              index < section.steps.length - 1 && "sm:pb-12",
            )}
          >
            <div className="flex flex-col items-center sm:items-start">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-ds-full border border-glass-border-dark bg-glass-dark/60 text-sm font-bold text-electric-cyan">
                {step.step}
              </span>
              {index < section.steps.length - 1 ? (
                <span
                  className="mt-2 hidden h-full w-px bg-glass-border-dark sm:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <div className="min-w-0 pb-2">
              <h3 className="text-lg font-semibold text-on-dark sm:text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
