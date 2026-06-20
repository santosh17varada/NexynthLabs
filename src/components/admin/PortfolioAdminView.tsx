import Image from "next/image";
import { ModulePermissionNotice, ModuleStatusBanner, TodoList } from "@/components/admin/ModuleViews";
import { getCmsModule, resolvePermission } from "@/config/cms";
import { caseStudies, getCaseStudyPath } from "@/config/portfolio";
import type { AdminRole } from "@/types/cms";
import type { CaseStudy, CaseStudyStatus } from "@/types/portfolio";

type PortfolioAdminViewProps = {
  role: AdminRole;
};

function StatusBadge({ status }: { status: CaseStudyStatus }) {
  const styles =
    status === "published"
      ? "bg-accent/15 text-foreground"
      : "bg-muted/20 text-muted";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${styles}`}
    >
      {status}
    </span>
  );
}

function CaseStudyAdminCard({ study }: { study: CaseStudy }) {
  const hero = study.images[0];

  return (
    <article className="overflow-hidden rounded-2xl border border-border/70 bg-surface">
      <div className="border-b border-border/60 bg-background/50 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-foreground">{study.projectName}</h3>
          <StatusBadge status={study.status} />
          {study.featured && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Featured
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted">{study.title}</p>
      </div>

      <div className="grid gap-6 p-4 sm:grid-cols-2 sm:p-6">
        {hero && (
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border/60">
            <Image src={hero.src} alt={hero.alt} fill unoptimized className="object-cover" sizes="400px" />
          </div>
        )}
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-medium text-foreground">Customer</dt>
            <dd className="mt-1 text-muted">{study.customerName}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Industry</dt>
            <dd className="mt-1 text-muted">{study.industry}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Slug / URL</dt>
            <dd className="mt-1 font-mono text-xs text-muted">{getCaseStudyPath(study.slug)}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Published</dt>
            <dd className="mt-1 text-muted">{study.publishedAt}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">CTA</dt>
            <dd className="mt-1 text-muted">
              {study.cta.primary.label} → {study.cta.primary.href}
              {study.cta.secondary
                ? ` · ${study.cta.secondary.label} → ${study.cta.secondary.href}`
                : ""}
            </dd>
          </div>
        </dl>
      </div>

      <div className="space-y-4 border-t border-border/60 px-4 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Problem</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.problemStatement}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Solution</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Technologies</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
            {study.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Business value
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
            {study.businessValue.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {study.images.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Images</p>
            <ul className="mt-2 space-y-1 font-mono text-xs text-muted">
              {study.images.map((img) => (
                <li key={img.src}>
                  {img.src} — {img.alt}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

export function PortfolioAdminView({ role }: PortfolioAdminViewProps) {
  const cmsModule = getCmsModule("portfolio");
  if (!cmsModule) return null;

  const permission = resolvePermission(role, "portfolio");
  const published = caseStudies.filter((s) => s.status === "published").length;

  return (
    <div className="space-y-6">
      <ModuleStatusBanner module={cmsModule} />
      <ModulePermissionNotice module={cmsModule} role={role} />

      <div className="rounded-2xl border border-border/70 bg-surface p-4 text-sm text-muted sm:p-6">
        <p>
          <span className="font-medium text-foreground">{caseStudies.length}</span> case{" "}
          {caseStudies.length === 1 ? "study" : "studies"} in{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">
            src/config/portfolio.ts
          </code>
          {" · "}
          <span className="font-medium text-foreground">{published}</span> published on{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">/case-studies</code>
        </p>
        <p className="mt-2 text-xs">
          Phase 2: config-file content. Portfolio overview at{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">/portfolio</code>.
          In-browser CRUD planned for a later phase.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((study) => (
          <CaseStudyAdminCard key={study.id} study={study} />
        ))}
      </div>

      {permission.write && (
        <TodoList
          items={[
            "CRUD API for case studies with image upload to object storage",
            "Draft/publish workflow with preview URLs",
            "Reorder featured stories on portfolio and case-studies indexes",
            "Validate external product links (GetPandit domain separation)",
          ]}
        />
      )}
    </div>
  );
}
