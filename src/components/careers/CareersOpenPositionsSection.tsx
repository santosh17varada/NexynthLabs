import { JobCard } from "@/components/cards/JobCard";
import { OpenRolesPlaceholder, OpenRolesSection } from "@/components/careers/OpenRolesSection";
import { PageSection } from "@/components/layout/PageSection";
import {
  careersPageCopy,
  jobOpenings,
  openRolesPlaceholder,
  shouldShowOpenRolesPlaceholder,
} from "@/config/careers";

export function CareersOpenPositionsSection() {
  const { openRoles } = careersPageCopy;
  const showPlaceholder = shouldShowOpenRolesPlaceholder();

  return (
    <PageSection id="open-positions" variant="surface" className="scroll-mt-28">
      <OpenRolesSection
        eyebrow={openRoles.eyebrow}
        title={openRoles.title}
        description={openRoles.description}
      >
        {showPlaceholder ? (
          <OpenRolesPlaceholder {...openRolesPlaceholder} />
        ) : (
          jobOpenings.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </OpenRolesSection>
    </PageSection>
  );
}
