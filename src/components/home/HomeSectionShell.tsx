import Link from "next/link";
import type { ReactNode } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { cardVariantClasses } from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type HomeSectionShellProps = {
  id?: string;
  children: ReactNode;
  variant?: "default" | "surface" | "gradient" | "tint";
  className?: string;
  containerClassName?: string;
};

const variantMap = {
  default: "default",
  surface: "surface",
  gradient: "muted",
  tint: "tint",
} as const;

/** @deprecated Use {@link PageSection} directly. */
export function HomeSectionShell({
  id,
  children,
  variant = "default",
  className = "",
  containerClassName = "py-section",
}: HomeSectionShellProps) {
  return (
    <PageSection
      id={id}
      variant={variantMap[variant]}
      className={className}
      containerClassName={containerClassName}
    >
      {children}
    </PageSection>
  );
}

type HomePillarCardProps = {
  title: string;
  description: string;
  href: string;
  index: number;
};

export function HomePillarCard({ title, description, href, index }: HomePillarCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        cardVariantClasses.glass,
        "group relative flex h-full flex-col overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-blue/30 hover:shadow-elevated sm:p-6",
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-ds-md bg-gradient-brand-subtle text-sm font-bold text-primary"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
      <span className="mt-5 text-sm font-semibold text-electric-blue transition-colors group-hover:text-electric-violet">
        Learn more →
      </span>
    </Link>
  );
}
