"use client";

import { cn } from "@/lib/utils";
import { ObjectiveDescription, ButtonWithIcon } from "@/components/molecules";
import type { CurrentObjectiveSectionProps } from "./CurrentObjectiveSection.types";

export function CurrentObjectiveSection({
  description,
  onEditClick,
  editButtonLabel = "Edit criteria",
  className,
}: CurrentObjectiveSectionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <ObjectiveDescription description={description} />
      {onEditClick && (
        <ButtonWithIcon onClick={onEditClick}>{editButtonLabel}</ButtonWithIcon>
      )}
    </div>
  );
}
