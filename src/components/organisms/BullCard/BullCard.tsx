"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import {
  BullCardInfo,
  BullTags,
  BullScoreIndicator,
  ScoreNumber,
  BullCardActions,
} from "@/components/molecules";
import type { BullCardProps } from "./BullCard.types";

export function BullCard({
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
  showRadarPlaceholder = true,
  className,
}: BullCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-stretch sm:gap-6",
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-3 sm:min-w-0">
        <div className="flex items-start gap-3">
          {rank !== undefined && (
            <Text
              variant="heading2"
              as="span"
              className="shrink-0 font-bold text-foreground"
            >
              #{typeof rank === "number" ? rank : rank}
            </Text>
          )}
          <div className="min-w-0 flex-1">
            <BullCardInfo
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              name={name}
              subtitle={subtitle}
            />
            <BullTags tags={tags} className="mt-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1 space-y-1">
            <BullScoreIndicator
              value={scoreValue}
              max={scoreMax}
              description={scoreDescription}
            />
            <ScoreNumber value={scoreValue} />
          </div>
          {showRadarPlaceholder && (
            <div
              className="flex size-20 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50 sm:size-24"
              aria-hidden
            >
              <svg
                className="size-10 text-muted-foreground sm:size-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
              </svg>
            </div>
          )}
          <BullCardActions
            onViewDetails={onViewDetails}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </div>
    </article>
  );
}
