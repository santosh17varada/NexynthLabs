"use client";

import type { ReactNode } from "react";
import { MotionReveal } from "@/motion/MotionReveal";
import type { MotionDelayIndex } from "@/motion/tokens";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: MotionDelayIndex;
};

/** @deprecated Prefer MotionReveal — kept for backward compatibility. */
export function AnimateIn({ children, className = "", delay = 0 }: AnimateInProps) {
  return (
    <MotionReveal variant="card" delay={delay} className={className} hoverLift>
      {children}
    </MotionReveal>
  );
}
