import type { Metadata } from "next";
import { AdminLoginFormWithSuspense } from "@/components/admin/AdminLoginForm";
import { CMS_DEV_USERS } from "@/config/cms";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-border/70 bg-surface p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Internal only
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-foreground">Admin login</h1>
        <p className="mt-2 text-sm text-muted">
          For {siteConfig.brandName} content management. Public visitors browse the
          site without registering or logging in.
        </p>
        <div className="mt-8">
          <AdminLoginFormWithSuspense />
        </div>
        <div className="mt-8 rounded-xl border border-border/60 bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Dev accounts (phase 1)
          </p>
          <ul className="mt-2 space-y-1 text-xs text-muted">
            {CMS_DEV_USERS.map((user) => (
              <li key={user.id}>
                {user.email} · {user.role.replaceAll("_", " ")}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            Default password: <code>changeme</code> or set{" "}
            <code>ADMIN_PASSWORD</code> in <code>.env.local</code>
          </p>
        </div>
      </div>
    </div>
  );
}
