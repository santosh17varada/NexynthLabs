import Link from "next/link";
import { PageSection } from "@/components/layout/PageSection";
import { AiArchitectureDiagram } from "@/components/ai/AiArchitectureDiagram";
import { AiCapabilityInteractiveCard } from "@/components/ai/AiCapabilityInteractiveCard";
import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { HomeDarkCard } from "@/components/home/HomeDarkCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aiCapabilityCopy,
  type AiCapabilityPillar,
} from "@/config/ai-capability";
import { cn } from "@/lib/cn";

export function AiStrategySection() {
  const { strategy } = aiCapabilityCopy;

  return (
    <PageSection id="ai-strategy" variant="surface">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow={strategy.eyebrow}
            title={strategy.title}
            description={strategy.description}
          />
          <ol className="mt-8 space-y-4">
            {strategy.phases.map((phase) => (
              <li key={phase.id}>
                <Card variant="glass" padding="sm" className="sm:p-5">
                  <span className="text-eyebrow text-electric-blue">{phase.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {phase.description}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
        <AiArchitectureDiagram variant={strategy.architecture} className="lg:sticky lg:top-28" />
      </div>
    </PageSection>
  );
}

type AiPillarSectionProps = {
  pillar: AiCapabilityPillar;
  reverse?: boolean;
  variant?: "default" | "surface" | "muted" | "dark";
};

export function AiPillarSection({
  pillar,
  reverse = false,
  variant = "default",
}: AiPillarSectionProps) {
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

        <AiArchitectureDiagram
          variant={pillar.architecture}
          tone={isDark ? "dark" : "light"}
          className="lg:sticky lg:top-28"
        />
      </div>

      <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-3 sm:gap-4">
        {pillar.highlights.map((item, index) => (
          <AiCapabilityInteractiveCard key={item.id} item={item} defaultOpen={index === 0} />
        ))}
      </div>
    </PageSection>
  );
}

export function AiCapabilityPillars() {
  const variants: Array<"default" | "surface" | "muted" | "dark"> = [
    "muted",
    "surface",
    "default",
    "muted",
    "surface",
    "default",
    "dark",
    "muted",
  ];

  return (
    <>
      {aiCapabilityCopy.pillars.map((pillar, index) => (
        <AiPillarSection
          key={pillar.id}
          pillar={pillar}
          reverse={index % 2 === 1}
          variant={variants[index] ?? "default"}
        />
      ))}
    </>
  );
}

export function AiWhyNexynthSection() {
  const { whyNexynth } = aiCapabilityCopy;

  return (
    <HomeDarkSection id="why-nexynth-ai">
      <SectionHeading
        eyebrow={whyNexynth.eyebrow}
        title={whyNexynth.title}
        description={whyNexynth.description}
        tone="dark"
      />
      <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {whyNexynth.reasons.map((reason) => (
          <HomeDarkCard key={reason.id} as="article">
            <h3 className="text-lg font-semibold text-on-dark">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-on-dark-muted sm:text-base">
              {reason.description}
            </p>
          </HomeDarkCard>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/about" variant="glass" size="lg" className="border-on-dark/25 text-on-dark hover:bg-white/10">
          About Nexynth Labs
        </Button>
        <Link
          href="/innovation-lab"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-cyan transition-colors hover:text-on-dark hover:underline"
        >
          Innovation Lab →
        </Link>
      </div>
    </HomeDarkSection>
  );
}

export function AiCapabilityDisclaimer() {
  return (
    <PageSection variant="default" divider={false} containerClassName="py-8 sm:py-10">
      <p className="mx-auto max-w-3xl text-center text-xs text-muted sm:text-sm">
        {aiCapabilityCopy.disclaimer}
      </p>
    </PageSection>
  );
}
