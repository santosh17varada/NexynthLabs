"use client";

import { useMemo } from "react";
import {
  StoryVisualConnection,
  StoryVisualDiagram,
  StoryVisualInteractiveGroup,
  StoryVisualMobileChip,
  StoryVisualMobileSectionLabel,
  StoryVisualNodeCircle,
  StoryVisualNodeLabel,
  StoryVisualNodeRect,
  StoryVisualTravelDot,
  STORY_VIZ_CLASSES,
  useStoryVisualHover,
} from "@/components/visual-storytelling/framework";
import { StoryVisualFrame } from "@/components/visual-storytelling/StoryVisualFrame";
import {
  MARKETPLACE_ACTOR_LINKS,
  MARKETPLACE_LAYOUT,
  homeMarketplaceIntelligenceCopy,
} from "@/config/home-marketplace-intelligence";
import { useReducedMotion } from "@/motion/useReducedMotion";
import { cn } from "@/lib/cn";

const ACTOR_IDS: string[] = homeMarketplaceIntelligenceCopy.actors.map((actor) => actor.id);
const CONNECTION_IDS: string[] = homeMarketplaceIntelligenceCopy.connections.map(
  (connection) => connection.id,
);

function connectionsForActor(actorId: string): string[] {
  return CONNECTION_IDS.filter((connectionId) => {
    const linked = MARKETPLACE_ACTOR_LINKS[
      connectionId as keyof typeof MARKETPLACE_ACTOR_LINKS
    ];
    return (linked as readonly string[]).includes(actorId);
  });
}

function actorsForConnection(connectionId: string): string[] {
  return [
    ...MARKETPLACE_ACTOR_LINKS[
      connectionId as keyof typeof MARKETPLACE_ACTOR_LINKS
    ],
  ];
}

function shouldHighlightActor(hovered: string | null, actorId: string): boolean {
  if (!hovered) return true;
  if (hovered === actorId) return true;
  if (CONNECTION_IDS.includes(hovered)) {
    return actorsForConnection(hovered).includes(actorId);
  }
  if (ACTOR_IDS.includes(hovered)) {
    return connectionsForActor(hovered).some((connectionId) =>
      connectionsForActor(actorId).includes(connectionId),
    );
  }
  return hovered === "hub";
}

function shouldHighlightConnection(hovered: string | null, connectionId: string): boolean {
  if (!hovered) return true;
  if (hovered === connectionId) return true;
  if (ACTOR_IDS.includes(hovered)) {
    return connectionsForActor(hovered).includes(connectionId);
  }
  if (CONNECTION_IDS.includes(hovered)) {
    const actorsA = actorsForConnection(hovered);
    const actorsB = actorsForConnection(connectionId);
    return actorsA.some((actor) => actorsB.includes(actor));
  }
  return hovered === "hub";
}

function shouldHighlightEdge(
  hovered: string | null,
  connectionId: string,
  actorId: string,
): boolean {
  if (!hovered) return true;
  if (hovered === connectionId || hovered === actorId) return true;
  if (ACTOR_IDS.includes(hovered)) {
    return connectionsForActor(hovered).includes(connectionId);
  }
  if (CONNECTION_IDS.includes(hovered)) {
    return (
      hovered === connectionId ||
      (actorsForConnection(hovered).includes(actorId) &&
        actorsForConnection(connectionId).includes(actorId))
    );
  }
  return hovered === "hub";
}

const accentByActor: Record<string, string> = {
  customers: "#06b6d4",
  pandits: "#3b82f6",
  vendors: "#d4a017",
  agents: "#8b5cf6",
  admins: "#8b5cf6",
};

const accentByConnection: Record<string, string> = {
  discovery: "#06b6d4",
  booking: "#3b82f6",
  payments: "#d4a017",
  scheduling: "#8b5cf6",
  support: "#06b6d4",
};

