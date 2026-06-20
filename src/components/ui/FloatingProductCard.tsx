import Image from "next/image";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type FloatingProductCardProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  badge?: ReactNode;
  footer?: ReactNode;
  className?: string;
  priority?: boolean;
};

export function FloatingProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  footer,
  className = "",
  priority = false,
}: FloatingProductCardProps) {
  return (
    <Card
      variant="floating"
      padding="sm"
      className={cn("mobile-bleed-guard relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-electric-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-4 h-36 w-36 rounded-full bg-electric-cyan/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        {badge ? <div className="mb-4 flex flex-wrap items-center gap-2">{badge}</div> : null}

        <div className="overflow-hidden rounded-ds-md border border-glass-border bg-surface/50 shadow-soft">
          <div className="flex items-center gap-2 border-b border-border/60 bg-primary/[0.04] px-3 py-2.5">
            <span className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </span>
            <div className="min-w-0 flex-1 truncate rounded-ds-sm border border-border/60 bg-background px-2 py-1 text-center text-[0.65rem] text-muted sm:text-xs">
              {title}
            </div>
          </div>
          <div className="relative aspect-[1200/630] w-full bg-midnight/5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
              priority={priority}
            />
          </div>
        </div>

        {description ? (
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}

        {footer ? <div className="mt-4">{footer}</div> : null}
      </div>
    </Card>
  );
}
