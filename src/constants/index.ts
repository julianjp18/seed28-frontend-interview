import type { SortOption } from "@/components/organisms/SortingSidebar/SortingSidebar.types";

/** Opciones del filtro Pelaje (sidebar) */
export const COAT_OPTIONS: { value: string; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "negro", label: "Negro" },
  { value: "colorado", label: "Colorado" },
];

/** Opciones de ordenamiento por Bull Score */
export const SORT_OPTIONS: SortOption[] = [
  { value: "desc", label: "Score mayor a menor" },
  { value: "asc", label: "Score menor a mayor" },
];

/** Base URL para imágenes placeholder de toros (loremflickr) */
export const LOREMFLICKR_BASE = "https://loremflickr.com/640/480";

/** Intervalo en ms para actualizar el texto "Datos actualizados hace X min" */
export const UPDATED_AT_REFRESH_MS = 30_000;
