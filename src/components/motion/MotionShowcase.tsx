"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionMetric, MotionReveal } from "@/motion";
import { motionSystemCopy } from "@/config/motion-system";
import { cn } from "@/lib/cn";

export function MotionShowcase() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-eyebrow text-electric-blue">Hero reveal</p>
          <div className="mt-4 rounded-ds-lg border border-glass-border bg-surface p-6">
            <p className="motion-hero-reveal text-lg font-semibold text-foreground">
              Staggered hero copy
            </p>
            <p className="motion-fade-reveal motion-delay-1 mt-2 text-sm text-muted">
              Fade-up on load — 14px travel, 550ms max.
            </p>
            <div className="motion-fade-reveal motion-delay-2 mt-4">
              <Button variant="gradient" size="md">
                CTA interaction
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-eyebrow text-electric-blue">Scroll reveals</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((index) => (
              <MotionReveal key={index} variant="card" delay={index as 0 | 1 | 2 | 3} hoverLift>
                <Card variant="glass" padding="sm" className="h-full">
                  <p className="text-sm font-semibold text-foreground">Card {index + 1}</p>
                  <p className="mt-1 text-xs text-muted">Scroll-triggered</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-eyebrow text-electric-blue">Metric animation</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Live domain", "Integration-ready", "Documented"].map((label, index) => (
            <MotionMetric key={label} delay={index as 0 | 1 | 2}>
              <Card variant="elevated" padding="sm" className="h-full text-center">
                <p className="text-2xl font-semibold text-foreground">✓</p>
                <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
              </Card>
            </MotionMetric>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-ds-md border border-border/60 bg-surface/80 p-4">
          <p className="text-sm font-semibold text-foreground">Principles</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {motionSystemCopy.principles.map((rule) => (
              <li key={rule}>· {rule}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-ds-md border border-border/60 bg-surface/80 p-4">
          <p className="text-sm font-semibold text-foreground">Performance</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {motionSystemCopy.performance.map((rule) => (
              <li key={rule}>· {rule}</li>
            ))}
          </ul>
        </div>
      </div>

      <pre
        className={cn(
          "overflow-x-auto rounded-ds-md border border-border/60 bg-surface px-4 py-3",
          "font-mono text-xs text-muted",
        )}
      >
        {motionSystemCopy.usage}
      </pre>
    </div>
  );
}
