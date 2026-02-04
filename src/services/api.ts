/**
 * Cliente API para el frontend. Todas las peticiones van a la API de Next.js (same-origin).
 * Flujo: pantalla -> hook -> service -> API Next.js -> Backend NestJS
 */

const getBaseUrl = () => {
  // En el navegador siempre llamamos a la API de Next.js (mismo origen)
  if (typeof window !== "undefined") {
    return "";
  }
  // En SSR (por si se usara) mismo origen
  return "";
};

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  const { token, ...fetchOptions } = options;
  const url = `${getBaseUrl()}${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(fetchOptions.headers as HeadersInit),
  };
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(url, { ...fetchOptions, headers });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error((error as { message?: string }).message ?? "API Error");
  }
  return res.json() as Promise<T>;
}
