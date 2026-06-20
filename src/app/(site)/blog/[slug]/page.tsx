import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { getBlogPost, blogPosts } from "@/config/blog";
import { buildArticleJsonLd, createPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata(post.title, post.excerpt, {
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const articleJsonLd = buildArticleJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <MarketingHero
        eyebrow="Blog"
        title={post.title}
        description={post.excerpt}
        variant="dark"
      />
      <Container as="article" className="py-12 sm:py-16">
        <p className="mb-10 text-sm text-muted">
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </p>
        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
