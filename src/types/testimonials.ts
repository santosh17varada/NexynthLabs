export type TestimonialStatus = "placeholder" | "approved" | "draft";

export type TestimonialCategory =
  | "services"
  | "product"
  | "partnership"
  | "ai"
  | "engineering";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  category: TestimonialCategory;
  status: TestimonialStatus;
  featured?: boolean;
};
