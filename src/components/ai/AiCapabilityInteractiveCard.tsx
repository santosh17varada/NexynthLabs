"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { AiCapabilityHighlight } from "@/config/ai-capability";

type AiCapabilityInteractiveCardProps = {
  item: AiCapabilityHighlight;
  defaultOpen?: boolean;
};

export function AiCapabilityInteractiveCard({
  item,
  defaultOpen = false,
}: AiCapabilityInteractiveCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      className={cn(
        "group w-full rounded-ds-lg border p-4 text-left transition-all duration-300 sm:p-5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40 focus-visible:ring-offset-2",
        open
          ? "border-electric-violet/35 bg-gradient-brand-subtle shadow-elevated"
          : "border-glass-border bg-glass/90 shadow-soft hover:-translate-y-0.5 hover:border-electric-blue/30 hover:shadow-elevated",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
        <span
          className={cn(
            "shrink-0 text-muted transition-transform duration-200",
            open && "rotate-45 text-electric-violet",
          )}
          aria-hidden="true"
        >
          +
        </span>
      </div>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed text-muted transition-all duration-300",
          open ? "opacity-100" : "line-clamp-2 opacity-80 group-hover:opacity-100",
        )}
      >
        {item.description}
      </p>
    </button>
  );
}
