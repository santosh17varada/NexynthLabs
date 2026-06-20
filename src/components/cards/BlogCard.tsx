import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { innerLinkClass } from "@/components/ui/variants";
import type { BlogPost } from "@/config/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card as="article" variant="elevated" padding="sm" className="flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5 hover:shadow-floating sm:p-6">
      <time
        dateTime={post.publishedAt}
        className="text-xs font-medium uppercase tracking-wide text-muted"
      >
        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h3 className="mt-3 text-xl font-semibold text-foreground">
        <Link
          href={`/blog/${post.slug}`}
          className={`transition-colors ${innerLinkClass}`}
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {post.excerpt}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className={`mt-6 text-sm ${innerLinkClass}`}
      >
        Read article →
      </Link>
    </Card>
  );
}
