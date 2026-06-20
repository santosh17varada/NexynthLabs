import { GetPanditHeroInteractiveMockup } from "@/components/getpandit/GetPanditHeroInteractiveMockup";
import { previewToVisual } from "@/config/product-showcase";
import { BrowserFrame, PhoneFrame } from "@/components/product-showcase/DeviceFrames";
import { ProductShowcaseVisual } from "@/components/product-showcase/ProductShowcaseVisual";
import { getPanditPreviewRegistry } from "@/components/product-showcase/preview-registry/getpandit";
import type { GetPanditPreviewId } from "@/config/getpandit-marketing";
import { cn } from "@/lib/cn";

export { BrowserFrame, PhoneFrame };

type GetPanditUiPreviewProps = {
  preview: GetPanditPreviewId;
  url?: string;
  variant?: "browser" | "phone" | "plain";
  className?: string;
};

function variantToDevice(variant: GetPanditUiPreviewProps["variant"]) {
  if (variant === "phone") return "mobile" as const;
  if (variant === "plain") return "plain" as const;
  return "browser" as const;
}

export function GetPanditUiPreview({
  preview,
  url = "getpandit.com",
  variant = "browser",
  className,
}: GetPanditUiPreviewProps) {
  return (
    <ProductShowcaseVisual
      productId="getpandit"
      visual={previewToVisual(preview, { urlBar: url, device: variantToDevice(variant) })}
      className={className}
    />
  );
}

type GetPanditHeroMockupStackProps = {
  urlBar: string;
};

export function GetPanditHeroMockupStack({ urlBar }: GetPanditHeroMockupStackProps) {
  return <GetPanditHeroInteractiveMockup urlBar={urlBar} />;
}

/** @deprecated Internal registry access — prefer GetPanditHeroInteractiveMockup */
export function GetPanditPreviewFallback({
  preview,
  className,
}: {
  preview: GetPanditPreviewId;
  className?: string;
}) {
  const Preview = getPanditPreviewRegistry[preview];
  return (
    <div className={cn(className)}>
      <Preview />
    </div>
  );
}

