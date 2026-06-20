import { NextResponse } from "next/server";
import {
  authenticateAdmin,
  createAdminSession,
  getSessionCookieOptions,
} from "@/lib/auth";
import { ADMIN_SESSION_COOKIE } from "@/lib/auth-constants";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginBody;
  const email = body.email?.trim() ?? "";
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 },
    );
  }

  const user = authenticateAdmin(email, password);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({
    success: true,
    role: user.role,
  });

  response.cookies.set(
    ADMIN_SESSION_COOKIE,
    createAdminSession(user),
    getSessionCookieOptions(),
  );

  return response;
}
