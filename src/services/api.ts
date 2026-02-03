/**
 * Cliente API para el backend Bulltrack Pro (NestJS)
 * Base URL configurada via NEXT_PUBLIC_API_URL
 */

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  }
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
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
