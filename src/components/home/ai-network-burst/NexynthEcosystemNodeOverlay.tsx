"use client";

import Link from "next/link";
import {
  ECOSYSTEM_ACCENT_COLORS,
  ECOSYSTEM_NODES,
  getEcosystemNode,
  getEcosystemRevealState,
  hexToRgba,
  isEcosystemNodeRevealed,
  type EcosystemLayout,
  type EcosystemNodeId,
} from "@/components/home/ai-network-burst/nexynth-ecosystem-network";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/motion/useReducedMotion";

type NexynthEcosystemNodeOverlayProps = {
  layout: EcosystemLayout;
  hoveredId: EcosystemNodeId | null;
  revealStage?: number;
  onHover: (id: EcosystemNodeId | null) => void;
};

function EcosystemInfoCard({
  nodeId,
  layout,
}: {
  nodeId: EcosystemNodeId;
  layout: EcosystemLayout;
}) {
  const node = getEcosystemNode(nodeId);
  const pos = layout.nodes[nodeId];
  const cardOnLeft = pos.x > layout.nodes.platform.x;

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-20 w-[min(calc(100%-1.5rem),15rem)] rounded-ds-lg border border-glass-border-dark/70 bg-midnight/92 p-3 shadow-floating backdrop-blur-md",
        layout.mode === "vertical" ? "bottom-[10%] left-1/2 -translate-x-1/2" : "",
      )}
      style={
        layout.mode === "vertical"
          ? undefined
          : {
              left: cardOnLeft ? pos.x - 16 : pos.x + 16,
              top: pos.y,
              transform: cardOnLeft ? "translate(-100%, -50%)" : "translate(0, -50%)",
            }
      }
      role="status"
      aria-live="polite"
    >
      <p className="text-sm font-semibold text-on-dark">{node.title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-on-dark-muted">{node.description}</p>
      {node.cta ? (
        <Link
          href={node.cta.href}
          className="pointer-events-auto mt-2 inline-flex text-xs font-semibold text-electric-cyan transition-colors hover:text-on-dark"
        >
          {node.cta.label} →
        </Link>
      ) : null}
    </div>
  );
}

export function NexynthEcosystemNodeOverlay({
  layout,
  hoveredId,
  revealStage = 0,
  onHover,
}: NexynthEcosystemNodeOverlayProps) {
  const reducedMotion = useReducedMotion();
  const { platformActive } = getEcosystemRevealState(revealStage);

  return (
    <div className="absolute inset-0 z-10" onPointerLeave={() => onHover(null)}>
      {ECOSYSTEM_NODES.map((node) => {
        const pos = layout.nodes[node.id];
        const isRevealed = isEcosystemNodeRevealed(node.id, revealStage);
        const isHovered = hoveredId === node.id;
        const isCenter = node.id === "platform";
        const accent = ECOSYSTEM_ACCENT_COLORS[node.accent];
        const showNode = revealStage === 0 || isRevealed;

        if (!showNode) return null;

        return (
          <button
            key={node.id}
            type="button"
            className={cn(
              "group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-ds-md border-0 bg-transparent p-1 text-center transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue/50",
              isCenter ? "min-w-[7.5rem]" : "min-w-[5.5rem]",
              revealStage === 0 ? "opacity-70" : "opacity-100",
              isHovered && "scale-105",
              isCenter && platformActive && "scale-110",
            )}
            style={{ left: pos.x, top: pos.y }}
            aria-label={`${node.title}. ${node.description}`}
            aria-pressed={isHovered}
            onMouseEnter={() => onHover(node.id)}
            onFocus={() => onHover(node.id)}
            onBlur={(event) => {
              const next = event.relatedTarget;
              if (next instanceof Node && event.currentTarget.contains(next)) return;
              onHover(null);
            }}
          >
            <span
              className={cn(
                "relative flex items-center justify-center rounded-full transition-shadow duration-200",
                isCenter ? "h-12 w-12" : "h-9 w-9",
                isHovered && "shadow-[0_0_24px_rgba(59,130,246,0.45)]",
              )}
              style={{
                boxShadow: isHovered
                  ? `0 0 0 6px ${hexToRgba(accent, 0.12)}`
                  : undefined,
              }}
            >
              <span
                className={cn(
                  "rounded-full border border-white/20",
                  isCenter ? "h-4 w-4" : "h-2.5 w-2.5",
                )}
                style={{ backgroundColor: accent }}
                aria-hidden="true"
              />
              {isHovered && !reducedMotion ? (
                <span
                  className="absolute inset-0 animate-ping rounded-full opacity-30"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                />
              ) : null}
            </span>
            <span
              className={cn(
                "max-w-[6.5rem] text-[0.65rem] font-semibold uppercase tracking-wide transition-colors sm:text-[0.7rem]",
                isHovered ? "text-on-dark" : "text-on-dark-muted",
                isCenter && "max-w-[8rem] normal-case tracking-tight sm:text-xs",
              )}
            >
              {node.label}
            </span>
          </button>
        );
      })}

      {hoveredId ? <EcosystemInfoCard nodeId={hoveredId} layout={layout} /> : null}
    </div>
  );
}
