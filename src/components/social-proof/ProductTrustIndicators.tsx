import { SocialProofDisclaimer } from "@/components/social-proof/SocialProofDisclaimer";
import { SocialProofSection } from "@/components/social-proof/SocialProofSection";
import { getProductTrustIndicators, socialProofContentCopy } from "@/config/social-proof-content";
import type { ProductTrustIndicator, ProductTrustIndicatorStatus } from "@/types/social-proof";
import { cn } from "@/lib/cn";

const statusLabels: Record<ProductTrustIndicatorStatus, string> = {
  available: "Available",
  ready: "Integration-ready",
  planned: "Planned",
};

const statusStyles: Record<ProductTrustIndicatorStatus, string> = {
  available: "bg-electric-cyan/15 text-foreground border-electric-cyan/25",
  ready: "bg-electric-blue/10 text-foreground border-electric-blue/20",
  planned: "bg-surface text-muted border-border/70",
};

type ProductTrustIndicatorCardProps = {
  indicator: ProductTrustIndicator;
};

function ProductTrustIndicatorCard({ indicator }: ProductTrustIndicatorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-ds-lg border border-glass-border bg-glass/90 p-5 shadow-soft backdrop-blur-sm sm:p-6">
      <span
        className={cn(
          "inline-flex w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold",
          statusStyles[indicator.status],
        )}
      >
        {statusLabels[indicator.status]}
      </span>
      <h3 className="mt-3 text-base font-semibold text-foreground sm:text-lg">{indicator.label}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{indicator.description}</p>
    </article>
  );
}

type ProductTrustIndicatorsProps = {
  productSlug: string;
  indicators?: readonly ProductTrustIndicator[];
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "section" | "inline";
  showDisclaimer?: boolean;
  className?: string;
};

export function ProductTrustIndicators({
  productSlug,
  indicators,
  eyebrow,
  title,
  description,
  variant = "inline",
  showDisclaimer = true,
  className,
}: ProductTrustIndicatorsProps) {
  const copy = socialProofContentCopy.productTrustIndicators;
  const items = indicators ?? getProductTrustIndicators(productSlug);

  if (items.length === 0) {
    return null;
  }

  const grid = (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((indicator) => (
        <ProductTrustIndicatorCard key={indicator.id} indicator={indicator} />
      ))}
    </div>
  );

  if (variant === "section") {
    return (
      <SocialProofSection
        eyebrow={eyebrow ?? copy.eyebrow}
        title={title ?? copy.title}
        description={description ?? copy.description}
        disclaimerKind="trust"
        showDisclaimer={showDisclaimer}
        variant="surface"
        className={className}
      >
        {grid}
      </SocialProofSection>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {grid}
      {showDisclaimer ? (
        <SocialProofDisclaimer
          kind="trust"
          text="Readiness labels describe platform capability — not unaudited performance statistics."
        />
      ) : null}
    </div>
  );
}
