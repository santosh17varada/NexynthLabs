import { CustomerQuote } from "@/components/social-proof/CustomerQuote";
import type { CaseStudyQuote } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type CaseStudyQuoteBlockProps = {
  quote: CaseStudyQuote;
  tone?: "light" | "dark";
  className?: string;
};

export function CaseStudyQuoteBlock({
  quote,
  tone = "light",
  className,
}: CaseStudyQuoteBlockProps) {
  return (
    <CustomerQuote
      quote={{
        text: quote.text,
        attribution: quote.attribution,
        role: quote.role,
        image: quote.image,
      }}
      tone={tone}
      variant="pullquote"
      className={cn(className)}
    />
  );
}
