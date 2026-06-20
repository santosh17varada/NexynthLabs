import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brandPageCopy } from "@/brand/guidelines";

export function BrandSectionNav() {
  const { nav } = brandPageCopy;

  return (
    <nav
      aria-label="Brand documentation sections"
      className="sticky top-[var(--site-header-offset)] z-20 border-b border-border/70 bg-background/90 backdrop-blur-md"
    >
      <Container className="py-3">
        <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <li key={item.id} className="shrink-0">
              <Link
                href={`#${item.id}`}
                className="inline-flex min-h-10 items-center rounded-ds-full border border-border/70 bg-surface px-3.5 text-xs font-semibold text-foreground transition-colors hover:border-electric-blue/35 hover:text-electric-blue sm:text-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
