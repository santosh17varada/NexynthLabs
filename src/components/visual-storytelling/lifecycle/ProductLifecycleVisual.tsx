"use client";

import type { ReactNode } from "react";
import {
  isChainHighlighted,
  isChainLinkHighlighted,
  StoryVisualDetailPanel,
  StoryVisualDiagram,
  StoryVisualGlowFilter,
  StoryVisualInteractiveGroup,
  StoryVisualMobileJourney,
  StoryVisualNodeCircle,
  StoryVisualNodeLabel,
  StoryVisualNodeSubLabel,
  StoryVisualTravelDot,
  storyVisualAccent,
  storyVizConnectionFlow,
  useStoryVisualHover,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import {
  homeProductLifecycleCopy,
  PRODUCT_LIFECYCLE_LAYOUT,
} from "@/config/home-product-lifecycle";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

type StageId = (typeof homeProductLifecycleCopy.stages)[number]["id"];

const STAGE_IDS = homeProductLifecycleCopy.stages.map((stage) => stage.id);

const iconPaths: Record<
  (typeof homeProductLifecycleCopy.stages)[number]["icon"],
  ReactNode
> = {
  discover: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
    />
  ),
  design: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-2.5l2.5 2.5L20 12"
    />
  ),
  build: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
  launch: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  ),
  scale: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5"
    />
  ),
};

function StageIcon({
  icon,
  className,
}: {
  icon: (typeof homeProductLifecycleCopy.stages)[number]["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {iconPaths[icon]}
    </svg>
  );
}

function stageIndex(id: StageId): number {
  return STAGE_IDS.indexOf(id);
}

export function ProductLifecycleVisual({ className }: { className?: string }) {
  const { hovered, setHovered, bindNode, clearHover } = useStoryVisualHover<StageId>();
  const reducedMotion = useReducedMotion();
  const { viewBox, trackY, nodeY, nodeRadius, stages } = PRODUCT_LIFECYCLE_LAYOUT;
  const activeStage =
    homeProductLifecycleCopy.stages.find((stage) => stage.id === hovered) ?? null;

  const trackPath = stages.map((stage) => `${stage.x} ${trackY}`).join(" L ");
  const firstX = stages[0].x;
  const lastX = stages[stages.length - 1].x;

  return (
    <StoryVisualFrame
      theme="lifecycle"
      className={cn("min-h-[18rem] lg:min-h-[20rem]", className)}
      onPointerLeave={clearHover}
    >
      <div className="flex h-full flex-col">
        <StoryVisualDiagram
          viewBox={viewBox}
          ariaLabel="Product lifecycle timeline from discover through design, build, launch, to scale"
        >
          <defs>
            <linearGradient id="lifecycle-track-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#8b5cf6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d4a017" stopOpacity="0.9" />
            </linearGradient>
            <StoryVisualGlowFilter id="lifecycle-node-glow" stdDeviation={3} />
          </defs>

          <line
            x1={firstX}
            y1={trackY}
            x2={lastX}
            y2={trackY}
            stroke="url(#lifecycle-track-gradient)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeOpacity={hovered ? 0.35 : 0.55}
            className={storyVizConnectionFlow(reducedMotion)}
          />

          {stages.slice(0, -1).map((stage, index) => {
            const next = stages[index + 1];
            const active = isChainLinkHighlighted(hovered, stage.id as StageId, STAGE_IDS);
            return (
              <line
                key={`segment-${stage.id}`}
                x1={stage.x}
                y1={trackY}
                x2={next.x}
                y2={trackY}
                stroke="#f8f7f4"
                strokeWidth={active ? 3 : 1.5}
                strokeLinecap="round"
                strokeOpacity={active ? 0.9 : hovered ? 0.12 : 0.35}
                className={cn(
                  "story-viz-connection",
                  storyVizConnectionFlow(reducedMotion, active),
                )}
                style={{ animationDelay: `${index * 180}ms` }}
              />
            );
          })}

          {!reducedMotion && !hovered ? (
            <StoryVisualTravelDot
              path={`M ${firstX} ${trackY} L ${trackPath}`}
              duration={5}
              r={4}
              filter="url(#lifecycle-node-glow)"
            />
          ) : null}

          {homeProductLifecycleCopy.stages.map((stage) => {
            const layout = stages.find((item) => item.id === stage.id);
            if (!layout) return null;
            const active = isChainHighlighted(hovered, stage.id, STAGE_IDS);
            const isHovered = hovered === stage.id;
            const color = storyVisualAccent(stage.accent);

            return (
              <StoryVisualInteractiveGroup
                key={stage.id}
                ariaLabel={`${stage.label}: ${stage.description}`}
                {...bindNode(stage.id)}
              >
                <StoryVisualNodeCircle
                  cx={layout.x}
                  cy={nodeY}
                  r={nodeRadius}
                  accent={color}
                  active={active}
                  isHovered={isHovered}
                  reducedMotion={reducedMotion}
                />
                <foreignObject
                  x={layout.x - 14}
                  y={nodeY - 14}
                  width={28}
                  height={28}
                  className="pointer-events-none text-electric-cyan"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <StageIcon icon={stage.icon} />
                  </div>
                </foreignObject>
                <StoryVisualNodeLabel
                  x={layout.x}
                  y={nodeY + nodeRadius + 22}
                  fill={active ? "#f8f7f4" : "#6b7a90"}
                  fontWeight={isHovered ? 700 : 600}
                  className="transition-all duration-200"
                >
                  {stage.label}
                </StoryVisualNodeLabel>
                <StoryVisualNodeSubLabel
                  x={layout.x}
                  y={nodeY + nodeRadius + 38}
                  visible={isHovered}
                >
                  {String(stageIndex(stage.id) + 1).padStart(2, "0")}
                </StoryVisualNodeSubLabel>
              </StoryVisualInteractiveGroup>
            );
          })}
        </StoryVisualDiagram>

        <StoryVisualDetailPanel placeholder="Hover a stage to explore how Nexynth takes products from idea to scale.">
          {activeStage ? (
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-ds-md border border-electric-violet/25 bg-electric-violet/10 text-electric-cyan">
                <StageIcon icon={activeStage.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-on-dark">{activeStage.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
                  {activeStage.description}
                </p>
              </div>
            </div>
          ) : null}
        </StoryVisualDetailPanel>

        <StoryVisualMobileJourney
          steps={homeProductLifecycleCopy.stages.map((stage, index) => ({
            id: stage.id,
            label: stage.label,
            description: stage.description,
            stepNumber: index + 1,
            accent: storyVisualAccent(stage.accent),
            icon: <StageIcon icon={stage.icon} />,
          }))}
          hoveredId={hovered}
          onHover={(id) => setHovered(id as StageId)}
          onClear={clearHover}
          isStepActive={(id) => isChainHighlighted(hovered, id as StageId, STAGE_IDS)}
        />
      </div>
    </StoryVisualFrame>
  );
}
