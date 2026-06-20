import type { ReactNode } from "react";
import { containerSizeClasses, type ContainerSize } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  size?: ContainerSize;
};

export function Container({
  children,
  className = "",
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        containerSizeClasses[size],
        "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
