"use client";

import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const JOURNEY_STEPS = [
  { id: "search", label: "Search", y: 28 },
  { id: "match", label: "Match", y: 88 },
  { id: "book", label: "Book", y: 148 },
  { id: "complete", label: "Complete", y: 208 },
] as const;

const PARTICLES = [
  { cx: 300, cy: 44, delay: 0 },
  { cx: 360, cy: 92, delay: 0.9 },
  { cx: 330, cy: 150, delay: 1.8 },
  { cx: 390, cy: 196, delay: 2.7 },
  { cx: 285, cy: 218, delay: 3.6 },
] as const;

type GetPanditHeroJourneyAtmosphereProps = {
  className?: string;
  variant?: "vertical" | "horizontal";
};

export function GetPanditHeroJourneyAtmosphere({
  className,
  variant = "vertical",
}: GetPanditHeroJourneyAtmosphereProps) {
  const reducedMotion = useReducedMotion();

  if (variant === "horizontal") {
    return (
      <svg
        viewBox="0 0 360 48"
        className={cn("h-12 w-full", className)}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gp-journey-h-track" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <line
          x1={36}
          y1={24}
          x2={324}
          y2={24}
          stroke="url(#gp-journey-h-track)"
          strokeWidth={1.5}
          strokeLinecap="round"
          opacity={0.45}
        />
        {JOURNEY_STEPS.map((step, index) => {
          const x = 36 + index * 96;
          return (
            <g key={step.id}>
              <circle cx={x} cy={24} r={5} fill="#f8f7f4" stroke="#3b82f6" strokeWidth={1.25} opacity={0.9} />
              <text x={x} y={42} textAnchor="middle" fill="#64748b" fontSize={9} fontWeight={600}>
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 96 240"
      className={cn("h-[15rem] w-full sm:h-[17rem]", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gp-journey-v-track" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
          <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.75" />
        </linearGradient>
        <filter id="gp-journey-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 36 28 L 36 208"
        fill="none"
        stroke="url(#gp-journey-v-track)"
        strokeWidth={1.75}
        strokeLinecap="round"
        opacity={0.5}
        className={cn(!reducedMotion && "getpandit-journey-path")}
      />

      <path
        d="M 36 28 Q 120 72 168 120 T 168 208"
        fill="none"
        stroke="#3b82f6"
        strokeWidth={1}
        strokeLinecap="round"
        strokeDasharray="4 6"
        opacity={0.22}
        className={cn(!reducedMotion && "getpandit-journey-arc")}
      />

      {JOURNEY_STEPS.map((step, index) => (
        <g key={step.id}>
          <circle
            cx={36}
            cy={step.y}
            r={index === JOURNEY_STEPS.length - 1 ? 6 : 5}
            fill="#f8f7f4"
            stroke={index === JOURNEY_STEPS.length - 1 ? "#8b5cf6" : "#3b82f6"}
            strokeWidth={1.25}
            opacity={0.95}
            filter="url(#gp-journey-glow)"
            className={cn(!reducedMotion && index === 0 && "getpandit-journey-node-pulse")}
          />
          <text x={52} y={step.y + 4} fill="#64748b" fontSize={10} fontWeight={600}>
            {step.label}
          </text>
        </g>
      ))}

      {!reducedMotion ? (
        <circle r={2.5} fill="#06b6d4" filter="url(#gp-journey-glow)" className="getpandit-journey-travel-dot">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 36 28 L 36 208" />
        </circle>
      ) : null}

      {PARTICLES.map((particle) => (
        <circle
          key={`${particle.cx}-${particle.cy}`}
          cx={particle.cx}
          cy={particle.cy}
          r={1.25}
          fill="#3b82f6"
          opacity={0.35}
          className={cn(!reducedMotion && "getpandit-journey-particle")}
          style={!reducedMotion ? { animationDelay: `${particle.delay}s` } : undefined}
        />
      ))}
    </svg>
  );
}
