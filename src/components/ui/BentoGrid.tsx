import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BentoCellSpan = "default" | "wide" | "tall" | "featured";

type BentoCellProps = {
  children: ReactNode;
  span?: BentoCellSpan;
  className?: string;
};

const spanClasses: Record<BentoCellSpan, string> = {
  default: "",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  featured: "sm:col-span-2 lg:col-span-2",
};

export function BentoCell({
  children,
  span = "default",
  className = "",
}: BentoCellProps) {
  return (
    <div className={cn("min-w-0", spanClasses[span], className)}>{children}</div>
  );
}
