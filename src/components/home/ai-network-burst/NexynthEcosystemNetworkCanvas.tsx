"use client";

import { useEffect, useRef } from "react";
import {
  ECOSYSTEM_EDGES,
  ECOSYSTEM_NODES,
  ECOSYSTEM_ACCENT_COLORS,
  getEcosystemNode,
  hexToRgba,
  isEcosystemEdgeHighlighted,
  isEcosystemEdgeRevealed,
  isEcosystemNodeHighlighted,
  isEcosystemNodeRevealed,
  getEcosystemRevealState,
  type EcosystemLayout,
  type EcosystemNodeId,
} from "@/components/home/ai-network-burst/nexynth-ecosystem-network";
import { cn } from "@/lib/cn";

type PointerState = {
  x: number;
  y: number;
  active: boolean;
};

type NexynthEcosystemNetworkCanvasProps = {
  className?: string;
  layout: EcosystemLayout;
  hoveredId: EcosystemNodeId | null;
  revealStage?: number;
};

function drawEcosystemFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  layout: EcosystemLayout,
  hoveredId: EcosystemNodeId | null,
  revealStage: number,
  timeMs: number,
  pointer: PointerState,
  reducedMotion: boolean,
) {
  const { platformActive } = getEcosystemRevealState(revealStage);
  const parallaxX = pointer.x * 10;
  const parallaxY = pointer.y * 8;
  const hoverBoost = hoveredId ? 1.12 : pointer.active ? 1.06 : 1;

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#14082e");
  bg.addColorStop(0.45, "#0f1b2d");
  bg.addColorStop(1, "#0a1628");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const platform = layout.nodes.platform;
  const ambientCx = platform.x + parallaxX;
  const ambientCy = platform.y + parallaxY;
  const ambient = ctx.createRadialGradient(
    ambientCx,
    ambientCy,
    0,
    ambientCx,
    ambientCy,
    Math.min(width, height) * 0.55,
  );
  ambient.addColorStop(0, `rgba(139, 92, 246, ${0.24 * hoverBoost})`);
  ambient.addColorStop(0.4, `rgba(59, 130, 246, ${0.12 * hoverBoost})`);
  ambient.addColorStop(1, "rgba(10, 15, 26, 0)");
  ctx.fillStyle = ambient;
  ctx.fillRect(0, 0, width, height);

  for (const edge of ECOSYSTEM_EDGES) {
    const from = layout.nodes[edge.from];
    const to = layout.nodes[edge.to];
    const fx = from.x + parallaxX;
    const fy = from.y + parallaxY;
    const tx = to.x + parallaxX;
    const ty = to.y + parallaxY;
    const edgeRevealed = isEcosystemEdgeRevealed(edge, revealStage);
    const highlighted = edgeRevealed && isEcosystemEdgeHighlighted(edge, hoveredId);
    const targetNode = getEcosystemNode(edge.to);
    const color = ECOSYSTEM_ACCENT_COLORS[targetNode.accent];
    const pulse = reducedMotion
      ? 1
      : 0.72 + 0.28 * Math.sin(timeMs * 0.0028 + edge.packetPhase * Math.PI * 2);
    const revealBoost = platformActive ? 1 : edgeRevealed ? 0.75 : 0;
    const opacity = highlighted
      ? (0.22 + 0.38 * pulse) * Math.max(revealBoost, 0.35)
      : edgeRevealed
        ? 0.12 * revealBoost
        : 0.03;

    if (!edgeRevealed && revealStage > 0) continue;

    const grad = ctx.createLinearGradient(fx, fy, tx, ty);
    grad.addColorStop(0, hexToRgba(ECOSYSTEM_ACCENT_COLORS.blue, opacity * 1.1));
    grad.addColorStop(0.5, hexToRgba(color, opacity));
    grad.addColorStop(1, hexToRgba(color, opacity * 0.35));

    ctx.beginPath();
    ctx.moveTo(fx, fy);
    ctx.lineTo(tx, ty);
    ctx.strokeStyle = grad;
    ctx.lineWidth = highlighted && hoveredId ? 1.6 : 1.1;
    ctx.lineCap = "round";
    ctx.stroke();

    if (!reducedMotion && highlighted && edgeRevealed) {
      const travelT = (edge.packetPhase + timeMs * 0.00035 * edge.packetSpeed) % 1;
      const px = fx + (tx - fx) * travelT;
      const py = fy + (ty - fy) * travelT;
      const packetGlow = ctx.createRadialGradient(px, py, 0, px, py, 8);
      packetGlow.addColorStop(0, hexToRgba(color, 0.95));
      packetGlow.addColorStop(0.45, hexToRgba(color, 0.35));
      packetGlow.addColorStop(1, hexToRgba(color, 0));
      ctx.fillStyle = packetGlow;
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(px, py, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "#f8f7f4";
      ctx.fill();
    }
  }

  for (const node of ECOSYSTEM_NODES) {
    const nodeRevealed = isEcosystemNodeRevealed(node.id, revealStage);
    if (!nodeRevealed && revealStage > 0) continue;

    const pos = layout.nodes[node.id];
    const x = pos.x + parallaxX;
    const y = pos.y + parallaxY;
    const highlighted =
      revealStage === 0 || (nodeRevealed && isEcosystemNodeHighlighted(node.id, hoveredId));
    const isHovered = hoveredId === node.id;
    const color = ECOSYSTEM_ACCENT_COLORS[node.accent];
    const isCenter = node.id === "platform";
    const baseRadius = isCenter ? 28 : 16;
    const platformPulse = isCenter && platformActive ? 1.25 : 1;
    const ghostAlpha = revealStage === 0 ? 0.08 : 0.04;
    const glowAlpha = highlighted
      ? isHovered
        ? 0.55
        : isCenter && (platformActive || hoveredId)
          ? 0.42 * platformPulse
          : 0.22
      : ghostAlpha;
    const outerRadius = baseRadius * (isHovered ? 1.35 : 1);

    const glow = ctx.createRadialGradient(x, y, 0, x, y, outerRadius * 1.8);
    glow.addColorStop(0, hexToRgba(color, glowAlpha));
    glow.addColorStop(0.55, hexToRgba(color, glowAlpha * 0.35));
    glow.addColorStop(1, hexToRgba(color, 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius * 1.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, isCenter ? 9 : 5.5, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(color, highlighted ? 0.95 : 0.25);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, isCenter ? 3.5 : 2.2, 0, Math.PI * 2);
    ctx.fillStyle = highlighted ? "#f8f7f4" : hexToRgba("#f8f7f4", 0.35);
    ctx.fill();
  }
}

export function NexynthEcosystemNetworkCanvas({
  className,
  layout,
  hoveredId,
  revealStage = 0,
}: NexynthEcosystemNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const smoothPointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
  const visibleRef = useRef(true);
  const frameRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const hoveredRef = useRef(hoveredId);
  const layoutRef = useRef(layout);
  const revealStageRef = useRef(revealStage);

  useEffect(() => {
    hoveredRef.current = hoveredId;
    layoutRef.current = layout;
    revealStageRef.current = revealStage;
  }, [hoveredId, layout, revealStage]);

  useEffect(() => {
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
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (!width || !height) return;
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, ((event.clientX - rect.left) / width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((event.clientY - rect.top) / height) * 2 - 1)),
        active: true,
      };
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: 0, y: 0, active: false };
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const start = performance.now();

    const tick = (now: number) => {
      frameRef.current = requestAnimationFrame(tick);
      if (!visibleRef.current) return;

      const currentLayout = layoutRef.current;
      if (!currentLayout) return;

      const ctx = canvas.getContext("2d");
      const parent = canvas.parentElement;
      if (!ctx || !parent) return;

      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (!width || !height) return;

      const target = pointerRef.current;
      const smooth = smoothPointerRef.current;
      smooth.x += (target.x - smooth.x) * 0.06;
      smooth.y += (target.y - smooth.y) * 0.06;
      smooth.active = target.active;

      drawEcosystemFrame(
        ctx,
        width,
        height,
        currentLayout,
        hoveredRef.current,
        revealStageRef.current,
        now - start,
        smooth,
        reducedMotionRef.current,
      );
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      intersection.disconnect();
      media.removeEventListener("change", syncMotion);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [layout]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 block h-full w-full touch-none", className)}
      aria-hidden="true"
    />
  );
}
