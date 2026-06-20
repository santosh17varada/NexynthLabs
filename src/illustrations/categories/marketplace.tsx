import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

export function MarketplaceIllustration({
  variant,
  tone,
  title = "Marketplace platform model",
  className,
}: CategoryIllustrationProps) {
  const compact = variant === "compact";

  return (
    <IllustrationSvg
      tone={tone}
      title={title}
      className={className}
      viewBox={compact ? "0 0 400 160" : "0 0 400 240"}
    >
      <IllustrationPill x={16} y={12} label="Marketplace" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={32} y={64} width={88} height={40} label="Demand" tone={tone} />
          <IllustrationEdge x1={120} y1={84} x2={160} y2={84} tone={tone} />
          <IllustrationNode x={160} y={64} width={80} height={40} label="Core" tone={tone} accent />
          <IllustrationEdge x1={240} y1={84} x2={280} y2={84} tone={tone} />
          <IllustrationNode x={280} y={64} width={88} height={40} label="Supply" tone={tone} />
        </>
      ) : (
        <>
          <IllustrationNode
            x={40}
            y={56}
            width={100}
            height={48}
            label="Families"
            sublabel="Discovery"
            tone={tone}
          />
          <IllustrationNode
            x={150}
            y={108}
            width={100}
            height={56}
            label="Platform"
            sublabel="Booking core"
            tone={tone}
            accent
          />
          <IllustrationNode
            x={260}
            y={56}
            width={100}
            height={48}
            label="Pandits"
            sublabel="Listings"
            tone={tone}
          />
          <IllustrationEdge x1={140} y1={80} x2={168} y2={112} tone={tone} />
          <IllustrationEdge x1={260} y1={80} x2={232} y2={112} tone={tone} />
          <IllustrationEdge x1={200} y1={164} x2={200} y2={184} tone={tone} />
          <IllustrationNode x={72} y={184} width={96} height={36} label="Payments*" tone={tone} />
          <IllustrationNode x={232} y={184} width={96} height={36} label="Trust*" tone={tone} />
          <IllustrationNode
            x={108}
            y={222}
            width={184}
            height={18}
            label="* integration-ready labels"
            tone={tone}
            fontSize={8}
          />
        </>
      )}
    </IllustrationSvg>
  );
}
