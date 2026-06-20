import {
  IllustrationEdge,
  IllustrationNode,
  IllustrationPill,
  IllustrationSvg,
} from "@/illustrations/primitives";
import type { CategoryIllustrationProps } from "@/illustrations/types";

export function GetPanditIllustration({
  variant,
  tone,
  title = "GetPandit booking journey",
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
      <IllustrationPill x={16} y={12} label="GetPandit" tone={tone} />
      {compact ? (
        <>
          <IllustrationNode x={24} y={56} width={96} height={44} label="Discover" tone={tone} accent />
          <IllustrationEdge x1={120} y1={78} x2={148} y2={78} tone={tone} />
          <IllustrationNode x={148} y={56} width={96} height={44} label="Schedule" tone={tone} />
          <IllustrationEdge x1={244} y1={78} x2={272} y2={78} tone={tone} />
          <IllustrationNode
            x={272}
            y={56}
            width={104}
            height={44}
            label="Confirm"
            tone={tone}
            accent
          />
        </>
      ) : (
        <>
          <IllustrationNode
            x={32}
            y={52}
            width={100}
            height={48}
            label="Family"
            sublabel="Browse pooja"
            tone={tone}
          />
          <IllustrationEdge x1={132} y1={76} x2={158} y2={76} tone={tone} />
          <IllustrationNode
            x={158}
            y={52}
            width={100}
            height={48}
            label="Catalog"
            sublabel="Services & pandits"
            tone={tone}
            accent
          />
          <IllustrationEdge x1={258} y1={76} x2={284} y2={76} tone={tone} />
          <IllustrationNode
            x={284}
            y={52}
            width={88}
            height={48}
            label="Booking"
            sublabel="Calendar"
            tone={tone}
          />
          <IllustrationEdge x1={200} y1={100} x2={200} y2={128} tone={tone} />
          <IllustrationNode
            x={130}
            y={128}
            width={140}
            height={44}
            label="Notify & confirm"
            sublabel="SMS · WhatsApp ready"
            tone={tone}
            accent
          />
          <IllustrationNode
            x={32}
            y={188}
            width={336}
            height={36}
            label="getpandit.com — separate product domain"
            tone={tone}
            fontSize={10}
          />
        </>
      )}
    </IllustrationSvg>
  );
}
