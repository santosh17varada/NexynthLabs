import type { Lead } from "@/types/lead";
import { getIntegration } from "@/lib/integrations";

export type CrmSyncResult = {
  synced: boolean;
  provider: string | null;
  message: string;
};

/**
 * Placeholder for CRM lead sync — not implemented.
 * Enable with CRM_SYNC_ENABLED=true and required CRM_* env vars.
 *
 * @see docs/nexynth-labs/12-integrations-guide.md
 */
export async function syncLeadToCrm(lead: Lead): Promise<CrmSyncResult> {
  void lead;
  const crm = getIntegration("crm");

  if (!crm.isActive) {
    return {
      synced: false,
      provider: crm.provider,
      message:
        "CRM integration is not active. Configure CRM_* env vars and set INTEGRATIONS_CRM_STATUS=active.",
    };
  }

  return {
    synced: false,
    provider: crm.provider,
    message: "CRM provider adapter not implemented yet.",
  };
}

export function isCrmSyncEnabled(): boolean {
  return getIntegration("crm").isActive;
}
