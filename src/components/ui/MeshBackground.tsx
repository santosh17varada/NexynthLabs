import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type MeshBackgroundVariant = "light" | "dark" | "gradient";
export type MeshBackgroundDensity = "full" | "subtle" | "flat";

type MeshBackgroundProps = {
  variant?: MeshBackgroundVariant;
  density?: MeshBackgroundDensity;
  showGrid?: boolean | "desktop";
  className?: string;
  children?: ReactNode;
};

const densityClasses: Record<
  MeshBackgroundVariant,
  Record<MeshBackgroundDensity, string>
> = {
  light: {
    full: "ds-mesh",
    subtle: "ds-mesh-subtle",
    flat: "bg-background",
  },
  dark: {
    full: "ds-mesh-dark",
    subtle: "ds-mesh-dark-subtle",
    flat: "bg-midnight text-on-dark",
  },
  gradient: {
    full: "ds-mesh-dark",
    subtle: "ds-mesh-dark-subtle",
    flat: "bg-midnight text-on-dark",
  },
};

const gridClasses: Record<MeshBackgroundVariant, string> = {
  light: "ds-grid-overlay",
  dark: "ds-grid-overlay-dark",
  gradient: "ds-grid-overlay-dark",
};

export function MeshBackground({
  variant = "light",
  density = "full",
  showGrid = false,
  className = "",
  children,
}: MeshBackgroundProps) {
  const gridVisibility =
    showGrid === "desktop" ? "hidden lg:block" : showGrid ? "block" : "hidden";

  return (
    <div
      className={cn("pointer-events-none", densityClasses[variant][density], className)}
      aria-hidden={!children}
    >
      {showGrid ? (
        <div
          className={cn(
            "absolute inset-0 opacity-60",
            gridClasses[variant],
            gridVisibility,
          )}
        />
      ) : null}
      {children}
    </div>
  );
}
