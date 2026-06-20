import { MotionReveal } from "@/motion";
import type { SocialProofTone, TechnologyLogoEntry } from "@/types/social-proof";
import { cn } from "@/lib/cn";

const categoryAccent: Record<string, string> = {
  Web: "from-electric-blue/20 to-electric-blue/5",
  Runtime: "from-primary/20 to-primary/5",
  API: "from-electric-violet/20 to-electric-violet/5",
  Data: "from-electric-cyan/20 to-electric-cyan/5",
  Cloud: "from-electric-blue/15 to-electric-cyan/10",
  Edge: "from-electric-violet/15 to-electric-blue/10",
  Ops: "from-primary/15 to-electric-violet/10",
  AI: "from-electric-violet/25 to-electric-blue/10",
  Integrations: "from-electric-cyan/20 to-electric-blue/5",
  Mobile: "from-electric-blue/20 to-electric-cyan/10",
};

type TechnologyLogoGridProps = {
  items: readonly TechnologyLogoEntry[];
  tone?: SocialProofTone;
  animated?: boolean;
  layout?: "flex" | "grid";
  className?: string;
};

export function TechnologyLogoGrid({
  items,
  tone = "light",
  animated = false,
  layout = "flex",
  className,
}: TechnologyLogoGridProps) {
  const isDark = tone === "dark";

  return (
    <ul
      className={cn(
        layout === "grid"
          ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4"
          : "flex flex-wrap gap-3 sm:gap-4",
        className,
      )}
      aria-label="Technology stack"
    >
      {items.map((item, index) => {
        const pill = (
          <div
            className={cn(
              "inline-flex min-h-11 w-full flex-col justify-center rounded-ds-lg border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5",
              isDark
                ? cn(
                    "border-glass-border-dark bg-gradient-to-br shadow-glass-dark hover:-translate-y-0.5 hover:border-electric-cyan/35 hover:shadow-glow",
                    categoryAccent[item.category] ?? "from-glass-dark/80 to-glass-dark/60",
                  )
                : cn(
                    "border-border/60 bg-surface shadow-soft hover:-translate-y-0.5 hover:border-electric-blue/25 hover:shadow-elevated",
                    "bg-gradient-to-br from-surface to-surface/80",
                  ),
            )}
          >
            <span
              className={cn(
                "text-[0.65rem] font-semibold uppercase tracking-wider",
                isDark ? "text-electric-cyan" : "text-electric-blue",
              )}
            >
              {item.category}
            </span>
            <span
              className={cn(
                "mt-0.5 text-sm font-semibold sm:text-base",
                isDark ? "text-on-dark" : "text-foreground",
              )}
            >
              {item.name}
            </span>
          </div>
        );

        return (
          <li key={item.id}>
            {animated ? (
              <MotionReveal
                delay={(Math.min(index % 6, 5) as 0 | 1 | 2 | 3 | 4 | 5)}
                variant="card"
              >
                {pill}
              </MotionReveal>
            ) : (
              pill
            )}
          </li>
        );
      })}
    </ul>
  );
}
