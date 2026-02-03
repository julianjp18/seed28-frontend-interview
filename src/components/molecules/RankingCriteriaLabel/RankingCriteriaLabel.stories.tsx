import type { Meta, StoryObj } from "@storybook/react";
import { RankingCriteriaLabel } from "./RankingCriteriaLabel";

const meta: Meta<typeof RankingCriteriaLabel> = {
  title: "Molecules/RankingCriteriaLabel",
  component: RankingCriteriaLabel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RankingCriteriaLabel>;

export const Collapsed: Story = {
  args: { onToggle: () => {} },
};

export const Expanded: Story = {
  args: { expanded: true, onToggle: () => {} },
};
