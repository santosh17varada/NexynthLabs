import { PageSection } from "@/components/layout/PageSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductShowcaseVisual } from "@/components/product-showcase/ProductShowcaseVisual";
import type { ProductShowcaseFeature } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type ProductFeatureSectionProps = {
  productId: string;
  feature: ProductShowcaseFeature;
  reverse?: boolean;
  variant?: "default" | "surface" | "muted" | "dark";
};

export function ProductFeatureSection({
  productId,
  feature,
  reverse = false,
  variant = "default",
}: ProductFeatureSectionProps) {
  const isDark = variant === "dark";

  return (
    <PageSection id={feature.id} variant={variant}>
      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="min-w-0">
          <SectionHeading
            eyebrow={feature.eyebrow}
            title={feature.title}
            description={feature.description}
            tone={isDark ? "dark" : "light"}
          />
          {feature.readiness ? (
            <p
              className={cn(
                "mt-4 inline-flex rounded-ds-full px-3 py-1 text-xs font-semibold",
                isDark ? "bg-electric-cyan/15 text-electric-cyan" : "bg-electric-violet/15 text-foreground",
              )}
            >
              {feature.readiness}
            </p>
          ) : null}
          {feature.bullets && feature.bullets.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span
                    className={cn(
                      "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                      isDark ? "bg-electric-cyan" : "bg-electric-blue",
                    )}
                    aria-hidden="true"
                  />
                  <span className={isDark ? "text-on-dark-muted" : undefined}>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <ProductShowcaseVisual
          productId={productId}
          visual={feature.visual}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        />
      </div>
    </PageSection>
  );
}

type FeatureWalkthroughProps = {
  productId: string;
  eyebrow: string;
  title: string;
  description?: string;
  steps: readonly import("@/types/product-showcase").WalkthroughStep[];
  variant?: "default" | "surface" | "muted";
  embedded?: boolean;
};

export function FeatureWalkthrough({
  productId,
  eyebrow,
  title,
  description,
  steps,
  variant = "surface",
  embedded = false,
}: FeatureWalkthroughProps) {
  const content = (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <ol className={embedded ? "mt-6 space-y-6" : "mt-10 space-y-8"}>
        {steps.map((step, index) => (
          <li key={step.id}>
            <Card variant="glass" padding="sm" className="overflow-hidden sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                <div>
                  {step.step ? (
                    <span className="text-eyebrow text-electric-blue">{step.step}</span>
                  ) : (
                    <span className="text-eyebrow text-electric-blue">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {step.description}
                  </p>
                </div>
                <ProductShowcaseVisual productId={productId} visual={step.visual} />
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </>
  );

  if (embedded) {
    return <div>{content}</div>;
  }

  return <PageSection variant={variant}>{content}</PageSection>;
}
