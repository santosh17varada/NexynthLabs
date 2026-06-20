import { developerReadinessLabels } from "@/config/developers";
import type { DeveloperReadinessStatus } from "@/types/developers";

const statusStyles: Record<DeveloperReadinessStatus, string> = {
  vision: "bg-surface text-muted border-border",
  planned: "bg-primary/10 text-primary border-primary/20",
  "coming-soon": "bg-electric-violet/15 text-foreground border-electric-blue/30",
  "in-design": "bg-amber-500/15 text-foreground border-amber-500/30",
};

export function DevelopersStatusBadge({ status }: { status: DeveloperReadinessStatus }) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {developerReadinessLabels[status]}
    </span>
  );
}
