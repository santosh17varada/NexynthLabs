import { CaseStudyGetPanditFeatureChips } from "@/components/case-studies/CaseStudyGetPanditFeatureChips";
import { GetPanditDeviceShowcaseComposition } from "@/components/getpandit/GetPanditDeviceShowcaseComposition";
import { cn } from "@/lib/cn";

type CaseStudyGetPanditCardVisualProps = {
  url?: string;
  className?: string;
};

/** Delivery Stories card visual — bounded stage, overlapping devices, chips flush below. */
export function CaseStudyGetPanditCardVisual({
  url = "getpandit.com",
  className,
}: CaseStudyGetPanditCardVisualProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden bg-gradient-to-br from-electric-violet/[0.06] via-surface to-electric-blue/[0.08] px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className="pointer-events-none absolute inset-x-[10%] top-[8%] h-14 rounded-full bg-gradient-to-br from-electric-violet/16 via-electric-blue/8 to-electric-cyan/8 blur-2xl"
          aria-hidden="true"
        />
        <GetPanditDeviceShowcaseComposition url={url} variant="card" />
      </div>

      <CaseStudyGetPanditFeatureChips className="border-t border-border/40 bg-surface/70 px-3 py-2 sm:px-4 sm:py-2.5" />
    </div>
  );
}
