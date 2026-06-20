"use client";

import { CaseStudyDeliveryStoryVisual } from "@/components/case-studies/CaseStudyDeliveryStoryVisual";
import { GetPanditProductStepsPreview } from "@/components/getpandit/GetPanditProductStepsPreview";
import { cn } from "@/lib/cn";
import type { GetPanditMockupVariant } from "@/lib/getpandit-visual";

type CaseStudyGetPanditVisualProps = {
  variant?: GetPanditMockupVariant;
  caption?: string;
  className?: string;
  embedded?: boolean;
  ariaLabel?: string;
};

export function CaseStudyGetPanditVisual({
  variant = "flow",
  caption,
  className,
  embedded = false,
  ariaLabel = "GetPandit delivery story from problem through solution to outcome",
}: CaseStudyGetPanditVisualProps) {
  if (embedded) {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <CaseStudyDeliveryStoryVisual ariaLabel={ariaLabel} compact className="w-full" />
        {caption ? (
          <p className="absolute inset-x-0 bottom-0 border-t border-border/60 bg-surface/90 px-4 py-3 text-sm text-muted backdrop-blur-sm sm:px-6">
            {caption}
          </p>
        ) : null}
      </div>
    );
  }

  if (variant === "overview") {
    return (
      <figure
        className={cn(
          "overflow-hidden rounded-ds-xl border border-glass-border bg-surface shadow-soft",
          className,
        )}
      >
        <CaseStudyDeliveryStoryVisual ariaLabel={ariaLabel} />
        {caption ? (
          <figcaption className="border-t border-border/60 px-4 py-3 text-sm text-muted sm:px-6">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-ds-xl border border-glass-border bg-surface shadow-soft",
        className,
      )}
    >
      <div
        className="relative aspect-[16/9] w-full bg-gradient-to-br from-surface via-background to-primary/[0.04]"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="flex h-full flex-col p-4 sm:p-6">
          <div className="mb-4 shrink-0">
            <p className="text-sm font-semibold text-foreground sm:text-base">GetPandit booking journey</p>
            <p className="mt-0.5 text-xs text-muted sm:text-sm">
              Search, compare, book, and confirm — one product story on getpandit.com
            </p>
          </div>
          <GetPanditProductStepsPreview className="flex-1" density="compact" />
        </div>
      </div>
      {caption ? (
        <figcaption className="border-t border-border/60 px-4 py-3 text-sm text-muted sm:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
