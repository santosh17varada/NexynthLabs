import { caseStudiesPageCopy } from "@/config/case-studies-page";
import { getCaseStudyStatusLabel } from "@/config/portfolio";
import type { CaseStudy } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyMetaBarProps = {
  study: CaseStudy;
  className?: string;
};

export function CaseStudyMetaBar({ study, className }: CaseStudyMetaBarProps) {
  const { metaLabels } = caseStudiesPageCopy;
  const statusLabel = getCaseStudyStatusLabel(study);

  const items = [
    { label: metaLabels.project, value: study.projectName },
    { label: metaLabels.customer, value: study.customerName },
    { label: metaLabels.industry, value: study.industry },
    { label: metaLabels.status, value: statusLabel, badge: true },
  ] as const;

  return (
    <dl
      className={cn(
        "grid gap-4 rounded-ds-xl border border-glass-border bg-glass/80 p-5 backdrop-blur-sm sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-eyebrow text-electric-blue">{item.label}</dt>
          <dd className="mt-2 text-base font-semibold text-foreground sm:text-lg">
            {"badge" in item && item.badge ? (
              <span className="inline-flex rounded-full bg-electric-violet/15 px-3 py-1 text-sm font-semibold">
                {item.value}
              </span>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
