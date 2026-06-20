import type { ReactNode } from "react";
import {
  sectionHeadingEyebrowClass,
  type SectionHeadingTone,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  tone?: SectionHeadingTone;
  muted?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  tone = "light",
  muted = false,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-eyebrow font-semibold",
        muted ? "text-muted" : sectionHeadingEyebrowClass(tone),
        className,
      )}
    >
      {children}
    </p>
  );
}
