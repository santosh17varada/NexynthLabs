import { InnovationLabStatusBadge } from "@/components/innovation-lab/InnovationLabStatusBadge";
import {
  innovationLabStatusDescriptions,
  innovationLabStatusLabels,
} from "@/config/innovation-lab";
import type { InnovationLabStatus } from "@/types/innovation-lab";

const statusOrder: InnovationLabStatus[] = ["live", "prototype", "planned", "concept"];

export function InnovationLabStatusLegend() {
  return (
    <div aria-label="Status legend" className="mt-6 space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        {statusOrder.map((status) => (
          <InnovationLabStatusBadge key={status} status={status} />
        ))}
      </div>
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {statusOrder.map((status) => (
          <li
            key={status}
            className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm"
          >
            <span className="font-semibold text-foreground">
              {innovationLabStatusLabels[status]}
            </span>
            <span className="text-muted"> — {innovationLabStatusDescriptions[status]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
