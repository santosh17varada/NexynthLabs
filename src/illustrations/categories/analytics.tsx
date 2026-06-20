import { getIllustrationTheme } from "@/illustrations/theme";
import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

function MetricBar({
  x,
  y,
  height,
  tone,
  accent,
}: {
  x: number;
  y: number;
  height: number;
  tone: CategoryIllustrationProps["tone"];
  accent?: boolean;
}) {
  const colors = getIllustrationTheme(tone);
  return (
    <rect
      x={x}
      y={y - height}
      width={18}
      height={height}
      rx={4}
      fill={accent ? colors.accent : colors.nodeAccentFill}
      stroke={accent ? colors.nodeAccentStroke : colors.nodeStroke}
      strokeWidth={1}
    />
  );
}

export function AnalyticsIllustration({
  variant,
  tone,
  title = "Analytics and observability pipeline",
  className,
}: CategoryIllustrationProps) {
  const compact = variant === "compact";
  const colors = getIllustrationTheme(tone);

  return (
    <IllustrationSvg
      tone={tone}
      title={title}
      className={className}
      viewBox={compact ? "0 0 400 160" : "0 0 400 240"}
    >
      <IllustrationPill x={16} y={12} label="Analytics" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={32} y={56} width={88} height={40} label="Events" tone={tone} />
          <IllustrationEdge x1={120} y1={76} x2={156} y2={76} tone={tone} />
          <IllustrationNode x={156} y={56} width={88} height={40} label="Pipeline" tone={tone} accent />
          <IllustrationEdge x1={244} y1={76} x2={272} y2={76} tone={tone} />
          <rect
            x={272}
            y={56}
            width={96}
            height={40}
            rx={10}
            fill={colors.nodeFill}
            stroke={colors.nodeStroke}
            strokeWidth={1.5}
          />
          <MetricBar x={286} y={88} height={22} tone={tone} />
          <MetricBar x={310} y={88} height={32} tone={tone} accent />
          <MetricBar x={334} y={88} height={18} tone={tone} />
          <text
            x={320}
            y={70}
            textAnchor="middle"
            fill={colors.text}
            fontSize={9}
            fontWeight={600}
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          >
            KPIs
          </text>
        </>
      ) : (
        <>
          <IllustrationNode x={32} y={48} width={88} height={40} label="App logs" tone={tone} />
          <IllustrationNode x={32} y={100} width={88} height={40} label="Events" tone={tone} />
          <IllustrationEdge x1={120} y1={68} x2={148} y2={68} tone={tone} />
          <IllustrationEdge x1={120} y1={120} x2={148} y2={120} tone={tone} />
          <IllustrationNode
            x={148}
            y={72}
            width={104}
            height={48}
            label="Collect"
            sublabel="Structured"
            tone={tone}
            accent
          />
          <IllustrationEdge x1={252} y1={96} x2={280} y2={96} tone={tone} />
          <IllustrationNode
            x={280}
            y={72}
            width={88}
            height={48}
            label="Metrics"
            tone={tone}
          />
          <rect
            x={48}
            y={168}
            width={304}
            height={56}
            rx={10}
            fill={colors.nodeFill}
            stroke={colors.nodeStroke}
            strokeWidth={1.5}
          />
          <MetricBar x={80} y={212} height={28} tone={tone} />
          <MetricBar x={120} y={212} height={40} tone={tone} accent />
          <MetricBar x={160} y={212} height={24} tone={tone} />
          <MetricBar x={200} y={212} height={36} tone={tone} accent />
          <MetricBar x={240} y={212} height={20} tone={tone} />
          <MetricBar x={280} y={212} height={32} tone={tone} />
          <text
            x={200}
            y={186}
            textAnchor="middle"
            fill={colors.textMuted}
            fontSize={9}
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          >
            Dashboard · readiness signals (not vanity KPIs)
          </text>
        </>
      )}
    </IllustrationSvg>
  );
}
