import { GetPanditEcosystemStoryCards } from "@/components/getpandit/GetPanditEcosystemStoryCards";
import { HomeSectionShell } from "@/components/home/HomeSectionShell";
import { PageSection } from "@/components/layout/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPanditEcosystemStoryCopy } from "@/config/getpandit-ecosystem-story";

type GetPanditEcosystemStorySectionProps = {
  surface?: "home" | "page";
};

export function GetPanditEcosystemStorySection({
  surface = "page",
}: GetPanditEcosystemStorySectionProps) {
  const copy = getPanditEcosystemStoryCopy;

  const heading = (
    <SectionHeading
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      align={surface === "home" ? "center" : "left"}
      tone={surface === "home" ? "light" : "light"}
    />
  );

  if (surface === "home") {
    return (
      <HomeSectionShell id={copy.id} variant="default">
        <div className="mx-auto max-w-3xl text-center">{heading}</div>
        <GetPanditEcosystemStoryCards className="mt-8 sm:mt-10" />
      </HomeSectionShell>
    );
  }

  return (
    <PageSection id={copy.id} variant="default">
      {heading}
      <GetPanditEcosystemStoryCards className="mt-8 sm:mt-10" />
    </PageSection>
  );
}
