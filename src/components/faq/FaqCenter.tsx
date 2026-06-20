"use client";

import { useMemo, useState } from "react";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  faqCategories,
  faqCategoryLabels,
  faqPageCopy,
  getPublishedFaqs,
} from "@/config/faqs";
import type { FaqCategory } from "@/types/faq";

function normalizeQuery(value: string): string {
  return value.trim().toLowerCase();
}

export function FaqCenter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const allPublished = getPublishedFaqs();

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);

    return allPublished.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [item.question, item.answer, faqCategoryLabels[item.category]]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [allPublished, category, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="block w-full sm:max-w-md">
          <span className="text-sm font-medium text-foreground">{faqPageCopy.searchLabel}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={faqPageCopy.searchPlaceholder}
            className="mt-2 w-full min-h-11 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <p className="text-sm text-muted">
          {filtered.length} of {allPublished.length} shown
        </p>
      </div>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter FAQs by category"
      >
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            category === "all"
              ? "border-accent bg-electric-violet/15 text-foreground"
              : "border-border text-muted hover:border-electric-blue/40 hover:text-foreground"
          }`}
        >
          All
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === cat
                ? "border-accent bg-electric-violet/15 text-foreground"
                : "border-border text-muted hover:border-electric-blue/40 hover:text-foreground"
            }`}
          >
            {faqCategoryLabels[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface p-8 text-center text-sm text-muted">
          {faqPageCopy.emptyMessage}
        </p>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <FaqAccordionItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
