import type { StoryNode, StoryPsoColumn, StoryStep } from "@/types/visual-story";
import { cn } from "@/lib/cn";

export function StoryFlowNode({
  label,
  accent = false,
  className,
}: {
  label: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-ds-md border px-3 py-2 text-center text-xs font-semibold sm:text-sm",
        accent
          ? "border-electric-blue/40 bg-electric-blue/10 text-foreground"
          : "border-border/70 bg-surface/90 text-foreground",
        className,
      )}
    >
      {label}
    </div>
  );
}

export function StoryFlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <span
      className={cn("shrink-0 text-muted", vertical && "block text-center")}
      aria-hidden="true"
    >
      {vertical ? "↓" : "→"}
    </span>
  );
}

export function StoryTimeline({ steps }: { steps: readonly StoryStep[] }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className="story-timeline__item relative grid gap-4 pb-8 sm:grid-cols-[auto_1fr] sm:gap-6 sm:pb-10"
        >
          <div className="flex flex-col items-center sm:items-start">
            <span className="story-timeline__dot z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-electric-blue bg-background text-xs font-bold text-electric-blue">
              {step.step ?? String(index + 1).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span className="story-timeline__line mt-2 hidden w-px flex-1 bg-border sm:block" aria-hidden="true" />
            ) : null}
          </div>
          <div className="min-w-0">
            <p className="text-eyebrow text-electric-blue">{step.label}</p>
            {step.title ? (
              <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
            ) : null}
            {step.description ? (
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function StoryProcessFlow({ steps }: { steps: readonly StoryStep[] }) {
  return (
    <div className="story-process overflow-x-auto pb-2">
      <ol className="flex min-w-[36rem] gap-3 sm:min-w-0 sm:flex-wrap sm:gap-4">
        {steps.map((step, index) => (
          <li key={step.id} className="flex min-w-[10rem] flex-1 items-stretch gap-3">
            <div className="flex min-w-0 flex-1 flex-col rounded-ds-lg border border-border/70 bg-surface/90 p-4">
              {step.step ? (
                <span className="text-eyebrow text-electric-blue">{step.step}</span>
              ) : null}
              <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                {step.title ?? step.label}
              </p>
              {step.description ? (
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {step.description}
                </p>
              ) : null}
            </div>
            {index < steps.length - 1 ? (
              <span className="self-center text-muted" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function StoryArchitectureJourney({ nodes }: { nodes: readonly StoryNode[] }) {
  return (
    <div className="story-architecture mx-auto max-w-md space-y-2" aria-hidden="true">
      {nodes.map((node, index) => (
        <div key={node.id}>
          <StoryFlowNode label={node.label} accent={node.accent} className="w-full" />
          {index < nodes.length - 1 ? (
            <div className="py-1 text-center">
              <StoryFlowArrow vertical />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function StoryAnimatedPathway({ steps }: { steps: readonly StoryStep[] }) {
  return (
    <div className="story-pathway">
      <div className="story-pathway__track mb-6 hidden h-1 overflow-hidden rounded-full bg-border/60 sm:block" aria-hidden="true">
        <div className="story-pathway__fill h-full rounded-full bg-gradient-to-r from-electric-blue to-electric-violet" />
      </div>
      <ol className="grid gap-4 sm:grid-cols-5 sm:gap-3">
        {steps.map((step, index) => (
          <li key={step.id} className="story-pathway__step text-center">
            <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border-2 border-electric-blue/40 bg-electric-blue/10 text-xs font-bold text-electric-blue">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-semibold text-foreground">{step.label}</p>
            {step.title && step.title !== step.label ? (
              <p className="mt-1 text-xs text-muted">{step.title}</p>
            ) : null}
            {step.description ? (
              <p className="mt-2 hidden text-xs leading-relaxed text-muted sm:block">
                {step.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function StoryCustomerJourney({ steps }: { steps: readonly StoryStep[] }) {
  return (
    <div className="story-customer-journey overflow-x-auto pb-2">
      <ol className="flex min-w-[40rem] gap-3 sm:min-w-0 sm:grid sm:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, index) => (
          <li key={step.id} className="relative flex-1">
            <div className="story-customer-journey__card h-full rounded-ds-lg border border-border/70 bg-surface/90 p-4 text-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-on-dark">
                {step.step ?? index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{step.label}</p>
              {step.description ? (
                <p className="mt-1 text-xs leading-relaxed text-muted">{step.description}</p>
              ) : null}
            </div>
            {index < steps.length - 1 ? (
              <span
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-muted lg:inline"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

const psoAccents: Record<string, { eyebrow: string; bullet: string }> = {
  problem: { eyebrow: "text-electric-violet", bullet: "bg-electric-violet" },
  solution: { eyebrow: "text-electric-blue", bullet: "bg-electric-blue" },
  outcome: { eyebrow: "text-electric-cyan", bullet: "bg-electric-cyan" },
};

export function StoryProblemSolutionOutcome({ columns }: { columns: readonly StoryPsoColumn[] }) {
  return (
    <div className="story-pso grid gap-4 sm:items-stretch lg:grid-cols-3 lg:gap-6">
      {columns.map((column) => {
        const accent = psoAccents[column.id] ?? {
          eyebrow: "text-primary",
          bullet: "bg-gradient-brand",
        };

        return (
          <article
            key={column.id}
            className="flex h-full flex-col rounded-ds-xl border border-glass-border bg-glass/95 p-5 shadow-soft sm:p-6"
          >
            <h3 className={cn("text-eyebrow", accent.eyebrow)}>{column.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {column.description}
            </p>
            {column.items && column.items.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span
                      className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", accent.bullet)}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
