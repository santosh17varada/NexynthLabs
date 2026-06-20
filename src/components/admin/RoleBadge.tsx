import type { AdminRole } from "@/types/cms";
import { getRoleLabel } from "@/config/cms";

const roleStyles: Record<AdminRole, string> = {
  SUPER_ADMIN: "bg-primary text-primary-foreground",
  ADMIN: "bg-accent/20 text-foreground",
  MARKETING_ADMIN: "bg-surface text-foreground border border-border",
  SALES_ADMIN: "bg-surface text-foreground border border-border",
};

export function RoleBadge({ role }: { role: AdminRole }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleStyles[role]}`}
    >
      {getRoleLabel(role)}
    </span>
  );
}
