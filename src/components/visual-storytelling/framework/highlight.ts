export function isEdgeHighlighted(
  edge: { from: string; to: string },
  hovered: string | null,
): boolean {
  if (!hovered) return false;
  return edge.from === hovered || edge.to === hovered;
}

export function isNodeHighlighted(
  nodeId: string,
  hovered: string | null,
  edges: readonly { from: string; to: string }[],
): boolean {
  if (!hovered) return false;
  if (nodeId === hovered) return true;
  return edges.some(
    (edge) =>
      (edge.from === hovered && edge.to === nodeId) ||
      (edge.to === hovered && edge.from === nodeId),
  );
}

export function isChainHighlighted<T extends string>(
  hovered: T | null,
  itemId: T,
  orderedIds: readonly T[],
  mode: "through" | "before" = "through",
): boolean {
  if (!hovered) return true;
  const hoverIdx = orderedIds.indexOf(hovered);
  const itemIdx = orderedIds.indexOf(itemId);
  if (hoverIdx < 0 || itemIdx < 0) return false;
  if (mode === "before") return itemIdx < hoverIdx;
  return itemIdx <= hoverIdx;
}

export function isChainLinkHighlighted<T extends string>(
  hovered: T | null,
  fromId: T,
  orderedIds: readonly T[],
): boolean {
  if (!hovered) return true;
  const hoverIdx = orderedIds.indexOf(hovered);
  const fromIdx = orderedIds.indexOf(fromId);
  if (hoverIdx < 0 || fromIdx < 0) return false;
  return fromIdx < hoverIdx;
}
