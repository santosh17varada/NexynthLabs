export type NexynthParticleColor = "violet" | "blue" | "cyan" | "gold";

export type NexynthParticle = {
  angle: number;
  orbitRadius: number;
  rayLength: number;
  travelSpeed: number;
  travelPhase: number;
  size: number;
  color: NexynthParticleColor;
  drift: number;
};

export const NEXYNTH_PARTICLE_COLORS: Record<NexynthParticleColor, string> = {
  violet: "#8b5cf6",
  blue: "#3b82f6",
  cyan: "#06b6d4",
  gold: "#d4a017",
};

export const NEXYNTH_PARTICLE_PALETTE: NexynthParticleColor[] = [
  "violet",
  "blue",
  "cyan",
  "blue",
  "cyan",
  "violet",
  "gold",
];

/** Particle count scales with viewport — generated client-side only. */
export function nexynthParticleCount(width: number): number {
  if (width < 640) return 96;
  if (width < 1024) return 128;
  return 156;
}

export function createNexynthParticles(count: number): NexynthParticle[] {
  const particles: NexynthParticle[] = [];

  for (let i = 0; i < count; i += 1) {
    const color = NEXYNTH_PARTICLE_PALETTE[i % NEXYNTH_PARTICLE_PALETTE.length];
    particles.push({
      angle: (i / count) * Math.PI * 2 + Math.random() * 0.35,
      orbitRadius: 0.08 + Math.random() * 0.38,
      rayLength: 0.22 + Math.random() * 0.48,
      travelSpeed: 0.12 + Math.random() * 0.28,
      travelPhase: Math.random(),
      size: 0.8 + Math.random() * 1.6,
      color,
      drift: Math.random() * Math.PI * 2,
    });
  }

  return particles;
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
