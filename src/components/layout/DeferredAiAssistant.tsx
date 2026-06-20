"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AiAssistantWidget = dynamic(
  () =>
    import("@/components/ai-assistant/AiAssistantPlaceholder").then((module) => ({
      default: module.AiAssistantWidget,
    })),
  { ssr: false, loading: () => null },
);

const IDLE_TIMEOUT_MS = 5000;
const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

export function DeferredAiAssistant() {
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

  return <AiAssistantWidget />;
}
