"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { companySectionNav } from "@/config/company";

export function CompanySectionNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Company pages"
      className="flex flex-wrap justify-center gap-2 border-b border-border/60 bg-surface px-4 py-4 sm:gap-3"
    >
      {companySectionNav.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-electric-blue/40 bg-electric-violet/10 text-foreground"
                : "border-border text-muted hover:border-electric-blue/30 hover:text-foreground"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
