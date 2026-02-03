import { cn } from "@/lib/utils";
import { AppImage, Text } from "@/components/atoms";
import type { BullCardInfoProps } from "./BullCardInfo.types";

export function BullCardInfo({
  imageSrc,
  imageAlt,
  name,
  subtitle,
  className,
}: BullCardInfoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <AppImage
        src={imageSrc}
        alt={imageAlt}
        rounded="md"
        className="size-16 shrink-0 object-cover"
      />
      <div className="min-w-0">
        <Text variant="label" as="p" className="truncate font-semibold text-foreground">
          {name}
        </Text>
        <Text variant="caption" color="muted">
          {subtitle}
        </Text>
      </div>
    </div>
  );
}
