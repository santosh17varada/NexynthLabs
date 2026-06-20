import type { ReactNode } from "react";
import {
  cardPaddingClasses,
  cardVariantClasses,
  type CardVariant,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type CardPadding = keyof typeof cardPaddingClasses;

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  variant?: CardVariant;
  padding?: CardPadding;
};

export function Card({
  children,
  className = "",
  as: Component = "div",
  variant = "solid",
  padding = "md",
}: CardProps) {
  return (
    <Component
      className={cn(
        cardVariantClasses[variant],
        cardPaddingClasses[padding],
        className,
      )}
    >
      {children}
    </Component>
  );
}
