"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AiNetworkBurstStatic } from "@/components/home/ai-network-burst/AiNetworkBurstStatic";
import { AiNetworkBurstStory } from "@/components/home/ai-network-burst/AiNetworkBurstStory";
import { cn } from "@/lib/cn";

const AiNetworkBurstCanvas = dynamic(
  () =>
    import("@/components/home/ai-network-burst/AiNetworkBurstCanvas").then((module) => ({
      default: module.AiNetworkBurstCanvas,
    })),
  { ssr: false },
);

type AiNetworkBurstExperienceProps = {
  className?: string;
};

export function AiNetworkBurstExperience({ className }: AiNetworkBurstExperienceProps) {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration enhancement gate
    setMounted(true);
    return () => media.removeEventListener("change", sync);
  }, []);

  const showCanvas = mounted && !reducedMotion;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <AiNetworkBurstStatic className="absolute inset-0" />
      {showCanvas ? (
        <AiNetworkBurstCanvas className="absolute inset-0" omitCenterHub />
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,26,0.55)_100%)]"
        aria-hidden="true"
      />
      <AiNetworkBurstStory className="absolute inset-0 z-10" variant="overlay" />
    </div>
  );
}
