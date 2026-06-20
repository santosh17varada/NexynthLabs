"use client";

import { analyticsEnvKeys } from "@/config/analytics";
import type {
  AnalyticsEventParams,
  PlannedAnalyticsEvent,
  PublicAnalyticsConfig,
} from "@/types/analytics";

type GtagFn = (...args: unknown[]) => void;
type FbqFn = (...args: unknown[]) => void;
type LintrkFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: GtagFn;
    fbq?: FbqFn;
    lintrk?: LintrkFn;
    _linkedin_data_partner_ids?: string[];
  }
}

function readClientEnv(key: string): string | null {
  const value = process.env[key]?.trim();
  return value ? value : null;
}

function getClientAnalyticsConfig(): PublicAnalyticsConfig {
  const measurementId = readClientEnv(analyticsEnvKeys.gaMeasurementId);
  const containerId = readClientEnv(analyticsEnvKeys.gtmContainerId);
  const pixelId = readClientEnv(analyticsEnvKeys.metaPixelId);
  const partnerId = readClientEnv(analyticsEnvKeys.linkedInPartnerId);
  const debug =
    readClientEnv(analyticsEnvKeys.analyticsDebug)?.toLowerCase() === "true";

  const googleAnalytics = {
    enabled: Boolean(measurementId),
    measurementId,
  };
  const googleTagManager = {
    enabled: Boolean(containerId),
    containerId,
  };
  const metaPixel = {
    enabled: Boolean(pixelId),
    pixelId,
  };
  const linkedInInsight = {
    enabled: Boolean(partnerId),
    partnerId,
  };

  return {
    googleAnalytics,
    googleTagManager,
    metaPixel,
    linkedInInsight,
    hasAnyProvider:
      googleAnalytics.enabled ||
      googleTagManager.enabled ||
      metaPixel.enabled ||
      linkedInInsight.enabled,
    debug,
  };
}

function pushDataLayer(
  event: PlannedAnalyticsEvent,
  params?: AnalyticsEventParams,
): void {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...params,
  });
}

/**
 * Track a planned analytics event. Safe no-op when no provider IDs are configured.
 * Loads nothing itself — pair with `AnalyticsScripts` in the site layout.
 */
export function trackPlannedEvent(
  event: PlannedAnalyticsEvent,
  params?: AnalyticsEventParams,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const config = getClientAnalyticsConfig();

  if (!config.hasAnyProvider) {
    if (config.debug || process.env.NODE_ENV === "development") {
      console.debug("[analytics:no-op]", event, params ?? {});
    }
    return;
  }

  const payload = { ...params };

  if (config.googleTagManager.enabled) {
    pushDataLayer(event, payload);
  }

  if (config.googleAnalytics.enabled && typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  if (config.metaPixel.enabled && typeof window.fbq === "function") {
    window.fbq("trackCustom", event, payload);
  }

  if (config.linkedInInsight.enabled && typeof window.lintrk === "function") {
    window.lintrk("track", { conversion_id: event, ...payload });
  }

  if (config.debug) {
    console.debug("[analytics:track]", event, payload);
  }
}

export function isAnalyticsTrackingEnabled(): boolean {
  return getClientAnalyticsConfig().hasAnyProvider;
}
