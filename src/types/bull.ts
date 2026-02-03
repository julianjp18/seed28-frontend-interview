/**
 * Tipos para el dominio Bull (Bulltrack Pro)
 * Alineados con la API del backend
 */

export type Origen = "propio" | "catalogo" | "favoritos";
export type Pelaje = "negro" | "colorado";
export type Uso = "vaquillona" | "vaca";

export interface BullStats {
  crecimiento: number;
  facilidad_parto: number;
  reproduccion: number;
  moderacion: number;
  carcasa: number;
}

export interface Bull {
  id: number;
  caravana: string;
  nombre: string;
  uso: Uso;
  origen: Origen;
  pelaje: Pelaje;
  raza: string;
  edad_meses: number;
  caracteristica_destacada: string | null;
  bull_score: number;
  stats: BullStats;
  is_favorite?: boolean;
}

export interface PaginatedBulls {
  data: Bull[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BullsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  origen?: Origen;
  para_vaquillona?: boolean;
  pelaje?: Pelaje;
  sort_score?: "asc" | "desc";
}
