import type { ReactNode } from "react";
import { badgeVariantClasses, type BadgeVariant } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-ds-full px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide ring-1 ring-inset sm:text-xs",
        badgeVariantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
