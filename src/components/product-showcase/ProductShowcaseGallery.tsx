import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductShowcaseVisual } from "@/components/product-showcase/ProductShowcaseVisual";
import type { ShowcaseVisual } from "@/types/product-showcase";

type ProductShowcaseGalleryProps = {
  productId: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: readonly ShowcaseVisual[];
  variant?: "default" | "surface" | "muted";
  columns?: 2 | 3;
  embedded?: boolean;
};

export function ProductShowcaseGallery({
  productId,
  eyebrow,
  title,
  description,
  items,
  variant = "surface",
  columns = 2,
  embedded = false,
}: ProductShowcaseGalleryProps) {
  const gridClass =
    columns === 3
      ? "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      : "mt-10 grid gap-6 sm:grid-cols-2";

  const content = (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className={embedded ? "mt-6 grid gap-6 sm:grid-cols-2" : gridClass}>
        {items.map((visual, index) => (
          <div key={`${visual.type}-${index}`} className="min-w-0">
            <ProductShowcaseVisual productId={productId} visual={visual} />
          </div>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return <div>{content}</div>;
  }

  return <PageSection variant={variant}>{content}</PageSection>;
}
