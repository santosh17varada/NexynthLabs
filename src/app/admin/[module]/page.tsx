import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadsAdminView } from "@/components/admin/LeadsAdminView";
import { PortfolioAdminView } from "@/components/admin/PortfolioAdminView";
import { AdminShell } from "@/components/admin/AdminShell";
import { getCmsModule } from "@/config/cms";
import { renderAdminModuleContent, getAdminModuleParams } from "@/lib/cms/module-content";
import { requireModuleAccess } from "@/lib/cms/session";
import type { CmsModuleId } from "@/types/cms";

type AdminModulePageProps = {
  params: Promise<{ module: string }>;
};

export async function generateStaticParams() {
  return getAdminModuleParams();
}

export async function generateMetadata({
  params,
}: AdminModulePageProps): Promise<Metadata> {
  const { module: moduleSlug } = await params;
  const cmsModule = getCmsModule(moduleSlug as CmsModuleId);

  return {
    title: cmsModule ? `${cmsModule.label} · Admin` : "Admin",
    robots: { index: false, follow: false },
  };
}

export default async function AdminModulePage({ params }: AdminModulePageProps) {
  const { module: moduleSlug } = await params;
  const moduleId = moduleSlug as CmsModuleId;
  const cmsModule = getCmsModule(moduleId);

  if (!cmsModule) notFound();

  const { session } = await requireModuleAccess(moduleId, "read");

  return (
    <AdminShell
      session={session}
      title={cmsModule.label}
      description={cmsModule.description}
      activeModuleId={moduleId}
    >
      {moduleId === "leads" ? (
        <LeadsAdminView role={session.role} />
      ) : moduleId === "portfolio" ? (
        <PortfolioAdminView role={session.role} />
      ) : (
        renderAdminModuleContent(moduleId, session.role)
      )}
    </AdminShell>
  );
}
