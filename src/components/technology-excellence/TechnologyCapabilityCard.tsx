import { Card } from "@/components/ui/Card";
import type { TechnologyCapability } from "@/types/technology-excellence";

export function TechnologyCapabilityCard({
  capability,
}: {
  capability: TechnologyCapability;
}) {
  return (
    <Card
      as="article"
      className="flex h-full flex-col border-border/70 p-5 transition-shadow hover:shadow-elevated sm:p-6"
    >
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-bold uppercase tracking-wide text-primary"
        aria-hidden="true"
      >
        {capability.name.slice(0, 2)}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
        {capability.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-electric-violet">{capability.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {capability.description}
      </p>
      <ul className="mt-5 space-y-2">
        {capability.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
