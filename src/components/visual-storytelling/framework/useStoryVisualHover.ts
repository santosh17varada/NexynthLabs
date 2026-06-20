"use client";

import { useCallback, useState } from "react";

export function useStoryVisualHover<T extends string>() {
  const [hovered, setHovered] = useState<T | null>(null);

  const bindNode = useCallback(
    (id: T) => ({
      onMouseEnter: () => setHovered(id),
      onFocus: () => setHovered(id),
      onMouseLeave: () => setHovered(null),
      onBlur: () => setHovered(null),
    }),
    [],
  );

  const clearHover = useCallback(() => setHovered(null), []);

  return { hovered, setHovered, bindNode, clearHover };
}
