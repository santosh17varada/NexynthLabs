"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const PANDIT_RESULTS = [
  { name: "Pt. Ramesh Sharma", meta: "Telugu · Satyanarayana", badge: "4.9", accent: "violet" as const },
  { name: "Pt. Venkat Rao", meta: "Hindi · Griha Pravesh", badge: "Verified", accent: "blue" as const },
  { name: "Pt. Anil Kumar", meta: "Kannada · Navagraha", badge: "4.8", accent: "cyan" as const },
  { name: "Pt. Suresh Iyer", meta: "Tamil · Lakshmi Pooja", badge: "New", accent: "gold" as const },
];

const accentRing: Record<string, string> = {
  violet: "border-electric-violet/40 bg-electric-violet/8",
  blue: "border-electric-blue/40 bg-electric-blue/8",
  cyan: "border-electric-cyan/40 bg-electric-cyan/8",
  gold: "border-[#d4a017]/40 bg-[#d4a017]/8",
};

type GetPanditDiscoveryInteractivePreviewProps = {
  compact?: boolean;
};

export function GetPanditDiscoveryInteractivePreview({
  compact = false,
}: GetPanditDiscoveryInteractivePreviewProps) {
  const reducedMotion = useReducedMotion();
  const results = compact ? PANDIT_RESULTS.slice(0, 2) : PANDIT_RESULTS;

  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="flex gap-2">
        <div className="relative h-9 flex-1 overflow-hidden rounded-ds-md border border-border/60 bg-surface">
          <span className="absolute inset-y-0 left-3 flex items-center text-xs text-muted">
            Search pandits, poojas…
          </span>
          {!reducedMotion ? (
            <span className="getpandit-search-cursor absolute inset-y-0 w-0.5 bg-electric-violet/70" />
          ) : null}
        </div>
        <div className="h-9 w-16 rounded-ds-md bg-gradient-brand text-center text-xs font-semibold leading-9 text-on-dark shadow-soft">
          Filter
        </div>
      </div>

      <div className={cn("grid gap-2", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
        {results.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              "rounded-ds-md border p-3 shadow-soft transition-all duration-300",
              accentRing[item.accent],
              !reducedMotion && index === 0 && "getpandit-card-highlight",
            )}
            style={!reducedMotion ? { animationDelay: `${index * 0.4}s` } : undefined}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted">{item.meta}</p>
              </div>
              <span className="shrink-0 rounded-ds-full bg-surface px-2 py-0.5 text-[0.6rem] font-bold uppercase text-foreground shadow-soft">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
