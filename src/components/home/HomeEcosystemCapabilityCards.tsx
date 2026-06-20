"use client";

import Link from "next/link";
import { homeEcosystemCapabilities } from "@/config/home-network-burst";
import { cn } from "@/lib/cn";
import { motionDelayClasses } from "@/motion/classes";
import type { MotionDelayIndex } from "@/motion/tokens";

function CapabilityIcon({ id }: { id: string }) {
  const common = "h-5 w-5";
  switch (id) {
    case "ai-agents":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l2.2 4.5 4.9.7-3.5 3.4.8 4.9L12 14.8 7.6 16.5l.8-4.9L5 8.2l4.9-.7L12 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 18h9.5a3.5 3.5 0 000-7 4.5 4.5 0 00-8.6-1.8A3.25 3.25 0 007 18z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "enterprise":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 20V8l8-4 8 4v12M9 20v-6h6v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 7h14v10H5zM9 7V5h6v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

type HomeEcosystemCapabilityCardsProps = {
  visible: boolean;
};

export function HomeEcosystemCapabilityCards({ visible }: HomeEcosystemCapabilityCardsProps) {
  return (
    <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5">
      {homeEcosystemCapabilities.map((capability, index) => {
        const delayIndex = Math.min(index + 1, 5) as MotionDelayIndex;
        const delayClass = visible ? motionDelayClasses[delayIndex] : "";

        return (
          <Link
            key={capability.id}
            href={capability.href}
            className={cn(
              "group flex h-full flex-col rounded-ds-lg border border-glass-border-dark bg-midnight p-4 text-on-dark shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-blue/30 hover:shadow-floating sm:p-5",
              visible && "motion-card-reveal",
              visible && delayClass,
            )}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-ds-md bg-electric-blue/10 text-electric-cyan transition-colors group-hover:bg-electric-violet/15 group-hover:text-electric-violet">
              <CapabilityIcon id={capability.id} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-on-dark sm:text-base">
              {capability.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-on-dark-muted sm:text-sm">
              {capability.value}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
