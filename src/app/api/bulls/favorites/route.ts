import { NextResponse } from "next/server";
import { backendFetch, getTokenFromRequest } from "@/app/api/backend";

export async function GET(request: Request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const path = `/bulls/favorites${query ? `?${query}` : ""}`;
  try {
    const res = await backendFetch(path, { token });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = (data as { message?: string }).message ?? "Error al obtener favoritos";
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error de conexión con el servidor";
    return NextResponse.json({ message }, { status: 500 });
  }
}
