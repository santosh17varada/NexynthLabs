import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { canAccessModule, decodeAdminSession } from "@/lib/auth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth-constants";
import { exportLeadsToCsv } from "@/lib/leads/export";
import { listLeads } from "@/lib/leads/store";

export async function GET() {
  const cookieStore = await cookies();
  const session = decodeAdminSession(
    cookieStore.get(ADMIN_SESSION_COOKIE)?.value,
  );

  if (!session) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  if (!canAccessModule(session.role, "leads", "read")) {
    return NextResponse.json({ message: "Forbidden." }, { status: 403 });
  }

  const leads = await listLeads();
  const csv = exportLeadsToCsv(leads);
  const date = new Date().toISOString().slice(0, 10);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="nexynth-leads-${date}.csv"`,
    },
  });
}
