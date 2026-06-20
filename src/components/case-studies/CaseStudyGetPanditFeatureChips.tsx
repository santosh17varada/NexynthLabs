import { getPanditCaseStudyFeatureChips } from "@/config/home-case-studies";
import { cn } from "@/lib/cn";

type CaseStudyGetPanditFeatureChipsProps = {
  className?: string;
};

export function CaseStudyGetPanditFeatureChips({ className }: CaseStudyGetPanditFeatureChipsProps) {
  return (
    <ul
      className={cn("flex flex-wrap gap-1.5", className)}
      aria-label="GetPandit product capabilities"
    >
      {getPanditCaseStudyFeatureChips.map((chip) => (
        <li key={chip}>
          <span className="inline-flex items-center rounded-full border border-border/50 bg-background/90 px-2.5 py-0.5 text-[0.625rem] font-medium leading-tight text-muted sm:text-[0.65rem]">
            {chip}
          </span>
        </li>
      ))}
    </ul>
  );
}
