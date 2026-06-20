"use client";

import { useEffect, useState } from "react";
import { NexynthParticleNetwork } from "@/components/home/ai-network-burst/NexynthParticleNetwork";
import { ECOSYSTEM_REVEAL_SEQUENCE } from "@/components/home/ai-network-burst/nexynth-ecosystem-network";
import { HomeEcosystemCapabilityCards } from "@/components/home/HomeEcosystemCapabilityCards";
import { homeNetworkBurstCopy } from "@/config/home-network-burst";
import { cn } from "@/lib/cn";
import { useScrollReveal } from "@/motion/useScrollReveal";
import { useReducedMotion } from "@/motion/useReducedMotion";

export function HomeEcosystemStorySection() {
  const copy = homeNetworkBurstCopy;
  const { ref, visible } = useScrollReveal({
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });
  const reducedMotion = useReducedMotion();
  const [revealStage, setRevealStage] = useState(0);

  useEffect(() => {
    if (!visible) return;

    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- scroll reveal sequence
      setRevealStage(ECOSYSTEM_REVEAL_SEQUENCE.length);
      return;
    }

    let stage = 0;
    setRevealStage(0);
    const intervalId = window.setInterval(() => {
      stage += 1;
      setRevealStage(stage);
      if (stage >= ECOSYSTEM_REVEAL_SEQUENCE.length) {
        window.clearInterval(intervalId);
      }
    }, 220);

    return () => window.clearInterval(intervalId);
  }, [visible, reducedMotion]);

  return (
    <div ref={ref} className="mx-auto max-w-6xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className={cn("text-eyebrow text-electric-blue", visible && "motion-fade-reveal")}>
          {copy.badge}
        </p>
        <h2
          id={`${copy.id}-heading`}
          className={cn(
            "mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
            visible && "motion-fade-reveal motion-delay-1",
          )}
        >
          {copy.headline}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base",
            visible && "motion-section-reveal motion-delay-2",
          )}
        >
          {copy.description}
        </p>
      </div>

      <div
        className={cn(
          "relative mx-auto mt-6 h-[18rem] max-w-4xl overflow-hidden rounded-[2rem] border border-glass-border-dark shadow-floating sm:mt-8 sm:h-[20rem] lg:mt-10 lg:h-[26rem]",
          visible && "motion-section-reveal motion-delay-3",
        )}
      >
        <NexynthParticleNetwork className="absolute inset-0" revealStage={revealStage} />
      </div>

      <HomeEcosystemCapabilityCards visible={visible} />
    </div>
  );
}
