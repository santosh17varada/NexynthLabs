import { analyticsEnvKeys } from "@/config/analytics";
import type { PublicAnalyticsConfig } from "@/types/analytics";

function readPublicEnv(key: string): string | null {
  const value = process.env[key]?.trim();
  return value ? value : null;
}

/** Resolve which analytics providers have public IDs configured (server / build time). */
export function getPublicAnalyticsConfig(): PublicAnalyticsConfig {
  const measurementId = readPublicEnv(analyticsEnvKeys.gaMeasurementId);
  const containerId = readPublicEnv(analyticsEnvKeys.gtmContainerId);
  const pixelId = readPublicEnv(analyticsEnvKeys.metaPixelId);
  const partnerId = readPublicEnv(analyticsEnvKeys.linkedInPartnerId);
  const debug =
    readPublicEnv(analyticsEnvKeys.analyticsDebug)?.toLowerCase() === "true";

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
