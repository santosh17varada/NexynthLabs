import { NextResponse } from "next/server";
import {
  AI_READINESS_LEAD_SOURCE,
  aiReadinessTierLabels,
} from "@/config/ai-readiness-score";
import { sendLeadNotificationEmail } from "@/lib/leads/email";
import { createLead } from "@/lib/leads/store";
import {
  calculateAiReadinessScore,
  formatAiReadinessLeadMessage,
  formatAiReadinessLeadNotes,
} from "@/lib/ai-readiness-score/score";

type AiReadinessBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  sourcePage?: string;
  answers?: Record<string, number>;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: AiReadinessBody = {};

  try {
    body = (await request.json()) as AiReadinessBody;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const sourcePage = body.sourcePage?.trim() || "/ai-readiness-score";
  const answers = body.answers ?? {};

  if (!name || !email) {
    return NextResponse.json(
      { message: "Please provide your name and email." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const result = calculateAiReadinessScore(answers);

  if (!result) {
    return NextResponse.json(
      { message: "Please answer all 10 questions." },
      { status: 400 },
    );
  }

  try {
    const lead = await createLead({
      name,
      email,
      phone,
      company,
      interestType: `AI Readiness: ${aiReadinessTierLabels[result.tier]}`,
      sourcePage,
      message: formatAiReadinessLeadMessage(result, answers),
      notes: formatAiReadinessLeadNotes(result),
      source: AI_READINESS_LEAD_SOURCE,
    });

    const emailResult = await sendLeadNotificationEmail(lead);

    return NextResponse.json({
      success: true,
      saved: true,
      message: "Thank you. Your score has been recorded and our team may follow up.",
      leadId: lead.id,
      result,
      emailDelivery: emailResult,
    });
  } catch (error) {
    console.error("[ai-readiness-score] Failed to store lead:", error);
    return NextResponse.json(
      {
        success: false,
        saved: false,
        message: "Score calculated but lead could not be saved. See on-screen result.",
        result,
      },
      { status: 503 },
    );
  }
}
