import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HomeGridIcon =
  | "getpandit"
  | "ai"
  | "web"
  | "mobile"
  | "cloud"
  | "marketplace"
  | "design"
  | "api"
  | "analytics";

type HomeGridCardProps = {
  title: string;
  description: string;
  href: string;
  icon: HomeGridIcon;
  variant?: "default" | "flagship";
  badge?: string;
  learnMoreLabel?: string;
  className?: string;
};

const gradientAccents: Record<HomeGridIcon, string> = {
  getpandit: "from-electric-violet/20 via-electric-blue/10 to-electric-cyan/15",
  ai: "from-electric-blue/20 via-electric-violet/10 to-transparent",
  web: "from-primary/15 via-electric-cyan/10 to-transparent",
  mobile: "from-electric-cyan/20 via-primary/10 to-transparent",
  cloud: "from-electric-cyan/18 via-electric-blue/8 to-transparent",
  marketplace: "from-electric-violet/18 via-accent/10 to-transparent",
  design: "from-electric-violet/15 via-electric-blue/10 to-transparent",
  api: "from-primary/15 via-electric-violet/12 to-transparent",
  analytics: "from-electric-blue/18 via-electric-cyan/10 to-transparent",
};

function GridIcon({ icon }: { icon: HomeGridIcon }) {
  const paths: Record<HomeGridIcon, ReactNode> = {
    getpandit: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h10M4 18h14M16 12l4 3V9l-4 3z"
      />
    ),
    ai: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104a2.25 2.25 0 013.5 0M14.25 8.25h3.75M6 21v-4.5a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 16.5V21M6 8.25h.008v.008H6V8.25z"
      />
    ),
    web: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c-2.2 2.7-3.3 5.6-3.3 9s1.1 6.3 3.3 9c2.2-2.7 3.3-5.6 3.3-9s-1.1-6.3-3.3-9z"
      />
    ),
    mobile: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 2.25h3A2.25 2.25 0 0115.75 4.5v15a2.25 2.25 0 01-2.25 2.25h-3A2.25 2.25 0 018.25 19.5v-15A2.25 2.25 0 0110.5 2.25zM10.5 17.25h3"
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
    design: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 3.75h4.94L19.5 8.78v6.44l-5.03 5.03H9.53L4.5 15.22V8.78L9.53 3.75zM12 11.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
      />
    ),
    api: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15"
      />
    ),
    analytics: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 19.5V5.25M9 19.5V9.75M15 19.5V12M21 19.5V3"
      />
    ),
  };

  return (
    <span
      className="inline-flex h-12 w-12 items-center justify-center rounded-ds-md border border-glass-border bg-surface/80 text-primary shadow-soft"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {paths[icon]}
      </svg>
    </span>
  );
}

export function HomeGridCard({
  title,
  description,
  href,
  icon,
  variant = "default",
  badge,
  learnMoreLabel = "Learn more",
  className,
}: HomeGridCardProps) {
  const isFlagship = variant === "flagship";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-ds-lg border bg-glass/90 p-5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-floating sm:p-6",
        isFlagship
          ? "border-electric-violet/30 bg-gradient-to-br from-electric-violet/[0.08] via-surface/95 to-electric-cyan/[0.06] hover:border-electric-blue/40"
          : "border-glass-border hover:border-electric-blue/30",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          gradientAccents[icon],
        )}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <GridIcon icon={icon} />
          {badge ? (
            <span className="shrink-0 rounded-ds-full bg-gradient-brand px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-on-dark">
              {badge}
            </span>
          ) : null}
        </div>

        <h3
          className={cn(
            "mt-5 font-semibold tracking-tight text-foreground",
            isFlagship ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-3 flex-1 leading-relaxed text-muted",
            isFlagship ? "text-sm sm:text-base" : "text-sm",
          )}
        >
          {description}
        </p>

        <span className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet">
          {learnMoreLabel}
          <span
            className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
