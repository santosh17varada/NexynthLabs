import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { innerLinkClass } from "@/components/ui/variants";
import type { Service } from "@/config/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      as="article"
      variant="elevated"
      className="flex h-full flex-col p-5 sm:p-6"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2.5" aria-label={`${service.title} benefits`}>
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                aria-hidden="true"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-4 border-t border-border/50">
        <Button href={service.cta.href} variant="gradient" size="sm" className="w-full sm:w-auto">
          {service.cta.label}
        </Button>
      </div>
    </Card>
  );
}

export function ServiceCardCompact({ service }: { service: Service }) {
  return (
    <Card as="article" className="h-full p-5">
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
        {service.description}
      </p>
      <Link
        href={service.cta.href}
        className={`mt-4 inline-flex min-h-11 items-center py-1 text-sm ${innerLinkClass}`}
      >
        {service.cta.label} →
      </Link>
    </Card>
  );
}
