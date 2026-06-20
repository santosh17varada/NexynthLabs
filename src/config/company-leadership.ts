/**
 * @deprecated Import from @/config/leadership instead.
 */
import {
  leadershipPageCopy as companyLeadershipPageCopy,
  leadershipProfiles,
  getLeadershipProfile,
  getFeaturedLeadershipProfiles,
} from "@/config/leadership";

export {
  companyLeadershipPageCopy,
  leadershipProfiles,
  getLeadershipProfile,
  getFeaturedLeadershipProfiles,
};

/** @deprecated Use leadershipProfiles */
export const leadershipMembers = leadershipProfiles;
