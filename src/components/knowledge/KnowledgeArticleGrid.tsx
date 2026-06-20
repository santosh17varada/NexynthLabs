"use client";

import { useMemo, useState } from "react";
import { KnowledgeArticleCard } from "@/components/knowledge/KnowledgeArticleCard";
import {
  knowledgeCategories,
  knowledgeCategoryLabels,
} from "@/config/knowledge";
import type { KnowledgeArticle, KnowledgeCategory } from "@/types/knowledge";

type KnowledgeArticleGridProps = {
  articles: readonly KnowledgeArticle[];
  emptyMessage: string;
};

function normalizeQuery(value: string): string {
  return value.trim().toLowerCase();
}

export function KnowledgeArticleGrid({ articles, emptyMessage }: KnowledgeArticleGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<KnowledgeCategory | "all">("all");

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);

    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        article.title,
        article.excerpt,
        knowledgeCategoryLabels[article.category],
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [articles, category, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="block w-full sm:max-w-md">
          <span className="text-sm font-medium text-foreground">Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles and topics…"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <p className="text-sm text-muted">
          {filtered.length} of {articles.length} shown
        </p>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
            category === "all"
              ? "border-accent bg-electric-violet/15 text-foreground"
              : "border-border text-muted hover:border-electric-blue/40 hover:text-foreground"
          }`}
        >
          All
        </button>
        {knowledgeCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
              category === cat
                ? "border-accent bg-electric-violet/15 text-foreground"
                : "border-border text-muted hover:border-electric-blue/40 hover:text-foreground"
            }`}
          >
            {knowledgeCategoryLabels[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border bg-surface p-8 text-center text-sm text-muted">
          {emptyMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filtered.map((article) => (
            <KnowledgeArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
