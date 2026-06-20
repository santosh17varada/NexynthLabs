"use client";

import { useEffect, useState } from "react";
import {
  NETWORK_BURST_STORY,
  networkBurstAccentColor,
  networkBurstNodePosition,
  type NetworkBurstStoryNodeId,
} from "@/config/network-burst-story";
import { cn } from "@/lib/cn";

const { viewBox, center, nodes, sequence, hubLabel, defaultHint } = NETWORK_BURST_STORY;

const positionedNodes = nodes.map((node) => ({
  ...node,
  ...networkBurstNodePosition(node.angle),
}));

const sequencePath = sequence
  .map((id) => {
    const node = positionedNodes.find((item) => item.id === id);
    return node ? `${node.x} ${node.y}` : "";
  })
  .filter(Boolean)
  .join(" L ");

type AiNetworkBurstStoryProps = {
  className?: string;
  /** Overlay on ray burst — subtler spokes, glass nodes. */
  variant?: "default" | "overlay";
};

export function AiNetworkBurstStory({
  className,
  variant = "default",
}: AiNetworkBurstStoryProps) {
  const isOverlay = variant === "overlay";
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<NetworkBurstStoryNodeId | null>(null);

  useEffect(() => {
    // Post-hydration gate: enable interactivity only after client mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional hydration guard
    setMounted(true);
  }, []);

  const active = mounted ? positionedNodes.find((node) => node.id === hovered) : undefined;

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <svg
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        className="h-full w-full flex-1"
        role="img"
        aria-label="Nexynth AI story from idea through agent, automation, product, to scale"
        style={{ pointerEvents: isOverlay ? "none" : "auto" }}
        onPointerLeave={mounted ? () => setHovered(null) : undefined}
      >
        <defs>
          <radialGradient id="nb-story-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="nb-story-ring" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0.7" />
          </linearGradient>
          <filter id="nb-story-node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={viewBox.width} height={viewBox.height} fill="transparent" />

        {!isOverlay ? (
          <path
            d={`M ${sequencePath} Z`}
            fill="none"
            stroke="url(#nb-story-ring)"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={mounted && hovered ? 0.35 : 0.55}
            className={cn(!hovered && "network-burst-story-ring")}
          />
        ) : (
          <path
            d={`M ${sequencePath} Z`}
            fill="none"
            stroke="url(#nb-story-ring)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={mounted && hovered ? 0.5 : 0.22}
            className={cn(mounted && !hovered && "network-burst-story-ring")}
          />
        )}

        {positionedNodes.map((node) => {
          const isHovered = mounted && hovered === node.id;
          const isActive = !mounted || !hovered || isHovered;
          const color = networkBurstAccentColor(node.accent);
          return (
            <line
              key={`spoke-${node.id}`}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke={color}
              strokeWidth={isHovered ? 2 : isOverlay ? 1 : 1.25}
              strokeLinecap="round"
              opacity={isActive ? (isHovered ? 0.95 : isOverlay ? 0.35 : 0.45) : 0.12}
              className={cn(
                "transition-opacity duration-200",
                isHovered && "network-burst-story-spoke",
              )}
            />
          );
        })}

        {mounted && !hovered && !isOverlay ? (
          <circle r={3} fill="#f8f7f4" opacity={0.9}>
            <animateMotion dur="5s" repeatCount="indefinite" path={`M ${sequencePath} Z`} />
          </circle>
        ) : null}

        <circle
          cx={center.x}
          cy={center.y}
          r={isOverlay ? 30 : 26}
          fill={isOverlay ? "rgba(15,27,45,0.72)" : "#0f1b2d"}
          stroke="#8b5cf6"
          strokeWidth={isOverlay ? 1.75 : 1.5}
          opacity={0.96}
          filter={isOverlay && mounted ? "url(#nb-story-node-glow)" : undefined}
        />
        <circle cx={center.x} cy={center.y} r={isOverlay ? 22 : 18} fill="url(#nb-story-glow)" />
        <circle cx={center.x} cy={center.y} r={isOverlay ? 9 : 7} fill="#3b82f6" />
        <text
          x={center.x}
          y={center.y + (isOverlay ? 48 : 44)}
          textAnchor="middle"
          fill="#f8f7f4"
          fontSize={isOverlay ? 12 : 11}
          fontWeight={700}
        >
          {hubLabel}
        </text>

        {positionedNodes.map((node) => {
          const isHovered = mounted && hovered === node.id;
          const isActive = !mounted || !hovered || isHovered;
          const color = networkBurstAccentColor(node.accent);
          return (
            <g
              key={node.id}
              role={mounted ? "button" : undefined}
              tabIndex={mounted ? 0 : undefined}
              style={isOverlay ? { pointerEvents: "auto" } : undefined}
              className={mounted ? "cursor-pointer outline-none" : undefined}
              aria-label={mounted ? `${node.label}: ${node.description}` : undefined}
              onMouseEnter={mounted ? () => setHovered(node.id) : undefined}
              onFocus={mounted ? () => setHovered(node.id) : undefined}
              onMouseLeave={mounted ? () => setHovered(null) : undefined}
              onBlur={mounted ? () => setHovered(null) : undefined}
            >
              {isOverlay ? (
                <rect
                  x={node.x - (isHovered ? 38 : 34)}
                  y={node.y - (isHovered ? 14 : 12)}
                  width={isHovered ? 76 : 68}
                  height={isHovered ? 28 : 24}
                  rx={12}
                  fill={isHovered ? "rgba(15,27,45,0.92)" : "rgba(15,27,45,0.78)"}
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 1.25}
                  opacity={isActive ? 1 : 0.5}
                  className="transition-all duration-200"
                  filter={isHovered ? "url(#nb-story-node-glow)" : undefined}
                />
              ) : (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 14 : 11}
                  fill="#0f1b2d"
                  stroke={color}
                  strokeWidth={isHovered ? 2 : 1.25}
                  opacity={isActive ? 1 : 0.45}
                  className="transition-all duration-200"
                />
              )}
              <text
                x={node.x}
                y={isOverlay ? node.y + 4 : node.y + (node.angle > 90 && node.angle < 270 ? 28 : -18)}
                textAnchor="middle"
                dominantBaseline={isOverlay ? "middle" : "auto"}
                fill={isActive ? "#f8f7f4" : "#a8b4c4"}
                fontSize={isOverlay ? 11 : 10}
                fontWeight={isHovered ? 700 : 600}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <p
        className={cn(
          "border-t px-5 py-3 text-center text-sm leading-relaxed sm:px-8",
          isOverlay
            ? "border-glass-border-dark/40 bg-midnight/40 text-on-dark-muted backdrop-blur-sm"
            : "border-glass-border-dark/60 text-on-dark-muted",
        )}
      >
        {active ? (
          <>
            <span className="font-semibold text-on-dark">{active.label}: </span>
            {active.description}
          </>
        ) : (
          defaultHint
        )}
      </p>
    </div>
  );
}
