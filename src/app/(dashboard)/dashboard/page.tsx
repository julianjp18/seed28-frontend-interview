"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ClassificationResultsPage } from "@/components/pages";
import { BullCard } from "@/components/organisms";
import { useAuth } from "@/hooks";
import { bullsService } from "@/services/bulls.service";
import type { Bull, Origen, Pelaje, PaginatedBulls } from "@/types/bull";
import type { OriginFilterOption } from "@/components/organisms/ActiveFiltersSidebar/ActiveFiltersSidebar.types";
import type { SortOption } from "@/components/organisms/SortingSidebar/SortingSidebar.types";

const COAT_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "negro", label: "Negro" },
  { value: "colorado", label: "Colorado" },
];

const SORT_OPTIONS: SortOption[] = [
  { value: "desc", label: "Score mayor a menor" },
  { value: "asc", label: "Score menor a mayor" },
];

const LOREMFLICKR_BASE = "https://loremflickr.com/640/480";

function getBullPlaceholderImage(bull: Bull): string {
  const useTag = bull.useType === "vaquillona" ? "heifer" : "cow";
  const coatTag = bull.coat === "negro" ? "black" : "red";
  const breedTag = bull.breed.toLowerCase().replace(/\s+/g, "");
  const tags = [useTag, coatTag, breedTag].join(",");
  return `${LOREMFLICKR_BASE}/${tags}`;
}

function buildOriginOptions(selectedOrigin: Origen | "all" | undefined): OriginFilterOption[] {
  return [
    { value: "all", label: "Todos", checked: selectedOrigin === undefined || selectedOrigin === "all" },
    { value: "propio", label: "Toros propios", checked: selectedOrigin === "propio" },
    { value: "catalogo", label: "Catálogo", checked: selectedOrigin === "catalogo" },
    { value: "favoritos", label: "Favoritos", checked: selectedOrigin === "favoritos" },
  ];
}

function bullToTags(bull: Bull): { label: string; variant?: "default" | "success" | "secondary" | "outline" }[] {
  const originLabel =
    bull.origin === "propio" ? "Propio" : bull.origin === "catalogo" ? "Catálogo" : "Favoritos";
  const useLabel = bull.useType === "vaquillona" ? "Para vaquillona" : "Para vaca";
  return [
    { label: originLabel, variant: "default" },
    { label: useLabel, variant: bull.useType === "vaquillona" ? "success" : "outline" },
  ];
}

export default function DashboardPage() {
  const router = useRouter();
  const { token, user, hydrated, isAuthenticated } = useAuth();

  const [search, setSearch] = useState("");
  const [origin, setOrigin] = useState<Origen | "all" | undefined>(undefined);
  const [forHeifer, setForHeifer] = useState(false);
  const [coat, setCoat] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const limit = 10;

  const [result, setResult] = useState<PaginatedBulls | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBulls = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const params = {
        page,
        limit,
        search: search || undefined,
        origin: origin && origin !== "all" ? origin : undefined,
        forHeifer: forHeifer || undefined,
        coat: coat !== "all" ? (coat as Pelaje) : undefined,
        sortBy,
      };
      const data = await bullsService.getBulls(params, token);
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al cargar toros");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, [token, page, limit, search, origin, forHeifer, coat, sortBy]);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated || !token) {
      router.replace("/login");
      return;
    }
    fetchBulls();
  }, [hydrated, isAuthenticated, token, router, fetchBulls]);

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
      try {
        if (isFavorite) {
          await bullsService.removeFavorite(bullId, token);
        } else {
          await bullsService.addFavorite(bullId, token);
        }
        await fetchBulls();
      } catch {
        // Optionally show toast
      }
    },
    [token, fetchBulls]
  );

  const originOptions = buildOriginOptions(origin);
  const sortValue = sortBy;

  if (!hydrated || !isAuthenticated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Cargando…</p>
      </div>
    );
  }

  return (
    <ClassificationResultsPage
      headerTitle="Bulltrack Pro"
      locationLabel={user?.name ?? user?.email ?? "Usuario"}
      locationAvatarSrc={null}
      onLocationClick={() => {}}
      locationOpen={false}
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
      editObjectiveButtonLabel="Editar"
      updatedAtLabel={result ? `Datos actualizados` : undefined}
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
      onViewModeChange={() => {}}
      onExport={() => {}}
    >
      {error && (
        <p className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      )}
      {loading && !result?.data.length && (
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border">
          <p className="text-muted-foreground">Cargando toros…</p>
        </div>
      )}
      {!loading && result?.data.length === 0 && !error && (
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border">
          <p className="text-muted-foreground">No hay resultados. Ajusta filtros o búsqueda.</p>
        </div>
      )}
      {!loading && result?.data && result.data.length > 0 && (
        <div className="space-y-3">
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
              onViewDetails={() => {}}
              onToggleFavorite={() => handleToggleFavorite(bull.id, bull.isFavorite ?? false)}
              isFavorite={bull.isFavorite ?? false}
            />
          ))}
        </div>
      )}
    </ClassificationResultsPage>
  );
}
