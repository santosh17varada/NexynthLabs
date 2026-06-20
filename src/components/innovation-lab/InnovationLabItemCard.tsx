import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { InnovationLabStatusBadge } from "@/components/innovation-lab/InnovationLabStatusBadge";
import type { InnovationLabItem } from "@/types/innovation-lab";

export function InnovationLabItemCard({ item }: { item: InnovationLabItem }) {
  return (
    <Card as="article" className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <InnovationLabStatusBadge status={item.status} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {item.description}
      </p>
      <ul className="mt-5 space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      {item.cta && (
        <Link
          href={item.cta.href}
          target={item.cta.external ? "_blank" : undefined}
          rel={item.cta.external ? "noopener noreferrer" : undefined}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          {item.cta.label} {item.cta.external ? "↗" : "→"}
        </Link>
      )}
    </Card>
  );
}
