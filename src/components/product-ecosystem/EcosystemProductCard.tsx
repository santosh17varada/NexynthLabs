import Link from "next/link";
import { EcosystemProductStatusBadge } from "@/components/product-ecosystem/EcosystemProductStatusBadge";
import { Card } from "@/components/ui/Card";
import type { EcosystemProduct } from "@/types/product-ecosystem";

export function EcosystemProductCard({ product }: { product: EcosystemProduct }) {
  const isLive = product.status === "live";

  return (
    <Card
      as="article"
      className="flex h-full flex-col border-border/70 p-5 transition-shadow hover:shadow-elevated sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <EcosystemProductStatusBadge status={product.status} />
        {product.category === "flagship" && (
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            Flagship
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-electric-violet">{product.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {product.description}
      </p>

      <ul className="mt-5 space-y-2">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {product.links && product.links.length > 0 && (
        <div className="mt-6 flex flex-col gap-2">
          {product.links.map((link, index) =>
            link.external ? (
              <a
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
              >
                {link.label} →
              </a>
            ) : (
              <Link
                key={`${link.href}-${link.label}-${index}`}
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
              >
                {link.label} →
              </Link>
            ),
          )}
        </div>
      )}

      {!isLive && (
        <p className="mt-4 text-xs text-muted">
          Not available as a live product{product.status === "coming_soon" ? " yet" : ""}.
        </p>
      )}
    </Card>
  );
}
