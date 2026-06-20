import Link from "next/link";
import { Card } from "@/components/ui/Card";
import {
  getKnowledgeArticlePath,
  knowledgeCategoryLabels,
} from "@/config/knowledge";
import type { KnowledgeArticle } from "@/types/knowledge";

export function KnowledgeArticleCard({ article }: { article: KnowledgeArticle }) {
  const href = getKnowledgeArticlePath(article);

  return (
    <Card
      as="article"
      className="flex h-full flex-col border-border/70 p-5 transition-shadow hover:shadow-elevated sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-electric-violet/15 px-2.5 py-0.5 text-xs font-semibold text-foreground">
          {knowledgeCategoryLabels[article.category]}
        </span>
        <span className="text-xs text-muted">{article.readTimeMinutes} min read</span>
      </div>
      <time
        dateTime={article.publishedAt}
        className="mt-3 text-xs font-medium uppercase tracking-wide text-muted"
      >
        {new Date(article.publishedAt).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        <Link href={href} className="transition-colors hover:text-electric-violet">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {article.excerpt}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
      >
        {article.listingType === "guide" ? "Read guide" : "View resource"} →
      </Link>
    </Card>
  );
}
