import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HomeDarkCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
};

export function HomeDarkCard({
  children,
  className = "",
  as: Component = "div",
}: HomeDarkCardProps) {
  return (
    <Component
      className={cn(
        "rounded-ds-lg border border-glass-border-dark bg-glass-dark/70 p-5 shadow-glass-dark backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/35 hover:shadow-glow sm:p-6",
        className,
      )}
    >
      {children}
    </Component>
  );
}
