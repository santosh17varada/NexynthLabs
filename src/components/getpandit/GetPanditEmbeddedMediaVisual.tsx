import { CaseStudyDeliveryStoryVisual } from "@/components/case-studies/CaseStudyDeliveryStoryVisual";

type GetPanditEmbeddedMediaVisualProps = {
  ariaLabel: string;
  className?: string;
};

export function GetPanditEmbeddedMediaVisual({
  ariaLabel,
  className,
}: GetPanditEmbeddedMediaVisualProps) {
  return (
    <CaseStudyDeliveryStoryVisual
      ariaLabel={ariaLabel}
      compact
      className={className}
    />
  );
}
