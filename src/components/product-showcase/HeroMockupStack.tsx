import { ProductShowcaseVisual } from "@/components/product-showcase/ProductShowcaseVisual";
import { ScreenshotMockup } from "@/components/product-showcase/ScreenshotMockup";
import type { ProductMockupAsset, ShowcaseVisual } from "@/types/product-showcase";
import { cn } from "@/lib/cn";

type HeroMockupStackProps = {
  productId: string;
  mockup: ProductMockupAsset;
  overlay?: ShowcaseVisual;
  priority?: boolean;
  className?: string;
  tone?: "light" | "dark";
};

export function HeroMockupStack({
  productId,
  mockup,
  overlay,
  priority = false,
  className,
  tone = "dark",
}: HeroMockupStackProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("relative mx-auto w-full max-w-xl lg:max-w-none", className)}>
      <div
        className={cn(
          "pointer-events-none absolute -right-4 top-8 h-32 w-32 rounded-full blur-3xl sm:-right-8 sm:h-48 sm:w-48",
          isDark ? "bg-electric-violet/25" : "bg-electric-violet/20",
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-6 -left-4 h-28 w-28 rounded-full blur-3xl",
          isDark ? "bg-electric-cyan/20" : "bg-primary/15",
        )}
        aria-hidden="true"
      />

      <ScreenshotMockup asset={mockup} priority={priority} tone={tone} />

      {overlay ? (
        <div className="absolute -bottom-6 -right-2 w-[42%] sm:-bottom-8 sm:-right-4 sm:w-[38%]">
          <ProductShowcaseVisual productId={productId} visual={overlay} />
        </div>
      ) : null}
    </div>
  );
}
