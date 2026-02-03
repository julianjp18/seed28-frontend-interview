import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import type { ObjectiveDescriptionProps } from "./ObjectiveDescription.types";

export function ObjectiveDescription({
  description,
  className,
}: ObjectiveDescriptionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Text
        variant="label"
        as="h3"
        className="font-inter text-sm font-semibold leading-5 text-[#FFFFFF]"
      >
        Objetivo actual
      </Text>
      <Text
        variant="body"
        as="p"
        className="font-inter text-sm font-light leading-5 text-white"
      >
        {description}
      </Text>
    </div>
  );
}
