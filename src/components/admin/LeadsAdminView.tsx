import { LeadsTable } from "@/components/admin/LeadsTable";
import { ModulePermissionNotice, ModuleStatusBanner, TodoList } from "@/components/admin/ModuleViews";
import { getCmsModule, resolvePermission } from "@/config/cms";
import { isEmailConfigured } from "@/lib/leads/email";
import { listLeads, getLeadsFilePath } from "@/lib/leads/store";
import type { AdminRole } from "@/types/cms";

type LeadsAdminViewProps = {
  role: AdminRole;
};

export async function LeadsAdminView({ role }: LeadsAdminViewProps) {
  const cmsModule = getCmsModule("leads");
  if (!cmsModule) return null;

  const permission = resolvePermission(role, "leads");
  const leads = await listLeads();
  const emailConfigured = isEmailConfigured();

  return (
    <div className="space-y-6">
      <ModuleStatusBanner module={cmsModule} />
      <ModulePermissionNotice module={cmsModule} role={role} />

      <div className="rounded-2xl border border-border/70 bg-surface p-4 text-sm text-muted sm:p-6">
        <p>
          <span className="font-medium text-foreground">{leads.length}</span> lead
          {leads.length === 1 ? "" : "s"} stored in{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">
            {getLeadsFilePath()}
          </code>
        </p>
      </div>

      <LeadsTable
        initialLeads={leads}
        canWrite={permission.write}
        emailConfigured={emailConfigured}
      />

      {permission.write && (
        <TodoList
          items={[
            "PostgreSQL `cms_leads` table — see docs/nexynth-labs/14-lead-crm-lite-guide.md",
            "Dedicated /admin/leads/[id] detail page",
            "Configure SMTP or Resend/SendGrid — see docs/leads.md",
            "Add lead assignment to SALES_ADMIN users",
            "Optional: webhook to CRM (HubSpot, Zoho)",
          ]}
        />
      )}
    </div>
  );
}
