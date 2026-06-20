import { ClientSuccessStoryCard } from "@/components/client-success/ClientSuccessStoryCard";
import { Container } from "@/components/ui/Container";
import { getPublishedClientSuccessStories } from "@/config/client-success";

export function ClientSuccessStories() {
  const stories = getPublishedClientSuccessStories();

  return (
    <div className="border-t border-border/60">
      {stories.map((story, index) => (
        <section
          key={story.id}
          className={index % 2 === 1 ? "border-t border-border/60 bg-surface" : "border-t border-border/60"}
          aria-labelledby={`client-success-${story.id}`}
        >
          <Container className="py-10 sm:py-14 lg:py-16">
            <ClientSuccessStoryCard story={story} />
          </Container>
        </section>
      ))}
    </div>
  );
}
