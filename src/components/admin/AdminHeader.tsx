import Link from "next/link";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { RoleBadge } from "@/components/admin/RoleBadge";
import { siteConfig } from "@/config/site";
import { formatAdminRole } from "@/lib/cms/session";
import type { AdminSessionPayload } from "@/types/cms";

type AdminHeaderProps = {
  session: AdminSessionPayload;
  title: string;
  description?: string;
};

export function AdminHeader({ session, title, description }: AdminHeaderProps) {
  return (
    <header className="border-b border-border/60 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin"
              className="text-xs font-semibold uppercase tracking-widest text-accent hover:underline"
            >
              {siteConfig.copy.adminCmsLabel}
            </Link>
            <RoleBadge role={session.role} />
          </div>
          <h1 className="mt-1 text-xl font-semibold text-foreground">{title}</h1>
          {description && (
            <p className="mt-1 max-w-2xl text-sm text-muted">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm sm:text-right">
            <p className="font-medium text-foreground">{session.name}</p>
            <p className="truncate text-xs text-muted sm:max-w-none">
              {formatAdminRole(session.role)} · {session.email}
            </p>
          </div>
          <AdminLogoutButton />
        </div>
      </div>
    </header>
  );
}
