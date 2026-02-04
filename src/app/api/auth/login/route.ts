import { NextResponse } from "next/server";
import type { LoginCredentials } from "@/types/auth";

const getBackendUrl = () =>
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3001";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginCredentials;
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    const backendUrl = getBackendUrl();
    const res = await fetch(`${backendUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message =
        (data as { message?: string }).message ??
        (res.status === 401 ? "Credenciales inválidas" : "Error al iniciar sesión");
      return NextResponse.json({ message }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Error de conexión con el servidor";
    return NextResponse.json({ message }, { status: 500 });
  }
}
