import type { ReactNode } from "react";
import { STORY_VIZ_CLASSES } from "@/components/visual-storytelling/framework/motion";
import { cn } from "@/lib/cn";

export type StoryVisualMobileStep = {
  id: string;
  label: string;
  description?: string;
  accent?: string;
  stepNumber?: number;
  icon?: ReactNode;
};

type StoryVisualMobileJourneyProps = {
  steps: readonly StoryVisualMobileStep[];
  hoveredId: string | null;
  onHover: (id: string) => void;
  onClear: () => void;
  isStepActive?: (stepId: string) => boolean;
  className?: string;
};

export function StoryVisualMobileJourney({
  steps,
  hoveredId,
  onHover,
  onClear,
  isStepActive,
  className,
}: StoryVisualMobileJourneyProps) {
  return (
    <ol className={cn(STORY_VIZ_CLASSES.mobile, className)}>
      {steps.map((step, index) => {
        const isHovered = hoveredId === step.id;
        const active = isStepActive ? isStepActive(step.id) : true;

        return (
          <li key={step.id} className="flex w-full flex-col items-center">
            <button
              type="button"
              className={cn(
                "w-full max-w-sm rounded-ds-lg border px-4 py-3 text-left transition-all duration-200",
                isHovered
                  ? "border-electric-violet/40 bg-electric-violet/10 shadow-soft"
                  : active
                    ? "border-glass-border-dark bg-glass-dark/50"
                    : "border-glass-border-dark/60 bg-glass-dark/30 opacity-70",
              )}
              onMouseEnter={() => onHover(step.id)}
              onFocus={() => onHover(step.id)}
              onMouseLeave={onClear}
              onBlur={onClear}
              aria-current={isHovered ? "step" : undefined}
            >
              {step.icon ? (
                <span className="flex items-start gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-ds-md border text-electric-cyan"
                    style={
                      step.accent
                        ? {
                            borderColor: `${step.accent}55`,
                            backgroundColor: `${step.accent}18`,
                          }
                        : undefined
                    }
                  >
                    {step.icon}
                  </span>
                  <StepContent step={step} />
                </span>
              ) : (
                <StepContent step={step} showDot active={active} />
              )}
            </button>
            {index < steps.length - 1 ? (
              <span
                className={cn(
                  "my-1.5 text-sm",
                  active ? "text-electric-cyan/70" : "text-on-dark-muted/40",
                )}
                aria-hidden="true"
              >
                ↓
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function StepContent({
  step,
  showDot,
  active,
}: {
  step: StoryVisualMobileStep;
  showDot?: boolean;
  active?: boolean;
}) {
  return (
    <span className={showDot ? "flex items-center gap-2" : "min-w-0 flex-1"}>
      {showDot ? (
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            active ? "bg-emerald-400 story-viz-status--pulse" : "bg-emerald-400/40",
          )}
          aria-hidden="true"
        />
      ) : null}
      {step.stepNumber !== undefined ? (
        <span className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-dark-muted">
            {String(step.stepNumber).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-on-dark">{step.label}</span>
        </span>
      ) : (
        <span className="text-sm font-semibold text-on-dark">{step.label}</span>
      )}
      {step.description ? (
        <span className="mt-1 block text-xs leading-relaxed text-on-dark-muted sm:text-sm">
          {step.description}
        </span>
      ) : null}
    </span>
  );
}

type StoryVisualMobileChipProps = {
  id: string;
  label: string;
  active: boolean;
  onHover: (id: string) => void;
  onClear: () => void;
  shape?: "md" | "full";
};

export function StoryVisualMobileChip({
  id,
  label,
  active,
  onHover,
  onClear,
  shape = "md",
}: StoryVisualMobileChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "border px-3 py-2 text-xs font-semibold transition-colors",
        shape === "full" ? "rounded-ds-full" : "rounded-ds-md",
        active
          ? "border-electric-cyan/50 bg-electric-cyan/10 text-on-dark"
          : "border-glass-border-dark bg-glass-dark/50 text-on-dark-muted",
      )}
      onMouseEnter={() => onHover(id)}
      onFocus={() => onHover(id)}
      onMouseLeave={onClear}
      onBlur={onClear}
    >
      {label}
    </button>
  );
}

export function StoryVisualMobileSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-on-dark-muted">
      {children}
    </p>
  );
}
