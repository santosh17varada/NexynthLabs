import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { LEAD_STATUS_VALUES } from "@/config/leads-crm";
import { canAccessModule, decodeAdminSession } from "@/lib/auth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth-constants";
import { updateLead, getLeadById } from "@/lib/leads/store";
import type { LeadStatus, LeadUpdate } from "@/types/lead";

type PatchBody = LeadUpdate;

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
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

  const { id } = await context.params;
  const lead = await getLeadById(id);

  if (!lead) {
    return NextResponse.json({ message: "Lead not found." }, { status: 404 });
  }

  return NextResponse.json({ lead });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const cookieStore = await cookies();
  const session = decodeAdminSession(
    cookieStore.get(ADMIN_SESSION_COOKIE)?.value,
  );

  if (!session) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  if (!canAccessModule(session.role, "leads", "write")) {
    return NextResponse.json({ message: "Forbidden." }, { status: 403 });
  }

  const { id } = await context.params;
  const body = (await request.json()) as PatchBody;

  const patch: LeadUpdate = {};

  if (body.status !== undefined) {
    if (!LEAD_STATUS_VALUES.includes(body.status)) {
      return NextResponse.json({ message: "Invalid status." }, { status: 400 });
    }
    patch.status = body.status as LeadStatus;
  }

  if (body.notes !== undefined) {
    patch.notes = String(body.notes);
  }

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ message: "No updates provided." }, { status: 400 });
  }

  const lead = await updateLead(id, patch);

  if (!lead) {
    return NextResponse.json({ message: "Lead not found." }, { status: 404 });
  }

  return NextResponse.json({ lead });
}
