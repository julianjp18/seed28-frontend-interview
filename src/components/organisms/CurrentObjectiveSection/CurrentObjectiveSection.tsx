"use client";

import { cn } from "@/lib/utils";
import { ObjectiveDescription, ButtonWithIcon } from "@/components/molecules";
import type { CurrentObjectiveSectionProps } from "./CurrentObjectiveSection.types";

export function CurrentObjectiveSection({
  description,
  onEditClick,
  editButtonLabel = "Editar criterios",
  className,
}: CurrentObjectiveSectionProps) {
  return (
    <div
      className={cn(
        "flex h-[196px] max-w-[204px] flex-col gap-4 rounded-lg border border-[#2B3A31] p-4 bg-[#36E27B]/15",
        className
      )}
    >
      <ObjectiveDescription description={description} />
      {onEditClick && (
        <ButtonWithIcon
          variant="objective"
          onClick={onEditClick}
          className="h-10 max-w-[172px] rounded-xl py-3 px-4 font-inter text-sm font-semibold leading-4"
        >
          {editButtonLabel}
        </ButtonWithIcon>
      )}
    </div>
  );
}
