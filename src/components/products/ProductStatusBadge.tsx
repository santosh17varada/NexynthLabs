import type { ProductStatus } from "@/config/products";

const statusConfig: Record<
  ProductStatus,
  { label: string; className: string }
> = {
  live: {
    label: "Live",
    className: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  },
  beta: {
    label: "Beta",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  coming_soon: {
    label: "Coming soon",
    className: "bg-surface text-muted border-border",
  },
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${config.className}`}
    >
      {config.label}
    </span>
  );
}
