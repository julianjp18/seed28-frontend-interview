import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms";
import type { BullTagsProps } from "./BullTags.types";

export function BullTags({ tags, className }: BullTagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((item, i) => (
        <Badge key={`${item.label}-${i}`} variant={item.variant ?? "default"}>
          {item.label}
        </Badge>
      ))}
    </div>
  );
}
