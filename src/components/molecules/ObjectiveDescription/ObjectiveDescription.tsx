import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import type { ObjectiveDescriptionProps } from "./ObjectiveDescription.types";

export function ObjectiveDescription({
  description,
  className,
}: ObjectiveDescriptionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Text variant="label" as="h3" className="text-foreground">
        Objetivo actual
      </Text>
      <Text variant="body" as="p" color="muted" className="text-sm">
        {description}
      </Text>
    </div>
  );
}
