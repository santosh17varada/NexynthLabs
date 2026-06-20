import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { ecosystemPageCopy } from "@/config/product-ecosystem";
import {
  heroCtaOnDarkClasses,
  marketingHeroPaddingClasses,
  sectionHeadingDescriptionClass,
} from "@/components/ui/variants";

export function ProductEcosystemHeroSection() {
  const { hero } = ecosystemPageCopy;

  return (
    <section className="relative overflow-hidden border-b border-glass-border-dark text-on-dark">
      <MeshBackground
        variant="dark"
        density="full"
        showGrid="desktop"
        className="absolute inset-0 z-0"
      />

      <Container
        size="wide"
        className={`relative z-[2] ${marketingHeroPaddingClasses.dark}`}
      >
        <div className="mx-auto w-full max-w-[62rem]">
          <Eyebrow tone="dark" className="motion-hero-reveal lcp-visible">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="lcp-visible motion-hero-reveal mt-5 max-w-[62rem] text-balance text-display-lg font-semibold tracking-tight text-on-dark sm:mt-6">
            {hero.title}
          </h1>
          <p
            className={`lcp-visible motion-fade-reveal motion-delay-2 mt-5 max-w-[46rem] text-base leading-relaxed sm:mt-6 sm:text-lg lg:mt-8 lg:leading-relaxed ${sectionHeadingDescriptionClass("dark")}`}
          >
            {hero.description}
          </p>
          <div
            className={`${heroCtaOnDarkClasses} motion-fade-reveal motion-delay-3 mt-6 sm:mt-8`}
          >
            <Button href="/products" variant="outline" size="lg">
              Live product catalog
            </Button>
            <Button href="/partners" variant="gradient" size="lg">
              Partner with us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
