import type { ReactNode } from "react";
import { sectionHeadingEyebrowClass, type SectionHeadingTone } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: SectionHeadingTone;
  className?: string;
};

export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow",
        sectionHeadingEyebrowClass(tone),
        tone === "dark" && "text-electric-cyan",
        className,
      )}
    >
      {children}
    </p>
  );
}
