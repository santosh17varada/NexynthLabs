import { EcosystemProductCard } from "@/components/product-ecosystem/EcosystemProductCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EcosystemProduct } from "@/types/product-ecosystem";

type EcosystemProductGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  products: readonly EcosystemProduct[];
  variant?: "default" | "muted";
};

export function EcosystemProductGrid({
  eyebrow,
  title,
  description,
  products,
  variant = "default",
}: EcosystemProductGridProps) {
  return (
    <section
      className={
        variant === "muted"
          ? "border-t border-border/60 bg-surface"
          : "border-t border-border/60"
      }
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <EcosystemProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
