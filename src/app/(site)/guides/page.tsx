import { KnowledgeArticleGrid } from "@/components/knowledge/KnowledgeArticleGrid";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { getKnowledgeArticlesByType, guidesPageCopy } from "@/config/knowledge";
import { createPageMetadataFromKey } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadataFromKey("knowledgeGuides");

export default function GuidesPage() {
  const articles = getKnowledgeArticlesByType("guide");

  return (
    <>
      <MarketingHero
        eyebrow={guidesPageCopy.hero.eyebrow}
        title={guidesPageCopy.hero.title}
        description={guidesPageCopy.hero.description}
      >
        <Link
          href="/resources"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          Browse resources →
        </Link>
      </MarketingHero>
      <Container className="py-12 sm:py-16 lg:py-20">
        <KnowledgeArticleGrid articles={articles} emptyMessage={guidesPageCopy.empty} />
      </Container>
    </>
  );
}
