"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { EngineeringHighlight } from "@/config/engineering-excellence";

type EngineeringInteractiveCardProps = {
  item: EngineeringHighlight;
  defaultOpen?: boolean;
  tone?: "light" | "dark";
};

export function EngineeringInteractiveCard({
  item,
  defaultOpen = false,
  tone = "light",
}: EngineeringInteractiveCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const isDark = tone === "dark";

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      className={cn(
        "group w-full rounded-ds-lg border p-4 text-left transition-all duration-300 sm:p-5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/40 focus-visible:ring-offset-2",
        open
          ? isDark
            ? "border-electric-cyan/35 bg-glass-dark/80 shadow-glass-dark"
            : "border-electric-violet/35 bg-gradient-brand-subtle shadow-elevated"
          : isDark
            ? "border-glass-border-dark bg-glass-dark/50 shadow-glass-dark hover:-translate-y-0.5 hover:border-electric-cyan/30"
            : "border-glass-border bg-glass/90 shadow-soft hover:-translate-y-0.5 hover:border-electric-blue/30 hover:shadow-elevated",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "text-sm font-semibold sm:text-base",
            isDark ? "text-on-dark" : "text-foreground",
          )}
        >
          {item.title}
        </h3>
        <span
          className={cn(
            "shrink-0 transition-transform duration-200",
            isDark ? "text-on-dark-muted" : "text-muted",
            open && (isDark ? "rotate-45 text-electric-cyan" : "rotate-45 text-electric-violet"),
          )}
          aria-hidden="true"
        >
          +
        </span>
      </div>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed transition-all duration-300",
          isDark ? "text-on-dark-muted" : "text-muted",
          open ? "opacity-100" : "line-clamp-2 opacity-80 group-hover:opacity-100",
        )}
      >
        {item.description}
      </p>
    </button>
  );
}
