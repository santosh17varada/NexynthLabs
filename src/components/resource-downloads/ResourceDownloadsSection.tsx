import { ResourceDownloadCard } from "@/components/resource-downloads/ResourceDownloadCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  resourceDownloads,
  resourceDownloadsSectionCopy,
} from "@/config/resource-downloads";

export function ResourceDownloadsSection() {
  const { title, description, footnote } = resourceDownloadsSectionCopy;

  return (
    <section className="border-t border-border/60 bg-surface" aria-labelledby="resource-downloads">
      <Container className="py-12 sm:py-16 lg:py-20">
        <SectionHeading title={title} description={description} />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {resourceDownloads.map((item) => (
            <ResourceDownloadCard key={item.id} item={item} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">{footnote}</p>
      </Container>
    </section>
  );
}
