import type { ReactNode } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import type { AdminSessionPayload, CmsModuleId } from "@/types/cms";

type AdminShellProps = {
  session: AdminSessionPayload;
  title: string;
  description?: string;
  activeModuleId?: CmsModuleId;
  children: ReactNode;
};

export function AdminShell({
  session,
  title,
  description,
  activeModuleId,
  children,
}: AdminShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AdminHeader session={session} title={title} description={description} />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row">
        <AdminSidebar role={session.role} activeModuleId={activeModuleId} />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
