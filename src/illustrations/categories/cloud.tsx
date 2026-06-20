import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

export function CloudIllustration({
  variant,
  tone,
  title = "Cloud delivery path",
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
      <IllustrationPill x={16} y={12} label="Cloud" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={32} y={56} width={80} height={40} label="CDN" tone={tone} />
          <IllustrationEdge x1={112} y1={76} x2={140} y2={76} tone={tone} />
          <IllustrationNode x={140} y={56} width={88} height={40} label="Nginx" tone={tone} accent />
          <IllustrationEdge x1={228} y1={76} x2={256} y2={76} tone={tone} />
          <IllustrationNode x={256} y={56} width={112} height={40} label="AWS compute" tone={tone} />
        </>
      ) : (
        <>
          <IllustrationNode x={160} y={40} width={80} height={36} label="Users" tone={tone} />
          <IllustrationEdge x1={200} y1={76} x2={200} y2={92} tone={tone} />
          <IllustrationNode x={132} y={92} width={136} height={40} label="CDN · static" tone={tone} accent />
          <IllustrationEdge x1={200} y1={132} x2={200} y2={148} tone={tone} />
          <IllustrationNode x={124} y={148} width={152} height={40} label="Nginx · TLS" tone={tone} accent />
          <IllustrationEdge x1={160} y1={188} x2={120} y2={204} tone={tone} />
          <IllustrationEdge x1={240} y1={188} x2={280} y2={204} tone={tone} />
          <IllustrationNode x={48} y={204} width={96} height={32} label="Next.js" tone={tone} />
          <IllustrationNode x={256} y={204} width={96} height={32} label="API tier" tone={tone} />
        </>
      )}
    </IllustrationSvg>
  );
}
