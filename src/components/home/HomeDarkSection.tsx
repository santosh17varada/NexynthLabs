import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { cn } from "@/lib/cn";

type HomeDarkSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function HomeDarkSection({
  id,
  children,
  className = "",
  containerClassName = "py-section lg:py-section-lg",
}: HomeDarkSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-b border-glass-border-dark text-on-dark",
        className,
      )}
    >
      <SectionDivider variant="strong" className="absolute inset-x-0 top-0" />
      <MeshBackground variant="dark" density="subtle" className="absolute inset-0" />
      <Container className={cn("relative", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
