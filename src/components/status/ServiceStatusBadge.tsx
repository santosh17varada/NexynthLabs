import { serviceHealthStatusLabels } from "@/config/status-page";
import type { ServiceHealthStatus } from "@/types/status-page";

const statusStyles: Record<ServiceHealthStatus, string> = {
  operational: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  degraded: "bg-amber-500/15 text-foreground border-amber-500/30",
  maintenance: "bg-primary/10 text-primary border-primary/20",
  planned: "bg-surface text-muted border-border",
};

const statusDotStyles: Record<ServiceHealthStatus, string> = {
  operational: "bg-gradient-brand",
  degraded: "bg-amber-500",
  maintenance: "bg-primary",
  planned: "bg-muted",
};

export function ServiceStatusBadge({ status }: { status: ServiceHealthStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${statusDotStyles[status]}`}
        aria-hidden="true"
      />
      {serviceHealthStatusLabels[status]}
    </span>
  );
}

export function ServiceStatusDot({ status }: { status: ServiceHealthStatus }) {
  return (
    <span
      className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${statusDotStyles[status]}`}
      aria-hidden="true"
    />
  );
}
