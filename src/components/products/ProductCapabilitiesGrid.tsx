import { Card } from "@/components/ui/Card";
import type { ProductCapability, ProductCapabilityStatus } from "@/config/products";

const statusLabels: Record<ProductCapabilityStatus, string> = {
  available: "Available",
  ready: "Integration ready",
  planned: "Planned",
};

const statusStyles: Record<ProductCapabilityStatus, string> = {
  available: "bg-electric-violet/15 text-foreground",
  ready: "bg-primary/10 text-primary",
  planned: "bg-surface text-muted border border-border",
};

type ProductCapabilitiesGridProps = {
  capabilities: readonly ProductCapability[];
  title?: string;
  description?: string;
};

export function ProductCapabilitiesGrid({
  capabilities,
  title = "Platform capabilities",
  description,
}: ProductCapabilitiesGridProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.id} as="article" className="h-full">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[capability.status]}`}
            >
              {statusLabels[capability.status]}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {capability.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {capability.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
