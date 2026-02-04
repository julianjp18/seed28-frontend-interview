import { NextResponse } from "next/server";
import { backendFetch, getTokenFromRequest } from "@/app/api/backend";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const res = await backendFetch(`/bulls/${id}`, { token });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = (data as { message?: string }).message ?? "Error al obtener toro";
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error de conexión con el servidor";
    return NextResponse.json({ message }, { status: 500 });
  }
}
