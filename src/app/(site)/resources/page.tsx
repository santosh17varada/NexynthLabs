import { KnowledgeArticleGrid } from "@/components/knowledge/KnowledgeArticleGrid";
import { NewsletterSignupSection } from "@/components/newsletter/NewsletterSignupSection";
import { ResourceDownloadsSection } from "@/components/resource-downloads/ResourceDownloadsSection";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getKnowledgeArticlesByType, resourcesPageCopy } from "@/config/knowledge";
import { createPageMetadataFromKey } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadataFromKey("knowledgeResources");

export default function ResourcesPage() {
  const articles = getKnowledgeArticlesByType("resource");
  const { hero, articlesTitle, articlesDescription, empty } = resourcesPageCopy;

  return (
    <>
      <MarketingHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}>
        <Link
          href="/guides"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline"
        >
          Browse guides →
        </Link>
      </MarketingHero>

      <ResourceDownloadsSection />

      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeading title={articlesTitle} description={articlesDescription} />
        <div className="mt-10">
          <KnowledgeArticleGrid articles={articles} emptyMessage={empty} />
        </div>
      </Container>
      <NewsletterSignupSection />
    </>
  );
}
