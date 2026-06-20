import { CaseStudyDeliveryStoryVisual } from "@/components/case-studies/CaseStudyDeliveryStoryVisual";
import { isGetPanditPortfolioImage } from "@/lib/getpandit-visual";
import { cn } from "@/lib/cn";

type CaseStudyHeroMediaProps = {
  src: string;
  alt: string;
  className?: string;
  embedded?: boolean;
};

export function CaseStudyHeroMedia({
  src,
  alt,
  className,
  embedded = false,
}: CaseStudyHeroMediaProps) {
  if (isGetPanditPortfolioImage(src)) {
    return (
      <CaseStudyDeliveryStoryVisual
        ariaLabel={alt}
        compact={embedded}
        className={cn("overflow-hidden", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full min-h-[220px] w-full items-center justify-center bg-gradient-to-br from-primary/[0.04] via-surface to-electric-blue/[0.06] p-6 text-center text-sm text-muted",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      Delivery story preview
    </div>
  );
}
