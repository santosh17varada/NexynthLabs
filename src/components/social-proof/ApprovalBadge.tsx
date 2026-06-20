import { testimonialStatusLabels } from "@/config/testimonials";
import type { SocialProofApprovalStatus } from "@/types/social-proof";
import { cn } from "@/lib/cn";

const statusStyles: Record<SocialProofApprovalStatus, string> = {
  placeholder: "bg-amber-500/15 text-foreground border-amber-500/30",
  approved: "bg-electric-violet/15 text-foreground border-electric-blue/30",
  draft: "bg-surface text-muted border-border",
};

type ApprovalBadgeProps = {
  status: SocialProofApprovalStatus;
  className?: string;
};

export function ApprovalBadge({ status, className }: ApprovalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        statusStyles[status],
        className,
      )}
    >
      {testimonialStatusLabels[status]}
    </span>
  );
}
