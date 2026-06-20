export type NetworkBurstStoryNodeId =
  | "idea"
  | "agent"
  | "automation"
  | "product"
  | "scale";

export type NetworkBurstStoryNode = {
  id: NetworkBurstStoryNodeId;
  label: string;
  angle: number;
  accent: "cyan" | "blue" | "violet" | "gold";
  description: string;
};

export const NETWORK_BURST_STORY = {
  viewBox: { width: 720, height: 280 },
  center: { x: 360, y: 138 },
  radius: 102,
  hubLabel: "Nexynth AI",
  defaultHint:
    "Hover a node to see how Nexynth turns ideas into shipped, scalable products with AI and automation.",
  sequence: ["idea", "agent", "automation", "product", "scale"] as const,
  nodes: [
    {
      id: "idea",
      label: "Idea",
      angle: -90,
      accent: "cyan",
      description:
        "Product strategy and problem framing — where Nexynth defines what to build and why families or enterprises will trust it.",
    },
    {
      id: "agent",
      label: "AI Agent",
      angle: -18,
      accent: "blue",
      description:
        "Guardrailed AI workflows — agents that assist discovery, content, and operations without bypassing human approval.",
    },
    {
      id: "automation",
      label: "Automation",
      angle: 54,
      accent: "violet",
      description:
        "Repeatable delivery pipelines — notifications, scheduling hooks, and integration-ready seams across web and API layers.",
    },
    {
      id: "product",
      label: "Product",
      angle: 126,
      accent: "blue",
      description:
        "Shipped experiences like GetPandit — marketplace UX, booking flows, and honest readiness labels on live domains.",
    },
    {
      id: "scale",
      label: "Scale",
      angle: 198,
      accent: "gold",
      description:
        "Cloud-native foundations — static-first delivery, observability, and architecture prepared for growth without rewrites.",
    },
  ] satisfies readonly NetworkBurstStoryNode[],
} as const;

const ACCENT_COLORS = {
  cyan: "#06b6d4",
  blue: "#3b82f6",
  violet: "#8b5cf6",
  gold: "#d4a017",
} as const;

export function networkBurstNodePosition(
  angle: number,
  center = NETWORK_BURST_STORY.center,
  radius = NETWORK_BURST_STORY.radius,
) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: center.x + radius * Math.cos(rad),
    y: center.y + radius * Math.sin(rad),
  };
}

export function networkBurstAccentColor(accent: NetworkBurstStoryNode["accent"]) {
  return ACCENT_COLORS[accent];
}
