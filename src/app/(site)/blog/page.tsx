import { BlogCard } from "@/components/cards/BlogCard";
import { PageSection } from "@/components/layout/PageSection";
import { NewsletterSignupSection } from "@/components/newsletter/NewsletterSignupSection";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPageCopy, blogPosts } from "@/config/blog";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("blog");

export default function BlogPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Blog"
        title={blogPageCopy.listTitle}
        description="Product thinking, company updates, and notes on how we build — without hype or unverified claims."
        variant="dark"
      />
      <PageSection>
        <SectionHeading
          eyebrow="Latest"
          title="Articles & updates"
          description="Engineering notes, product decisions, and company news from Nexynth Labs."
        />
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </PageSection>
      <NewsletterSignupSection />
    </>
  );
}
