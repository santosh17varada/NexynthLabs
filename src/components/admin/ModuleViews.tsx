import type { CmsModuleDefinition } from "@/types/cms";
import { resolvePermission } from "@/config/cms";
import type { AdminRole } from "@/types/cms";

type ModulePlaceholderProps = {
  module: CmsModuleDefinition;
  role: AdminRole;
};

const statusLabels = {
  ready: "Config-backed (read-only UI)",
  stub: "Stub — schema ready",
  planned: "Planned — phase 2",
} as const;

export function ModuleStatusBanner({ module }: { module: CmsModuleDefinition }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
      <strong>Phase {module.phase}:</strong> {statusLabels[module.status]}
      {module.configPath && (
        <span className="mt-1 block font-mono text-xs text-muted">
          Source: {module.configPath}
        </span>
      )}
    </div>
  );
}

export function ModulePermissionNotice({
  module,
  role,
}: ModulePlaceholderProps) {
  const permission = resolvePermission(role, module.id);

  return (
    <p className="text-sm text-muted">
      Your access:{" "}
      <span className="font-medium text-foreground">
        {permission.write ? "Read & write" : "Read only"}
      </span>
      {!permission.write && (
        <span> — editing UI ships in phase 2. Config changes require deployment today.</span>
      )}
    </p>
  );
}

export function ConfigPreview({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <section className="rounded-2xl border border-border/70 bg-surface">
      <h2 className="border-b border-border/60 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted sm:px-6">
        {title}
      </h2>
      <dl className="divide-y divide-border/60">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:gap-4 sm:px-6"
          >
            <dt className="text-sm font-medium text-muted">{item.label}</dt>
            <dd className="text-sm text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function EmptyModuleState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border/70 bg-surface px-6 py-10 text-center">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-muted">{description}</p>
    </div>
  );
}

export function TodoList({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface p-6">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
        Phase 2 TODO
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
