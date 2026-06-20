import { integrationDefinitions } from "@/config/integrations";
import type {
  IntegrationId,
  IntegrationLifecycle,
  IntegrationProviderId,
  ResolvedIntegration,
} from "@/types/integrations";

const LIFECYCLE_OVERRIDE_PREFIX = "INTEGRATIONS_";
const LIFECYCLE_OVERRIDE_SUFFIX = "_STATUS";

function readEnv(key: string): string | undefined {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

function lifecycleEnvKey(id: IntegrationId): string {
  return `${LIFECYCLE_OVERRIDE_PREFIX}${id.toUpperCase().replace(/-/g, "_")}${LIFECYCLE_OVERRIDE_SUFFIX}`;
}

function providerEnvKey(id: IntegrationId): string {
  const providerKeys: Partial<Record<IntegrationId, string>> = {
    "whatsapp-business": "INTEGRATIONS_WHATSAPP_PROVIDER",
    "sms-gateway": "INTEGRATIONS_SMS_PROVIDER",
    "payment-gateway": "INTEGRATIONS_PAYMENT_PROVIDER",
    crm: "INTEGRATIONS_CRM_PROVIDER",
    "google-analytics": "INTEGRATIONS_GA_PROVIDER",
    "google-tag-manager": "INTEGRATIONS_GTM_PROVIDER",
    "meta-pixel": "INTEGRATIONS_META_PIXEL_PROVIDER",
    "linkedin-insight-tag": "INTEGRATIONS_LINKEDIN_INSIGHT_PROVIDER",
  };

  return providerKeys[id] ?? `INTEGRATIONS_${id.toUpperCase().replace(/-/g, "_")}_PROVIDER`;
}

function parseLifecycleOverride(
  raw: string | undefined,
): IntegrationLifecycle | undefined {
  if (!raw) return undefined;
  const normalized = raw.toLowerCase();
  if (
    normalized === "disabled" ||
    normalized === "configured" ||
    normalized === "active"
  ) {
    return normalized;
  }
  return undefined;
}

function parseProvider(
  raw: string | undefined,
  supported: readonly IntegrationProviderId[],
): IntegrationProviderId | null {
  if (!raw) return null;
  const normalized = raw.toLowerCase() as IntegrationProviderId;
  return supported.includes(normalized) ? normalized : null;
}

function getMissingRequiredEnv(
  envVars: (typeof integrationDefinitions)[IntegrationId]["envVars"],
): string[] {
  return envVars
    .filter((v) => v.required && !readEnv(v.key))
    .map((v) => v.key);
}

/** Minimum env keys that indicate intentional setup when no `required` vars exist. */
const configurationSignals: Partial<Record<IntegrationId, readonly string[]>> =
  {
    "whatsapp-business": [
      "INTEGRATIONS_WHATSAPP_PROVIDER",
      "WHATSAPP_API_TOKEN",
    ],
    "sms-gateway": ["INTEGRATIONS_SMS_PROVIDER", "SMS_API_KEY"],
    "payment-gateway": [
      "INTEGRATIONS_PAYMENT_PROVIDER",
      "PAYMENT_KEY_SECRET",
    ],
    crm: ["INTEGRATIONS_CRM_PROVIDER", "CRM_API_KEY"],
  };

function getIsConfigured(
  id: IntegrationId,
  envVars: (typeof integrationDefinitions)[IntegrationId]["envVars"],
  missingRequiredEnv: string[],
): boolean {
  const hasRequired = envVars.some((v) => v.required);
  if (hasRequired) {
    return missingRequiredEnv.length === 0 && envVars.some((v) => readEnv(v.key));
  }

  const signals = configurationSignals[id];
  if (!signals) {
    return false;
  }

  return signals.every((key) => Boolean(readEnv(key)));
}

function resolveLifecycle(
  id: IntegrationId,
  definition: (typeof integrationDefinitions)[IntegrationId],
  isConfigured: boolean,
): IntegrationLifecycle {
  const override = parseLifecycleOverride(readEnv(lifecycleEnvKey(id)));
  if (override) return override;

  if (!isConfigured) {
    return definition.defaultLifecycle;
  }

  return definition.defaultLifecycle === "disabled"
    ? "configured"
    : definition.defaultLifecycle;
}

/**
 * Resolves a single integration slot from static registry + environment.
 * No network calls or provider SDKs — configuration only.
 */
export function resolveIntegration(id: IntegrationId): ResolvedIntegration {
  const definition = integrationDefinitions[id];
  const missingRequiredEnv = getMissingRequiredEnv(definition.envVars);
  const isConfigured = getIsConfigured(
    id,
    definition.envVars,
    missingRequiredEnv,
  );
  const lifecycle = resolveLifecycle(id, definition, isConfigured);
  const provider = parseProvider(
    readEnv(providerEnvKey(id)),
    definition.supportedProviders,
  );

  return {
    ...definition,
    lifecycle,
    provider,
    missingRequiredEnv,
    isConfigured,
    isActive: lifecycle === "active" && isConfigured,
  };
}

export function resolveAllIntegrations(): Record<
  IntegrationId,
  ResolvedIntegration
> {
  return (Object.keys(integrationDefinitions) as IntegrationId[]).reduce(
    (acc, id) => {
      acc[id] = resolveIntegration(id);
      return acc;
    },
    {} as Record<IntegrationId, ResolvedIntegration>,
  );
}
