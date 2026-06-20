import { ApprovalBadge } from "@/components/social-proof/ApprovalBadge";
import type { TestimonialStatus } from "@/types/testimonials";

export function TestimonialStatusBadge({ status }: { status: TestimonialStatus }) {
  return <ApprovalBadge status={status} />;
}
