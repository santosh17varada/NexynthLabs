import { EventStatusBadge } from "@/components/events/EventStatusBadge";
import { eventStatusDescriptions, eventStatusLabels } from "@/config/events";
import type { EventStatus } from "@/types/events";

const statusOrder: EventStatus[] = ["upcoming", "planned", "completed"];

export function EventStatusLegend() {
  return (
    <div aria-label="Event status legend" className="mt-6 space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        {statusOrder.map((status) => (
          <EventStatusBadge key={status} status={status} />
        ))}
      </div>
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
        {statusOrder.map((status) => (
          <li
            key={status}
            className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm"
          >
            <span className="font-semibold text-foreground">
              {eventStatusLabels[status]}
            </span>
            <span className="text-muted"> — {eventStatusDescriptions[status]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
