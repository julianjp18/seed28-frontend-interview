import type { Meta, StoryObj } from "@storybook/react";
import { ScoreNumber } from "./ScoreNumber";

const meta: Meta<typeof ScoreNumber> = {
  title: "Molecules/ScoreNumber",
  component: ScoreNumber,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScoreNumber>;

export const Default: Story = {
  args: { value: 0.9 },
};

export const StringValue: Story = {
  args: { value: "0.85" },
};
