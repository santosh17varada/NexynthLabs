import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  ServiceStatusBadge,
  ServiceStatusDot,
} from "@/components/status/ServiceStatusBadge";
import {
  serviceHealthCategoryLabels,
  serviceHealthComponents,
} from "@/config/status-page";
import type { ServiceHealthCategory } from "@/types/status-page";

const categoryOrder: ServiceHealthCategory[] = [
  "website",
  "api",
  "data",
  "integration",
];

export function ServiceStatusList() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="space-y-8">
        {categoryOrder.map((category) => {
          const items = serviceHealthComponents.filter(
            (component) => component.category === category,
          );

          if (items.length === 0) {
            return null;
          }

          return (
            <section key={category} aria-labelledby={`status-cat-${category}`}>
              <h2
                id={`status-cat-${category}`}
                className="text-sm font-semibold uppercase tracking-wide text-muted"
              >
                {serviceHealthCategoryLabels[category]}
              </h2>
              <ul className="mt-4 space-y-3">
                {items.map((component) => (
                  <li key={component.id}>
                    <Card
                      as="article"
                      className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-5"
                    >
                      <div className="flex min-w-0 flex-1 gap-3">
                        <ServiceStatusDot status={component.status} />
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-foreground sm:text-lg">
                            {component.name}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {component.description}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 sm:pt-1">
                        <ServiceStatusBadge status={component.status} />
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
