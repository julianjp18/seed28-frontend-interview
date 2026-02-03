"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import type { BullCardActionsProps } from "./BullCardActions.types";

export function BullCardActions({
  onViewDetails,
  onToggleFavorite,
  isFavorite = false,
  className,
}: BullCardActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        "[&_button]:size-10 [&_button]:border-0 [&_button]:bg-[#1C2620] [&_button]:text-white [&_button]:hover:bg-[#1C2620]/90 [&_button_svg]:text-white",
        className
      )}
    >
      {onViewDetails && (
        <Button
          variant="iconToggle"
          onClick={onViewDetails}
          iconLeft="eye"
          aria-label="Ver detalles"
        />
      )}
      {onToggleFavorite && (
        <Button
          variant="iconToggle"
          active={isFavorite}
          onClick={onToggleFavorite}
          iconLeft={isFavorite ? "heartFilled" : "heart"}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        />
      )}
    </div>
  );
}
