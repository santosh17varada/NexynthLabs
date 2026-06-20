"use client";

import { Button } from "@/components/ui/Button";
import type { ProductCta, ProductCtaVariant } from "@/config/products";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type ProductCtaGroupProps = {
  ctas: readonly ProductCta[];
  layout?: "row" | "grid";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const defaultVariant: ProductCtaVariant = "outline";

export function ProductCtaGroup({
  ctas,
  layout = "row",
  size = "md",
  className = "",
}: ProductCtaGroupProps) {
  const layoutClass =
    layout === "grid"
      ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
      : "mobile-cta-stack flex flex-col gap-3 md:flex-row md:flex-wrap";

  return (
    <div className={`${layoutClass} ${className}`}>
      {ctas.map((cta) => (
        <Button
          key={cta.id}
          href={cta.href}
          external={cta.external}
          variant={cta.variant ?? defaultVariant}
          size={size}
          className="w-full sm:w-auto"
          onClick={() => {
            if (cta.external && cta.href.includes("getpandit.com")) {
              trackPlannedEvent("getpandit_cta_click", {
                cta_id: cta.id,
                href: cta.href,
              });
            }
          }}
        >
          {cta.label}
        </Button>
      ))}
    </div>
  );
}
