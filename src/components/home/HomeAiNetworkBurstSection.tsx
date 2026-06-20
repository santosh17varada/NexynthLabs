import { HomeEcosystemStorySection } from "@/components/home/HomeEcosystemStorySection";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { homeNetworkBurstCopy } from "@/config/home-network-burst";

export function HomeAiNetworkBurstSection() {
  return (
    <HomeSectionShell
      id={homeNetworkBurstCopy.id}
      variant="default"
      containerClassName="pt-4 pb-section sm:pt-5 lg:pt-6"
    >
      <HomeEcosystemStorySection />
    </HomeSectionShell>
  );
}
