export type NetworkBurstRayStroke = "violet" | "blue" | "cyan";

export type NetworkBurstRay = {
  id: string;
  /** Mathematical angle in degrees (0° = east, counter-clockwise positive). */
  angleDeg: number;
  /** Line length as a fraction of the drawable radius (0–1). */
  length: number;
  stroke: NetworkBurstRayStroke;
  /** Seconds for one dot travel cycle along the ray. */
  dotSpeed: number;
  /** Initial dot position along the ray (0–1). */
  dotPhase: number;
  /** Relative stroke width. */
  width: number;
  /** Optional secondary dot trailing the primary. */
  trailPhase?: number;
};

/** Fixed ray layout — deterministic for SSR SVG and client canvas. */
export const NETWORK_BURST_RAYS: readonly NetworkBurstRay[] = [
  { id: "r01", angleDeg: -82, length: 0.92, stroke: "violet", dotSpeed: 3.4, dotPhase: 0.12, width: 1.1 },
  { id: "r02", angleDeg: -52, length: 0.78, stroke: "blue", dotSpeed: 2.8, dotPhase: 0.55, width: 1, trailPhase: 0.35 },
  { id: "r03", angleDeg: -18, length: 0.86, stroke: "cyan", dotSpeed: 3.1, dotPhase: 0.28, width: 1 },
  { id: "r04", angleDeg: 14, length: 0.74, stroke: "blue", dotSpeed: 2.6, dotPhase: 0.72, width: 0.9, trailPhase: 0.5 },
  { id: "r05", angleDeg: 48, length: 0.9, stroke: "violet", dotSpeed: 3.6, dotPhase: 0.08, width: 1.05 },
  { id: "r06", angleDeg: 78, length: 0.68, stroke: "cyan", dotSpeed: 2.4, dotPhase: 0.64, width: 0.85 },
  { id: "r07", angleDeg: 112, length: 0.88, stroke: "blue", dotSpeed: 3.2, dotPhase: 0.41, width: 1, trailPhase: 0.22 },
  { id: "r08", angleDeg: 142, length: 0.76, stroke: "violet", dotSpeed: 2.9, dotPhase: 0.86, width: 0.95 },
  { id: "r09", angleDeg: 168, length: 0.84, stroke: "cyan", dotSpeed: 3.5, dotPhase: 0.19, width: 1.05 },
  { id: "r10", angleDeg: 198, length: 0.7, stroke: "blue", dotSpeed: 2.7, dotPhase: 0.58, width: 0.9, trailPhase: 0.44 },
  { id: "r11", angleDeg: 228, length: 0.91, stroke: "violet", dotSpeed: 3.3, dotPhase: 0.33, width: 1.1 },
  { id: "r12", angleDeg: 258, length: 0.73, stroke: "cyan", dotSpeed: 2.5, dotPhase: 0.77, width: 0.85 },
  { id: "r13", angleDeg: 288, length: 0.87, stroke: "blue", dotSpeed: 3.0, dotPhase: 0.46, width: 1 },
  { id: "r14", angleDeg: 318, length: 0.79, stroke: "violet", dotSpeed: 2.8, dotPhase: 0.91, width: 0.95, trailPhase: 0.68 },
  { id: "r15", angleDeg: -68, length: 0.58, stroke: "cyan", dotSpeed: 2.2, dotPhase: 0.38, width: 0.75 },
  { id: "r16", angleDeg: 8, length: 0.52, stroke: "violet", dotSpeed: 2.0, dotPhase: 0.62, width: 0.7, trailPhase: 0.48 },
  { id: "r17", angleDeg: 98, length: 0.55, stroke: "blue", dotSpeed: 2.3, dotPhase: 0.15, width: 0.72 },
  { id: "r18", angleDeg: 188, length: 0.6, stroke: "cyan", dotSpeed: 2.1, dotPhase: 0.84, width: 0.78 },
  { id: "r19", angleDeg: 248, length: 0.54, stroke: "violet", dotSpeed: 2.4, dotPhase: 0.27, width: 0.7 },
  { id: "r20", angleDeg: 308, length: 0.57, stroke: "blue", dotSpeed: 2.15, dotPhase: 0.71, width: 0.74 },
] as const;

export const NETWORK_BURST_STROKE_COLORS: Record<NetworkBurstRayStroke, string> = {
  violet: "#8b5cf6",
  blue: "#3b82f6",
  cyan: "#06b6d4",
};

export const NETWORK_BURST_VIEWBOX = { width: 960, height: 520 } as const;

export function rayEndpoint(
  cx: number,
  cy: number,
  radius: number,
  ray: NetworkBurstRay,
  parallaxX = 0,
  parallaxY = 0,
) {
  const rad = (ray.angleDeg * Math.PI) / 180;
  const len = radius * ray.length;
  return {
    x: cx + Math.cos(rad) * len + parallaxX,
    y: cy + Math.sin(rad) * len + parallaxY,
  };
}

export function dotOnRay(
  cx: number,
  cy: number,
  ex: number,
  ey: number,
  phase: number,
) {
  const t = phase - Math.floor(phase);
  return {
    x: cx + (ex - cx) * t,
    y: cy + (ey - cy) * t,
  };
}
