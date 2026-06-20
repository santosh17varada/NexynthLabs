"use client";

import { useEffect, useRef, useState } from "react";
import {
  createNexynthParticles,
  hexToRgba,
  NEXYNTH_PARTICLE_COLORS,
  nexynthParticleCount,
  type NexynthParticle,
} from "@/components/home/ai-network-burst/nexynth-particle-network";
import { NexynthParticleNetworkPlaceholder } from "@/components/home/ai-network-burst/NexynthParticleNetworkPlaceholder";
import { cn } from "@/lib/cn";

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

type NexynthParticleNetworkCanvasProps = {
  className?: string;
};

function drawFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  timeMs: number,
  particles: NexynthParticle[],
  pointer: PointerState,
  reducedMotion: boolean,
) {
  const cx = width * 0.5 + pointer.x * 18;
  const cy = height * 0.52 + pointer.y * 12;
  const baseRadius = Math.min(width, height) * 0.42;
  const hoverBoost = pointer.active ? 1.22 : 1;

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#14082e");
  bg.addColorStop(0.4, "#0f1b2d");
  bg.addColorStop(1, "#0a1628");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const ambient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.5);
  ambient.addColorStop(0, `rgba(139, 92, 246, ${0.28 * hoverBoost})`);
  ambient.addColorStop(0.35, `rgba(59, 130, 246, ${0.14 * hoverBoost})`);
  ambient.addColorStop(0.65, `rgba(6, 182, 212, ${0.06 * hoverBoost})`);
  ambient.addColorStop(1, "rgba(10, 15, 26, 0)");
  ctx.fillStyle = ambient;
  ctx.fillRect(0, 0, width, height);

  const positions = particles.map((particle) => {
    const parallax = pointer.active ? 1 + pointer.x * 0.08 + pointer.y * 0.05 : 1;
    const angle =
      particle.angle +
      (reducedMotion ? 0 : Math.sin(timeMs * 0.00025 + particle.drift) * 0.04);
    const travelT = reducedMotion
      ? particle.travelPhase
      : (particle.travelPhase + (timeMs * 0.001 * particle.travelSpeed)) % 1;
    const dist = particle.orbitRadius * baseRadius * parallax;
    const rayLen = particle.rayLength * baseRadius;
    const ox = cx + Math.cos(angle) * dist;
    const oy = cy + Math.sin(angle) * dist;
    const ex = cx + Math.cos(angle) * (dist + rayLen);
    const ey = cy + Math.sin(angle) * (dist + rayLen);
    const px = ox + (ex - ox) * travelT;
    const py = oy + (ey - oy) * travelT;
    return { particle, ox, oy, ex, ey, px, py, travelT };
  });

  for (const { particle, ox, oy, ex, ey } of positions) {
    const color = NEXYNTH_PARTICLE_COLORS[particle.color];
    const grad = ctx.createLinearGradient(ox, oy, ex, ey);
    grad.addColorStop(0, hexToRgba(color, 0.75 * hoverBoost));
    grad.addColorStop(0.55, hexToRgba(color, 0.22 * hoverBoost));
    grad.addColorStop(1, hexToRgba(color, 0));
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 0.65;
    ctx.lineCap = "round";
    ctx.stroke();
  }

  for (const { particle, px, py } of positions) {
    const color = NEXYNTH_PARTICLE_COLORS[particle.color];
    ctx.beginPath();
    ctx.arc(px, py, particle.size + 2, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(color, 0.12 * hoverBoost);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px, py, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba("#f8f7f4", 0.85);
    ctx.fill();
  }

  const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 36 * hoverBoost);
  coreGlow.addColorStop(0, `rgba(59, 130, 246, ${0.65 * hoverBoost})`);
  coreGlow.addColorStop(0.5, `rgba(139, 92, 246, ${0.28 * hoverBoost})`);
  coreGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
  ctx.fillStyle = coreGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, 36 * hoverBoost, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#3b82f6";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fillStyle = "#f8f7f4";
  ctx.fill();
}

export function NexynthParticleNetworkCanvas({ className }: NexynthParticleNetworkCanvasProps) {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<NexynthParticle[]>([]);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const smoothPointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const sizeRef = useRef({ width: 0, height: 0 });
  const visibleRef = useRef(true);
  const frameRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only mount gate
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reducedMotionRef.current = media.matches;
    };
    syncMotion();
    media.addEventListener("change", syncMotion);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { width, height };
      particlesRef.current = createNexynthParticles(nexynthParticleCount(width));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reducedMotionRef.current) {
        const ctx2 = canvas.getContext("2d");
        if (ctx2) {
          drawFrame(
            ctx2,
            width,
            height,
            0,
            particlesRef.current,
            pointerRef.current,
            true,
          );
        }
      }
    };

    resize();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const intersection = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry?.isIntersecting ?? true;
      },
      { rootMargin: "80px" },
    );
    intersection.observe(canvas);

    const onPointerMove = (event: PointerEvent) => {
      const { width, height } = sizeRef.current;
      if (!width || !height) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, ((event.clientX - rect.left) / width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((event.clientY - rect.top) / height) * 2 - 1)),
        active: true,
      };
    };

    const onPointerEnter = () => {
      pointerRef.current = { ...pointerRef.current, active: true };
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: 0, y: 0, active: false };
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerenter", onPointerEnter);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const start = performance.now();

    const tick = (now: number) => {
      frameRef.current = requestAnimationFrame(tick);
      if (!visibleRef.current) return;

      const ctx = canvas.getContext("2d");
      const { width, height } = sizeRef.current;
      if (!ctx || !width || !height || particlesRef.current.length === 0) return;

      const target = pointerRef.current;
      const smooth = smoothPointerRef.current;
      smooth.x += (target.x - smooth.x) * 0.06;
      smooth.y += (target.y - smooth.y) * 0.06;
      smooth.active = target.active;

      if (reducedMotionRef.current) return;

      drawFrame(
        ctx,
        width,
        height,
        now - start,
        particlesRef.current,
        smooth,
        false,
      );
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      intersection.disconnect();
      media.removeEventListener("change", syncMotion);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerenter", onPointerEnter);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [mounted]);

  return (
    <div className={cn("relative h-full w-full", className)}>
      {!mounted ? <NexynthParticleNetworkPlaceholder className="absolute inset-0" /> : null}
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 block h-full w-full touch-none", !mounted && "invisible")}
        aria-hidden="true"
      />
    </div>
  );
}
