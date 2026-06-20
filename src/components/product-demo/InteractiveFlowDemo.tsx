"use client";

import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { demoPanelRegistry } from "@/components/product-demo/panels";
import { productDemoCopy } from "@/config/product-demos";
import type { ProductDemoDefinition } from "@/types/product-demo";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type InteractiveFlowDemoProps = {
  demo: ProductDemoDefinition;
  className?: string;
};

export function InteractiveFlowDemo({ demo, className }: InteractiveFlowDemoProps) {
  const baseId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { steps } = demo;
  const totalSteps = steps.length;
  const activeStep = steps[activeIndex];
  const progress =
    totalSteps <= 1 ? 100 : Math.round((activeIndex / (totalSteps - 1)) * 100);

  const panelContent = demoPanelRegistry[demo.panelId]?.({
    stepIndex: activeIndex,
    step: activeStep,
    totalSteps,
  });

  const goToStep = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, totalSteps - 1));
      setActiveIndex(next);
    },
    [totalSteps],
  );

  const goPrevious = useCallback(() => goToStep(activeIndex - 1), [activeIndex, goToStep]);
  const goNext = useCallback(() => goToStep(activeIndex + 1), [activeIndex, goToStep]);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = index < totalSteps - 1 ? index + 1 : 0;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = index > 0 ? index - 1 : totalSteps - 1;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = totalSteps - 1;
    } else {
      return;
    }

    goToStep(nextIndex);
    const tabId = `${baseId}-tab-${steps[nextIndex].id}`;
    document.getElementById(tabId)?.focus();
  }

  function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    }
  }

  return (
    <div className={cn("flow-demo", className)}>
      <div className="flow-demo__progress" aria-hidden="true">
        <div
          className="flow-demo__progress-fill"
          style={{
            width: `${progress}%`,
            transition: reducedMotion ? "none" : undefined,
          }}
        />
      </div>

      <div
        role="tablist"
        aria-label={`${demo.title} steps`}
        className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, index) => {
          const selected = index === activeIndex;
          const complete = index < activeIndex;

          return (
            <button
              key={step.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${step.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => goToStep(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={cn(
                "flow-demo__step min-h-11 shrink-0 rounded-ds-full px-3 py-2 text-left text-sm font-medium transition-colors sm:px-4",
                selected
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : complete
                    ? "flow-demo-step-complete"
                    : "border border-border/70 bg-surface text-muted hover:border-border hover:text-foreground",
              )}
            >
              <span className="mr-2 text-[0.65rem] font-bold uppercase tracking-wide opacity-80">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
        <div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {productDemoCopy.controls.stepOf(activeIndex + 1, totalSteps)}: {activeStep.title}
          </p>

          <div
            key={activeStep.id}
            className={cn("flow-demo__content", !reducedMotion && "flow-demo__content--enter")}
          >
            <span className="text-eyebrow text-electric-blue">
              Step {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
              {activeStep.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {activeStep.description}
            </p>

            {activeStep.highlights && activeStep.highlights.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {activeStep.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              disabled={activeIndex === 0}
              className="motion-cta min-h-11 rounded-ds-md border border-border/70 bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface/80 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {productDemoCopy.controls.previous}
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === totalSteps - 1}
              className="motion-cta min-h-11 rounded-ds-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {productDemoCopy.controls.next}
            </button>
            <span className="text-xs text-muted sm:text-sm">
              {productDemoCopy.controls.stepOf(activeIndex + 1, totalSteps)}
            </span>
          </div>
        </div>

        <div
          ref={panelRef}
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${activeStep.id}`}
          tabIndex={0}
          onKeyDown={handlePanelKeyDown}
          className="flow-demo__panel outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <div
            key={`panel-${activeStep.id}`}
            className={cn(
              "overflow-hidden rounded-ds-lg border border-border/70 bg-surface p-4 shadow-soft sm:p-6",
              !reducedMotion && "flow-demo__panel-inner--enter",
            )}
          >
            {panelContent ?? (
              <p className="text-sm text-muted">Panel unavailable.</p>
            )}
          </div>
        </div>
      </div>

      {demo.disclaimer ? (
        <p className="mt-6 text-xs text-muted sm:text-sm">{demo.disclaimer}</p>
      ) : null}
    </div>
  );
}
