import type { ReactNode } from "react";
import { HomeDarkCard } from "@/components/home/HomeDarkCard";
import { HomeDarkSection } from "@/components/home/HomeDarkSection";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getHomeWhyFeaturedReasons,
  homeWhyCopy,
  type HomeWhyReasonIcon,
} from "@/config/home-why";

const iconPaths: Record<HomeWhyReasonIcon, ReactNode> = {
  strategy: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  ),
  ai: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 3.104a2.25 2.25 0 013.5 0M14.25 8.25h3.75M6 21v-4.5a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 16.5V21"
    />
  ),
  security: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  ),
  ux: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 3.75h4.94L19.5 8.78v6.44l-5.03 5.03H9.53L4.5 15.22V8.78L9.53 3.75zM12 11.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
    />
  ),
  iteration: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  ),
  ownership: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
    />
  ),
};

function WhyReasonIcon({ icon }: { icon: HomeWhyReasonIcon }) {
  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-ds-md border border-electric-violet/25 bg-electric-violet/10 text-electric-cyan"
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

export function HomeWhySection() {
  const copy = homeWhyCopy;
  const reasons = getHomeWhyFeaturedReasons();

  return (
    <HomeDarkSection id="why-nexynth">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        tone="dark"
      />

      <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {reasons.map((reason, index) => (
          <AnimateIn
            key={reason.id}
            delay={(Math.min(index, 5) as 0 | 1 | 2 | 3 | 4 | 5)}
          >
            <HomeDarkCard
              as="article"
              className="h-full bg-gradient-to-br from-glass-dark/85 via-glass-dark/70 to-electric-blue/[0.05]"
            >
              <WhyReasonIcon icon={reason.icon} />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-on-dark sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted sm:text-base">
                {reason.description}
              </p>
            </HomeDarkCard>
          </AnimateIn>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-on-dark-muted">
        {copy.footnote}{" "}
        <a
          href="/about"
          className="font-semibold text-electric-cyan transition-colors hover:text-on-dark hover:underline"
        >
          Learn more about our approach →
        </a>
      </p>
    </HomeDarkSection>
  );
}
