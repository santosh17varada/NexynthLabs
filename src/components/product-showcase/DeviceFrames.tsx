import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BrowserFrameProps = {
  url?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: "light" | "dark";
  /** macOS-style window dots; disable for product hero mockups */
  showDots?: boolean;
};

export function BrowserFrame({
  url = "app.example.com",
  children,
  className,
  contentClassName,
  tone = "light",
  showDots = true,
}: BrowserFrameProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-ds-lg border shadow-floating backdrop-blur-sm sm:rounded-ds-xl",
        isDark
          ? "border-glass-border-dark bg-glass-dark/40 shadow-glass-dark"
          : "border-glass-border bg-glass/95",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3 py-2.5 sm:px-4",
          isDark ? "border-glass-border-dark bg-glass-dark/60" : "border-border/60 bg-surface/80",
          !showDots && "justify-center",
        )}
      >
        {showDots ? (
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
            <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-glass-border-dark" : "bg-border")} />
          </span>
        ) : null}
        <div
          className={cn(
            "min-w-0 truncate rounded-ds-sm border px-2 py-1 text-center text-[0.65rem] sm:text-xs",
            showDots ? "flex-1" : "w-full max-w-md",
            isDark
              ? "border-glass-border-dark bg-glass-dark/50 text-on-dark-muted"
              : "border-border/50 bg-background/80 text-muted",
          )}
        >
          {url}
        </div>
      </div>
      <div
        className={cn(
          "relative p-4 sm:p-5",
          isDark
            ? "bg-gradient-to-br from-glass-dark/80 to-electric-violet/[0.06]"
            : "bg-gradient-to-br from-surface via-background to-primary/[0.04]",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "mx-auto w-[min(100%,220px)] overflow-hidden rounded-[1.75rem] border-[3px] border-foreground/10 bg-surface p-2 shadow-floating sm:w-[240px]",
        className,
      )}
    >
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-border" aria-hidden="true" />
      <div className="overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-primary/[0.06] to-background p-3">
        {children}
      </div>
    </div>
  );
}

type DashboardFrameProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function DashboardFrame({ title = "Admin", children, className }: DashboardFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-ds-lg border border-glass-border-dark bg-glass-dark/50 shadow-glass-dark sm:rounded-ds-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-glass-border-dark px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">{title}</span>
        <span className="rounded-ds-full bg-electric-cyan/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-electric-cyan">
          Ops
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

type TabletFrameProps = {
  children: ReactNode;
  className?: string;
};

export function TabletFrame({ children, className }: TabletFrameProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-[1.25rem] border-[3px] border-foreground/10 bg-surface p-3 shadow-floating",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[0.85rem] bg-gradient-to-b from-primary/[0.04] to-background p-4">
        {children}
      </div>
    </div>
  );
}

export function deviceFrameForType(
  device: string,
  url: string | undefined,
  children: ReactNode,
  className?: string,
) {
  switch (device) {
    case "mobile":
      return <PhoneFrame className={className}>{children}</PhoneFrame>;
    case "dashboard":
      return <DashboardFrame className={className}>{children}</DashboardFrame>;
    case "tablet":
      return <TabletFrame className={className}>{children}</TabletFrame>;
    case "plain":
      return <div className={className}>{children}</div>;
    case "browser":
    default:
      return (
        <BrowserFrame url={url} className={className}>
          {children}
        </BrowserFrame>
      );
  }
}
