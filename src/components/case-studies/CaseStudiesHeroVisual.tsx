import { caseStudyStorySteps } from "@/config/case-studies-page";
import { caseStudiesPageCopy } from "@/config/case-studies-page";
import { cn } from "@/lib/cn";

export function CaseStudiesHeroVisual() {
  const labels = caseStudiesPageCopy.narrativeLabels;

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -left-4 top-8 h-36 w-36 rounded-full bg-electric-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-ds-xl border border-glass-border-dark bg-glass-dark/40 p-6 shadow-glass-dark backdrop-blur-sm sm:p-8">
        <p className="text-eyebrow text-electric-cyan">Story template</p>
        <ol className="mt-5 space-y-3" aria-hidden="true">
          {caseStudyStorySteps.map((item, index) => (
            <li
              key={item.key}
              className={cn(
                "flex items-center gap-3 rounded-ds-md border px-3 py-2.5 transition-colors",
                index === 0
                  ? "border-electric-cyan/35 bg-electric-cyan/10"
                  : "border-glass-border-dark bg-midnight/30",
              )}
            >
              <span className="text-[0.65rem] font-bold text-electric-cyan">{item.step}</span>
              <span className="text-sm font-semibold text-on-dark">
                {labels[item.key]}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center text-xs text-on-dark-muted">
          Config-driven · CMS-ready fields
        </p>
      </div>
    </div>
  );
}

export function CaseStudyStoryRail({ className }: { className?: string }) {
  const labels = caseStudiesPageCopy.narrativeLabels;

  return (
    <nav
      aria-label="Case study sections"
      className={cn(
        "flex flex-wrap gap-2 rounded-ds-lg border border-border/70 bg-surface/80 p-3 backdrop-blur-sm",
        className,
      )}
    >
      {caseStudyStorySteps.map((item) => (
        <a
          key={item.key}
          href={`#${item.key}`}
          className="rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-electric-blue/35 hover:text-electric-blue"
        >
          {labels[item.key]}
        </a>
      ))}
    </nav>
  );
}
