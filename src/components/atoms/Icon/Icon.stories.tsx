import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import type { IconName } from "./Icon.types";

const iconNames: IconName[] = [
  "checkmark", "search", "download", "list", "grid", "info", "eye", "heart", "heartFilled",
  "location", "chevronDown", "chevronUp", "arrowLeft", "user", "logoB",
];

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { name: "search", className: "size-6" },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon name={name} className="size-8" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithAriaLabel: Story = {
  args: { name: "download", "aria-label": "Exportar", className: "size-6" },
};
