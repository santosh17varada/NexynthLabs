import type { ReactNode } from "react";
import { MotionReveal } from "@/motion";
import type { SocialProofTone, TrustIndicator, TrustIndicatorIcon } from "@/types/social-proof";
import { cn } from "@/lib/cn";

const iconPaths: Record<TrustIndicatorIcon, ReactNode> = {
  product: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 18v-2.25zM3.75 15.75A2.25 2.25 0 016 13.5h2.25A2.25 2.25 0 0110.5 15.75V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6z"
    />
  ),
  ai: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104a2.25 2.25 0 013.5 0M14.25 8.25h3.75M6 21v-4.5a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 16.5V21"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 004.5-4.5 5.25 5.25 0 0110.17 1.12A3.75 3.75 0 0118 15H18.75A2.25 2.25 0 0121 17.25v.75A2.25 2.25 0 0118.75 20.25H5.25A2.25 2.25 0 013 18v-.75A2.25 2.25 0 015.25 15h.75z"
    />
  ),
  marketplace: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.75h18M9 9.75V5.25A1.5 1.5 0 0110.5 3.75h3A1.5 1.5 0 0115 5.25v4.5M6 21V9.75M18 21V9.75M6 21h12"
    />
  ),
  security: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7.5 3v6c0 4.418-3.134 8.548-7.5 9.75C7.634 20.548 4.5 16.418 4.5 12V6L12 3z"
    />
  ),
};

function TrustIndicatorIcon({ icon, tone }: { icon: TrustIndicatorIcon; tone: SocialProofTone }) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-ds-md border",
        isDark
          ? "border-electric-blue/25 bg-electric-blue/10 text-electric-cyan"
          : "border-electric-violet/20 bg-electric-violet/10 text-electric-violet",
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {iconPaths[icon]}
      </svg>
    </span>
  );
}

type TrustIndicatorCardProps = {
  indicator: TrustIndicator;
  tone?: SocialProofTone;
};

export function TrustIndicatorCard({ indicator, tone = "light" }: TrustIndicatorCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-ds-lg border p-5 sm:p-6",
        isDark
          ? "border-glass-border-dark bg-gradient-to-br from-glass-dark/80 to-electric-violet/[0.06]"
          : "border-border/60 bg-surface shadow-soft",
      )}
    >
      {indicator.icon ? <TrustIndicatorIcon icon={indicator.icon} tone={tone} /> : null}
      <p
        className={cn(
          "mt-4 text-lg font-semibold tracking-tight",
          isDark ? "text-on-dark" : "text-foreground",
        )}
      >
        {indicator.label}
      </p>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isDark ? "text-on-dark-muted" : "text-muted",
        )}
      >
        {indicator.description}
      </p>
    </article>
  );
}

type TrustIndicatorGridProps = {
  indicators: readonly TrustIndicator[];
  tone?: SocialProofTone;
  animated?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
};

export function TrustIndicatorGrid({
  indicators,
  tone = "light",
  animated = false,
  columns = 4,
  className,
}: TrustIndicatorGridProps) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("grid grid-cols-1 gap-4 lg:gap-5", colClass, className)}>
      {indicators.map((indicator, index) => {
        const card = <TrustIndicatorCard indicator={indicator} tone={tone} />;

        if (!animated) {
          return <div key={indicator.id}>{card}</div>;
        }

        return (
          <MotionReveal
            key={indicator.id}
            delay={(Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5)}
            variant="card"
          >
            {card}
          </MotionReveal>
        );
      })}
    </div>
  );
}
