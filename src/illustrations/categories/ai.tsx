import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

export function AiIllustration({
  variant,
  tone,
  title = "AI agent architecture",
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
      <IllustrationPill x={16} y={12} label="AI" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={40} y={58} width={88} height={40} label="Prompt" tone={tone} />
          <IllustrationEdge x1={128} y1={78} x2={156} y2={78} tone={tone} />
          <IllustrationNode x={156} y={58} width={88} height={40} label="LLM" tone={tone} accent />
          <IllustrationEdge x1={244} y1={78} x2={272} y2={78} tone={tone} />
          <IllustrationNode x={272} y={58} width={88} height={40} label="Tools" tone={tone} />
        </>
      ) : (
        <>
          <IllustrationNode x={148} y={44} width={104} height={40} label="User intent" tone={tone} />
          <IllustrationEdge x1={200} y1={84} x2={200} y2={104} tone={tone} />
          <IllustrationNode
            x={124}
            y={104}
            width={152}
            height={44}
            label="Agent planner"
            sublabel="Memory · routing"
            tone={tone}
            accent
          />
          <IllustrationEdge x1={124} y1={126} x2={72} y2={156} tone={tone} />
          <IllustrationEdge x1={200} y1={148} x2={200} y2={168} tone={tone} />
          <IllustrationEdge x1={276} y1={126} x2={328} y2={156} tone={tone} />
          <IllustrationNode x={32} y={156} width={80} height={40} label="Retrieve" tone={tone} />
          <IllustrationNode x={160} y={168} width={80} height={40} label="Govern" tone={tone} accent />
          <IllustrationNode x={288} y={156} width={80} height={40} label="Act" tone={tone} />
          <IllustrationNode
            x={108}
            y={212}
            width={184}
            height={24}
            label="Audited response"
            tone={tone}
            fontSize={10}
          />
        </>
      )}
    </IllustrationSvg>
  );
}
