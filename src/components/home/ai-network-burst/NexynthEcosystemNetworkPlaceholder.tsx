import {
  ECOSYSTEM_EDGES,
  ECOSYSTEM_NODES,
  ECOSYSTEM_ACCENT_COLORS,
} from "@/components/home/ai-network-burst/nexynth-ecosystem-network";
import { cn } from "@/lib/cn";

type NexynthEcosystemNetworkPlaceholderProps = {
  className?: string;
};

const VIEWBOX = { width: 400, height: 320 };

const PLACEHOLDER_NODES: Record<
  (typeof ECOSYSTEM_NODES)[number]["id"],
  { x: number; y: number }
> = {
  platform: { x: 200, y: 160 },
  "ai-agents": { x: 200, y: 45 },
  mobile: { x: 88, y: 115 },
  cloud: { x: 312, y: 115 },
  getpandit: { x: 200, y: 218 },
  enterprise: { x: 200, y: 288 },
};

/** SSR-safe static ecosystem map — matches client layout anchors before mount. */
export function NexynthEcosystemNetworkPlaceholder({
  className,
}: NexynthEcosystemNetworkPlaceholderProps) {
  return (
    <div
      className={cn(
        "h-full w-full bg-gradient-to-br from-[#12082a] via-[#0f1b2d] to-[#0a1628]",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="eco-ph-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={VIEWBOX.width} height={VIEWBOX.height} fill="url(#eco-ph-glow)" />

        {ECOSYSTEM_EDGES.map((edge) => {
          const from = PLACEHOLDER_NODES[edge.from];
          const to = PLACEHOLDER_NODES[edge.to];
          const node = ECOSYSTEM_NODES.find((item) => item.id === edge.to);
          const color = node ? ECOSYSTEM_ACCENT_COLORS[node.accent] : "#3b82f6";
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={color}
              strokeWidth={1.1}
              strokeLinecap="round"
              opacity={0.35}
            />
          );
        })}

        {ECOSYSTEM_NODES.map((node) => {
          const pos = PLACEHOLDER_NODES[node.id];
          const color = ECOSYSTEM_ACCENT_COLORS[node.accent];
          const isCenter = node.id === "platform";
          return (
            <g key={node.id}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isCenter ? 14 : 9}
                fill={color}
                opacity={0.25}
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isCenter ? 5 : 3}
                fill={color}
                opacity={0.9}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
