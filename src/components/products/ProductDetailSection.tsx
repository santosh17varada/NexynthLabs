import Link from "next/link";
import { ProductCapabilitiesGrid } from "@/components/products/ProductCapabilitiesGrid";
import { ProductCtaGroup } from "@/components/products/ProductCtaGroup";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Product } from "@/config/products";
import { getPanditPageCopy, getProductHostname } from "@/config/products";

type ProductDetailSectionProps = {
  product: Product;
  variant?: "full" | "compact";
};

export function ProductDetailSection({
  product,
  variant = "full",
}: ProductDetailSectionProps) {
  const productHost = getProductHostname(product);
  const isCompact = variant === "compact";

  return (
    <div className="space-y-12 sm:space-y-16">
      <section>
        <div className="flex flex-wrap items-center gap-3">
          {product.isFlagship && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Flagship
            </span>
          )}
          <ProductStatusBadge status={product.status} />
        </div>
        <p className="mt-4 text-sm font-medium text-electric-violet sm:text-base">
          {product.tagline}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {product.positioning}
        </p>
        {!isCompact && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {product.description}
          </p>
        )}
        <div className="mt-8">
          <ProductCtaGroup
            ctas={product.ctas}
            layout={isCompact ? "row" : "grid"}
            size="lg"
          />
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Features"
          title="What you get"
          description="Core experiences on the product domain today, with integrations ready to scale."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface px-4 py-3 text-sm text-muted"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <ProductCapabilitiesGrid
        capabilities={product.capabilities}
        title={getPanditPageCopy.capabilitiesTitle}
        description={
          isCompact ? undefined : getPanditPageCopy.capabilitiesDescription
        }
      />

      <section>
        <div className="grid gap-6 md:grid-cols-3">
          {product.highlights.map((item) => (
            <Card key={item.title} as="article">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <h2 className="text-xl font-semibold text-foreground">
          {getPanditPageCopy.separationTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {product.name} lives at{" "}
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
          >
            {productHost}
          </a>{" "}
          so booking, payments, and notifications evolve independently from this
          corporate site.{" "}
          {isCompact ? (
            <Link href={product.internalHref} className="font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline">
              View full {product.name} overview →
            </Link>
          ) : (
            "This page is informational — book and pay on the product domain."
          )}
        </p>
      </Card>
    </div>
  );
}
