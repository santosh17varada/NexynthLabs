"use client";

import { useEffect, useState } from "react";

export function getReducedMotionPreference(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setMotionModeOnDocument(reduced: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.motion = reduced ? "reduce" : "full";
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setReduced(media.matches);
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}
