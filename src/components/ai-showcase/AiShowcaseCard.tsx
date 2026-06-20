import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { AiShowcaseItem } from "@/types/ai-showcase";

export function AiShowcaseCard({ item }: { item: AiShowcaseItem }) {
  return (
    <Card
      as="article"
      className="group flex h-full flex-col border-border/70 p-5 transition-shadow hover:shadow-elevated sm:p-6"
    >
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-ds-md border border-electric-violet/30 bg-electric-violet/10 text-sm font-bold text-electric-violet"
        aria-hidden="true"
      >
        AI
      </div>
      <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
        {item.title}
      </h3>
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
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet group-hover:underline"
        >
          {item.cta.label} →
        </Link>
      )}
    </Card>
  );
}
