"use client";

import {
  isChainHighlighted,
  isChainLinkHighlighted,
  StoryVisualConnection,
  StoryVisualDiagram,
  StoryVisualGlowFilter,
  StoryVisualInteractiveGroup,
  StoryVisualMobileJourney,
  StoryVisualNodeLabel,
  StoryVisualNodeRect,
  StoryVisualNodeSubLabel,
  StoryVisualStatusDot,
  StoryVisualTravelDot,
  storyVizConnectionFlow,
  storyVizStatusPulse,
  useStoryVisualHover,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import {
  CLOUD_ARCHITECTURE_LAYOUT,
  engineeringRequestPathCopy,
} from "@/config/engineering-request-path";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type LayerId = (typeof engineeringRequestPathCopy.layers)[number]["id"];

const LAYER_IDS = engineeringRequestPathCopy.layers.map((layer) => layer.id);

const accentByLayer: Record<string, string> = {
  user: "#06b6d4",
  edge: "#3b82f6",
  application: "#8b5cf6",
  api: "#3b82f6",
  database: "#8b5cf6",
  analytics: "#d4a017",
};

export function CloudArchitectureVisual({ className }: { className?: string }) {
  const { hovered, setHovered, bindNode, clearHover } = useStoryVisualHover<LayerId>();
  const reducedMotion = useReducedMotion();
  const { viewBox, centerX, layers } = CLOUD_ARCHITECTURE_LAYOUT;
  const activeLayer = hovered
    ? engineeringRequestPathCopy.layers.find((layer) => layer.id === hovered)
    : null;

  const requestPath = layers.map((layer) => `${centerX} ${layer.y}`).join(" L ");

  return (
    <StoryVisualFrame
      theme="cloud"
      className={cn("min-h-[20rem] lg:min-h-[24rem]", className)}
      onPointerLeave={clearHover}
    >
      <StoryVisualDiagram
        viewBox={viewBox}
        ariaLabel="Cloud architecture request flow from user through edge, application, API, database, to analytics and monitoring"
      >
        <defs>
          <linearGradient id="cloud-arch-spine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d4a017" stopOpacity="0.85" />
          </linearGradient>
          <StoryVisualGlowFilter id="cloud-arch-glow" />
        </defs>

        <line
          x1={centerX}
          y1={layers[0].y}
          x2={centerX}
          y2={layers[layers.length - 1].y + layers[layers.length - 1].height / 2}
          stroke="url(#cloud-arch-spine)"
          strokeWidth={2}
          strokeLinecap="round"
          className={cn(
            "story-viz-connection transition-opacity duration-200",
            hovered ? "opacity-40" : "opacity-70",
            storyVizConnectionFlow(reducedMotion),
          )}
        />

        {layers.slice(0, -1).map((layer, index) => {
          const next = layers[index + 1];
          const active = isChainLinkHighlighted(hovered, layer.id as LayerId, LAYER_IDS);
          const y1 = layer.y + layer.height / 2;
          const y2 = next.y - next.height / 2;
          return (
            <g key={`link-${layer.id}`}>
              <StoryVisualConnection
                x1={centerX}
                y1={y1}
                x2={centerX}
                y2={y2}
                active={active}
                hasHover={Boolean(hovered)}
                reducedMotion={reducedMotion}
                animate={active}
                animationDelay={index * 200}
                opacityLevels={{ idle: 0.45, dim: 0.15, active: 0.85 }}
              />
              {!reducedMotion && active ? (
                <StoryVisualTravelDot
                  path={`M ${centerX} ${y1} L ${centerX} ${y2}`}
                  duration={1.8 + index * 0.15}
                />
              ) : null}
            </g>
          );
        })}

        {!reducedMotion && !hovered ? (
          <>
            <StoryVisualTravelDot
              path={`M ${centerX} ${layers[0].y} L ${requestPath}`}
              duration={4.5}
              r={4}
              filter="url(#cloud-arch-glow)"
            />
            <g opacity={0.9}>
              <rect
                x={-6}
                y={-4}
                width={12}
                height={8}
                rx={2}
                fill="#06b6d4"
                className="cloud-arch-request-packet"
              >
                <animateMotion
                  dur="4.5s"
                  repeatCount="indefinite"
                  path={`M ${centerX} ${layers[0].y} L ${requestPath}`}
                />
              </rect>
            </g>
          </>
        ) : null}

        {layers.map((layer) => {
          const meta = engineeringRequestPathCopy.layers.find((item) => item.id === layer.id);
          const active = isChainHighlighted(hovered, layer.id, LAYER_IDS);
          const color = accentByLayer[layer.id] ?? "#3b82f6";
          const isUser = layer.id === "user";

          return (
            <StoryVisualInteractiveGroup
              key={layer.id}
              ariaLabel={`${meta?.label}: ${meta?.description}`}
              {...bindNode(layer.id as LayerId)}
            >
              {!isUser ? (
                <StoryVisualNodeRect
                  x={centerX - layer.width / 2}
                  y={layer.y - layer.height / 2}
                  width={layer.width}
                  height={layer.height}
                  accent={color}
                  active={active}
                  strokeOpacity={active ? 0.9 : 0.4}
                  activeStrokeWidth={2.25}
                />
              ) : (
                <circle
                  cx={centerX}
                  cy={layer.y}
                  r={28}
                  fill={active ? "#1e3a5f" : "#0f1b2d"}
                  stroke={color}
                  strokeWidth={active ? 2.25 : 1.5}
                  className="transition-all duration-200"
                />
              )}

              {!isUser ? (
                <StoryVisualStatusDot
                  cx={centerX + layer.width / 2 - 18}
                  cy={layer.y - layer.height / 2 + 14}
                  reducedMotion={reducedMotion}
                  pulse={active}
                  className={storyVizStatusPulse(reducedMotion, active)}
                />
              ) : null}

              <StoryVisualNodeLabel
                x={centerX}
                y={isUser ? layer.y + 4 : layer.y - 4}
                fontSize={isUser ? 11 : 12}
                fontWeight={700}
              >
                {meta?.label}
              </StoryVisualNodeLabel>
              {!isUser && meta?.description ? (
                <StoryVisualNodeSubLabel x={centerX} y={layer.y + 14}>
                  {meta.description}
                </StoryVisualNodeSubLabel>
              ) : null}
            </StoryVisualInteractiveGroup>
          );
        })}

        <g aria-hidden="true">
          <rect x={536} y={22} width={10} height={10} rx={2} fill="#22c55e" className={storyVizStatusPulse(reducedMotion)} />
          <text x={552} y={31} fill="#f8f7f4" fontSize={9} fontWeight={700}>
            LIVE REQUEST PATH
          </text>
        </g>
      </StoryVisualDiagram>

      <p className="border-t border-glass-border-dark/70 px-4 py-3 text-sm leading-relaxed text-on-dark-muted sm:px-5">
        {activeLayer ? (
          <>
            <span className="font-semibold text-on-dark">{activeLayer.label}: </span>
            {activeLayer.handles}
          </>
        ) : (
          "Hover a layer to see what Nexynth engineers at each step — a live request path runs when idle."
        )}
      </p>

      <StoryVisualMobileJourney
        steps={engineeringRequestPathCopy.layers.map((layer) => ({
          id: layer.id,
          label: layer.label,
          description: layer.handles,
        }))}
        hoveredId={hovered}
        onHover={(id) => setHovered(id as LayerId)}
        onClear={clearHover}
        isStepActive={(id) => isChainHighlighted(hovered, id as LayerId, LAYER_IDS)}
      />
    </StoryVisualFrame>
  );
}
