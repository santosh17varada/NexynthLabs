import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import type { ContainerSize } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

export type PageSectionVariant = "default" | "surface" | "muted" | "tint" | "dark";

type PageSectionProps = {
  children: ReactNode;
  id?: string;
  variant?: PageSectionVariant;
  size?: ContainerSize;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
  divider?: boolean;
};

const sectionVariants: Record<PageSectionVariant, string> = {
  default: "relative border-b border-border/50",
  surface: "relative border-b border-border/50 bg-surface",
  muted: "relative border-b border-border/50 bg-gradient-to-b from-primary/[0.03] via-surface/50 to-background",
  tint: "relative border-b border-border/50 bg-gradient-to-b from-primary/[0.04] via-surface/60 to-background",
  dark: "relative overflow-hidden border-b border-glass-border-dark text-on-dark",
};

export function PageSection({
  children,
  id,
  variant = "default",
  size = "default",
  className = "",
  containerClassName = "py-section",
  as: Component = "section",
  divider = true,
}: PageSectionProps) {
  const isDark = variant === "dark";

  return (
    <Component
      id={id}
      className={cn(sectionVariants[variant], isDark && "relative", className)}
    >
      {divider && !isDark ? (
        <SectionDivider variant="subtle" className="absolute inset-x-0 top-0" />
      ) : null}
      {isDark ? (
        <MeshBackground variant="dark" density="subtle" className="absolute inset-0" />
      ) : null}
      <Container size={size} className={cn(isDark && "relative", containerClassName)}>
        {children}
      </Container>
    </Component>
  );
}
