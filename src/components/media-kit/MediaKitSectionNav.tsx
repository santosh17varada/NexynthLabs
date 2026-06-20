import { mediaKitSections } from "@/config/media-kit";

export function MediaKitSectionNav() {
  return (
    <nav
      aria-label="Media kit sections"
      className="sticky top-[calc(3.5rem+env(safe-area-inset-top))] z-20 flex flex-wrap justify-center gap-2 border-b border-border/60 bg-surface/95 px-4 py-4 backdrop-blur-sm sm:gap-3"
    >
      {mediaKitSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-electric-blue/40 hover:text-foreground"
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
}
