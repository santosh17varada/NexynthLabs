import { cn } from "@/lib/cn";

export const formInputClassName =
  "w-full min-h-11 rounded-ds-md border border-glass-border bg-background px-4 py-3 text-base text-foreground outline-none transition-all duration-200 placeholder:text-muted/70 focus:border-electric-blue/50 focus:ring-2 focus:ring-electric-blue/20";

export const formLabelClassName = "mb-2 block text-sm font-medium text-foreground";

export const formSelectClassName = formInputClassName;

export const formTextareaClassName = cn(formInputClassName, "min-h-[120px] resize-y");

export const formSuccessClassName =
  "rounded-ds-md border border-electric-cyan/30 bg-electric-cyan/10 px-4 py-3 text-sm text-foreground";

export const formErrorClassName =
  "rounded-ds-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function FormField({ id, label, required, children, className }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className={formLabelClassName}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
    </div>
  );
}

type FormStepIndicatorProps = {
  steps: readonly string[];
  currentStep: number;
};

export function FormStepIndicator({ steps, currentStep }: FormStepIndicatorProps) {
  return (
    <ol className="flex flex-wrap gap-2 sm:gap-3" aria-label="Form progress">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <li
            key={label}
            className={cn(
              "flex min-h-10 flex-1 items-center gap-2 rounded-ds-md border px-3 py-2 text-xs font-semibold sm:text-sm",
              isActive
                ? "border-electric-blue/40 bg-gradient-brand-subtle text-foreground"
                : isComplete
                  ? "border-electric-cyan/25 bg-electric-cyan/5 text-foreground"
                  : "border-border/70 bg-surface/50 text-muted",
            )}
            aria-current={isActive ? "step" : undefined}
          >
            <span
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold",
                isActive
                  ? "bg-gradient-brand text-on-dark"
                  : isComplete
                    ? "bg-electric-cyan/20 text-foreground"
                    : "bg-muted/15 text-muted",
              )}
            >
              {isComplete ? "✓" : stepNumber}
            </span>
            <span className="truncate">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