export function MarketplaceIntelligenceVisual({ className }: { className?: string }) {
  const { hovered, setHovered, bindNode, clearHover } = useStoryVisualHover<string>();
  const reducedMotion = useReducedMotion();
  const { viewBox, hub, actors, connections } = MARKETPLACE_LAYOUT;

  const actorMap = useMemo(
    () => new Map(actors.map((actor) => [actor.id, actor])),
    [actors],
  );
  const connectionMap = useMemo(
    () => new Map(connections.map((connection) => [connection.id, connection])),
    [connections],
  );

  const edges = useMemo(() => {
    const list: {
      id: string;
      connectionId: string;
      actorId: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }[] = [];
    for (const connection of connections) {
      const connectionNode = connectionMap.get(connection.id);
      if (!connectionNode) continue;
      for (const actorId of MARKETPLACE_ACTOR_LINKS[
        connection.id as keyof typeof MARKETPLACE_ACTOR_LINKS
      ]) {
        const actor = actorMap.get(actorId);
        if (!actor) continue;
        list.push({
          id: `${connection.id}-${actorId}`,
          connectionId: connection.id,
          actorId,
          x1: connectionNode.x,
          y1: connectionNode.y,
          x2: actor.x,
          y2: actor.y,
        });
      }
    }
    return list;
  }, [connections, actorMap, connectionMap]);

  return (
    <StoryVisualFrame
      theme="marketplace"
      className={cn("min-h-[18rem] lg:min-h-[22rem]", className)}
      onPointerLeave={clearHover}
    >
      <StoryVisualDiagram
        viewBox={viewBox}
        ariaLabel="Marketplace intelligence network connecting customers, pandits, vendors, agents, and admins through discovery, booking, payments, scheduling, and support"
      >
        <defs>
          <radialGradient id="marketplace-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="marketplace-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <circle
          cx={hub.x}
          cy={hub.y}
          r={hub.r + 40}
          fill="url(#marketplace-hub-glow)"
          opacity={hovered ? 0.95 : 0.7}
        />

        {connections.map((connection, index) => {
          const next = connections[(index + 1) % connections.length];
          const ringActive =
            shouldHighlightConnection(hovered, connection.id) &&
            shouldHighlightConnection(hovered, next.id);
          return (
            <line
              key={`ring-${connection.id}`}
              x1={connection.x}
              y1={connection.y}
              x2={next.x}
              y2={next.y}
              stroke="#3b82f6"
              strokeOpacity={ringActive ? 0.25 : hovered ? 0.06 : 0.12}
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          );
        })}

        {edges.map((edge, index) => {
          const active = shouldHighlightEdge(hovered, edge.connectionId, edge.actorId);
          return (
            <StoryVisualConnection
              key={edge.id}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              active={active}
              hasHover={Boolean(hovered)}
              reducedMotion={reducedMotion}
              animate
              stroke="url(#marketplace-edge)"
              animationDelay={index * 90}
              opacityLevels={{ idle: 0.55, dim: 0.15, active: 0.95 }}
            />
          );
        })}

        {!reducedMotion
          ? edges.map((edge, index) => (
              <StoryVisualTravelDot
                key={`pulse-${edge.id}`}
                path={`M ${edge.x1} ${edge.y1} L ${edge.x2} ${edge.y2}`}
                duration={2.6 + (index % 5) * 0.25}
                r={3}
                animationDelay={index * 320}
              />
            ))
          : null}

        <StoryVisualInteractiveGroup
          ariaLabel="Core marketplace hub"
          role="presentation"
          aria-hidden
          onMouseEnter={() => setHovered("hub")}
          onMouseLeave={clearHover}
        >
          <circle
            cx={hub.x}
            cy={hub.y}
            r={hub.r}
            fill="#0f1b2d"
            stroke="#8b5cf6"
            strokeWidth={hovered === "hub" || !hovered ? 2 : 1.25}
            strokeOpacity={hovered && hovered !== "hub" ? 0.35 : 0.85}
          />
          <StoryVisualNodeLabel x={hub.x} y={hub.y + 4} fontSize={10} fontWeight={700}>
            Core
          </StoryVisualNodeLabel>
        </StoryVisualInteractiveGroup>

        {connections.map((connection) => {
          const meta = homeMarketplaceIntelligenceCopy.connections.find(
            (item) => item.id === connection.id,
          );
          const active = shouldHighlightConnection(hovered, connection.id);
          const color = accentByConnection[connection.id] ?? "#3b82f6";
          return (
            <StoryVisualInteractiveGroup
              key={connection.id}
              ariaLabel={meta?.label ?? connection.id}
              {...bindNode(connection.id)}
            >
              <StoryVisualNodeRect
                x={connection.x - 46}
                y={connection.y - 22}
                width={92}
                height={44}
                rx={10}
                accent={color}
                active={active}
              />
              <StoryVisualNodeLabel x={connection.x} y={connection.y + 4} fontSize={11}>
                {meta?.label}
              </StoryVisualNodeLabel>
            </StoryVisualInteractiveGroup>
          );
        })}

        {actors.map((actor) => {
          const meta = homeMarketplaceIntelligenceCopy.actors.find(
            (item) => item.id === actor.id,
          );
          const active = shouldHighlightActor(hovered, actor.id);
          const color = accentByActor[actor.id] ?? "#06b6d4";
          return (
            <StoryVisualInteractiveGroup
              key={actor.id}
              ariaLabel={meta?.label ?? actor.id}
              {...bindNode(actor.id)}
            >
              <StoryVisualNodeCircle
                cx={actor.x}
                cy={actor.y}
                r={active ? 34 : 30}
                accent={color}
                active={active}
                glowRing
                glowOpacity={{ idle: 0.08, active: 0.2 }}
              />
              <StoryVisualNodeLabel x={actor.x} y={actor.y + 4} fontSize={11} fontWeight={700}>
                {meta?.label}
              </StoryVisualNodeLabel>
            </StoryVisualInteractiveGroup>
          );
        })}
      </StoryVisualDiagram>

      <div className={STORY_VIZ_CLASSES.mobileSurface}>
        <StoryVisualMobileSectionLabel>Network participants</StoryVisualMobileSectionLabel>
        <div className="flex flex-wrap justify-center gap-2">
          {homeMarketplaceIntelligenceCopy.actors.map((actor) => (
            <StoryVisualMobileChip
              key={actor.id}
              id={actor.id}
              label={actor.label}
              active={hovered === actor.id}
              onHover={setHovered}
              onClear={clearHover}
              shape="full"
            />
          ))}
        </div>

        <p className="mb-3 mt-6 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-on-dark-muted">
          Shared connections
        </p>
        <ul className="mx-auto flex max-w-sm flex-col gap-2">
          {homeMarketplaceIntelligenceCopy.connections.map((connection) => {
            const linkedActors = actorsForConnection(connection.id)
              .map(
                (id) =>
                  homeMarketplaceIntelligenceCopy.actors.find((actor) => actor.id === id)
                    ?.label,
              )
              .filter(Boolean)
              .join(" · ");
            return (
              <li key={connection.id}>
                <button
                  type="button"
                  className={cn(
                    "w-full rounded-ds-lg border px-4 py-3 text-left transition-all",
                    hovered === connection.id
                      ? "border-electric-blue/40 bg-electric-blue/10"
                      : "border-glass-border-dark bg-glass-dark/40",
                  )}
                  onMouseEnter={() => setHovered(connection.id)}
                  onFocus={() => setHovered(connection.id)}
                  onMouseLeave={clearHover}
                  onBlur={clearHover}
                >
                  <span className="block text-sm font-semibold text-on-dark">
                    {connection.label}
                  </span>
                  <span className="mt-1 block text-xs text-on-dark-muted">{linkedActors}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </StoryVisualFrame>
  );
}
