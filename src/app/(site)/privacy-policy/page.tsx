import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { privacyPolicy } from "@/config/legal";
import { createPageMetadataFromKey } from "@/lib/seo";

export const metadata = createPageMetadataFromKey("privacyPolicy");

export default function PrivacyPolicyPage() {
  return <LegalPageContent document={privacyPolicy} path="/privacy-policy" />;
}
