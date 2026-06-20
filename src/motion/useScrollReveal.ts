"use client";

import { useEffect, useRef, useState } from "react";
import { getReducedMotionPreference } from "@/motion/useReducedMotion";

type UseScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -4% 0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" ? getReducedMotionPreference() : false,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || getReducedMotionPreference()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, visible };
}
