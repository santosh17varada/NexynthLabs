export type FaqCategory =
  | "services"
  | "products"
  | "getpandit"
  | "partnerships"
  | "careers"
  | "security"
  | "contact";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  published: boolean;
};
