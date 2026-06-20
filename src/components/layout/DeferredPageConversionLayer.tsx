"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PageConversionLayer = dynamic(
  () =>
    import("@/components/conversion").then((module) => ({
      default: module.PageConversionLayer,
    })),
  { ssr: false, loading: () => null },
);

const IDLE_TIMEOUT_MS = 4000;
const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

export function DeferredPageConversionLayer() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const load = () => setShouldLoad(true);

    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(load, { timeout: IDLE_TIMEOUT_MS })
        : undefined;
    const timeoutId = window.setTimeout(load, IDLE_TIMEOUT_MS);

    const onInteraction = () => {
      load();
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, onInteraction);
      });
    };

    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, onInteraction, { passive: true });
    });

    return () => {
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      window.clearTimeout(timeoutId);
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, onInteraction);
      });
    };
  }, [shouldLoad]);

  if (!shouldLoad) {
    return null;
  }

  return <PageConversionLayer />;
}
