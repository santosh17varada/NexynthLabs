import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";
import type { AdminSessionPayload } from "@/types/cms";
import { ADMIN_ROLES, type AdminRole } from "@/types/cms";
import {
  findDevUserByEmail,
  resolvePermission,
} from "@/config/cms";
import type { CmsModuleId } from "@/types/cms";
import { siteConfig } from "@/config/site";

const SESSION_TTL_SECONDS = 60 * 60 * 8;

export function getAdminSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? "dev-only-change-in-production";
}

export function getLegacyAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? siteConfig.email,
    password: process.env.ADMIN_PASSWORD ?? "changeme",
    role: parseAdminRole(process.env.ADMIN_ROLE) ?? "SUPER_ADMIN",
    name: "Legacy Admin",
  };
}

export function parseAdminRole(value: string | undefined): AdminRole | undefined {
  if (!value) return undefined;
  return ADMIN_ROLES.includes(value as AdminRole)
    ? (value as AdminRole)
    : undefined;
}

function signPayload(encodedPayload: string): string {
  return createHmac("sha256", getAdminSessionSecret())
    .update(encodedPayload)
    .digest("base64url");
}

export function encodeAdminSession(payload: AdminSessionPayload): string {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  return `${encodedPayload}.${signPayload(encodedPayload)}`;
}

export function decodeAdminSession(
  token: string | undefined,
): AdminSessionPayload | null {
  if (!token) return null;

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = signPayload(encodedPayload);
  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (
    sigBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as AdminSessionPayload;

    if (!payload.email || !payload.role || !payload.exp) return null;
    if (!ADMIN_ROLES.includes(payload.role)) return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}

export function isValidAdminSession(sessionValue: string | undefined): boolean {
  return decodeAdminSession(sessionValue) !== null;
}

export function createAdminSession(user: {
  email: string;
  role: AdminRole;
  name: string;
}): string {
  const payload: AdminSessionPayload = {
    email: user.email,
    role: user.role,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  return encodeAdminSession(payload);
}

export function authenticateAdmin(
  email: string,
  password: string,
): { email: string; role: AdminRole; name: string } | null {
  const devUser = findDevUserByEmail(email);
  const devPassword = process.env.ADMIN_PASSWORD ?? "changeme";

  if (devUser && password === devPassword) {
    return {
      email: devUser.email,
      role: devUser.role,
      name: devUser.name,
    };
  }

  const legacy = getLegacyAdminCredentials();
  if (
    email.trim().toLowerCase() === legacy.email.toLowerCase() &&
    password === legacy.password
  ) {
    return {
      email: legacy.email,
      role: legacy.role,
      name: legacy.name,
    };
  }

  return null;
}

export function canAccessModule(
  role: AdminRole,
  moduleId: CmsModuleId,
  action: "read" | "write" = "read",
): boolean {
  const permission = resolvePermission(role, moduleId);
  return action === "write" ? permission.write : permission.read;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}
