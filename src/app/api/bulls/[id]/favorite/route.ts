import { NextResponse } from "next/server";
import { backendFetch, getTokenFromRequest } from "@/app/api/backend";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const res = await backendFetch(`/bulls/${id}/favorite`, { method: "POST", token });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const message = (data as { message?: string }).message ?? "Error al agregar favorito";
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error de conexión con el servidor";
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const res = await backendFetch(`/bulls/${id}/favorite`, { method: "DELETE", token });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const message = (data as { message?: string }).message ?? "Error al quitar favorito";
      return NextResponse.json({ message }, { status: res.status });
    }
    return NextResponse.json({});
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error de conexión con el servidor";
    return NextResponse.json({ message }, { status: 500 });
  }
}
