import { PageSection } from "@/components/layout/PageSection";
import { EngineeringDiagram } from "@/components/engineering/EngineeringDiagram";
import { EngineeringInteractiveCard } from "@/components/engineering/EngineeringInteractiveCard";
import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  engineeringExcellenceCopy,
  type EngineeringPillar,
} from "@/config/engineering-excellence";
import { cn } from "@/lib/cn";

export function EngineeringPhilosophySection() {
  const { philosophy } = engineeringExcellenceCopy;

  return (
    <PageSection id="architecture-philosophy" variant="surface">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow={philosophy.eyebrow}
            title={philosophy.title}
            description={philosophy.description}
          />
          <ol className="mt-8 space-y-4">
            {philosophy.principles.map((principle) => (
              <li key={principle.id}>
                <Card variant="glass" padding="sm" className="sm:p-5">
                  <span className="text-eyebrow text-electric-blue">{principle.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {principle.description}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
        <EngineeringDiagram
          variant={philosophy.diagram}
          className="lg:sticky lg:top-28"
        />
      </div>
    </PageSection>
  );
}

type EngineeringPillarSectionProps = {
  pillar: EngineeringPillar;
  reverse?: boolean;
  variant?: "default" | "surface" | "muted" | "dark";
};

export function EngineeringPillarSection({
  pillar,
  reverse = false,
  variant = "default",
}: EngineeringPillarSectionProps) {
  const isDark = variant === "dark";

  return (
    <PageSection id={pillar.id} variant={variant}>
      <div
        className={cn(
          "grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="min-w-0">
          <SectionHeading
            eyebrow={pillar.eyebrow}
            title={pillar.title}
            description={pillar.description}
            tone={isDark ? "dark" : "light"}
          />
          <ul className="mt-6 space-y-3">
            {pillar.bullets.map((bullet) => (
              <li
                key={bullet}
                className={cn(
                  "flex items-start gap-3 text-sm sm:text-base",
                  isDark ? "text-on-dark-muted" : "text-muted",
                )}
              >
                <span
                  className={cn(
                    "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                    isDark ? "bg-electric-cyan" : "bg-electric-violet",
                  )}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {pillar.cta ? (
            <div className="mt-6">
              <Button
                href={pillar.cta.href}
                variant={isDark ? "gradient" : "outline"}
                size="md"
              >
                {pillar.cta.label}
              </Button>
            </div>
          ) : null}
        </div>

        <EngineeringDiagram
          variant={pillar.diagram}
          tone={isDark ? "dark" : "light"}
          className="lg:sticky lg:top-28"
        />
      </div>

      <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-3 sm:gap-4">
        {pillar.highlights.map((item, index) => (
          <EngineeringInteractiveCard
            key={item.id}
            item={item}
            defaultOpen={index === 0}
            tone={isDark ? "dark" : "light"}
          />
        ))}
      </div>
    </PageSection>
  );
}

export function EngineeringPillars() {
  const variants: Array<"default" | "surface" | "muted" | "dark"> = [
    "muted",
    "surface",
    "default",
    "muted",
    "surface",
    "default",
    "muted",
    "surface",
    "default",
    "dark",
  ];

  return (
    <>
      {engineeringExcellenceCopy.pillars.map((pillar, index) => (
        <EngineeringPillarSection
          key={pillar.id}
          pillar={pillar}
          reverse={index % 2 === 1}
          variant={variants[index] ?? "default"}
        />
      ))}
    </>
  );
}

const categoryAccent: Record<string, string> = {
  Web: "from-electric-blue/20 to-electric-blue/5",
  Runtime: "from-primary/20 to-primary/5",
  API: "from-electric-violet/20 to-electric-violet/5",
  Data: "from-electric-cyan/20 to-electric-cyan/5",
  Cloud: "from-electric-blue/15 to-electric-cyan/10",
  Edge: "from-electric-violet/15 to-electric-blue/10",
  Ops: "from-primary/15 to-electric-violet/10",
  AI: "from-electric-violet/25 to-electric-blue/10",
  Integrations: "from-electric-cyan/20 to-electric-blue/5",
  Mobile: "from-electric-blue/20 to-electric-cyan/10",
};

export function EngineeringTechStackSection() {
  const { techStack } = engineeringExcellenceCopy;

  return (
    <HomeDarkSection id="technology-stack">
      <SectionHeading
        eyebrow={techStack.eyebrow}
        title={techStack.title}
        description={techStack.description}
        tone="dark"
      />

      <ul
        className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4"
        aria-label="Technology stack"
      >
        {techStack.items.map((item) => (
          <li key={item.id}>
            <div
              className={cn(
                "inline-flex min-h-11 flex-col justify-center rounded-ds-lg border border-glass-border-dark bg-gradient-to-br px-4 py-3 shadow-glass-dark backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-cyan/35 hover:shadow-glow sm:px-5",
                categoryAccent[item.category] ?? "from-glass-dark/80 to-glass-dark/60",
              )}
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-electric-cyan">
                {item.category}
              </span>
              <span className="mt-0.5 text-sm font-semibold text-on-dark sm:text-base">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-on-dark-muted">
        {techStack.footnote}
      </p>
    </HomeDarkSection>
  );
}

export function EngineeringDisclaimer() {
  return (
    <PageSection variant="default" divider={false} containerClassName="py-8 sm:py-10">
      <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
        {engineeringExcellenceCopy.disclaimer}
      </p>
    </PageSection>
  );
}
