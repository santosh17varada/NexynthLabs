import {
  NETWORK_BURST_RAYS,
  NETWORK_BURST_STROKE_COLORS,
  NETWORK_BURST_VIEWBOX,
  dotOnRay,
  rayEndpoint,
} from "@/components/home/ai-network-burst/network-burst-rays";
import { cn } from "@/lib/cn";

type AiNetworkBurstStaticProps = {
  className?: string;
};

export function AiNetworkBurstStatic({ className }: AiNetworkBurstStaticProps) {
  const { width, height } = NETWORK_BURST_VIEWBOX;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.46;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="network-burst-static-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0a0f1a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="network-burst-static-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f1b2d" />
          <stop offset="45%" stopColor="#121c38" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        {NETWORK_BURST_RAYS.map((ray) => {
          const end = rayEndpoint(cx, cy, radius, ray);
          return (
            <linearGradient
              key={`grad-${ray.id}`}
              id={`network-burst-line-${ray.id}`}
              gradientUnits="userSpaceOnUse"
              x1={cx}
              y1={cy}
              x2={end.x}
              y2={end.y}
            >
              <stop offset="0%" stopColor={NETWORK_BURST_STROKE_COLORS[ray.stroke]} stopOpacity="0.85" />
              <stop offset="55%" stopColor={NETWORK_BURST_STROKE_COLORS[ray.stroke]} stopOpacity="0.35" />
              <stop offset="100%" stopColor={NETWORK_BURST_STROKE_COLORS[ray.stroke]} stopOpacity="0" />
            </linearGradient>
          );
        })}
      </defs>

      <rect width={width} height={height} fill="url(#network-burst-static-bg)" />
      <rect width={width} height={height} fill="url(#network-burst-static-glow)" />

      {NETWORK_BURST_RAYS.map((ray) => {
        const end = rayEndpoint(cx, cy, radius, ray);
        return (
          <line
            key={ray.id}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke={`url(#network-burst-line-${ray.id})`}
            strokeWidth={ray.width}
            strokeLinecap="round"
          />
        );
      })}

      {NETWORK_BURST_RAYS.map((ray) => {
        const end = rayEndpoint(cx, cy, radius, ray);
        const dot = dotOnRay(cx, cy, end.x, end.y, ray.dotPhase);
        const trail = ray.trailPhase
          ? dotOnRay(cx, cy, end.x, end.y, ray.trailPhase)
          : null;
        return (
          <g key={`dot-${ray.id}`}>
            {trail ? (
              <circle
                cx={trail.x}
                cy={trail.y}
                r={2.2}
                fill="#06b6d4"
                opacity={0.35}
              />
            ) : null}
            <circle
              cx={dot.x}
              cy={dot.y}
              r={3}
              fill="#f8f7f4"
              opacity={0.9}
            />
            <circle
              cx={dot.x}
              cy={dot.y}
              r={5.5}
              fill={NETWORK_BURST_STROKE_COLORS[ray.stroke]}
              opacity={0.22}
            />
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r={34} fill="#0f1b2d" opacity={0.55} />
      <circle cx={cx} cy={cy} r={28} fill="none" stroke="#8b5cf6" strokeOpacity={0.45} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={18} fill="url(#network-burst-static-glow)" opacity={0.9} />
      <circle cx={cx} cy={cy} r={8} fill="#3b82f6" opacity={0.95} />
      <circle cx={cx} cy={cy} r={3.5} fill="#f8f7f4" />
    </svg>
  );
}
