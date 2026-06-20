export type EcosystemNodeId =
  | "platform"
  | "getpandit"
  | "ai-agents"
  | "cloud"
  | "mobile"
  | "enterprise";

export type EcosystemAccent = "cyan" | "blue" | "violet" | "gold";

export type EcosystemNode = {
  id: EcosystemNodeId;
  label: string;
  title: string;
  description: string;
  accent: EcosystemAccent;
  cta?: { label: string; href: string };
};

export type EcosystemEdge = {
  from: EcosystemNodeId;
  to: EcosystemNodeId;
  packetSpeed: number;
  packetPhase: number;
};

export type EcosystemLayoutMode = "radial" | "vertical";

export type EcosystemLayout = {
  mode: EcosystemLayoutMode;
  nodes: Record<EcosystemNodeId, { x: number; y: number }>;
};

export const ECOSYSTEM_CENTER_ID: EcosystemNodeId = "platform";

export const ECOSYSTEM_NODES: readonly EcosystemNode[] = [
  {
    id: "platform",
    label: "Nexynth Platform",
    title: "Nexynth Platform",
    description:
      "The connective layer that links AI agents, cloud infrastructure, mobile apps, and enterprise systems into one scalable product ecosystem.",
    accent: "blue",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    title: "AI Agents",
    description: "Automation, workflows, and intelligent decision systems.",
    accent: "violet",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    title: "Mobile Apps",
    description: "Native and cross-platform experiences customers use every day.",
    accent: "cyan",
  },
  {
    id: "cloud",
    label: "Cloud Engineering",
    title: "Cloud Engineering",
    description: "Secure, scalable infrastructure powering products.",
    accent: "blue",
  },
  {
    id: "getpandit",
    label: "GetPandit",
    title: "GetPandit",
    description:
      "Digital platform connecting families, pandits, and spiritual services.",
    accent: "gold",
    cta: { label: "Explore Product", href: "/getpandit" },
  },
  {
    id: "enterprise",
    label: "Enterprise Systems",
    title: "Enterprise Systems",
    description: "Integrations, data layers, and systems built for long-term scale.",
    accent: "violet",
  },
] as const;

export const ECOSYSTEM_SATELLITE_IDS = ECOSYSTEM_NODES.filter(
  (node) => node.id !== "platform",
).map((node) => node.id);

export const ECOSYSTEM_EDGES: readonly EcosystemEdge[] = ECOSYSTEM_SATELLITE_IDS.map(
  (id, index) => ({
    from: "platform",
    to: id,
    packetSpeed: 0.14 + (index % 3) * 0.04,
    packetPhase: index * 0.17,
  }),
);

export const ECOSYSTEM_ACCENT_COLORS: Record<EcosystemAccent, string> = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  violet: "#8b5cf6",
  gold: "#d4a017",
};

/** Scroll-reveal order: satellites first, Nexynth Platform activates last. */
export const ECOSYSTEM_REVEAL_SEQUENCE: readonly EcosystemNodeId[] = [
  "ai-agents",
  "mobile",
  "cloud",
  "getpandit",
  "enterprise",
  "platform",
];

export function getEcosystemRevealState(revealStage: number) {
  const stage = Math.max(0, Math.min(revealStage, ECOSYSTEM_REVEAL_SEQUENCE.length));
  const revealedIds = new Set(ECOSYSTEM_REVEAL_SEQUENCE.slice(0, stage));
  return {
    revealedIds,
    platformActive: revealedIds.has("platform"),
  };
}

export function isEcosystemNodeRevealed(nodeId: EcosystemNodeId, revealStage: number): boolean {
  if (revealStage <= 0) return false;
  return getEcosystemRevealState(revealStage).revealedIds.has(nodeId);
}

export function isEcosystemEdgeRevealed(edge: EcosystemEdge, revealStage: number): boolean {
  if (revealStage <= 0) return false;
  const { revealedIds, platformActive } = getEcosystemRevealState(revealStage);
  if (platformActive) return true;
  return revealedIds.has(edge.to);
}

/** Normalized anchor positions — centered hub for desktop/tablet storytelling layout. */
const RADIAL_ANCHORS: Record<EcosystemNodeId, { x: number; y: number }> = {
  platform: { x: 0.5, y: 0.5 },
  "ai-agents": { x: 0.5, y: 0.14 },
  mobile: { x: 0.22, y: 0.36 },
  cloud: { x: 0.78, y: 0.36 },
  getpandit: { x: 0.5, y: 0.68 },
  enterprise: { x: 0.5, y: 0.86 },
};

const VERTICAL_ANCHORS: Record<EcosystemNodeId, { x: number; y: number }> = {
  platform: { x: 0.5, y: 0.46 },
  "ai-agents": { x: 0.5, y: 0.12 },
  mobile: { x: 0.24, y: 0.28 },
  cloud: { x: 0.76, y: 0.28 },
  getpandit: { x: 0.5, y: 0.68 },
  enterprise: { x: 0.5, y: 0.88 },
};

export function getEcosystemLayout(width: number, height: number): EcosystemLayout {
  const anchors = width < 640 ? VERTICAL_ANCHORS : RADIAL_ANCHORS;
  const mode: EcosystemLayoutMode = width < 640 ? "vertical" : "radial";

  const nodes = {} as Record<EcosystemNodeId, { x: number; y: number }>;
  for (const node of ECOSYSTEM_NODES) {
    const anchor = anchors[node.id];
    nodes[node.id] = {
      x: anchor.x * width,
      y: anchor.y * height,
    };
  }

  return { mode, nodes };
}

export function getEcosystemNode(id: EcosystemNodeId): EcosystemNode {
  const node = ECOSYSTEM_NODES.find((item) => item.id === id);
  if (!node) throw new Error(`Unknown ecosystem node: ${id}`);
  return node;
}

export function isEcosystemEdgeHighlighted(
  edge: EcosystemEdge,
  hoveredId: EcosystemNodeId | null,
): boolean {
  if (!hoveredId) return true;
  if (hoveredId === "platform") return true;
  return edge.from === hoveredId || edge.to === hoveredId;
}

export function isEcosystemNodeHighlighted(
  nodeId: EcosystemNodeId,
  hoveredId: EcosystemNodeId | null,
): boolean {
  if (!hoveredId) return true;
  if (hoveredId === "platform") return true;
  if (nodeId === "platform") return hoveredId !== null;
  return nodeId === hoveredId;
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
