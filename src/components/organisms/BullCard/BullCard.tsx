"use client";

import { cn } from "@/lib/utils";
import { AppImage, Checkbox, Divider, Text } from "@/components/atoms";
import {
  BullCardInfo,
  BullTags,
  BullScoreIndicator,
  BullCardActions,
  BullRadarChart,
} from "@/components/molecules";
import type { BullCardProps } from "./BullCard.types";

export function BullCard({
  showCheckbox = true,
  checkboxChecked,
  onCheckboxChange,
  rank,
  imageSrc,
  imageAlt,
  name,
  subtitle,
  tags,
  scoreValue,
  scoreMax = 1,
  scoreDescription,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  favoriteLoading = false,
  showRadarChart = true,
  radarData,
  className,
}: BullCardProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-4 rounded-3xl bg-white p-4 min-h-0",
        "md:min-h-[192px] md:h-auto md:flex-row md:items-center md:gap-6 md:p-6",
        className
      )}
    >
      {/* Fila 1 móvil: rank + imagen + info + tags */}
      <div className="flex min-w-0 flex-1 shrink-0 items-start gap-3 md:shrink-0 md:items-center">
        {showCheckbox && (
          <div className="flex shrink-0 items-center justify-center md:flex">
            <Checkbox
              variant="card"
              shape="square"
              checked={checkboxChecked}
              onChange={(e) => onCheckboxChange?.(e.target.checked)}
              className="shrink-0"
              aria-label="Seleccionar"
            />
          </div>
        )}
        {rank !== undefined && (
          <Text
            as="span"
            variant="heading2"
            className="shrink-0 font-inter text-2xl md:text-[32px] font-semibold leading-5 text-[#394D41] align-middle"
          >
            #{typeof rank === "number" ? rank : rank}
          </Text>
        )}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <AppImage
            src={imageSrc}
            alt={imageAlt}
            rounded="md"
            className="h-16 w-20 shrink-0 object-cover md:h-[72px] md:w-[83px]"
          />
          <div className="min-w-0 flex-1">
            <BullCardInfo
              name={name}
              subtitle={subtitle}
              showImage={false}
            />
            <BullTags tags={tags} className="mt-1" />
          </div>
        </div>
      </div>

      <Divider orientation="vertical" className="hidden shrink-0 self-stretch border-border md:block" />

      {/* Score + radar (desktop) / Score + acciones (móvil) */}
      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3 md:flex-nowrap md:gap-4">
        <BullScoreIndicator
          value={scoreValue}
          max={scoreMax}
          description={scoreDescription}
          showScoreNumber
        />
        {showRadarChart && (
          <div className="hidden min-w-0 md:block">
            <BullRadarChart data={radarData} />
          </div>
        )}
        {/* En móvil las acciones van junto al score */}
        <div className="flex shrink-0 md:hidden">
          <BullCardActions
            onViewDetails={onViewDetails}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            favoriteLoading={favoriteLoading}
          />
        </div>
      </div>

      <Divider orientation="vertical" className="hidden shrink-0 self-stretch border-border md:block" />

      <div className="hidden shrink-0 md:block">
        <BullCardActions
          onViewDetails={onViewDetails}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          favoriteLoading={favoriteLoading}
          className="shrink-0"
        />
      </div>
    </article>
  );
}
