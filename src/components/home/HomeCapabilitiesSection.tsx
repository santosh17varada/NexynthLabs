import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { HomeGridCard } from "@/components/home/HomeGridCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  homeCapabilitiesConsultCta,
  homeCapabilitiesCopy,
  homeCapabilityItems,
} from "@/config/home-capabilities";

export function HomeCapabilitiesSection() {
  const copy = homeCapabilitiesCopy;

  return (
    <HomeSectionShell id="capabilities" variant="default">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {homeCapabilityItems.map((item) => (
          <HomeGridCard
            key={item.id}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="mobile-cta-stack mt-10 flex flex-col gap-3 sm:mt-12 md:flex-row md:flex-wrap md:items-center md:gap-4">
        <Button href={copy.footerCta.href} variant="outline">
          {copy.footerCta.label}
        </Button>
        <Button href={homeCapabilitiesConsultCta.href} variant="gradient">
          {homeCapabilitiesConsultCta.label}
        </Button>
      </div>
    </HomeSectionShell>
  );
}
