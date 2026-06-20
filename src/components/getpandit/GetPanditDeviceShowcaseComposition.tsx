import { GetPanditDiscoveryInteractivePreview } from "@/components/getpandit/GetPanditDiscoveryInteractivePreview";
import { GetPanditMobileConfirmationPreview } from "@/components/getpandit/GetPanditMobileConfirmationPreview";
import { BrowserFrame, PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { cn } from "@/lib/cn";

type GetPanditDeviceShowcaseCompositionProps = {
  url?: string;
  /** Card = compact delivery-story tile; hero = larger hero mockup stack */
  variant?: "card" | "hero";
  className?: string;
};

/**
 * Shared GetPandit product showcase — browser top-left with mobile overlapping bottom-right.
 * Matches patterns used on premium SaaS marketing sites (bounded stage, layered depth).
 */
export function GetPanditDeviceShowcaseComposition({
  url = "getpandit.com",
  variant = "card",
  className,
}: GetPanditDeviceShowcaseCompositionProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <div className={cn("relative w-full pb-8 sm:pb-9", className)}>
        <div className="relative z-10">
          <BrowserFrame
            url={url}
            tone="light"
            showDots={false}
            className="w-full shadow-elevated ring-1 ring-border/20"
            contentClassName="p-3.5 sm:p-4"
          >
            <GetPanditDiscoveryInteractivePreview compact />
          </BrowserFrame>
        </div>

        <div className="absolute right-[4%] top-[calc(100%-4.75rem)] z-20 w-[34%] min-w-[6.5rem] max-w-[10.75rem] translate-y-1 sm:translate-y-1.5">
          <PhoneFrame className="mx-0 w-full max-w-none p-1.5 shadow-floating ring-1 ring-electric-violet/25">
            <GetPanditMobileConfirmationPreview compact />
          </PhoneFrame>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[4/3] max-h-[260px] w-full overflow-hidden sm:max-h-[280px]",
        className,
      )}
    >
      <div className="absolute left-2.5 top-2.5 z-10 w-[70%] sm:left-3 sm:top-3">
        <BrowserFrame
          url={url}
          tone="light"
          showDots={false}
          className="w-full shadow-elevated ring-1 ring-border/25"
          contentClassName="overflow-hidden p-2 sm:p-2.5"
        >
          <GetPanditDiscoveryInteractivePreview compact />
        </BrowserFrame>
      </div>

      <div className="absolute bottom-1.5 right-1.5 z-20 w-[30%] min-w-[4.75rem] max-w-[7.25rem] sm:bottom-2 sm:right-2">
        <PhoneFrame className="mx-0 w-full max-w-none p-1 shadow-floating ring-1 ring-electric-violet/30">
          <GetPanditMobileConfirmationPreview compact />
        </PhoneFrame>
      </div>
    </div>
  );
}
