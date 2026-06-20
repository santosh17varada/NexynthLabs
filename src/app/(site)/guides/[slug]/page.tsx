import { notFound } from "next/navigation";
import Link from "next/link";
import { KnowledgeArticleBody } from "@/components/knowledge/KnowledgeArticleBody";
import { Container } from "@/components/ui/Container";
import { getKnowledgeArticle, getKnowledgeArticlesByType } from "@/config/knowledge";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildKnowledgeArticleJsonLd, createPageMetadata } from "@/lib/seo";

type GuideArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getKnowledgeArticlesByType("guide").map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: GuideArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticle("guide", slug);
  if (!article) return {};

  return createPageMetadata(article.title, article.excerpt, {
    path: `/guides/${slug}`,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function GuideArticlePage({ params }: GuideArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticle("guide", slug);

  if (!article) notFound();

  return (
    <>
      <JsonLd data={buildKnowledgeArticleJsonLd(article)} />
      <Container className="pt-8 sm:pt-10">
        <Link
          href="/guides"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          ← All guides
        </Link>
      </Container>
      <KnowledgeArticleBody article={article} />
    </>
  );
}
