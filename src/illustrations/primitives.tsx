import type { ReactNode } from "react";
import { getIllustrationTheme } from "@/illustrations/theme";
import type { IllustrationTone } from "@/illustrations/types";
import { cn } from "@/lib/cn";

export type IllustrationSvgProps = {
  children: ReactNode;
  tone: IllustrationTone;
  viewBox?: string;
  title: string;
  className?: string;
};

export function IllustrationMarkerDefs({ tone }: { tone: IllustrationTone }) {
  const colors = getIllustrationTheme(tone);
  const id = `nx-arrow-${tone}`;

  return (
    <defs>
      <marker
        id={id}
        markerWidth="8"
        markerHeight="8"
        refX="7"
        refY="4"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L8,4 L0,8 Z" fill={colors.line} />
      </marker>
      <linearGradient id={`nx-accent-${tone}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colors.accent} />
        <stop offset="55%" stopColor={colors.accentSecondary} />
        <stop offset="100%" stopColor={colors.accent} stopOpacity="0.85" />
      </linearGradient>
    </defs>
  );
}

export function IllustrationSvg({
  children,
  tone,
  viewBox = "0 0 400 240",
  title,
  className,
}: IllustrationSvgProps) {
  const colors = getIllustrationTheme(tone);

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("h-auto w-full max-w-full", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      <IllustrationMarkerDefs tone={tone} />
      <rect width="100%" height="100%" fill={colors.bg} />
      <pattern id={`nx-grid-${tone}`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path
          d="M24 0H0V24"
          fill="none"
          stroke={colors.grid}
          strokeWidth="0.75"
        />
      </pattern>
      <rect width="100%" height="100%" fill={`url(#nx-grid-${tone})`} opacity="0.65" />
      <g>{children}</g>
    </svg>
  );
}

type NodeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sublabel?: string;
  tone: IllustrationTone;
  accent?: boolean;
  fontSize?: number;
};

export function IllustrationNode({
  x,
  y,
  width,
  height,
  label,
  sublabel,
  tone,
  accent = false,
  fontSize = 11,
}: NodeProps) {
  const colors = getIllustrationTheme(tone);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={10}
        fill={accent ? colors.nodeAccentFill : colors.nodeFill}
        stroke={accent ? colors.nodeAccentStroke : colors.nodeStroke}
        strokeWidth={1.5}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - (sublabel ? 5 : 0)}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={colors.text}
        fontSize={fontSize}
        fontWeight={600}
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
      >
        {label}
      </text>
      {sublabel ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={colors.textMuted}
          fontSize={9}
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        >
          {sublabel}
        </text>
      ) : null}
    </g>
  );
}

type EdgeProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  tone: IllustrationTone;
  dashed?: boolean;
};

export function IllustrationEdge({ x1, y1, x2, y2, tone, dashed }: EdgeProps) {
  const colors = getIllustrationTheme(tone);

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={colors.line}
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={`url(#nx-arrow-${tone})`}
    />
  );
}

type PillProps = {
  x: number;
  y: number;
  label: string;
  tone: IllustrationTone;
};

export function IllustrationPill({ x, y, label, tone }: PillProps) {
  const colors = getIllustrationTheme(tone);
  const width = label.length * 6.2 + 20;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={20}
        rx={10}
        fill={colors.nodeAccentFill}
        stroke={colors.nodeAccentStroke}
        strokeWidth={1}
      />
      <text
        x={x + width / 2}
        y={y + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={colors.accent}
        fontSize={8}
        fontWeight={700}
        letterSpacing="0.08em"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

type FrameProps = {
  children: ReactNode;
  tone: IllustrationTone;
  className?: string;
};

export function IllustrationFrame({ children, tone, className }: FrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-ds-lg border p-3 sm:p-5",
        tone === "dark"
          ? "border-glass-border-dark bg-glass-dark/50 shadow-glass-dark backdrop-blur-sm"
          : "border-glass-border bg-glass/80 shadow-soft backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
