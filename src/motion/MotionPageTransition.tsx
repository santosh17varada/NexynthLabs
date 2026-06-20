"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MotionPageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionPageTransition({ children, className }: MotionPageTransitionProps) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col", className)}>{children}</div>
  );
}
