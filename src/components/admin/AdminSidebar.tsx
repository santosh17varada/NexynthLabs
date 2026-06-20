import Link from "next/link";
import { listModulesForRole, resolvePermission } from "@/config/cms";
import type { AdminRole, CmsModuleId } from "@/types/cms";

type AdminSidebarProps = {
  role: AdminRole;
  activeModuleId?: CmsModuleId;
};

export function AdminSidebar({ role, activeModuleId }: AdminSidebarProps) {
  const modules = listModulesForRole(role);

  return (
    <aside className="border-b border-border/60 bg-surface lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
      <nav aria-label="Admin modules" className="p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
          Modules
        </p>
        <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          <li className="shrink-0 lg:shrink">
            <Link
              href="/admin"
              className={`block min-h-11 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                !activeModuleId
                  ? "bg-background text-foreground"
                  : "text-muted hover:bg-background hover:text-foreground"
              }`}
            >
              Dashboard
            </Link>
          </li>
          {modules.map((module) => {
            const permission = resolvePermission(role, module.id);
            const isActive = activeModuleId === module.id;

            return (
              <li key={module.id} className="shrink-0 lg:shrink">
                <Link
                  href={module.href}
                  className={`block min-h-11 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-background text-foreground"
                      : "text-muted hover:bg-background hover:text-foreground"
                  }`}
                >
                  {module.label}
                  {!permission.write && (
                    <span className="ml-1 text-xs text-muted">(read)</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
