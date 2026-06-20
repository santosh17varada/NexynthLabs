import { roadmapReadinessLabels } from "@/config/roadmap";
import type { RoadmapItemReadiness } from "@/types/roadmap";
import { cn } from "@/lib/cn";

const readinessStyles: Record<RoadmapItemReadiness, string> = {
  live: "bg-emerald-500/15 text-foreground border-emerald-500/30",
  in_progress: "bg-amber-500/15 text-foreground border-amber-500/30",
  planned: "bg-primary/10 text-primary border-primary/20",
  exploratory: "bg-surface text-muted border-border",
};

export function RoadmapReadinessBadge({ readiness }: { readiness: RoadmapItemReadiness }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        readinessStyles[readiness],
      )}
    >
      {roadmapReadinessLabels[readiness]}
    </span>
  );
}

/** @deprecated Use RoadmapReadinessBadge */
export function RoadmapStatusBadge({ status }: { status: RoadmapItemReadiness }) {
  return <RoadmapReadinessBadge readiness={status} />;
}
