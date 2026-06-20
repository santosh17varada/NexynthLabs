"use client";

import { useEffect } from "react";
import {
  getReducedMotionPreference,
  setMotionModeOnDocument,
} from "@/motion/useReducedMotion";

/**
 * Applies prefers-reduced-motion after hydration so SSR and first paint stay in sync.
 */
export function MotionPreferenceSync() {
  useEffect(() => {
    setMotionModeOnDocument(getReducedMotionPreference());

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionModeOnDocument(media.matches);
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return null;
}
