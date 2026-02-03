import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const BullScore: Story = {
  args: { value: 0.9 },
};

export const Half: Story = {
  args: { value: 0.5 },
};

export const Full: Story = {
  args: { value: 1 },
};

export const Percentage: Story = {
  args: { value: 75, max: 100 },
};
