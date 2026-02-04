"use client";

import { useState, useEffect, useCallback } from "react";
import { bullsService } from "@/services/bulls.service";
import type { BullsQueryParams, Origen, PaginatedBulls, Pelaje } from "@/types/bull";

export interface UseBullsParams {
  token: string | null;
  page: number;
  limit: number;
  search: string;
  origin: Origen | "all" | undefined;
  forHeifer: boolean;
  coat: string;
  sortBy: "asc" | "desc";
}

export interface UseBullsResult {
  result: PaginatedBulls | null;
  loading: boolean;
  error: string | null;
  lastFetchedAt: number | null;
  refetch: () => Promise<void>;
}

export function useBulls(params: UseBullsParams): UseBullsResult {
  const {
    token,
    page,
    limit,
    search,
    origin,
    forHeifer,
    coat,
    sortBy,
  } = params;

  const [result, setResult] = useState<PaginatedBulls | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedAt, setLastFetchedAt] = useState<number | null>(null);

  const fetchBulls = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const queryParams: BullsQueryParams = {
        page,
        limit,
        search: search || undefined,
        origin: origin && origin !== "all" ? origin : undefined,
        forHeifer: forHeifer || undefined,
        coat: coat !== "all" ? (coat as Pelaje) : undefined,
        sortBy,
      };
      const data = await bullsService.getBulls(queryParams, token);
      setResult(data);
      setLastFetchedAt(Date.now());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al cargar toros");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, [token, page, limit, search, origin, forHeifer, coat, sortBy]);

  useEffect(() => {
    fetchBulls();
  }, [fetchBulls]);

  return { result, loading, error, lastFetchedAt, refetch: fetchBulls };
}
