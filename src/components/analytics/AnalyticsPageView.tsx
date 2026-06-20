"use client";

import { useEffect, useRef } from "react";
import type { PlannedAnalyticsEvent } from "@/types/analytics";
import { trackPlannedEvent } from "@/lib/analytics/track-client";

type AnalyticsPageViewProps = {
  event: PlannedAnalyticsEvent;
  slug?: string;
};

/** Fires a planned page-view-style event once per mount. */
export function AnalyticsPageView({ event, slug }: AnalyticsPageViewProps) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackPlannedEvent(event, slug ? { slug } : undefined);
  }, [event, slug]);

  return null;
}
