import {
  sectionHeadingDescriptionClass,
  sectionHeadingEyebrowClass,
  sectionHeadingTitleClass,
  type SectionHeadingTone,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: SectionHeadingTone;
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={cn("max-w-2xl", alignClass, className)}>
      {eyebrow ? (
        <p className={cn("text-eyebrow", sectionHeadingEyebrowClass(tone))}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-2 text-balance font-semibold tracking-tight text-heading-xl",
          sectionHeadingTitleClass(tone),
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg",
            sectionHeadingDescriptionClass(tone),
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
