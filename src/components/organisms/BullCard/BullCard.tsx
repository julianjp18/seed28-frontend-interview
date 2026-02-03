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
  showRadarChart = true,
  radarData,
  className,
}: BullCardProps) {

  return (
    <article
      className={cn(
        "flex h-[192px] w-full flex-row items-center gap-6 rounded-3xl bg-white p-6",
        className
      )}
    >
      {showCheckbox && (
        <div className="flex shrink-0 items-center justify-center">
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
          className="shrink-0 font-inter text-[32px] font-semibold leading-5 text-[#394D41] align-middle"
        >
          #{typeof rank === "number" ? rank : rank}
        </Text>
      )}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <AppImage
          src={imageSrc}
          alt={imageAlt}
          rounded="md"
          className="size-16 shrink-0 object-cover"
        />
        <div className="flex min-w-0 flex-col gap-4">
          <BullCardInfo
            name={name}
            subtitle={subtitle}
            showImage={false}
          />
          <BullTags tags={tags} />
        </div>
      </div>
      <Divider orientation="vertical" className="shrink-0 self-stretch border-border" />
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <BullScoreIndicator
          value={scoreValue}
          max={scoreMax}
          description={scoreDescription}
          showScoreNumber
        />
        {showRadarChart && <BullRadarChart data={radarData} />}
      </div>
      <Divider orientation="vertical" className="shrink-0 self-stretch border-border" />
      <BullCardActions
        onViewDetails={onViewDetails}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        className="shrink-0"
      />
    </article>
  );
}
