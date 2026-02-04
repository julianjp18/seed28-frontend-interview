/**
 * Tipos para el dominio Bull (Bulltrack Pro)
 * Alineados con la API del backend (nombres en inglés)
 */

export type Origen = "propio" | "catalogo" | "favoritos";
export type Pelaje = "negro" | "colorado";
export type Uso = "vaquillona" | "vaca";

export interface BullStats {
  growth: number;
  calvingEase: number;
  reproduction: number;
  moderation: number;
  carcass: number;
}

export interface Bull {
  id: number;
  earTag: string;
  name: string;
  useType: Uso;
  origin: Origen;
  coat: Pelaje;
  breed: string;
  ageMonths: number;
  standoutFeature: string | null;
  bullScore: number;
  stats: BullStats;
  isFavorite?: boolean;
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
  origin?: Origen;
  forHeifer?: boolean;
  coat?: Pelaje;
  sortBy?: "asc" | "desc";
}
