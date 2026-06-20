import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

export function EngineeringIllustration({
  variant,
  tone,
  title = "Engineering stack layers",
  className,
}: CategoryIllustrationProps) {
  const compact = variant === "compact";

  return (
    <IllustrationSvg
      tone={tone}
      title={title}
      className={className}
      viewBox={compact ? "0 0 400 180" : "0 0 400 240"}
    >
      <IllustrationPill x={16} y={12} label="Engineering" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={48} y={48} width={304} height={32} label="Clients · Web · Mobile" tone={tone} accent />
          <IllustrationEdge x1={200} y1={80} x2={200} y2={96} tone={tone} />
          <IllustrationNode x={48} y={96} width={304} height={32} label="API · NestJS" tone={tone} accent />
          <IllustrationEdge x1={200} y1={128} x2={200} y2={144} tone={tone} />
          <IllustrationNode x={48} y={144} width={304} height={32} label="Data · Integrations" tone={tone} />
        </>
      ) : (
        <>
          <IllustrationNode x={40} y={44} width={96} height={40} label="Web" tone={tone} accent />
          <IllustrationNode x={152} y={44} width={96} height={40} label="API" tone={tone} accent />
          <IllustrationNode x={264} y={44} width={96} height={40} label="Mobile" tone={tone} accent />
          <IllustrationEdge x1={88} y1={84} x2={88} y2={108} tone={tone} />
          <IllustrationEdge x1={200} y1={84} x2={200} y2={108} tone={tone} />
          <IllustrationEdge x1={312} y1={84} x2={312} y2={108} tone={tone} />
          <IllustrationNode
            x={72}
            y={108}
            width={256}
            height={44}
            label="Domain services"
            sublabel="Modules · validation"
            tone={tone}
            accent
          />
          <IllustrationEdge x1={200} y1={152} x2={200} y2={172} tone={tone} />
          <IllustrationNode x={72} y={172} width={120} height={40} label="MongoDB" tone={tone} />
          <IllustrationNode x={208} y={172} width={120} height={40} label="Queues" tone={tone} />
          <IllustrationNode
            x={72}
            y={218}
            width={256}
            height={20}
            label="CI · tests · deploy"
            tone={tone}
            fontSize={9}
          />
        </>
      )}
    </IllustrationSvg>
  );
}
