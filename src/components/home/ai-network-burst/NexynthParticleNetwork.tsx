"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NexynthEcosystemNetworkCanvas } from "@/components/home/ai-network-burst/NexynthEcosystemNetworkCanvas";
import { NexynthEcosystemNodeOverlay } from "@/components/home/ai-network-burst/NexynthEcosystemNodeOverlay";
import { NexynthEcosystemNetworkPlaceholder } from "@/components/home/ai-network-burst/NexynthEcosystemNetworkPlaceholder";
import {
  getEcosystemLayout,
  type EcosystemLayout,
  type EcosystemNodeId,
} from "@/components/home/ai-network-burst/nexynth-ecosystem-network";
import { cn } from "@/lib/cn";

type NexynthParticleNetworkProps = {
  className?: string;
  revealStage?: number;
};

export function NexynthParticleNetwork({
  className,
  revealStage = 0,
}: NexynthParticleNetworkProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<EcosystemNodeId | null>(null);
  const [layout, setLayout] = useState<EcosystemLayout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    setLayout(getEcosystemLayout(width, height));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount gate
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    updateLayout();
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(updateLayout);
    observer.observe(container);
    return () => observer.disconnect();
  }, [mounted, updateLayout]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", className)}
      role="img"
      aria-label="Nexynth product ecosystem connecting platform, GetPandit, AI agents, cloud, mobile, and enterprise systems"
    >
      {!mounted || !layout ? (
        <NexynthEcosystemNetworkPlaceholder className="absolute inset-0" />
      ) : null}
      {mounted && layout ? (
        <>
          <NexynthEcosystemNetworkCanvas
            layout={layout}
            hoveredId={hoveredId}
            revealStage={revealStage}
          />
          <NexynthEcosystemNodeOverlay
            layout={layout}
            hoveredId={hoveredId}
            revealStage={revealStage}
            onHover={setHoveredId}
          />
        </>
      ) : null}
    </div>
  );
}
