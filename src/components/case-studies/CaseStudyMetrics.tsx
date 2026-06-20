import { ProductSuccessMetrics } from "@/components/social-proof/ProductSuccessMetrics";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import type { CaseStudyMetric } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyMetricsProps = {
  metrics: readonly CaseStudyMetric[];
  showHeading?: boolean;
  showDisclaimer?: boolean;
  className?: string;
};

export function CaseStudyMetrics({
  metrics,
  showHeading = true,
  showDisclaimer = true,
  className,
}: CaseStudyMetricsProps) {
  const { metrics: copy } = caseStudiesPageCopy;

  return (
    <ProductSuccessMetrics
      metrics={metrics}
      eyebrow={copy.eyebrow}
      title={copy.title}
      showHeading={showHeading}
      showDisclaimer={showDisclaimer}
      disclaimer={copy.disclaimer}
      className={cn(className)}
    />
  );
}
