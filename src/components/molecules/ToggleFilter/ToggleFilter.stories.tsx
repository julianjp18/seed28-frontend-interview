import type { Meta, StoryObj } from "@storybook/react";
import { ToggleFilter } from "./ToggleFilter";

const meta: Meta<typeof ToggleFilter> = {
  title: "Molecules/ToggleFilter",
  component: ToggleFilter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleFilter>;

export const Off: Story = {
  args: { label: "Para vaquillona" },
};

export const WithSubLabel: Story = {
  args: {
    label: "Para vaquillona",
    subLabel: "Facilidad de parto",
    checked: true,
    onChange: () => {},
  },
};

export const On: Story = {
  args: { label: "Facilidad de parto", checked: true, onChange: () => {} },
};
