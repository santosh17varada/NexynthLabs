"use client";

import { useMemo } from "react";
import {
  StoryVisualConnection,
  StoryVisualDiagram,
  StoryVisualInteractiveGroup,
  StoryVisualMobileSectionLabel,
  StoryVisualNodeLabel,
  StoryVisualNodeRect,
  StoryVisualTravelDot,
  STORY_VIZ_CLASSES,
  STORY_VISUAL_TOKENS,
  useStoryVisualHover,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import {
  AI_WORKFLOW_LAYOUT,
  homeAiWorkflowCopy,
} from "@/config/home-ai-workflow";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const LAYER_CHAIN = ["agent", "decision", "automation", "outcomes"] as const;
const SOURCE_IDS: string[] = homeAiWorkflowCopy.sources.map((source) => source.id);

function layerIndex(id: string): number {
  return LAYER_CHAIN.indexOf(id as (typeof LAYER_CHAIN)[number]);
}

function shouldHighlightNode(hovered: string | null, nodeId: string): boolean {
  if (!hovered) return true;
  if (nodeId === hovered) return true;
  if (hovered.startsWith("outcome-")) return true;
  if (SOURCE_IDS.includes(hovered)) {
    return (
      SOURCE_IDS.includes(nodeId) ||
      LAYER_CHAIN.includes(nodeId as (typeof LAYER_CHAIN)[number]) ||
      nodeId.startsWith("outcome-")
    );
  }
  if (LAYER_CHAIN.includes(hovered as (typeof LAYER_CHAIN)[number])) {
    const hoverIdx = layerIndex(hovered);
    if (SOURCE_IDS.includes(nodeId)) return true;
    const nodeIdx = layerIndex(nodeId);
    if (nodeIdx >= 0) return nodeIdx >= hoverIdx;
    return nodeId.startsWith("outcome-");
  }
  return false;
}

function shouldHighlightSourcePath(hovered: string | null, sourceId: string): boolean {
  if (!hovered) return true;
  if (hovered === sourceId) return true;
  if (SOURCE_IDS.includes(hovered)) return hovered === sourceId;
  return shouldHighlightNode(hovered, "agent");
}

function shouldHighlightLayerLink(hovered: string | null, fromLayerId: string): boolean {
  if (!hovered) return true;
  if (SOURCE_IDS.includes(hovered) || hovered.startsWith("outcome-")) return true;
  if (LAYER_CHAIN.includes(hovered as (typeof LAYER_CHAIN)[number])) {
    return layerIndex(hovered) >= layerIndex(fromLayerId);
  }
  return false;
}

function sourceLabel(id: string) {
  return homeAiWorkflowCopy.sources.find((source) => source.id === id)?.label ?? id;
}

function layerLabel(id: string) {
  return homeAiWorkflowCopy.layers.find((layer) => layer.id === id)?.label ?? id;
}

export function AiWorkflowFlowVisual({ className }: { className?: string }) {
  const { hovered, setHovered, bindNode, clearHover } = useStoryVisualHover<string>();
  const reducedMotion = useReducedMotion();
  const { viewBox, sources, layers, convergeY, centerX } = AI_WORKFLOW_LAYOUT;

  const sourceToConverge = useMemo(
    () =>
      sources.map((source) => ({
        id: source.id,
        x1: source.x,
        y1: source.y + 28,
        x2: centerX,
        y2: convergeY,
      })),
    [sources, centerX, convergeY],
  );

  return (
    <StoryVisualFrame
      theme="ai"
      className={cn("min-h-[20rem] lg:min-h-[24rem]", className)}
      onPointerLeave={clearHover}
    >
      <StoryVisualDiagram
        viewBox={viewBox}
        ariaLabel="AI workflow from enterprise data sources through agent, decision, and automation layers to business outcomes"
      >
        <defs>
          <linearGradient id="ai-workflow-bg-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="ai-workflow-layer-agent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="ai-workflow-stream" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <rect width={viewBox.width} height={viewBox.height} fill="url(#ai-workflow-bg-glow)" />

        {sourceToConverge.map((line, index) => {
          const active = shouldHighlightSourcePath(hovered, line.id);
          return (
            <StoryVisualConnection
              key={line.id}
              d={`M ${line.x1} ${line.y1} C ${line.x1} ${line.y2 - 20}, ${line.x2} ${line.y2 - 20}, ${line.x2} ${line.y2}`}
              active={active}
              hasHover={Boolean(hovered)}
              reducedMotion={reducedMotion}
              animate
              stroke="url(#ai-workflow-stream)"
              strokeWidth={1.25}
              activeStrokeWidth={2.25}
              animationDelay={index * 180}
              opacityLevels={{ idle: 0.5, dim: 0.2, active: 0.9 }}
            />
          );
        })}

        {layers.slice(0, -1).map((layer, index) => {
          const active = shouldHighlightLayerLink(hovered, layer.id);
          const next = layers[index + 1];
          return (
            <StoryVisualConnection
              key={`link-${layer.id}`}
              x1={centerX}
              y1={layer.y + layer.height / 2}
              x2={centerX}
              y2={next.y - next.height / 2}
              active={active}
              hasHover={Boolean(hovered)}
              reducedMotion={reducedMotion}
              animate
              stroke="url(#ai-workflow-stream)"
              animationDelay={(index + 5) * 180}
              opacityLevels={{ idle: 0.55, dim: 0.25, active: 0.95 }}
            />
          );
        })}

        {!reducedMotion
          ? sourceToConverge.map((line, index) => (
              <StoryVisualTravelDot
                key={`dot-in-${line.id}`}
                path={`M ${line.x1} ${line.y1} C ${line.x1} ${line.y2 - 20}, ${line.x2} ${line.y2 - 20}, ${line.x2} ${line.y2} L ${centerX} ${layers[0].y - layers[0].height / 2}`}
                duration={2.8 + index * 0.2}
                animationDelay={index * 400}
              />
            ))
          : null}

        {sources.map((source) => {
          const active = shouldHighlightNode(hovered, source.id);
          const label = sourceLabel(source.id);
          return (
            <StoryVisualInteractiveGroup
              key={source.id}
              ariaLabel={label}
              {...bindNode(source.id)}
            >
              <StoryVisualNodeRect
                x={source.x - 52}
                y={source.y - 28}
                width={104}
                height={56}
                rx={12}
                accent={active ? "#06b6d4" : "#3b82f6"}
                active={active}
                activeStrokeWidth={2}
              />
              <StoryVisualNodeLabel x={source.x} y={source.y + 4}>
                {label}
              </StoryVisualNodeLabel>
            </StoryVisualInteractiveGroup>
          );
        })}

        {layers.map((layer) => {
          const active = shouldHighlightNode(hovered, layer.id);
          const meta = homeAiWorkflowCopy.layers.find((item) => item.id === layer.id);
          const isAgent = layer.id === "agent";
          const isOutcomes = layer.id === "outcomes";

          if (isOutcomes) {
            return (
              <StoryVisualInteractiveGroup
                key={layer.id}
                ariaLabel={layerLabel(layer.id)}
                role="group"
                tabIndex={undefined}
                onMouseEnter={() => setHovered(layer.id)}
                onMouseLeave={clearHover}
              >
                <StoryVisualNodeRect
                  x={layer.x - layer.width / 2}
                  y={layer.y - layer.height / 2}
                  width={layer.width}
                  height={layer.height}
                  rx={16}
                  accent={active ? "#d4a017" : "#8b5cf6"}
                  active={active}
                  fill={STORY_VISUAL_TOKENS.nodeFill}
                  activeStrokeWidth={2}
                />
                <StoryVisualNodeLabel x={layer.x} y={layer.y - 18} fontSize={13} fontWeight={700}>
                  {meta?.label}
                </StoryVisualNodeLabel>
                {homeAiWorkflowCopy.outcomes.map((outcome, index) => {
                  const outcomeId = `outcome-${index}`;
                  const ox = layer.x - 120 + index * 120;
                  return (
                    <StoryVisualInteractiveGroup
                      key={outcomeId}
                      ariaLabel={outcome}
                      onMouseEnter={() => setHovered(outcomeId)}
                      onFocus={() => setHovered(outcomeId)}
                      onMouseLeave={() => setHovered(layer.id)}
                      onBlur={clearHover}
                    >
                      <StoryVisualNodeRect
                        x={ox - 54}
                        y={layer.y + 2}
                        width={108}
                        height={32}
                        rx={8}
                        accent="#06b6d4"
                        active={shouldHighlightNode(hovered, outcomeId)}
                        fill={
                          shouldHighlightNode(hovered, outcomeId)
                            ? STORY_VISUAL_TOKENS.nodeFillActive
                            : STORY_VISUAL_TOKENS.nodeFillNested
                        }
                        strokeOpacity={
                          shouldHighlightNode(hovered, outcomeId) ? 0.8 : 0.35
                        }
                      />
                      <text
                        x={ox}
                        y={layer.y + 22}
                        textAnchor="middle"
                        fill={STORY_VISUAL_TOKENS.textSecondary}
                        fontSize={9}
                        fontWeight={600}
                      >
                        {outcome}
                      </text>
                    </StoryVisualInteractiveGroup>
                  );
                })}
              </StoryVisualInteractiveGroup>
            );
          }

          return (
            <StoryVisualInteractiveGroup
              key={layer.id}
              ariaLabel={meta?.label ?? layer.id}
              {...bindNode(layer.id)}
            >
              <StoryVisualNodeRect
                x={layer.x - layer.width / 2}
                y={layer.y - layer.height / 2}
                width={layer.width}
                height={layer.height}
                accent={isAgent ? "#8b5cf6" : "#3b82f6"}
                active={active}
                fill={isAgent ? "url(#ai-workflow-layer-agent)" : undefined}
                strokeOpacity={isAgent ? 0.9 : active ? 0.85 : 0.45}
                activeStrokeWidth={isAgent ? 2 : 2}
              />
              <StoryVisualNodeLabel
                x={layer.x}
                y={layer.y - 4}
                fontSize={isAgent ? 14 : 13}
                fontWeight={700}
              >
                {meta?.label}
              </StoryVisualNodeLabel>
              {meta?.description ? (
                <text
                  x={layer.x}
                  y={layer.y + 14}
                  textAnchor="middle"
                  fill={STORY_VISUAL_TOKENS.textSecondary}
                  fontSize={10}
                >
                  {meta.description}
                </text>
              ) : null}
            </StoryVisualInteractiveGroup>
          );
        })}
      </StoryVisualDiagram>

      <ol className={STORY_VIZ_CLASSES.mobile}>
        <li className="mb-2">
          <StoryVisualMobileSectionLabel>Data sources</StoryVisualMobileSectionLabel>
          <ul className="flex flex-wrap justify-center gap-2">
            {homeAiWorkflowCopy.sources.map((source) => (
              <li key={source.id}>
                <button
                  type="button"
                  className={cn(
                    "rounded-ds-md border px-3 py-2 text-xs font-semibold transition-colors",
                    hovered === source.id
                      ? "border-electric-cyan/50 bg-electric-cyan/10 text-on-dark"
                      : "border-glass-border-dark bg-glass-dark/50 text-on-dark-muted",
                  )}
                  onMouseEnter={() => setHovered(source.id)}
                  onFocus={() => setHovered(source.id)}
                  onMouseLeave={clearHover}
                  onBlur={clearHover}
                >
                  {source.label}
                </button>
              </li>
            ))}
          </ul>
        </li>

        {homeAiWorkflowCopy.layers.map((layer) => (
          <li key={layer.id} className="flex flex-col items-center">
            <span className="my-2 text-electric-cyan/60" aria-hidden="true">
              ↓
            </span>
            <button
              type="button"
              className={cn(
                "w-full max-w-sm rounded-ds-lg border px-4 py-3 text-left transition-all",
                hovered === layer.id
                  ? "border-electric-violet/40 bg-electric-violet/10 shadow-soft"
                  : "border-glass-border-dark bg-glass-dark/40",
              )}
              onMouseEnter={() => setHovered(layer.id)}
              onFocus={() => setHovered(layer.id)}
              onMouseLeave={clearHover}
              onBlur={clearHover}
            >
              <span className="block text-sm font-semibold text-on-dark">{layer.label}</span>
              <span className="mt-1 block text-xs text-on-dark-muted">{layer.description}</span>
            </button>
            {layer.id === "outcomes" ? (
              <ul className="mt-3 flex w-full max-w-sm flex-col gap-2">
                {homeAiWorkflowCopy.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-ds-md border border-electric-cyan/25 bg-electric-cyan/5 px-3 py-2 text-center text-xs font-semibold text-on-dark-muted"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </StoryVisualFrame>
  );
}
