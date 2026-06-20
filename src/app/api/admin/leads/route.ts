import { NextResponse } from "next/server";
import { canAccessModule, decodeAdminSession } from "@/lib/auth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth-constants";
import { listLeads } from "@/lib/leads/store";
import { cookies } from "next/headers";

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

  return NextResponse.json({ leads, total: leads.length });
}
