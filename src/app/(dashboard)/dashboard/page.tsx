"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ClassificationResultsPage } from "@/components/pages";
import { BullCard, BullCardSkeleton, BullDetailView } from "@/components/organisms";
import { Loader } from "@/components/atoms";
import { Modal } from "@/components/molecules";
import { useAuth, useBulls } from "@/hooks";
import { bullsService } from "@/services/bulls.service";
import {
  buildOriginOptions,
  formatTimeAgo,
  getBullPlaceholderImage,
  bullToTags,
} from "@/lib/bull-utils";
import {
  COAT_OPTIONS,
  SORT_OPTIONS,
  UPDATED_AT_REFRESH_MS,
} from "@/constants";
import type { Bull, Origen } from "@/types/bull";

export default function DashboardPage() {
  const router = useRouter();
  const { token, user, hydrated, isAuthenticated, logout } = useAuth();

  const [search, setSearch] = useState("");
  const [origin, setOrigin] = useState<Origen | "all" | undefined>(undefined);
  const [forHeifer, setForHeifer] = useState(false);
  const [coat, setCoat] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const limit = 10;

  const [, setTick] = useState(0);
  const [selectedBull, setSelectedBull] = useState<Bull | null>(null);
  const [togglingFavoriteId, setTogglingFavoriteId] = useState<number | null>(null);

  const { result, loading, error, lastFetchedAt, refetch: fetchBulls } = useBulls({
    token,
    page,
    limit,
    search,
    origin,
    forHeifer,
    coat,
    sortBy,
  });

  useEffect(() => {
    if (lastFetchedAt == null) return;
    const id = setInterval(() => setTick((t) => t + 1), UPDATED_AT_REFRESH_MS);
    return () => clearInterval(id);
  }, [lastFetchedAt]);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated || !token) {
      router.replace("/login");
      return;
    }
  }, [hydrated, isAuthenticated, token, router]);

  const handleOriginOptionChange = useCallback((value: string, checked: boolean) => {
    if (!checked) {
      setOrigin(undefined);
      return;
    }
    setOrigin(value === "all" ? undefined : (value as Origen));
    setPage(1);
  }, []);

  const handleCoatChange = useCallback((value: string) => {
    setCoat(value);
    setPage(1);
  }, []);

  const handleSortChange = useCallback((value: string) => {
    setSortBy(value === "asc" ? "asc" : "desc");
    setPage(1);
  }, []);

  const handleToggleFavorite = useCallback(
    async (bullId: number, isFavorite: boolean) => {
      if (!token) return;
      setTogglingFavoriteId(bullId);
      try {
        if (isFavorite) {
          await bullsService.removeFavorite(bullId, token);
        } else {
          await bullsService.addFavorite(bullId, token);
        }
        await fetchBulls();
      } catch {
        // Optionally show toast
      } finally {
        setTogglingFavoriteId(null);
      }
    },
    [token, fetchBulls]
  );

  const originOptions = buildOriginOptions(origin);
  const sortValue = sortBy;
  const showFullLayout = hydrated && isAuthenticated;
  const checkingAuth = !hydrated || !isAuthenticated;

  return (
    <ClassificationResultsPage
      headerTitle="Bulltrack Pro"
      locationLabel={showFullLayout ? (user?.name ?? user?.email ?? "Usuario") : "Usuario"}
      locationAvatarSrc={null}
      onLogout={logout}
      originOptions={originOptions}
      onOriginOptionChange={handleOriginOptionChange}
      productiveToggleLabel="Para vaquillona"
      productiveToggleSubLabel="Facilidad de parto"
      productiveToggleChecked={forHeifer}
      onProductiveToggleChange={(checked: boolean) => {
        setForHeifer(checked);
        setPage(1);
      }}
      coatDropdownLabel="Pelaje"
      coatDropdownValue={coat}
      coatDropdownOptions={COAT_OPTIONS}
      onCoatDropdownChange={handleCoatChange}
      sortValue={sortValue}
      sortOptions={SORT_OPTIONS}
      onSortChange={handleSortChange}
      objectiveDescription="Los resultados están ordenados por Bulltrack Score reflejando tus objetivos de producción."
      editObjectiveButtonLabel="Editar criterios"
      updatedAtLabel={
        result && lastFetchedAt != null ? formatTimeAgo(lastFetchedAt) : undefined
      }
      mainTitle="Resultados de clasificación"
      mainDescription="Los resultados están ordenados por Bulltrack Score reflejando tus objetivos de producción."
      searchPlaceholder="Buscar por etiqueta o nombre"
      searchValue={search}
      onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
      }}
      resultsCountNumber={result?.total ?? 0}
      resultsCountLabel="resultados"
      viewMode="list"
      onViewModeChange={() => { }}
      onExport={() => { }}
    >
      {checkingAuth ? (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-lg" aria-busy="true" aria-label="Cargando">
          <Loader size="lg" />
          <p className="text-muted-foreground">Cargando…</p>
        </div>
      ) : (
        <>
          <Modal
            open={selectedBull !== null}
            onClose={() => setSelectedBull(null)}
            title="Detalle del toro"
          >
            {selectedBull && (
              <BullDetailView
                bull={selectedBull}
                imageSrc={getBullPlaceholderImage(selectedBull)}
              />
            )}
          </Modal>
          {error && (
            <p className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </p>
          )}
          {loading && !result?.data.length && (
            <div className="space-y-3" aria-busy="true" aria-label="Cargando toros">
              {Array.from({ length: 5 }).map((_, i) => (
                <BullCardSkeleton key={i} />
              ))}
            </div>
          )}
          {!loading && result?.data.length === 0 && !error && (
            <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border">
              <p className="text-muted-foreground">No hay resultados. Ajusta filtros o búsqueda.</p>
            </div>
          )}
          {result?.data && result.data.length > 0 && (
            <>
              <div className="space-y-3" aria-busy={loading}>
                {result.data.map((bull, index) => (
                  <BullCard
                    key={bull.id}
                    showCheckbox={false}
                    rank={(page - 1) * limit + index + 1}
                    imageSrc={getBullPlaceholderImage(bull)}
                    imageAlt={bull.name}
                    name={bull.name}
                    subtitle={`${bull.breed} . ${bull.ageMonths} meses`}
                    tags={bullToTags(bull)}
                    scoreValue={bull.bullScore}
                    scoreMax={100}
                    scoreDescription={bull.standoutFeature ?? undefined}
                    onViewDetails={() => setSelectedBull(bull)}
                    onToggleFavorite={() => handleToggleFavorite(bull.id, bull.isFavorite ?? false)}
                    isFavorite={bull.isFavorite ?? false}
                    favoriteLoading={togglingFavoriteId === bull.id}
                  />
                ))}
              </div>
              {result.total > limit && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-6">
                  <button
                    type="button"
                    disabled={loading || result.page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="rounded-lg border border-[#1C2620] bg-white px-4 py-2 font-inter text-sm font-medium text-[#1C2620] transition-colors hover:bg-[#1C2620]/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
                  >
                    Anterior
                  </button>
                  <span className="font-inter text-sm text-[#2D2D2D]">
                    Página {result.page} de {result.totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={loading || result.page >= result.totalPages}
                    onClick={() => setPage((p) => Math.min(result.totalPages, p + 1))}
                    className="rounded-lg border border-[#1C2620] bg-white px-4 py-2 font-inter text-sm font-medium text-[#1C2620] transition-colors hover:bg-[#1C2620]/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </ClassificationResultsPage>
  );
}
