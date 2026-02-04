import { LOREMFLICKR_BASE } from "@/constants";
import type { Bull, Origen } from "@/types/bull";
import type { OriginFilterOption } from "@/components/organisms/ActiveFiltersSidebar/ActiveFiltersSidebar.types";
import type { BullTagItem } from "@/components/molecules/BullTags/BullTags.types";
import type { BullRadarChartDataPoint } from "@/components/molecules/BullRadarChart/BullRadarChart.types";

/** Formatea "Datos actualizados hace X seg/min/h" desde un timestamp. */
export function formatTimeAgo(sinceMs: number): string {
  const now = Date.now();
  const diffSec = Math.max(0, Math.floor((now - sinceMs) / 1000));
  if (diffSec < 60) {
    return diffSec <= 1 ? "Datos actualizados hace 1 seg" : `Datos actualizados hace ${diffSec} seg`;
  }
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return diffMin === 1 ? "Datos actualizados hace 1 min" : `Datos actualizados hace ${diffMin} min`;
  }
  const diffH = Math.floor(diffMin / 60);
  return diffH === 1 ? "Datos actualizados hace 1 h" : `Datos actualizados hace ${diffH} h`;
}

/** Genera URL de imagen placeholder para un toro (loremflickr). */
export function getBullPlaceholderImage(bull: Bull): string {
  const useTag = bull.useType === "vaquillona" ? "heifer" : "cow";
  const coatTag = bull.coat === "negro" ? "black" : "red";
  const breedTag = bull.breed.toLowerCase().replace(/\s+/g, "");
  const tags = [useTag, coatTag, breedTag].join(",");
  return `${LOREMFLICKR_BASE}/${tags}`;
}

/** Construye opciones del filtro Origen con el valor seleccionado. */
export function buildOriginOptions(
  selectedOrigin: Origen | "all" | undefined
): OriginFilterOption[] {
  return [
    { value: "all", label: "Todos", checked: selectedOrigin === undefined || selectedOrigin === "all" },
    { value: "propio", label: "Toros propios", checked: selectedOrigin === "propio" },
    { value: "catalogo", label: "Catálogo", checked: selectedOrigin === "catalogo" },
    { value: "favoritos", label: "Favoritos", checked: selectedOrigin === "favoritos" },
  ];
}

/** Convierte un toro a tags para BullTags (origen + uso). */
export function bullToTags(bull: Bull): BullTagItem[] {
  const originLabel =
    bull.origin === "propio" ? "Propio" : bull.origin === "catalogo" ? "Catálogo" : "Favoritos";
  const useLabel = bull.useType === "vaquillona" ? "Para vaquillona" : "Para vaca";
  return [
    { label: originLabel, variant: "default" },
    { label: useLabel, variant: bull.useType === "vaquillona" ? "success" : "outline" },
  ];
}

/** Obtiene stats del toro (API list devuelve en raíz; tipo Bull tiene stats). */
export function getBullStats(bull: Bull): {
  growth: number;
  calvingEase: number;
  reproduction: number;
  moderation: number;
  carcass: number;
} {
  if (bull.stats) return bull.stats;
  const b = bull as Bull & Record<string, unknown>;
  return {
    growth: Number(b.growth ?? 0),
    calvingEase: Number(b.calvingEase ?? 0),
    reproduction: Number(b.reproduction ?? 0),
    moderation: Number(b.moderation ?? 0),
    carcass: Number(b.carcass ?? 0),
  };
}

/** Convierte stats del toro a datos para BullRadarChart. */
export function bullToRadarData(bull: Bull): BullRadarChartDataPoint[] {
  const stats = getBullStats(bull);
  return [
    { subject: "Crecimiento", value: stats.growth, fullMark: 100 },
    { subject: "Fac. parto", value: stats.calvingEase, fullMark: 100 },
    { subject: "Reproducción", value: stats.reproduction, fullMark: 100 },
    { subject: "Moderación", value: stats.moderation, fullMark: 100 },
    { subject: "Canal", value: stats.carcass, fullMark: 100 },
  ];
}
