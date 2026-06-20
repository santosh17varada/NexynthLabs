import { TestimonialCard } from "@/components/social-proof/TestimonialCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getFeaturedApprovedTestimonials } from "@/config/testimonials";
import { cn } from "@/lib/cn";

type ApprovedCustomerQuotesProps = {
  limit?: number;
  label?: string;
  className?: string;
  columns?: 1 | 2 | 3;
};

export function ApprovedCustomerQuotes({
  limit = 3,
  label,
  className,
  columns = 2,
}: ApprovedCustomerQuotesProps) {
  const quotes = getFeaturedApprovedTestimonials(limit);

  if (quotes.length === 0) {
    return null;
  }

  const columnClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1";

  return (
    <div className={className}>
      {label ? <SectionLabel className="mb-4">{label}</SectionLabel> : null}
      <div className={cn("grid gap-4", columnClass)}>
        {quotes.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
