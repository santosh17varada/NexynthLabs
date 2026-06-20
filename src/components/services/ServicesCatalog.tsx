import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  serviceCatalog,
  serviceCategories,
  type ServiceCategoryId,
} from "@/config/services";

const categoryOrder: ServiceCategoryId[] = ["build", "integrate", "scale"];

export function ServicesCatalog() {
  return (
    <div className="space-y-14 sm:space-y-16">
      {categoryOrder.map((categoryId) => {
        const category = serviceCategories[categoryId];
        const services = serviceCatalog.filter(
          (service) => service.category === categoryId,
        );

        if (services.length === 0) return null;

        return (
          <section key={categoryId} aria-labelledby={`services-${categoryId}`}>
            <SectionHeading
              title={category.label}
              description={category.description}
            />
            <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function ServicesCatalogSummary() {
  return (
    <p className="text-center text-sm text-muted">
      {serviceCatalog.length} services across build, integration, and platform
      operations
    </p>
  );
}
