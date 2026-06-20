import { PageSection } from "@/components/layout/PageSection";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveFlowDemo } from "@/components/product-demo/InteractiveFlowDemo";
import { conversionCtas } from "@/config/conversion";
import { getProductDemo } from "@/config/product-demos";
import type { ProductDemoDefinition } from "@/types/product-demo";

type ProductDemoSectionProps = {
  demoId: string;
  definition?: ProductDemoDefinition;
  variant?: "default" | "surface" | "muted" | "dark";
  showHeading?: boolean;
  embedded?: boolean;
  showConsultationCta?: boolean;
};

export function ProductDemoSection({
  demoId,
  definition,
  variant = "surface",
  showHeading = true,
  embedded = false,
  showConsultationCta = false,
}: ProductDemoSectionProps) {
  const demo = definition ?? getProductDemo(demoId);

  if (!demo) {
    return null;
  }

  const content = (
    <>
      {showHeading ? (
        <SectionHeading
          eyebrow={demo.eyebrow}
          title={demo.title}
          description={demo.description}
          tone={variant === "dark" ? "dark" : "light"}
        />
      ) : null}
      <div className={showHeading ? "mt-10" : undefined}>
        <InteractiveFlowDemo demo={demo} />
      </div>
      {showConsultationCta ? (
        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-muted">
            Want to apply this pattern to your product? Book a consultation to walk through scope and readiness.
          </p>
          <Button href={conversionCtas.consultationAi.href} variant="outline" size="lg" className="shrink-0">
            {conversionCtas.consultationAi.label}
          </Button>
        </div>
      ) : null}
    </>
  );

  if (embedded) {
    return <div id={demo.id}>{content}</div>;
  }

  return (
    <PageSection id={demo.id} variant={variant}>
      {content}
    </PageSection>
  );
}
