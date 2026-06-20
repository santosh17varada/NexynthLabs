import { cn } from "@/lib/cn";

/** Stable class string — colors come from `.flow-mock-badge` in globals.css (SSR-safe). */
export const flowMockBadgeClassName =
  "flow-mock-badge shrink-0 rounded-ds-full px-2 py-0.5 text-[0.6rem] font-bold uppercase";

export function FlowMockCard({
  title,
  subtitle,
  badge,
  active = false,
  className,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-ds-md border p-3 transition-colors duration-200",
        active
          ? "border-electric-blue/40 bg-electric-blue/5 shadow-soft"
          : "border-border/60 bg-surface/90",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          {subtitle ? <p className="mt-0.5 text-xs text-muted">{subtitle}</p> : null}
        </div>
        {badge ? <span className={flowMockBadgeClassName}>{badge}</span> : null}
      </div>
    </div>
  );
}

export function FlowMockRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-ds-sm px-2 py-1.5 text-sm",
        highlight ? "bg-primary/5 text-foreground" : "text-muted",
      )}
    >
      <span>{label}</span>
      <span className={cn("font-medium", highlight && "text-foreground")}>{value}</span>
    </div>
  );
}

export function FlowNode({
  label,
  active = false,
  complete = false,
}: {
  label: string;
  active?: boolean;
  complete?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-colors duration-200",
          complete && "bg-gradient-brand text-on-dark",
          active && !complete && "border-2 border-electric-blue bg-electric-blue/10 text-electric-blue",
          !active && !complete && "border border-border bg-surface text-muted",
        )}
        aria-hidden="true"
      >
        {complete ? "✓" : "•"}
      </div>
      <span className="max-w-[4.5rem] text-[0.65rem] leading-tight text-muted sm:max-w-none sm:text-xs">
        {label}
      </span>
    </div>
  );
}
