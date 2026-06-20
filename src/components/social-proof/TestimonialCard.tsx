import { ReviewCard } from "@/components/social-proof/ReviewCard";
import type { TestimonialItem } from "@/types/social-proof";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <ReviewCard
      review={{
        id: testimonial.id,
        text: testimonial.quote,
        attribution: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        category: testimonial.category,
        status: testimonial.status,
      }}
    />
  );
}
