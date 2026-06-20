"use client";

import { MotionProvider, MotionPageTransition } from "@/motion";
import { motionBootstrapScript } from "@/motion/MotionProvider";
import type { ReactNode } from "react";

type MotionShellProps = {
  children: ReactNode;
};

export function MotionShell({ children }: MotionShellProps) {
  return (
    <MotionProvider>
      <MotionPageTransition>{children}</MotionPageTransition>
    </MotionProvider>
  );
}

export { motionBootstrapScript };
