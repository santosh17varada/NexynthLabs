import { eventStatusLabels } from "@/config/events";
import type { EventStatus } from "@/types/events";

const statusStyles: Record<EventStatus, string> = {
  upcoming: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  completed: "bg-surface text-muted border-border",
  planned: "bg-primary/10 text-primary border-primary/20",
};

export function EventStatusBadge({ status }: { status: EventStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${statusStyles[status]}`}
    >
      {eventStatusLabels[status]}
    </span>
  );
}
