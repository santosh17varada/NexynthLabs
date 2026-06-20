import { HomeHeroVisual } from "@/components/home/HomeHeroVisual";
import { HomeStoryFlow } from "@/components/home/HomeStoryFlow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { MarketingHero } from "@/components/ui/MarketingHero";
import { homeHeroCopy } from "@/config/home";
import { createPageMetadataFromKey, buildHomePageJsonLd } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("home");

export default function HomePage() {
  const copy = homeHeroCopy;

  return (
    <>
      <JsonLd data={buildHomePageJsonLd()} />
      <MarketingHero
        variant="default"
        badge={copy.flagshipBadge}
        eyebrow={copy.eyebrow}
        title={copy.title}
        titleClassName="whitespace-pre-line"
        description={copy.description}
        trustBadges={copy.trustBadges}
        media={<HomeHeroVisual />}
        actions={
          <>
            <Button href={copy.ctas.primary.href} variant="gradient" size="lg">
              {copy.ctas.primary.label}
            </Button>
            <Button href={copy.ctas.secondary.href} variant="outline" size="lg">
              {copy.ctas.secondary.label}
            </Button>
          </>
        }
      />
      <HomeStoryFlow />
    </>
  );
}
