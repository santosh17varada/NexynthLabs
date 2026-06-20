import Link from "next/link";
import { ProductCtaGroup } from "@/components/products/ProductCtaGroup";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Product } from "@/config/products";
import { getPrimaryCtaLabel } from "@/config/products";

export function ProductCard({ product }: { product: Product }) {
  const primaryCta = product.ctas.find((cta) => cta.id === "visit");

  return (
    <Card as="article" className="h-full">
      <div className="flex flex-wrap items-center gap-2">
        {product.isFlagship && (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            Flagship
          </span>
        )}
        <ProductStatusBadge status={product.status} />
      </div>
      <p className="mt-4 text-sm font-medium text-electric-violet">{product.tagline}</p>
      <h3 className="mt-2 text-2xl font-semibold text-foreground">
        <Link
          href={product.internalHref}
          className="transition-colors hover:text-electric-violet"
        >
          {product.name}
        </Link>
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {product.positioning}
      </p>
      <ul className="mt-6 space-y-2">
        {product.features.slice(0, 4).map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">
        {product.capabilities.length} platform capabilities ·{" "}
        {product.capabilities.filter((c) => c.status === "ready").length}{" "}
        integration-ready
      </p>
      <div className="mt-8 mobile-cta-stack flex flex-col gap-3 md:flex-row md:flex-wrap">
        <Button href={product.internalHref} variant="primary" className="w-full sm:w-auto">
          View details
        </Button>
        {primaryCta && (
          <Button href={primaryCta.href} external variant="outline" className="w-full sm:w-auto">
            {getPrimaryCtaLabel(product)}
          </Button>
        )}
      </div>
    </Card>
  );
}

export function ProductCatalogCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-ds-xl border border-border/70 bg-gradient-to-br from-surface to-background shadow-soft">
      <div className="p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          {product.isFlagship && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
              Flagship product
            </span>
          )}
          <ProductStatusBadge status={product.status} />
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {product.name}
        </h2>
        <p className="mt-2 text-base font-medium text-electric-violet">{product.tagline}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {product.positioning}
        </p>
        <div className="mt-8">
          <ProductCtaGroup ctas={product.ctas} layout="grid" size="md" />
        </div>
      </div>
    </article>
  );
}
