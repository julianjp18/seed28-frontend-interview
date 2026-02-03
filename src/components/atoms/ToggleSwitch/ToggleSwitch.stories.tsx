import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Atoms/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Off: Story = {
  args: { "aria-label": "Para vaquillona" },
};

export const On: Story = {
  args: { checked: true, "aria-label": "Facilidad de parto" },
};

export const Disabled: Story = {
  args: { disabled: true, "aria-label": "Disabled" },
};
