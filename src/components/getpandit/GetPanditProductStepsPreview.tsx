import type { ReactNode } from "react";
import { GetPanditMobileConfirmationPreview } from "@/components/getpandit/GetPanditMobileConfirmationPreview";
import { cn } from "@/lib/cn";

const PANDIT_COMPARE = [
  { name: "Pt. Ramesh Sharma", meta: "Telugu · 4.9", accent: "violet" as const },
  { name: "Pt. Venkat Rao", meta: "Hindi · Verified", accent: "blue" as const },
];

const accentRing: Record<string, string> = {
  violet: "border-electric-violet/35 bg-electric-violet/8",
  blue: "border-electric-blue/35 bg-electric-blue/8",
};

type GetPanditProductStepsPreviewProps = {
  className?: string;
  density?: "default" | "compact";
};

export function GetPanditProductStepsPreview({
  className,
  density = "default",
}: GetPanditProductStepsPreviewProps) {
  const compact = density === "compact";

  return (
    <div
      className={cn(
        "grid gap-3",
        compact ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      aria-hidden="true"
    >
      <StepCard step="1" title="Search pandits" compact={compact}>
        <div className="space-y-2">
          <div className="h-8 rounded-ds-md border border-border/60 bg-surface px-2.5 text-[0.65rem] leading-8 text-muted sm:text-xs">
            Griha Pravesh pandit…
          </div>
          <div className="h-7 rounded-ds-md bg-gradient-brand text-center text-[0.65rem] font-semibold leading-7 text-on-dark">
            Search
          </div>
        </div>
      </StepCard>

      <StepCard step="2" title="Compare cards" compact={compact}>
        <div className="space-y-1.5">
          {PANDIT_COMPARE.map((item) => (
            <div
              key={item.name}
              className={cn(
                "rounded-ds-md border px-2 py-1.5",
                accentRing[item.accent],
              )}
            >
              <p className="truncate text-[0.65rem] font-semibold text-foreground sm:text-xs">
                {item.name}
              </p>
              <p className="text-[0.6rem] text-muted">{item.meta}</p>
            </div>
          ))}
        </div>
      </StepCard>

      <StepCard step="3" title="Book pooja" compact={compact}>
        <div className="space-y-2">
          <div className="rounded-ds-md border border-border/60 bg-surface px-2 py-1.5">
            <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted">Ceremony</p>
            <p className="text-[0.65rem] font-semibold text-foreground sm:text-xs">Griha Pravesh</p>
          </div>
          <div className="rounded-ds-md border border-electric-violet/30 bg-electric-violet/5 px-2 py-1.5">
            <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted">Date</p>
            <p className="text-[0.65rem] font-semibold text-foreground sm:text-xs">Tomorrow · 9:00 AM</p>
          </div>
        </div>
      </StepCard>

      <StepCard step="4" title="Confirmation" compact={compact}>
        <div className="scale-[0.92] origin-top-left sm:scale-100">
          <GetPanditMobileConfirmationPreview />
        </div>
      </StepCard>
    </div>
  );
}

function StepCard({
  step,
  title,
  compact,
  children,
}: {
  step: string;
  title: string;
  compact: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-ds-md border border-border/60 bg-surface/90 p-3 shadow-soft",
        compact && "p-2.5",
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[0.6rem] font-bold text-on-dark">
          {step}
        </span>
        <p className={cn("font-semibold text-foreground", compact ? "text-[0.65rem]" : "text-xs")}>
          {title}
        </p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
