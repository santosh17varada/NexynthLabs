import { cn } from "@/lib/cn";

type SectionDividerProps = {
  className?: string;
  variant?: "default" | "subtle" | "strong";
};

const variantClasses = {
  default:
    "bg-gradient-to-r from-transparent via-electric-blue/35 to-transparent",
  subtle:
    "bg-gradient-to-r from-transparent via-border/80 to-transparent",
  strong:
    "bg-gradient-to-r from-electric-cyan/20 via-electric-violet/50 to-electric-blue/20",
} as const;

export function SectionDivider({
  className = "",
  variant = "default",
}: SectionDividerProps) {
  return (
    <div
      className={cn("h-px w-full shrink-0", variantClasses[variant], className)}
      aria-hidden="true"
    />
  );
}
