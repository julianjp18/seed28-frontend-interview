import type { Meta, StoryObj } from "@storybook/react";
import { BullScoreIndicator } from "./BullScoreIndicator";

const meta: Meta<typeof BullScoreIndicator> = {
  title: "Molecules/BullScoreIndicator",
  component: BullScoreIndicator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullScoreIndicator>;

export const Default: Story = {
  args: {
    value: 0.9,
    description: "Top 1% de facilidad de parto",
  },
};

export const WithoutDescription: Story = {
  args: { value: 0.75 },
};
