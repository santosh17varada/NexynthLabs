"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/motion/useReducedMotion";

const AiNetworkBurstCanvas = dynamic(
  () =>
    import("@/components/home/ai-network-burst/AiNetworkBurstCanvas").then((module) => ({
      default: module.AiNetworkBurstCanvas,
    })),
  { ssr: false },
);

export function HomeAiNetworkBurstCanvasLayer() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return null;
  }

  return <AiNetworkBurstCanvas className="absolute inset-0" />;
}
