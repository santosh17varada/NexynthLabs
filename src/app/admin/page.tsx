import type { Metadata } from "next";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { RoleBadge } from "@/components/admin/RoleBadge";
import {
  CMS_MODULES,
  listModulesForRole,
  resolvePermission,
} from "@/config/cms";
import { requireAdminSession } from "@/lib/cms/session";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

type AdminDashboardProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminDashboardPage({
  searchParams,
}: AdminDashboardProps) {
  const session = await requireAdminSession();
  const params = await searchParams;
  const modules = listModulesForRole(session.role);

  return (
    <AdminShell
      session={session}
      title="Content dashboard"
      description="Internal CMS for Nexynth Labs. Public visitors cannot register or log in."
    >
      {params.error === "forbidden" && (
        <div className="mb-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          You do not have permission to access that module.
        </div>
      )}

      <div className="mb-8 rounded-2xl border border-border/70 bg-surface p-6">
        <p className="text-sm text-muted">
          Signed in as <span className="font-medium text-foreground">{session.name}</span>
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <RoleBadge role={session.role} />
          <span className="text-xs text-muted">{session.email}</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Phase 1 is read-only in the browser — content lives in{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">src/config/</code>{" "}
          files. Module UIs and APIs below are structured for phase 2 persistence.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const permission = resolvePermission(session.role, module.id);

          return (
            <Link
              key={module.id}
              href={module.href}
              className="rounded-2xl border border-border/70 bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold text-foreground">{module.label}</h2>
                <span className="shrink-0 rounded-full bg-background px-2 py-0.5 text-xs text-muted">
                  P{module.phase}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{module.description}</p>
              <p className="mt-4 text-xs font-medium text-accent">
                {permission.write ? "Read & write access" : "Read-only access"} →
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-border/70 bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          All modules ({CMS_MODULES.length})
        </h2>
        <p className="mt-2 text-sm text-muted">
          {siteConfig.brandName} CMS · No public login ·{" "}
          <Link href="/" className="text-accent hover:underline">
            View public site
          </Link>
        </p>
      </div>
    </AdminShell>
  );
}
