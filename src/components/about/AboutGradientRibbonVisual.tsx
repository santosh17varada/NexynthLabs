import { cn } from "@/lib/cn";

type AboutGradientRibbonVisualProps = {
  /** Full hero visual on desktop; softer ambient layer on tablet/mobile background. */
  variant?: "hero" | "ambient";
  className?: string;
};

/**
 * Abstract brand ribbon — CSS-animated SVG only (no video / 3D). SSR-safe; motion via globals.css.
 */
export function AboutGradientRibbonVisual({
  variant = "hero",
  className = "",
}: AboutGradientRibbonVisualProps) {
  const isAmbient = variant === "ambient";

  return (
    <div
      className={cn(
        isAmbient
          ? "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.42]"
          : "relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 520"
        className={cn(
          isAmbient
            ? "about-gradient-ribbon about-gradient-ribbon--ambient h-[115%] w-[115%] max-w-none"
            : "about-gradient-ribbon h-auto w-full max-h-[min(28rem,72vh)]",
        )}
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        <defs>
          <linearGradient id="about-ribbon-gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="32%" stopColor="#06B6D4" />
            <stop offset="68%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="about-ribbon-gradient-secondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#2563EB" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="about-ribbon-gradient-highlight" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0" />
            <stop offset="45%" stopColor="#F8FAFC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
          </linearGradient>
          <filter id="about-ribbon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="about-ribbon-layer about-ribbon-layer--back" filter="url(#about-ribbon-glow)">
          <path
            d="M-20 88 C 120 40, 220 130, 360 72 S 520 180, 500 320 C 480 420, 340 460, 220 430 S 40 360, -10 260 Z"
            fill="url(#about-ribbon-gradient-secondary)"
            opacity="0.55"
          />
        </g>

        <g className="about-ribbon-layer about-ribbon-layer--mid">
          <path
            d="M 40 60 C 160 20, 280 90, 400 48 C 460 28, 500 120, 470 220 C 440 340, 300 400, 180 380 C 80 365, 20 280, 40 160 Z"
            fill="url(#about-ribbon-gradient-primary)"
            opacity="0.82"
          />
        </g>

        <g className="about-ribbon-layer about-ribbon-layer--front">
          <path
            d="M 120 140 C 200 100, 300 160, 380 130 C 430 112, 450 190, 420 270 C 390 350, 280 390, 200 370 C 130 355, 90 280, 120 200 Z"
            fill="url(#about-ribbon-gradient-primary)"
            opacity="0.92"
          />
          <path
            className="about-ribbon-shimmer"
            d="M 80 200 Q 240 120, 400 210 T 360 360"
            fill="none"
            stroke="url(#about-ribbon-gradient-highlight)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      </svg>
    </div>
  );
}
