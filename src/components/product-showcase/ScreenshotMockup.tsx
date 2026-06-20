import Image from "next/image";
import { CaseStudyGetPanditVisual } from "@/components/case-studies/CaseStudyGetPanditVisual";
import { BrowserFrame } from "@/components/product-showcase/DeviceFrames";
import { getPanditMockupVariant, isGetPanditPortfolioImage } from "@/lib/getpandit-visual";
import type { ProductMockupAsset } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type ScreenshotMockupProps = {
  asset: ProductMockupAsset;
  priority?: boolean;
  className?: string;
  tone?: "light" | "dark";
};

export function ScreenshotMockup({
  asset,
  priority = false,
  className,
  tone = "light",
}: ScreenshotMockupProps) {
  if (isGetPanditPortfolioImage(asset.imageSrc)) {
    return (
      <CaseStudyGetPanditVisual
        variant={getPanditMockupVariant(asset.imageSrc)}
        caption={asset.caption}
        ariaLabel={asset.imageAlt}
        className={className}
      />
    );
  }

  const isDark = tone === "dark";

  return (
    <figure className={cn("mobile-bleed-guard relative mx-auto w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-ds-lg border shadow-2xl sm:rounded-ds-xl",
          isDark
            ? "border-glass-border-dark bg-glass-dark/40 shadow-glass-dark"
            : "border-border/80 bg-surface shadow-primary/10",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 border-b px-3 py-2.5 sm:px-4 sm:py-3",
            isDark ? "border-glass-border-dark" : "border-border/60 bg-primary/[0.04]",
          )}
        >
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
          </span>
          {asset.urlBar ? (
            <div
              className={cn(
                "min-w-0 flex-1 truncate rounded-md border px-2 py-1 text-center text-[0.65rem] sm:text-xs",
                isDark
                  ? "border-glass-border-dark text-on-dark-muted"
                  : "border-border/60 bg-background text-muted",
              )}
            >
              {asset.urlBar}
            </div>
          ) : null}
        </div>
        <div className="relative aspect-[1200/630] w-full bg-primary/[0.03]">
          {asset.imageSrc.endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element -- SVG mockups render reliably with native img
            <img
              src={asset.imageSrc}
              alt={asset.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <Image
              src={asset.imageSrc}
              alt={asset.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
              priority={priority}
            />
          )}
        </div>
      </div>
      {asset.caption ? (
        <figcaption className="mt-3 text-center text-xs text-muted sm:text-sm">{asset.caption}</figcaption>
      ) : null}
    </figure>
  );
}

type ScreenshotInDeviceProps = {
  asset: ProductMockupAsset;
  device?: "browser" | "mobile" | "dashboard" | "tablet";
  className?: string;
};

export function ScreenshotInDevice({
  asset,
  device = "browser",
  className,
}: ScreenshotInDeviceProps) {
  if (isGetPanditPortfolioImage(asset.imageSrc)) {
    return (
      <CaseStudyGetPanditVisual
        variant={getPanditMockupVariant(asset.imageSrc)}
        ariaLabel={asset.imageAlt}
        className={className}
      />
    );
  }

  if (device === "mobile") {
    return (
      <div className={cn("mx-auto w-[min(100%,240px)]", className)}>
        <div className="overflow-hidden rounded-[1.75rem] border-[3px] border-foreground/10 bg-surface p-2 shadow-floating">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem]">
            {asset.imageSrc.endsWith(".svg") ? (
              // eslint-disable-next-line @next/next/no-img-element -- SVG mockups render reliably with native img
              <img
                src={asset.imageSrc}
                alt={asset.imageAlt}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <Image
                src={asset.imageSrc}
                alt={asset.imageAlt}
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserFrame url={asset.urlBar} className={className}>
      <div className="relative aspect-video w-full overflow-hidden rounded-ds-md">
        {asset.imageSrc.endsWith(".svg") ? (
          // eslint-disable-next-line @next/next/no-img-element -- SVG mockups render reliably with native img
          <img
            src={asset.imageSrc}
            alt={asset.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={asset.imageSrc}
            alt={asset.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        )}
      </div>
    </BrowserFrame>
  );
}
