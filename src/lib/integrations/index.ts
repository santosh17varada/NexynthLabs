import {
  integrationDefinitions,
  integrationsByCategory,
  integrationDefinitionList,
  integrationsRegistryVersion,
} from "@/config/integrations";
import { resolveAllIntegrations, resolveIntegration } from "@/lib/integrations/env";
import type {
  IntegrationCategory,
  IntegrationId,
  IntegrationsRuntime,
  ResolvedIntegration,
} from "@/types/integrations";

export {
  integrationDefinitions,
  integrationsByCategory,
  integrationDefinitionList,
  integrationsRegistryVersion,
};

export { resolveAllIntegrations, resolveIntegration };

/** Full runtime view — use in server components, API routes, and admin previews. */
export function getIntegrationsRuntime(): IntegrationsRuntime {
  return {
    version: integrationsRegistryVersion,
    integrations: resolveAllIntegrations(),
  };
}

export function getIntegration(id: IntegrationId): ResolvedIntegration {
  return resolveIntegration(id);
}

export function getIntegrationsByCategory(
  category: IntegrationCategory,
): ResolvedIntegration[] {
  return integrationsByCategory[category].map((def) =>
    resolveIntegration(def.id),
  );
}

export function isIntegrationActive(id: IntegrationId): boolean {
  return resolveIntegration(id).isActive;
}

export function isIntegrationConfigured(id: IntegrationId): boolean {
  return resolveIntegration(id).isConfigured;
}

/**
 * Public marketing/analytics scripts (GA, GTM, Meta Pixel).
 * Returns false until lifecycle is explicitly set to `active` and env is complete.
 */
export function isPublicAnalyticsReady(): boolean {
  const ids: IntegrationId[] = [
    "google-analytics",
    "google-tag-manager",
    "meta-pixel",
    "linkedin-insight-tag",
  ];
  return ids.some((id) => resolveIntegration(id).isActive);
}

/**
 * Future hook: render third-party scripts in root or site layout when active.
 * @see docs/nexynth-labs/12-integrations-guide.md § "Wiring checklist"
 */
export function getActivePublicIntegrationIds(): IntegrationId[] {
  const publicIds: IntegrationId[] = [
    "google-analytics",
    "google-tag-manager",
    "meta-pixel",
    "linkedin-insight-tag",
  ];

  if (resolveIntegration("whatsapp-business").isActive) {
    publicIds.push("whatsapp-business");
  }

  return publicIds.filter((id) => resolveIntegration(id).isActive);
}
