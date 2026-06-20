import { AboutGradientRibbonVisual } from "@/components/about/AboutGradientRibbonVisual";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { aboutContent } from "@/config/about";
import {
  marketingHeroPaddingClasses,
  sectionHeadingDescriptionClass,
} from "@/components/ui/variants";

export function AboutHeroSection() {
  const { hero } = aboutContent;

  return (
    <section className="relative overflow-hidden border-b border-glass-border-dark text-on-dark">
      <MeshBackground
        variant="dark"
        density="full"
        showGrid="desktop"
        className="absolute inset-0"
      />

      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <AboutGradientRibbonVisual variant="ambient" />
      </div>

      <Container
        size="wide"
        className={`relative ${marketingHeroPaddingClasses.dark}`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="relative z-10 min-w-0 max-w-2xl">
            <Eyebrow tone="dark" className="motion-hero-reveal lcp-visible">
              {hero.badge}
            </Eyebrow>
            <h1 className="lcp-visible motion-hero-reveal mt-4 max-w-2xl text-balance text-display-lg font-semibold tracking-tight text-on-dark sm:mt-6">
              {hero.title}
            </h1>
            <p
              className={`lcp-visible motion-fade-reveal motion-delay-2 mt-4 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg ${sectionHeadingDescriptionClass("dark")}`}
            >
              {hero.description}
            </p>
          </div>

          <div className="relative z-10 hidden min-w-0 lg:block">
            <AboutGradientRibbonVisual variant="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
