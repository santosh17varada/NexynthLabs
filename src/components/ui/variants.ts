import { motionCtaClass } from "@/motion/classes";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "gradient"
  | "outline"
  | "ghost"
  | "glass";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:brightness-110 focus-visible:ring-primary/40",
  accent:
    "bg-accent text-accent-foreground shadow-soft hover:brightness-105 focus-visible:ring-accent/40",
  gradient:
    "bg-gradient-brand text-on-dark shadow-glow hover:brightness-110 focus-visible:ring-electric-violet/40",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface hover:border-border-strong focus-visible:ring-primary/30",
  ghost:
    "text-foreground hover:bg-surface/80 focus-visible:ring-primary/25",
  glass:
    "border border-glass-border bg-glass text-foreground shadow-glass backdrop-blur-xl hover:bg-glass-strong focus-visible:ring-electric-blue/30",
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 gap-1.5 px-4 py-2 text-sm",
  md: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  lg: "min-h-11 gap-2 px-6 py-3 text-sm sm:text-base",
  xl: "min-h-12 gap-2.5 px-8 py-3.5 text-base sm:text-lg",
};

export const buttonBaseClasses =
  `inline-flex touch-manipulation items-center justify-center rounded-ds-full font-semibold ${motionCtaClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60`;

export type CardVariant =
  | "solid"
  | "glass"
  | "elevated"
  | "floating"
  | "dark";

export const cardVariantClasses: Record<CardVariant, string> = {
  solid:
    "rounded-ds-lg border border-border/70 bg-surface shadow-soft",
  glass:
    "rounded-ds-lg border border-glass-border bg-glass shadow-glass backdrop-blur-xl motion-hover-lift",
  elevated:
    "rounded-ds-lg border border-border/50 bg-surface shadow-elevated motion-hover-lift",
  floating:
    "rounded-ds-xl border border-glass-border bg-glass shadow-floating backdrop-blur-xl ds-float",
  dark:
    "rounded-ds-lg border border-glass-border-dark bg-glass-dark text-on-dark shadow-glass-dark backdrop-blur-xl",
};

export const cardPaddingClasses = {
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-8",
  lg: "p-6 sm:p-10",
} as const;

export type ContainerSize = "default" | "narrow" | "wide" | "prose";

export const containerSizeClasses: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
  prose: "max-w-prose",
};

export type MarketingHeroVariant =
  | "default"
  | "compact"
  | "gradient"
  | "dark"
  | "product"
  | "enterprise";

export const marketingHeroPaddingClasses: Record<MarketingHeroVariant, string> = {
  default: "py-12 sm:py-16 lg:py-20 xl:py-24",
  compact: "py-10 sm:py-14",
  gradient: "py-14 sm:py-20 lg:py-28",
  dark: "py-14 sm:py-20 lg:py-28",
  product: "py-14 sm:py-20 lg:py-28",
  enterprise: "py-14 sm:py-20 lg:py-24",
};

export const marketingHeroFooterLinkClass =
  "font-semibold text-electric-cyan transition-colors hover:text-on-dark hover:underline";

export const marketingHeroGlassButtonClass =
  "border-on-dark/25 text-on-dark hover:bg-white/10";

export type SectionHeadingTone = "light" | "dark";

export function sectionHeadingEyebrowClass(tone: SectionHeadingTone): string {
  return tone === "dark" ? "text-electric-cyan" : "text-electric-blue";
}

export function sectionHeadingTitleClass(tone: SectionHeadingTone): string {
  return tone === "dark" ? "text-on-dark" : "text-foreground";
}

export function sectionHeadingDescriptionClass(tone: SectionHeadingTone): string {
  return tone === "dark" ? "text-on-dark-muted" : "text-muted";
}

export type BadgeVariant =
  | "default"
  | "brand"
  | "gradient"
  | "success"
  | "warning"
  | "muted"
  | "outline";

export const badgeVariantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary/10 text-primary ring-primary/20",
  brand: "bg-electric-violet/15 text-foreground ring-electric-violet/30",
  gradient: "bg-gradient-brand-subtle text-primary ring-electric-violet/25",
  success: "bg-emerald-500/15 text-emerald-900 ring-emerald-500/25",
  warning: "bg-amber-500/15 text-amber-950 ring-amber-500/25",
  muted: "bg-surface text-muted ring-border",
  outline: "bg-transparent text-foreground ring-border",
};

export const inputBaseClasses = cn(
  "w-full min-h-11 rounded-ds-md border border-border bg-surface px-4 py-3",
  "text-base text-foreground outline-none transition-all duration-200",
  "placeholder:text-muted/70",
  "focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20",
  "disabled:cursor-not-allowed disabled:opacity-60",
);

export const labelBaseClasses = "mb-2 block text-sm font-medium text-foreground";

export const innerLinkClass =
  "font-semibold text-electric-blue transition-colors hover:text-electric-violet hover:underline";

export const readMoreLinkClass = cn(
  "inline-flex min-h-11 items-center text-sm",
  innerLinkClass,
);

export const sectionCardLabelClass = cn(
  "text-eyebrow font-semibold",
  sectionHeadingEyebrowClass("light"),
);

export const sectionCardLabelMutedClass = "text-eyebrow font-semibold text-muted";

export const productTaglineClass = "text-sm font-medium text-electric-violet sm:text-base";

export const cardTaglineClass = "text-base font-medium text-electric-violet sm:text-lg";

export const cardInteractiveShellClass = cn(
  cardVariantClasses.solid,
  "motion-hover-lift transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated",
);

export const heroCtaStackClasses =
  "mobile-cta-stack mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row md:flex-wrap";

export const sectionCtaStackClass = heroCtaStackClasses;

/** Auto-adjust outline/ghost buttons placed inside dark heroes. */
export const heroCtaOnDarkClasses = cn(
  heroCtaStackClasses,
  "[&_a.border-border]:border-on-dark/30 [&_a.border-border]:bg-transparent [&_a.border-border]:text-on-dark [&_a.border-border]:hover:border-on-dark/50 [&_a.border-border]:hover:bg-white/10",
  "[&_button.border-border]:border-on-dark/30 [&_button.border-border]:bg-transparent [&_button.border-border]:text-on-dark [&_button.border-border]:hover:border-on-dark/50 [&_button.border-border]:hover:bg-white/10",
);

export const legalProseClasses = {
  sectionTitle: "text-heading-lg font-semibold tracking-tight text-foreground",
  body: "text-base leading-relaxed text-muted",
  notice:
    "rounded-ds-lg border border-electric-blue/25 bg-electric-blue/5 px-4 py-3 text-sm leading-relaxed text-muted",
} as const;
