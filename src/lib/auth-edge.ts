/** Edge-safe cookie presence check. Full HMAC validation runs on the server. */
export function hasAdminSessionCookie(sessionValue: string | undefined): boolean {
  if (!sessionValue) return false;
  const [encodedPayload, signature] = sessionValue.split(".");
  return Boolean(encodedPayload && signature);
}
