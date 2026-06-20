import { deviceFrameForType } from "@/components/product-showcase/DeviceFrames";
import { getShowcasePreviewRegistry } from "@/components/product-showcase/preview-registry";
import { ScreenshotInDevice, ScreenshotMockup } from "@/components/product-showcase/ScreenshotMockup";
import { BeforeAfterCompare } from "@/components/product-showcase/BeforeAfterCompare";
import type { ShowcaseVisual } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type ProductShowcaseVisualProps = {
  productId: string;
  visual: ShowcaseVisual;
  className?: string;
  priority?: boolean;
};

function resolveScreenshotDevice(visual: Extract<ShowcaseVisual, { type: "screenshot" }>) {
  if (visual.kind === "mobile") return "mobile" as const;
  if (visual.kind === "admin" || visual.kind === "dashboard") return "dashboard" as const;
  return visual.device;
}

export function ProductShowcaseVisual({
  productId,
  visual,
  className,
  priority = false,
}: ProductShowcaseVisualProps) {
  if (visual.type === "before-after") {
    return (
      <BeforeAfterCompare
        before={visual.before}
        after={visual.after}
        beforeLabel={visual.beforeLabel}
        afterLabel={visual.afterLabel}
        device={visual.device}
        className={className}
      />
    );
  }

  if (visual.type === "screenshot") {
    const device = resolveScreenshotDevice(visual);

    if (device === "browser") {
      return (
        <ScreenshotMockup asset={visual.asset} priority={priority} className={className} />
      );
    }

    if (device === "plain") {
      return (
        <ScreenshotMockup asset={visual.asset} priority={priority} className={className} />
      );
    }

    return (
      <ScreenshotInDevice asset={visual.asset} device={device} className={className} />
    );
  }

  const registry = getShowcasePreviewRegistry(productId);
  const Preview = registry[visual.previewId];

  if (!Preview) {
    return (
      <div
        className={cn(
          "rounded-ds-md border border-dashed border-border/60 bg-surface/50 p-6 text-center text-sm text-muted",
          className,
        )}
      >
        Preview unavailable: {visual.previewId}
      </div>
    );
  }

  return (
    <div className={className}>
      {deviceFrameForType(visual.device, visual.urlBar, <Preview />)}
    </div>
  );
}
