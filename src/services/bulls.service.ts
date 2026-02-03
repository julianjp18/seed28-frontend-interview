import type { Bull, PaginatedBulls, BullsQueryParams } from "@/types/bull";
import { apiFetch } from "./api";

function buildQueryString(params: BullsQueryParams): string {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      search.set(key, String(value));
    }
  });
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

export const bullsService = {
  getBulls: (params: BullsQueryParams, token: string) =>
    apiFetch<PaginatedBulls>(`/bulls${buildQueryString(params)}`, { token }),

  toggleFavorite: (bullId: number, token: string) =>
    apiFetch<{ is_favorite: boolean }>(`/bulls/${bullId}/favorite`, {
      method: "POST",
      token,
    }),
};
