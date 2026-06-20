import { innovationLabStatusLabels } from "@/config/innovation-lab";
import type { InnovationLabStatus } from "@/types/innovation-lab";

const statusStyles: Record<InnovationLabStatus, string> = {
  live: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  prototype: "bg-amber-500/15 text-foreground border-amber-500/30",
  planned: "bg-primary/10 text-primary border-primary/20",
  concept: "bg-surface text-muted border-border",
};

export function InnovationLabStatusBadge({ status }: { status: InnovationLabStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {innovationLabStatusLabels[status]}
    </span>
  );
}
