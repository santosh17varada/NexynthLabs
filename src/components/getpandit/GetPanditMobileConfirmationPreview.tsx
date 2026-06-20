"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

export function GetPanditMobileConfirmationPreview({ compact = false }: { compact?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn(compact ? "space-y-1.5" : "space-y-2")} aria-hidden="true">
      <div className={cn("rounded-ds-md bg-gradient-brand text-on-dark shadow-soft", compact ? "px-2 py-2.5" : "px-3 py-4")}>
        <p className={cn("font-semibold uppercase tracking-wide opacity-90", compact ? "text-[0.55rem]" : "text-[0.65rem]")}>GetPandit</p>
        <p className={cn("font-semibold", compact ? "mt-0.5 text-[0.65rem]" : "mt-1 text-sm")}>Book your next pooja</p>
      </div>

      <div
        className={cn(
          "rounded-ds-md border border-electric-violet/30 bg-electric-violet/5 shadow-soft",
          compact ? "p-2" : "p-3",
          !reducedMotion && "getpandit-confirm-pulse",
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className={cn("flex shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600", compact ? "h-5 w-5" : "h-7 w-7")}>
            <svg viewBox="0 0 20 20" className={compact ? "h-3 w-3" : "h-4 w-4"} fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <p className={cn("font-semibold text-foreground", compact ? "text-[0.6rem]" : "text-xs")}>Booking confirmed</p>
            <p className={cn("text-muted", compact ? "text-[0.55rem]" : "text-[0.65rem]")}>Griha Pravesh · Tomorrow 9:00 AM</p>
          </div>
        </div>
      </div>

      <div className={cn("rounded-ds-md border border-border/60 bg-surface shadow-soft", compact ? "p-2" : "p-3")}>
        <p className={cn("font-semibold text-foreground", compact ? "text-[0.6rem]" : "text-xs")}>Pt. Ramesh Sharma</p>
        <p className={cn("text-muted", compact ? "text-[0.55rem]" : "text-[0.65rem]")}>Reminder set · Calendar invite sent</p>
      </div>
    </div>
  );
}
