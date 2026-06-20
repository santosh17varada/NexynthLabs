import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { canAccessModule, decodeAdminSession } from "@/lib/auth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth-constants";
import type { AdminRole, CmsModuleId } from "@/types/cms";
import { getCmsModule } from "@/config/cms";

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return decodeAdminSession(token);
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}

export async function requireModuleAccess(
  moduleId: CmsModuleId,
  action: "read" | "write" = "read",
) {
  const session = await requireAdminSession();

  if (!canAccessModule(session.role, moduleId, action)) {
    redirect("/admin?error=forbidden");
  }

  const cmsModule = getCmsModule(moduleId);
  if (!cmsModule) {
    redirect("/admin");
  }

  return { session, module: cmsModule };
}

export function formatAdminRole(role: AdminRole): string {
  return role
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}
