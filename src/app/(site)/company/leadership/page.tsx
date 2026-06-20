import { redirect } from "next/navigation";

/** Legacy route — permanent redirect also configured in next.config.ts */
export default function CompanyLeadershipRedirectPage() {
  redirect("/leadership");
}
