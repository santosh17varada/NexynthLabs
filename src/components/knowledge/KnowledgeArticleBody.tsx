import { Container } from "@/components/ui/Container";
import { knowledgeCategoryLabels } from "@/config/knowledge";
import type { KnowledgeArticle } from "@/types/knowledge";

export function KnowledgeArticleBody({ article }: { article: KnowledgeArticle }) {
  return (
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-electric-violet/15 px-2.5 py-0.5 text-xs font-semibold text-foreground">
            {knowledgeCategoryLabels[article.category]}
          </span>
          <span className="text-xs text-muted">{article.readTimeMinutes} min read</span>
        </div>
        <header className="mt-6 border-b border-border/60 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
          <time
            dateTime={article.publishedAt}
            className="mt-4 block text-sm text-muted"
          >
            Published{" "}
            {new Date(article.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div className="prose-nexynth mt-10 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 rounded-xl border border-dashed border-border bg-surface p-4 text-xs text-muted">
          Config-driven knowledge article — edit in src/config/knowledge.ts until CMS editors
          are available.
        </p>
      </article>
    </Container>
  );
}
