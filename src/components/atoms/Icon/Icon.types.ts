export type IconName =
  | "checkmark"
  | "search"
  | "download"
  | "list"
  | "grid"
  | "info"
  | "eye"
  | "heart"
  | "heartFilled"
  | "location"
  | "chevronDown"
  | "chevronUp"
  | "arrowLeft"
  | "arrowRight"
  | "user"
  | "logoB"
  | "cloudSync"
  | "filter"
  | "close"
  | "logout";

export interface IconProps {
  name: IconName;
  className?: string;
  "aria-label"?: string;
}
