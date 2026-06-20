import dynamic from "next/dynamic";
import { HomeAiNetworkBurstSection } from "@/components/home/HomeAiNetworkBurstSection";

const HomeProductsSection = dynamic(
  () =>
    import("@/components/home/HomeProductsSection").then((module) => ({
      default: module.HomeProductsSection,
    })),
);

const HomeAiWorkflowSection = dynamic(
  () =>
    import("@/components/home/HomeAiWorkflowSection").then((module) => ({
      default: module.HomeAiWorkflowSection,
    })),
);

const HomeMarketplaceIntelligenceSection = dynamic(
  () =>
    import("@/components/home/HomeMarketplaceIntelligenceSection").then((module) => ({
      default: module.HomeMarketplaceIntelligenceSection,
    })),
);

const HomeDeliveryJourneySection = dynamic(
  () =>
    import("@/components/home/HomeDeliveryJourneySection").then((module) => ({
      default: module.HomeDeliveryJourneySection,
    })),
);

const HomeWhySection = dynamic(
  () =>
    import("@/components/home/HomeWhySection").then((module) => ({
      default: module.HomeWhySection,
    })),
);

const HomeMidPageCta = dynamic(
  () =>
    import("@/components/home/HomeMidPageCta").then((module) => ({
      default: module.HomeMidPageCta,
    })),
);

const HomeGetPanditHighlightSection = dynamic(
  () =>
    import("@/components/home/HomeGetPanditHighlightSection").then((module) => ({
      default: module.HomeGetPanditHighlightSection,
    })),
);

const HomeGetPanditEcosystemStorySection = dynamic(
  () =>
    import("@/components/getpandit/GetPanditEcosystemStorySection").then((module) => ({
      default: module.GetPanditEcosystemStorySection,
    })),
);

const HomeSocialProofSection = dynamic(
  () =>
    import("@/components/home/HomeSocialProofSection").then((module) => ({
      default: module.HomeSocialProofSection,
    })),
);

const HomeTechStackSection = dynamic(
  () =>
    import("@/components/home/HomeTechStackSection").then((module) => ({
      default: module.HomeTechStackSection,
    })),
);

const HomeFinalCta = dynamic(
  () =>
    import("@/components/home/HomeFinalCta").then((module) => ({
      default: module.HomeFinalCta,
    })),
);

export function HomeStoryFlow() {
  return (
    <>
      <HomeAiNetworkBurstSection />
      <HomeProductsSection />
      <HomeAiWorkflowSection />
      <HomeMarketplaceIntelligenceSection />
      <HomeDeliveryJourneySection />
      <HomeWhySection />
      <HomeMidPageCta />
      <HomeGetPanditEcosystemStorySection surface="home" />
      <HomeGetPanditHighlightSection />
      <HomeSocialProofSection />
      <HomeTechStackSection />
      <HomeFinalCta />
    </>
  );
}
