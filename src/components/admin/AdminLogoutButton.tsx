"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function AdminLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleLogout}>
      Sign out
    </Button>
  );
}
