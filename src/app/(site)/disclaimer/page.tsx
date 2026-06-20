import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { disclaimer } from "@/config/legal";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("disclaimer");

export default function DisclaimerPage() {
  return <LegalPageContent document={disclaimer} path="/disclaimer" />;
}
