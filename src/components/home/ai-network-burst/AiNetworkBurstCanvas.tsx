"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  NETWORK_BURST_RAYS,
  NETWORK_BURST_STROKE_COLORS,
  dotOnRay,
  rayEndpoint,
} from "@/components/home/ai-network-burst/network-burst-rays";
import { cn } from "@/lib/cn";

type AiNetworkBurstCanvasProps = {
  className?: string;
  /** When true, rays/glow only — story overlay draws the hub. */
  omitCenterHub?: boolean;
};

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

function drawBurst(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  timeMs: number,
  pointer: PointerState,
  omitCenterHub = false,
) {
  const cx = width / 2 + pointer.x * 18;
  const cy = height / 2 + pointer.y * 12;
  const radius = Math.min(width, height) * 0.48;
  const hoverBoost = pointer.active ? 1.28 : 1;

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#14082e");
  bg.addColorStop(0.35, "#0f1b2d");
  bg.addColorStop(0.7, "#101838");
  bg.addColorStop(1, "#0a1628");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const ambient = ctx.createRadialGradient(
    width * 0.5 + pointer.x * 30,
    height * 0.55 + pointer.y * 20,
    0,
    width * 0.5,
    height * 0.5,
    radius * 1.6,
  );
  ambient.addColorStop(0, `rgba(212, 160, 23, ${0.08 * hoverBoost})`);
  ambient.addColorStop(0.25, `rgba(139, 92, 246, ${0.22 * hoverBoost})`);
  ambient.addColorStop(0.5, `rgba(59, 130, 246, ${0.12 * hoverBoost})`);
  ambient.addColorStop(0.75, `rgba(6, 182, 212, ${0.06 * hoverBoost})`);
  ambient.addColorStop(1, "rgba(10, 15, 26, 0)");
  ctx.fillStyle = ambient;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.4);
  glow.addColorStop(0, `rgba(139, 92, 246, ${0.5 * hoverBoost})`);
  glow.addColorStop(0.3, `rgba(59, 130, 246, ${0.22 * hoverBoost})`);
  glow.addColorStop(0.6, `rgba(6, 182, 212, ${0.1 * hoverBoost})`);
  glow.addColorStop(1, "rgba(10, 15, 26, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  for (const ray of NETWORK_BURST_RAYS) {
    const parallaxX = pointer.x * 26 * ray.length;
    const parallaxY = pointer.y * 18 * ray.length;
    const end = rayEndpoint(cx, cy, radius, ray, parallaxX, parallaxY);

    const grad = ctx.createLinearGradient(cx, cy, end.x, end.y);
    grad.addColorStop(0, strokeToRgba(ray.stroke, 0.92 * hoverBoost));
    grad.addColorStop(0.45, strokeToRgba(ray.stroke, 0.38 * hoverBoost));
    grad.addColorStop(1, strokeToRgba(ray.stroke, 0));

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = ray.width * (width < 640 ? 0.95 : 1.15);
    ctx.lineCap = "round";
    ctx.stroke();

    const phase = timeMs / 1000 / ray.dotSpeed + ray.dotPhase;
    const dot = dotOnRay(cx, cy, end.x, end.y, phase);
    drawDot(ctx, dot.x, dot.y, ray.stroke, 3.4, 0.95);

    if (ray.trailPhase !== undefined) {
      const trailPhase = timeMs / 1000 / ray.dotSpeed + ray.trailPhase;
      const trail = dotOnRay(cx, cy, end.x, end.y, trailPhase);
      drawDot(ctx, trail.x, trail.y, "cyan", 2.4, 0.42);
    }

    drawDot(ctx, end.x, end.y, ray.stroke, 2.6, 0.32);
  }

  if (!omitCenterHub) {
    ctx.beginPath();
    ctx.arc(cx, cy, 34, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(15, 27, 45, 0.55)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(139, 92, 246, ${0.45 * hoverBoost})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22);
    coreGlow.addColorStop(0, `rgba(59, 130, 246, ${0.55 * hoverBoost})`);
    coreGlow.addColorStop(0.6, `rgba(139, 92, 246, ${0.25 * hoverBoost})`);
    coreGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#3b82f6";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = "#f8f7f4";
    ctx.fill();
  }
}

function strokeToRgba(stroke: keyof typeof NETWORK_BURST_STROKE_COLORS, alpha: number) {
  const hex = NETWORK_BURST_STROKE_COLORS[stroke];
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  stroke: keyof typeof NETWORK_BURST_STROKE_COLORS,
  radius: number,
  alpha: number,
) {
  ctx.beginPath();
  ctx.arc(x, y, radius + 2.5, 0, Math.PI * 2);
  ctx.fillStyle = strokeToRgba(stroke, alpha * 0.25);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(248, 247, 244, ${alpha})`;
  ctx.fill();
}

export function AiNetworkBurstCanvas({ className, omitCenterHub = false }: AiNetworkBurstCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const smoothPointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const sizeRef = useRef({ width: 0, height: 0 });

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    sizeRef.current = { width, height };
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

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
      const nx = ((event.clientX - rect.left) / width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / height) * 2 - 1;
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
        active: pointerRef.current.active,
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
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = (now: number) => {
      frameRef.current = requestAnimationFrame(tick);
      if (!visibleRef.current || media.matches) return;

      const ctx = canvas.getContext("2d");
      const { width, height } = sizeRef.current;
      if (!ctx || !width || !height) return;

      const target = pointerRef.current;
      const smooth = smoothPointerRef.current;
      smooth.x += (target.x - smooth.x) * 0.07;
      smooth.y += (target.y - smooth.y) * 0.07;
      smooth.active = target.active;

      drawBurst(ctx, width, height, now - start, smooth, omitCenterHub);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      intersection.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerenter", onPointerEnter);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [resize, omitCenterHub]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("block h-full w-full touch-none", className)}
      aria-hidden="true"
    />
  );
}
