"use client";

import { useState } from "react";
import {
  isChainHighlighted,
  isChainLinkHighlighted,
  StoryVisualConnection,
  StoryVisualDiagram,
  StoryVisualGlowFilter,
  StoryVisualInteractiveGroup,
  StoryVisualNodeCircle,
  StoryVisualNodeLabel,
  StoryVisualTravelDot,
  storyVisualAccent,
  storyVizConnectionFlow,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import {
  CARD_IDS,
  GETPANDIT_ECOSYSTEM_LAYOUT,
  getPanditEcosystemStoryCopy,
  type GetPanditEcosystemCardId,
} from "@/config/getpandit-ecosystem-story";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const accentByCard: Record<GetPanditEcosystemCardId, "cyan" | "blue" | "violet" | "gold"> = {
  discover: "cyan",
  match: "blue",
  book: "violet",
  ceremony: "gold",
};

type GetPanditEcosystemStoryVisualProps = {
  className?: string;
  hovered: GetPanditEcosystemCardId | null;
  onHover: (id: GetPanditEcosystemCardId | null) => void;
};

export function GetPanditEcosystemStoryVisual({
  className,
  hovered,
  onHover,
}: GetPanditEcosystemStoryVisualProps) {
  const reducedMotion = useReducedMotion();
  const { viewBox, trackY, nodeY, nodeRadius, nodes } = GETPANDIT_ECOSYSTEM_LAYOUT;
  const firstX = nodes[0].x;
  const lastX = nodes[nodes.length - 1].x;

  return (
    <StoryVisualFrame
      theme="getpandit"
      className={cn("min-h-[11rem] sm:min-h-[12rem]", className)}
      onPointerLeave={() => onHover(null)}
    >
      <StoryVisualDiagram
        viewBox={viewBox}
        ariaLabel="GetPandit ecosystem journey from family discovery through matching, booking, to ceremony completion"
        alwaysVisible
        className="min-h-[9rem] sm:min-h-[10rem]"
      >
        <defs>
          <linearGradient id="getpandit-eco-track" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0.85" />
          </linearGradient>
          <StoryVisualGlowFilter id="getpandit-eco-glow" stdDeviation={3} />
        </defs>

        <line
          x1={firstX}
          y1={trackY}
          x2={lastX}
          y2={trackY}
          stroke="url(#getpandit-eco-track)"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeOpacity={hovered ? 0.35 : 0.5}
          className={storyVizConnectionFlow(reducedMotion, !hovered)}
        />

        {nodes.slice(0, -1).map((node, index) => {
          const next = nodes[index + 1];
          const active = isChainLinkHighlighted(hovered, node.id, CARD_IDS);
          const y1 = trackY;
          return (
            <g key={`segment-${node.id}`}>
              <StoryVisualConnection
                x1={node.x}
                y1={y1}
                x2={next.x}
                y2={trackY}
                active={active}
                hasHover={Boolean(hovered)}
                reducedMotion={reducedMotion}
                animate={active}
                stroke="#f8f7f4"
                strokeWidth={1.25}
                activeStrokeWidth={2.5}
                animationDelay={index * 160}
                opacityLevels={{ idle: 0.5, dim: 0.22, active: 0.92 }}
              />
              {!reducedMotion && active ? (
                <StoryVisualTravelDot
                  path={`M ${node.x} ${y1} L ${next.x} ${trackY}`}
                  duration={2.2 + index * 0.2}
                  r={2.8}
                  filter="url(#getpandit-eco-glow)"
                />
              ) : null}
            </g>
          );
        })}

        {getPanditEcosystemStoryCopy.cards.map((card) => {
          const layout = nodes.find((node) => node.id === card.id);
          if (!layout) return null;
          const active = isChainHighlighted(hovered, card.id, CARD_IDS);
          const isHovered = hovered === card.id;
          const color = storyVisualAccent(accentByCard[card.id]);

          return (
            <StoryVisualInteractiveGroup
              key={card.id}
              ariaLabel={card.title}
              onMouseEnter={() => onHover(card.id)}
              onFocus={() => onHover(card.id)}
              onMouseLeave={() => onHover(null)}
              onBlur={() => onHover(null)}
            >
              <StoryVisualNodeCircle
                cx={layout.x}
                cy={nodeY}
                r={isHovered ? nodeRadius + 2 : nodeRadius}
                accent={color}
                active={active}
                isHovered={isHovered}
                reducedMotion={reducedMotion}
                glowRing={isHovered}
              />
              <StoryVisualNodeLabel
                x={layout.x}
                y={nodeY + nodeRadius + 20}
                fontSize={10}
                fontWeight={isHovered ? 700 : 600}
                fill={active ? "#f8f7f4" : "#c8d0dc"}
              >
                {card.step}
              </StoryVisualNodeLabel>
            </StoryVisualInteractiveGroup>
          );
        })}
      </StoryVisualDiagram>
    </StoryVisualFrame>
  );
}

type GetPanditEcosystemStoryCardsProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function GetPanditEcosystemStoryCards({
  className,
  tone = "light",
}: GetPanditEcosystemStoryCardsProps) {
  const [hovered, setHovered] = useState<GetPanditEcosystemCardId | null>(null);
  const copy = getPanditEcosystemStoryCopy;

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      <GetPanditEcosystemStoryVisual hovered={hovered} onHover={setHovered} />

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {copy.cards.map((card) => {
          const isActive = hovered === card.id;
          const color = storyVisualAccent(accentByCard[card.id]);
          const isLight = tone === "light";
          return (
            <button
              key={card.id}
              type="button"
              className={cn(
                "group relative overflow-hidden rounded-ds-xl border p-4 text-left transition-all duration-300 sm:p-5",
                isLight
                  ? isActive
                    ? "border-electric-violet/40 bg-surface shadow-elevated ring-1 ring-electric-violet/15"
                    : "border-border/70 bg-surface shadow-soft hover:-translate-y-0.5 hover:border-electric-blue/35 hover:shadow-elevated"
                  : isActive
                    ? "border-electric-violet/45 bg-electric-violet/10 shadow-soft"
                    : "border-glass-border-dark bg-glass-dark/50 hover:border-electric-blue/30 hover:bg-glass-dark/60",
              )}
              onMouseEnter={() => setHovered(card.id)}
              onFocus={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              onBlur={() => setHovered(null)}
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-ds-md text-xs font-bold",
                  isLight ? "text-foreground" : "text-on-dark",
                )}
                style={{ backgroundColor: `${color}22`, color }}
              >
                {card.step}
              </span>
              <h3
                className={cn(
                  "mt-3 text-sm font-semibold sm:text-base",
                  isLight ? "text-foreground" : "text-on-dark",
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-xs leading-relaxed sm:text-sm",
                  isLight ? "text-muted" : "text-on-dark-muted",
                )}
              >
                {card.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
