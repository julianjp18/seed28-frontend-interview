import type { AuthResponse, LoginCredentials } from "@/types/auth";

/**
 * Login vía API de Next.js (route /api/auth/login), que a su vez consulta el backend.
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = (await res.json().catch(() => ({}))) as AuthResponse & {
    message?: string;
  };

  if (!res.ok) {
    throw new Error(data.message ?? "Error al iniciar sesión");
  }

  return data as AuthResponse;
}
