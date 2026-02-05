"use client";

import { cn } from "@/lib/utils";
import { AppImage, Checkbox, Text } from "@/components/atoms";
import {
  BullCardInfo,
  BullTags,
  BullScoreIndicator,
  BullCardActions,
  BullRadarChart,
} from "@/components/molecules";
import type { BullCardProps } from "../BullCard/BullCard.types";

/**
 * Same data and inner components as BullCard, but laid out vertically for a grid cell:
 * image on top, then rank + name/subtitle, tags, score, radar, actions at bottom.
 */
export function BullCardGrid({
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
        "flex w-full flex-col rounded-3xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md",
        "gap-3 min-h-0",
        className
      )}
    >
      {/* Top: image (full width) */}
      <div className="flex justify-center">
        <AppImage
          src={imageSrc}
          alt={imageAlt}
          rounded="md"
          className="h-28 w-full max-w-[140px] shrink-0 object-cover sm:h-32"
        />
      </div>

      {/* Rank + checkbox row */}
      <div className="flex min-w-0 items-center gap-2">
        {rank !== undefined && (
          <Text
            as="span"
            variant="heading2"
            className="shrink-0 font-inter text-xl font-semibold leading-tight text-[#394D41]"
          >
            #{typeof rank === "number" ? rank : rank}
          </Text>
        )}
        {showCheckbox && (
          <Checkbox
            variant="card"
            shape="square"
            checked={checkboxChecked}
            onChange={(e) => onCheckboxChange?.(e.target.checked)}
            className="shrink-0"
            aria-label="Seleccionar"
          />
        )}
      </div>

      {/* Name, subtitle, tags */}
      <div className="min-w-0 flex-1">
        <BullCardInfo name={name} subtitle={subtitle} showImage={false} />
        <BullTags tags={tags} className="mt-1" />
      </div>

      {/* Score + radar in one row */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
        <div className="shrink-0 flex-1">
          <BullScoreIndicator
            value={scoreValue}
            max={scoreMax}
            description={scoreDescription}
            showScoreNumber
          />
        </div>
        {showRadarChart && (
          <div className="min-w-0 shrink-0">
            <BullRadarChart data={radarData} />
          </div>
        )}
      </div>

      {/* Actions at bottom */}
      <div className="mt-auto flex shrink-0 justify-end pt-3">
        <BullCardActions
          variant="grid"
          onViewDetails={onViewDetails}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          favoriteLoading={favoriteLoading}
        />
      </div>
    </article>
  );
}
