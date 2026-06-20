"use client";

import type { ElementType, ReactNode } from "react";
import {
  motionDelayClasses,
  motionRevealClassByVariant,
} from "@/motion/classes";
import type { MotionDelayIndex, MotionRevealVariant } from "@/motion/tokens";
import { useScrollReveal } from "@/motion/useScrollReveal";
import { cn } from "@/lib/cn";

export type MotionRevealProps = {
  children: ReactNode;
  variant?: MotionRevealVariant;
  delay?: MotionDelayIndex;
  className?: string;
  as?: ElementType;
  hoverLift?: boolean;
};

export function MotionReveal({
  children,
  variant = "card",
  delay = 0,
  className,
  as: Component = "div",
  hoverLift = false,
}: MotionRevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <Component
      ref={ref}
      className={cn(
        visible && motionRevealClassByVariant[variant],
        visible && delay > 0 && motionDelayClasses[delay],
        hoverLift && "motion-hover-lift",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function MotionHeroReveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: MotionDelayIndex;
  as?: ElementType;
}) {
  return (
    <Component
      className={cn(
        "motion-hero-reveal",
        delay > 0 && motionDelayClasses[delay],
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function MotionMetric({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: MotionDelayIndex;
}) {
  return (
    <MotionReveal variant="metric" delay={delay} className={className}>
      {children}
    </MotionReveal>
  );
}
