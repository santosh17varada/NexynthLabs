import Link from "next/link";
import { founderPageContent } from "@/config/founder-story";
import { cn } from "@/lib/cn";

export function FounderSectionNav() {
  const { sectionNav } = founderPageContent;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[var(--site-header-offset,4rem)] z-20 border-b border-border/60 bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {sectionNav.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "inline-flex min-h-10 shrink-0 items-center rounded-ds-full border border-border/70 px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-electric-blue/30 hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
