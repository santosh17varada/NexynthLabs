import { PageSection } from "@/components/layout/PageSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFeatureSection } from "@/components/product-showcase/ProductFeatureSection";
import {
  getPanditMarketingCopy,
  getPanditMarketingFaqs,
  type GetPanditMarketingFeature,
} from "@/config/getpandit-marketing";
import { getPanditShowcaseDefinition, previewToVisual } from "@/config/product-showcase";

export function GetPanditProblemSection() {
  const { problem } = getPanditMarketingCopy;

  return (
    <PageSection id="problem" variant="surface">
      <SectionHeading eyebrow={problem.eyebrow} title={problem.title} description={problem.description} />
      <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-3 sm:gap-6">
        {problem.pains.map((pain) => (
          <Card key={pain.title} variant="elevated" padding="sm" className="h-full sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">{pain.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pain.description}</p>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}

export function GetPanditHowItWorksSection() {
  const { howItWorks } = getPanditMarketingCopy;

  return (
    <PageSection id="how-it-works">
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        description={howItWorks.description}
      />
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {howItWorks.steps.map((step) => (
          <li key={step.id}>
            <Card variant="glass" padding="sm" className="h-full sm:p-6">
              <span className="text-eyebrow text-electric-blue">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </Card>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}

type FeatureSectionProps = {
  feature: GetPanditMarketingFeature;
  reverse?: boolean;
  variant?: "default" | "surface" | "muted" | "dark";
};

export function GetPanditFeatureSection({
  feature,
  reverse = false,
  variant = "default",
}: FeatureSectionProps) {
  const urlBar = getPanditShowcaseDefinition.mockup.urlBar;

  return (
    <ProductFeatureSection
      productId="getpandit"
      feature={{
        id: feature.id,
        eyebrow: feature.eyebrow,
        title: feature.title,
        description: feature.description,
        bullets: feature.bullets,
        readiness: feature.readiness,
        visual: previewToVisual(feature.preview, { urlBar }),
      }}
      reverse={reverse}
      variant={variant}
    />
  );
}

export function GetPanditJourneySection() {
  const { journey } = getPanditMarketingCopy;

  return (
    <PageSection id="customer-journey" variant="muted">
      <SectionHeading eyebrow={journey.eyebrow} title={journey.title} />
      <div className="mt-10 overflow-x-auto pb-2">
        <div className="flex min-w-[36rem] gap-3 sm:min-w-0 sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {journey.stages.map((stage, index) => (
            <div key={stage.label} className="relative flex-1">
              <Card variant="elevated" padding="sm" className="h-full text-center sm:p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-on-dark">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">{stage.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{stage.detail}</p>
              </Card>
              {index < journey.stages.length - 1 ? (
                <span
                  className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-muted lg:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export function GetPanditFaqSection() {
  const { faq, domainNote } = getPanditMarketingCopy;

  return (
    <PageSection id="faq" variant="surface">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
      <div className="mt-8 space-y-3">
        {getPanditMarketingFaqs.map((item) => (
          <details
            key={item.id}
            className="group rounded-ds-lg border border-border/70 bg-background"
          >
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left font-medium text-foreground sm:px-5 [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="border-t border-border/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5 sm:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
      <p className="mt-8 rounded-ds-lg border border-border/60 bg-primary/[0.03] px-4 py-3 text-sm text-muted">
        {domainNote}
      </p>
    </PageSection>
  );
}

export function GetPanditMarketingFeatures() {
  const features = getPanditMarketingCopy.features;
  const variants: Array<"default" | "surface" | "muted" | "dark"> = [
    "muted",
    "surface",
    "default",
    "muted",
    "dark",
    "default",
    "muted",
  ];

  return (
    <>
      {features.map((feature, index) => (
        <GetPanditFeatureSection
          key={feature.id}
          feature={feature}
          reverse={index % 2 === 1}
          variant={variants[index] ?? "default"}
        />
      ))}
    </>
  );
}
