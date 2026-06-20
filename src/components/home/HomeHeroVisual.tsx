import type { ReactNode } from "react";
import Link from "next/link";
import { homeHeroCopy } from "@/config/home";
import { cn } from "@/lib/cn";

const levelWidths = {
  high: "w-[88%]",
  mid: "w-[62%]",
  low: "w-[38%]",
} as const;

const levelLabels = {
  high: "Ready",
  mid: "In progress",
  low: "Planned",
} as const;

type HeroCardShellProps = {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel: string;
};

function HeroCardShell({ href, className, children, ariaLabel }: HeroCardShellProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group block h-full min-w-0 rounded-ds-lg border border-glass-border bg-glass/95 p-4 shadow-glass perf-mobile-solid-blur backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-electric-blue/30 hover:shadow-floating sm:p-5",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="mb-3 flex items-center justify-center rounded-ds-sm border border-border/60 bg-surface/80 px-2.5 py-2">
      <span className="w-full truncate rounded-ds-sm border border-border/50 bg-background/80 px-2 py-1 text-center text-[0.65rem] text-muted sm:text-xs">
        {url}
      </span>
    </div>
  );
}

function GetPanditCard({ className }: { className?: string }) {
  const card = homeHeroCopy.visualCards.getPandit;

  return (
    <HeroCardShell
      href={card.href}
      ariaLabel={`${card.title} — ${card.subtitle}`}
      className={className}
    >
      <BrowserChrome url={card.domain} />
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-eyebrow text-electric-violet">{card.title}</p>
          <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
            {card.subtitle}
          </p>
        </div>
        <span className="shrink-0 rounded-ds-full bg-primary px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-primary-foreground">
          {card.status}
        </span>
      </div>
      <div
        className="mt-3 overflow-hidden rounded-ds-md border border-border/50 bg-gradient-to-br from-primary/10 via-surface to-electric-cyan/10 p-3"
        aria-hidden="true"
      >
        <div className="grid grid-cols-3 gap-2">
          {["Catalog", "Book", "Track"].map((label) => (
            <div
              key={label}
              className="rounded-ds-sm border border-border/40 bg-surface/90 px-2 py-2 text-center text-[0.6rem] font-medium text-muted sm:text-[0.65rem]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </HeroCardShell>
  );
}

function AiAutomationCard({ className }: { className?: string }) {
  const card = homeHeroCopy.visualCards.aiAutomation;

  return (
    <HeroCardShell
      href={card.href}
      ariaLabel={`${card.title} — ${card.subtitle}`}
      className={className}
    >
      <p className="text-eyebrow text-electric-blue">{card.title}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{card.subtitle}</p>
      <div className="mt-3 space-y-2" aria-hidden="true">
        {["Trigger", "Agent", "Approve", "Ship"].map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-violet/15 text-[0.6rem] font-bold text-electric-violet">
              {index + 1}
            </span>
            <div className="h-2 flex-1 rounded-full bg-border/80">
              <div
                className="h-full rounded-full bg-gradient-brand hero-bar-pulse"
                style={{
                  width: `${68 + index * 8}%`,
                  animationDelay: `${index * 0.35}s`,
                }}
              />
            </div>
            <span className="w-12 text-right text-[0.65rem] text-muted">{step}</span>
          </div>
        ))}
      </div>
    </HeroCardShell>
  );
}

function CloudEngineeringCard({ className }: { className?: string }) {
  const card = homeHeroCopy.visualCards.cloudEngineering;

  return (
    <HeroCardShell
      href={card.href}
      ariaLabel={`${card.title} — ${card.subtitle}`}
      className={className}
    >
      <p className="text-eyebrow text-electric-cyan">{card.title}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{card.subtitle}</p>
      <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
        {[
          { label: "Edge", tone: "from-electric-blue/20 to-electric-blue/5" },
          { label: "API", tone: "from-electric-violet/20 to-electric-violet/5" },
          { label: "Ops", tone: "from-electric-cyan/20 to-electric-cyan/5" },
        ].map((node) => (
          <div
            key={node.label}
            className={cn(
              "flex flex-col items-center justify-center rounded-ds-md border border-border/50 bg-gradient-to-b p-2.5",
              node.tone,
            )}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M5 12a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2M5 12a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2"
              />
            </svg>
            <span className="mt-1 text-[0.65rem] font-medium text-muted">{node.label}</span>
          </div>
        ))}
      </div>
    </HeroCardShell>
  );
}

function MetricsCard({ className }: { className?: string }) {
  const card = homeHeroCopy.visualCards.metrics;

  return (
    <HeroCardShell
      href={card.href}
      ariaLabel={card.title}
      className={className}
    >
      <p className="text-eyebrow text-primary">{card.title}</p>
      <p className="mt-1 text-xs text-muted">Honest readiness — not revenue claims</p>
      <div className="mt-3 space-y-2.5">
        {card.items.map((item, index) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between gap-2 text-xs">
              <span className="font-medium text-foreground">{item.label}</span>
              <span className="inline-flex shrink-0 items-center gap-1 text-muted">
                {item.level === "high" ? (
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 text-electric-cyan"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
                {levelLabels[item.level]}
              </span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-border/70"
              aria-hidden="true"
            >
              <div
                className={cn(
                  "h-full rounded-full bg-gradient-brand hero-bar-pulse",
                  levelWidths[item.level],
                )}
                style={{ animationDelay: `${index * 0.45}s` }}
              />
            </div>
          </div>
        ))}
      </div>
      {card.footer ? (
        <p className="mt-3 flex items-center gap-1.5 border-t border-border/50 pt-3 text-xs text-muted">
          <svg
            viewBox="0 0 20 20"
            className="h-3.5 w-3.5 shrink-0 text-electric-cyan"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
              clipRule="evenodd"
            />
          </svg>
          {card.footer}
        </p>
      ) : null}
    </HeroCardShell>
  );
}

export function HomeHeroVisual() {
  return (
    <div
      className="mobile-bleed-guard relative mx-auto w-full max-w-xl lg:max-w-none"
      aria-label="Product capability preview cards"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-electric-violet/12 blur-3xl sm:h-40 sm:w-40" />
        <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-electric-cyan/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-5 sm:items-stretch lg:gap-6">
        <GetPanditCard className="sm:col-start-1 sm:row-start-1" />
        <AiAutomationCard className="sm:col-start-2 sm:row-start-1" />
        <MetricsCard className="sm:col-start-1 sm:row-start-2" />
        <CloudEngineeringCard className="sm:col-start-2 sm:row-start-2" />
      </div>
    </div>
  );
}
