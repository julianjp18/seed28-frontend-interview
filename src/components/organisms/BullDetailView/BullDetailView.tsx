"use client";

import { AppImage, Text } from "@/components/atoms";
import {
  BullScoreIndicator,
  BullRadarChart,
  BullTags,
} from "@/components/molecules";
import { bullToTags, getBullStats, bullToRadarData } from "@/lib/bull-utils";
import type { BullDetailViewProps } from "./BullDetailView.types";

export function BullDetailView({ bull, imageSrc }: BullDetailViewProps) {
  const tags = bullToTags(bull);
  const stats = getBullStats(bull);
  const radarData = bullToRadarData(bull);
  const originLabel =
    bull.origin === "propio" ? "Propio" : bull.origin === "catalogo" ? "Catálogo" : "Favoritos";
  const useLabel = bull.useType === "vaquillona" ? "Para vaquillona" : "Para vaca";
  const coatLabel = bull.coat === "negro" ? "Negro" : "Colorado";

  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <AppImage
          src={imageSrc}
          alt={bull.name}
          rounded="lg"
          className="h-48 w-full shrink-0 object-cover sm:h-40 sm:w-48"
        />
        <div className="min-w-0 flex-1 space-y-1">
          <Text variant="heading2" className="font-inter text-xl font-semibold text-foreground sm:text-2xl">
            {bull.name}
          </Text>
          <p className="font-inter text-sm text-muted-foreground">
            Etiqueta: {bull.earTag} · {bull.breed} · {bull.ageMonths} meses
          </p>
          <BullTags tags={tags} className="mt-2" />
          <div className="mt-3 flex flex-wrap gap-2 font-inter text-xs text-muted-foreground">
            <span>Origen: {originLabel}</span>
            <span>Uso: {useLabel}</span>
            <span>Pelaje: {coatLabel}</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-[#F1F1F1] p-4">
        <BullScoreIndicator
          value={bull.bullScore}
          max={100}
          description={bull.standoutFeature ?? undefined}
          showScoreNumber
        />
      </div>
      {bull.standoutFeature && (
        <p className="font-inter text-sm text-foreground">
          <span className="font-medium">Destacado: </span>
          {bull.standoutFeature}
        </p>
      )}
      <div className="space-y-2">
        <h3 className="font-inter text-sm font-semibold text-foreground">Criterios de evaluación</h3>
        <div className="flex justify-center rounded-lg bg-[#F7F7F7] p-4">
          <BullRadarChart data={radarData} className="size-48 sm:size-56" />
        </div>
        <ul className="grid grid-cols-2 gap-2 font-inter text-sm text-muted-foreground sm:grid-cols-3">
          <li>Crecimiento: {stats.growth}</li>
          <li>Fac. parto: {stats.calvingEase}</li>
          <li>Reproducción: {stats.reproduction}</li>
          <li>Moderación: {stats.moderation}</li>
          <li className="sm:col-span-2">Canal: {stats.carcass}</li>
        </ul>
      </div>
    </div>
  );
}
