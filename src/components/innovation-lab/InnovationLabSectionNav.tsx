import { innovationLabSections } from "@/config/innovation-lab";

export function InnovationLabSectionNav() {
  return (
    <nav
      aria-label="Innovation Lab sections"
      className="flex flex-wrap justify-center gap-2 border-b border-border/60 bg-surface px-4 py-4 sm:gap-3"
    >
      {innovationLabSections.map((section) => (
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
