import { Card } from "@/components/ui/Card";
import { getApplicationMailtoLink } from "@/config/site";
import type { JobOpening } from "@/config/careers";
import { cn } from "@/lib/cn";

const departmentStyles: Record<string, string> = {
  Engineering: "bg-electric-blue/10 text-electric-blue border-electric-blue/20",
  Design: "bg-electric-violet/10 text-electric-violet border-electric-violet/20",
};

export function JobCard({ job }: { job: JobOpening }) {
  const deptStyle = departmentStyles[job.department] ?? "bg-electric-violet/10 text-foreground border-border/60";

  return (
    <Card
      as="article"
      variant="elevated"
      padding="sm"
      className="group transition-shadow hover:shadow-floating sm:p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex rounded-ds-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
                deptStyle,
              )}
            >
              {job.department}
            </span>
            <span className="text-xs font-medium text-muted">{job.type}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {job.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{job.location}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{job.description}</p>
        </div>
        <a
          href={getApplicationMailtoLink(job.title)}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-ds-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Apply
        </a>
      </div>
    </Card>
  );
}
