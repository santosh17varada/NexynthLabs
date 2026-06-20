import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { innerLinkClass } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type ReadMoreLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
} & Pick<ComponentProps<"a">, "aria-label">;

export function ReadMoreLink({
  href,
  children,
  external = false,
  className,
  "aria-label": ariaLabel,
}: ReadMoreLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center text-sm font-semibold",
    innerLinkClass,
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
