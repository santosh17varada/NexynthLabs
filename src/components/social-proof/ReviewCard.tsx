import { CustomerQuote } from "@/components/social-proof/CustomerQuote";
import { testimonialCategoryLabels } from "@/config/testimonials";
import type { ReviewCardData } from "@/types/social-proof";
import { cn } from "@/lib/cn";

type ReviewCardProps = {
  review: ReviewCardData;
  className?: string;
};

export function ReviewCard({ review, className }: ReviewCardProps) {
  const eyebrow = review.eyebrow
    ?? (review.category ? testimonialCategoryLabels[review.category] : undefined);

  return (
    <article className={cn("h-full", className)}>
      {review.headline ? (
        <p className="mb-3 text-sm font-semibold text-foreground">{review.headline}</p>
      ) : null}
      {review.qualitativeLabel ? (
        <p className="mb-3 inline-flex rounded-full border border-electric-blue/25 bg-electric-violet/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
          {review.qualitativeLabel}
        </p>
      ) : null}
      <CustomerQuote
        quote={{
          ...review,
          eyebrow,
        }}
        variant="card"
      />
    </article>
  );
}
