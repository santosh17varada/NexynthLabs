import { CaseStudyGetPanditVisual } from "@/components/case-studies/CaseStudyGetPanditVisual";
import { getPanditMockupVariant, isGetPanditPortfolioImage } from "@/lib/getpandit-visual";
import type { CaseStudyImage } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyImageFigureProps = {
  image: CaseStudyImage;
  priority?: boolean;
  aspect?: "video" | "wide";
  className?: string;
};

export function CaseStudyImageFigure({
  image,
  aspect = "video",
  className,
}: CaseStudyImageFigureProps) {
  if (isGetPanditPortfolioImage(image.src)) {
    return (
      <CaseStudyGetPanditVisual
        variant={getPanditMockupVariant(image.src)}
        caption={image.caption}
        ariaLabel={image.alt}
        className={className}
      />
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
        className={cn(
          "relative flex w-full items-center justify-center bg-gradient-to-br from-primary/[0.04] via-surface to-electric-blue/[0.06]",
          aspect === "video" ? "aspect-[16/9]" : "aspect-[16/10]",
        )}
      >
        <p className="max-w-sm px-6 text-center text-sm text-muted">
          Visual preview unavailable — product story mockup coming soon.
        </p>
      </div>
      {image.caption ? (
        <figcaption className="border-t border-border/60 px-4 py-3 text-sm text-muted sm:px-6">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type CaseStudyImageGalleryProps = {
  images: readonly CaseStudyImage[];
  heroPriority?: boolean;
};

export function CaseStudyImageGallery({
  images,
  heroPriority = true,
}: CaseStudyImageGalleryProps) {
  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <div className="space-y-6">
      <CaseStudyImageFigure image={hero} priority={heroPriority} />
      {rest.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((image) => (
            <CaseStudyImageFigure key={image.src} image={image} aspect="wide" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
