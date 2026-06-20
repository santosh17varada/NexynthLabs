import { ecosystemStatusLabels } from "@/config/product-ecosystem";
import type { EcosystemProductStatus } from "@/types/product-ecosystem";

const statusStyles: Record<EcosystemProductStatus, string> = {
  live: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  in_progress: "bg-amber-500/15 text-foreground border-amber-500/30",
  planned: "bg-primary/10 text-primary border-primary/20",
  coming_soon: "bg-surface text-muted border-border",
};

export function EcosystemProductStatusBadge({
  status,
}: {
  status: EcosystemProductStatus;
}) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {ecosystemStatusLabels[status]}
    </span>
  );
}
