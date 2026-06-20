import { getPublishedClientSuccessStories } from "@/config/client-success";

export function ClientSuccessSectionNav() {
  const stories = getPublishedClientSuccessStories();

  return (
    <nav
      aria-label="Client success stories"
      className="flex flex-wrap justify-center gap-2 border-b border-border/60 bg-surface px-4 py-4 sm:gap-3"
    >
      {stories.map((story) => (
        <a
          key={story.id}
          href={`#${story.id}`}
          className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-electric-blue/40 hover:text-foreground"
        >
          {story.title}
        </a>
      ))}
    </nav>
  );
}
