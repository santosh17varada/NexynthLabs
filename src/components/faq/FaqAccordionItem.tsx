import { faqCategoryLabels } from "@/config/faqs";
import type { FaqItem } from "@/types/faq";

export function FaqAccordionItem({ item }: { item: FaqItem }) {
  return (
    <details className="group rounded-xl border border-border/70 bg-background">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left font-medium text-foreground sm:px-5 [&::-webkit-details-marker]:hidden">
        <span>{item.question}</span>
        <span
          className="shrink-0 text-muted transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          ▾
        </span>
      </summary>
      <div className="border-t border-border/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5 sm:text-base">
        <p>{item.answer}</p>
        <p className="mt-3 text-xs uppercase tracking-wide text-muted/80">
          {faqCategoryLabels[item.category]}
        </p>
      </div>
    </details>
  );
}
