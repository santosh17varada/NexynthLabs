"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "@/motion/useReducedMotion";

export function MotionProvider({ children }: { children: ReactNode }) {
  useReducedMotion();
  return children;
}

export const motionBootstrapScript = `
(function () {
  try {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.dataset.motion = reduced ? "reduce" : "full";
  } catch (e) {
    document.documentElement.dataset.motion = "full";
  }
})();
`;
