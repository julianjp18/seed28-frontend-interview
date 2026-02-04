/**
 * Helper para que las API routes de Next.js llamen al backend NestJS.
 * Solo se usa en el servidor (API routes).
 */

const getBackendUrl = () =>
  process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export function getBackendBaseUrl(): string {
  return getBackendUrl();
}

export function backendFetch(
  path: string,
  options: RequestInit & { token?: string } = {}
): Promise<Response> {
  const { token, ...rest } = options;
  const url = `${getBackendBaseUrl()}/api${path}`;
  const headers = new Headers(rest.headers);
  headers.set("Content-Type", "application/json");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return fetch(url, { ...rest, headers });
}

/** Lee el token del request (header Authorization) */
export function getTokenFromRequest(request: Request): string | null {
  const auth = request.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  return auth.slice(7);
}
