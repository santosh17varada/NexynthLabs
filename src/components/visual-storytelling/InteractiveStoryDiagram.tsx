"use client";

import { useMemo, useState } from "react";
import {
  isEdgeHighlighted,
  isNodeHighlighted,
  StoryVisualDiagram,
  StoryVisualInteractiveGroup,
  StoryVisualMidpointPulse,
  StoryVisualMobileJourney,
  StoryVisualNodeLabel,
  StoryVisualNodeSubLabel,
  storyVisualAccent,
  storyVizConnectionFlow,
  storyVizNodeActive,
  STORY_VISUAL_TOKENS,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import { useReducedMotion } from "@/motion/useReducedMotion";
import type { StoryVisualDefinition } from "@/types/visual-storytelling";
import { cn } from "@/lib/cn";

const VIEWBOX = { width: 900, height: 480 } as const;

type InteractiveStoryDiagramProps = {
  story: StoryVisualDefinition;
  className?: string;
  compact?: boolean;
};

function nodeRadius(node: StoryVisualDefinition["nodes"][number]) {
  if (node.id === "hub" || node.id === "intel") return 36;
  if (node.ring === "primary") return 28;
  return 22;
}

export function InteractiveStoryDiagram({
  story,
  className,
  compact = false,
}: InteractiveStoryDiagramProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [frameHover, setFrameHover] = useState(false);
  const reducedMotion = useReducedMotion();

  const nodeMap = useMemo(
    () => new Map(story.nodes.map((node) => [node.id, node])),
    [story.nodes],
  );

  const mobileOrder = useMemo(() => {
    const primary = story.nodes.filter((node) => node.ring === "primary");
    if (story.id === "getpandit-ecosystem") {
      const journey = ["user", "search", "compare", "book", "pandit", "ceremony"];
      const ordered = journey
        .map((id) => primary.find((node) => node.id === id))
        .filter(Boolean) as StoryVisualDefinition["nodes"];
      return ordered.length > 0 ? ordered : primary;
    }
    return primary;
  }, [story.id, story.nodes]);

  return (
    <StoryVisualFrame
      theme={story.theme}
      className={cn(compact && "max-h-64", className)}
      onPointerEnter={() => setFrameHover(true)}
      onPointerLeave={() => {
        setFrameHover(false);
        setHovered(null);
      }}
    >
      <StoryVisualDiagram
        viewBox={VIEWBOX}
        ariaLabel={`${story.title} interactive diagram`}
        variant="wide"
      >
        <defs>
          {story.edges.map((edge) => {
            const from = nodeMap.get(edge.from);
            const to = nodeMap.get(edge.to);
            if (!from || !to) return null;
            return (
              <linearGradient
                key={`grad-${edge.id}`}
                id={`story-edge-${story.id}-${edge.id}`}
                gradientUnits="userSpaceOnUse"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              >
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
              </linearGradient>
            );
          })}
        </defs>

        {story.edges.map((edge) => {
          const from = nodeMap.get(edge.from);
          const to = nodeMap.get(edge.to);
          if (!from || !to) return null;
          const active = isEdgeHighlighted(edge, hovered);
          return (
            <line
              key={edge.id}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={`url(#story-edge-${story.id}-${edge.id})`}
              strokeWidth={active ? 2.5 : edge.primary ? 2 : 1.25}
              strokeLinecap="round"
              className={cn(
                "story-viz-connection transition-opacity duration-200",
                active ? "opacity-100" : hovered ? "opacity-40" : "opacity-75",
                edge.primary && storyVizConnectionFlow(reducedMotion),
              )}
              style={{ animationDelay: `${edge.id.length * 40}ms` }}
            />
          );
        })}

        {!reducedMotion
          ? story.edges
              .filter((edge) => edge.primary)
              .map((edge, index) => {
                const from = nodeMap.get(edge.from);
                const to = nodeMap.get(edge.to);
                if (!from || !to) return null;
                return (
                  <StoryVisualMidpointPulse
                    key={`pulse-${edge.id}`}
                    cx={(from.x + to.x) / 2}
                    cy={(from.y + to.y) / 2}
                    animationDelay={index * 350}
                  />
                );
              })
          : null}

        {story.nodes.map((node) => {
          const r = nodeRadius(node);
          const active = isNodeHighlighted(node.id, hovered, story.edges);
          const color = storyVisualAccent(node.accent);
          const isHub = node.id === "hub" || node.id === "intel";

          return (
            <StoryVisualInteractiveGroup
              key={node.id}
              ariaLabel={node.label}
              onMouseEnter={() => setHovered(node.id)}
              onFocus={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onBlur={() => setHovered(null)}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={r + (active ? 8 : 5)}
                fill={color}
                opacity={active ? 0.32 : frameHover ? 0.18 : 0.12}
                className="transition-opacity duration-200"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={isHub ? STORY_VISUAL_TOKENS.nodeFillActive : STORY_VISUAL_TOKENS.nodeFill}
                stroke={color}
                strokeWidth={active ? 2.5 : 1.5}
                className={cn(
                  "transition-all duration-200",
                  storyVizNodeActive(reducedMotion, active),
                )}
              />
              <StoryVisualNodeLabel
                x={node.x}
                y={node.y + (node.shortLabel ? -2 : 1)}
                fontSize={isHub ? 12 : node.ring === "secondary" ? 10 : 11}
              >
                {node.shortLabel ?? node.label}
              </StoryVisualNodeLabel>
              {node.shortLabel ? (
                <StoryVisualNodeSubLabel x={node.x} y={node.y + 12}>
                  {node.label}
                </StoryVisualNodeSubLabel>
              ) : null}
            </StoryVisualInteractiveGroup>
          );
        })}
      </StoryVisualDiagram>

      <StoryVisualMobileJourney
        steps={mobileOrder.map((node, index) => ({
          id: node.id,
          label: node.label,
          stepNumber: index + 1,
          accent: storyVisualAccent(node.accent),
        }))}
        hoveredId={hovered}
        onHover={setHovered}
        onClear={() => setHovered(null)}
      />
    </StoryVisualFrame>
  );
}
