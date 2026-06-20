import { caseStudiesPageCopy } from "@/config/case-studies-page";
import type { CaseStudyNarrativeKey, CaseStudyStorySection } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyNarrativeSectionProps = {
  id: CaseStudyNarrativeKey;
  step: string;
  label: string;
  section: CaseStudyStorySection;
  reverse?: boolean;
};

export function CaseStudyNarrativeSection({
  id,
  step,
  label,
  section,
  reverse = false,
}: CaseStudyNarrativeSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border/60 pt-10 first:border-t-0 first:pt-0 sm:pt-12"
    >
      <div
        className={cn(
          "grid items-start gap-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-10",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="lg:sticky lg:top-28">
          <span className="text-eyebrow text-electric-violet">{step}</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {label}
          </h2>
        </div>

        <div className="min-w-0">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {section.summary}
          </p>
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue"
                    aria-hidden="true"
                  />
                  <span className="text-muted">{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type CaseStudyNarrativeProps = {
  narrative: import("@/types/portfolio").CaseStudyNarrative;
};

export function CaseStudyNarrative({ narrative }: CaseStudyNarrativeProps) {
  const { narrativeLabels } = caseStudiesPageCopy;
  const steps = [
    { step: "01", key: "challenge" as const },
    { step: "02", key: "approach" as const },
    { step: "03", key: "architecture" as const },
    { step: "04", key: "execution" as const },
    { step: "05", key: "outcome" as const },
  ];

  return (
    <div id="story-template" className="space-y-0">
      {steps.map((item, index) => (
        <CaseStudyNarrativeSection
          key={item.key}
          id={item.key}
          step={item.step}
          label={narrativeLabels[item.key]}
          section={narrative[item.key]}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
