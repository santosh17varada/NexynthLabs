import Link from "next/link";
import { DevelopersStatusBadge } from "@/components/developers/DevelopersStatusBadge";
import { Card } from "@/components/ui/Card";
import type { DeveloperCapabilityItem } from "@/types/developers";

export function DevelopersItemCard({ item }: { item: DeveloperCapabilityItem }) {
  return (
    <Card as="article" className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-mono text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
        <DevelopersStatusBadge status={item.status} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
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
