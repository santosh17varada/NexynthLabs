import { NextResponse } from "next/server";
import {
  REQUEST_PROPOSAL_LEAD_SOURCE,
  resolveRequestProposalBudgetLabel,
  resolveRequestProposalProjectTypeLabel,
  resolveRequestProposalTimelineLabel,
} from "@/config/request-proposal";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";

type RequestProposalBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  requirements?: string;
  sourcePage?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatProposalNotes(body: RequestProposalBody): string {
  const lines: string[] = ["RFP intake — manual proposal workflow."];
  const budget = body.budgetRange?.trim();
  const timeline = body.timeline?.trim();

  if (budget) {
    lines.push(`Budget range: ${resolveRequestProposalBudgetLabel(budget)}`);
  }
  if (timeline) {
    lines.push(`Timeline: ${resolveRequestProposalTimelineLabel(timeline)}`);
  }

  lines.push("TODO: attach file uploads when RFP document API is implemented.");
  return lines.join("\n");
}

export async function POST(request: Request) {
  let body: RequestProposalBody = {};

  try {
    body = (await request.json()) as RequestProposalBody;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const requirements = body.requirements?.trim() ?? "";
  const sourcePage = body.sourcePage?.trim() || "/request-proposal";

  if (!name || !email || !projectType || !requirements) {
    return NextResponse.json(
      { message: "Please fill in name, email, project type, and requirements." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  try {
    const lead = await createLead({
      name,
      email,
      phone,
      company,
      interestType: `RFP: ${resolveRequestProposalProjectTypeLabel(projectType)}`,
      sourcePage,
      message: requirements,
      notes: formatProposalNotes(body),
      source: REQUEST_PROPOSAL_LEAD_SOURCE,
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your proposal request has been received.",
      leadId: lead.id,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[request-proposal] Failed to store lead:", error);
    return NextResponse.json(
      { message: "Unable to submit your request. Please try again later." },
      { status: 500 },
    );
  }
}
