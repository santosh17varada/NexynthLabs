"use client";

import { CaseStudyBookingJourneyPath } from "@/components/case-studies/CaseStudyBookingJourneyPath";
import { CaseStudyGetPanditCardVisual } from "@/components/case-studies/CaseStudyGetPanditCardVisual";
import { CaseStudyJourneyRibbon } from "@/components/case-studies/CaseStudyJourneyRibbon";
import { GetPanditDeviceShowcaseComposition } from "@/components/getpandit/GetPanditDeviceShowcaseComposition";
import { cn } from "@/lib/cn";

type CaseStudyMockupLayout = "card" | "featured";

type CaseStudyMockupShowcaseProps = {
  className?: string;
  url?: string;
  layout?: CaseStudyMockupLayout;
};

/** Featured / case-study detail layout — journey ribbon + hero-scale composition. */
function CaseStudyFeaturedMockupStack({ url }: { url: string }) {
  return (
    <div className="relative mx-auto w-full max-w-lg px-4 py-5 sm:px-5 sm:py-6">
      <GetPanditDeviceShowcaseComposition url={url} variant="hero" />
    </div>
  );
}

export function CaseStudyMockupShowcase({
  className,
  url = "getpandit.com",
  layout = "featured",
}: CaseStudyMockupShowcaseProps) {
  if (layout === "card") {
    return <CaseStudyGetPanditCardVisual url={url} className={className} />;
  }

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <CaseStudyJourneyRibbon />

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric-violet/[0.07] via-surface to-electric-blue/[0.09]"
          aria-hidden="true"
        />
        <CaseStudyBookingJourneyPath />
        <CaseStudyFeaturedMockupStack url={url} />
      </div>
    </div>
  );
}
