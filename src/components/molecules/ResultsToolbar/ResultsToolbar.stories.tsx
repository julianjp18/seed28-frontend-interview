import type { Meta, StoryObj } from "@storybook/react";
import { ResultsToolbar } from "./ResultsToolbar";

const meta: Meta<typeof ResultsToolbar> = {
  title: "Molecules/ResultsToolbar",
  component: ResultsToolbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ResultsToolbar>;

export const Default: Story = {
  args: { onViewModeChange: () => {} },
};

export const ListView: Story = {
  args: {
    viewMode: "list",
    onViewModeChange: () => {},
  },
};

export const GridView: Story = {
  args: {
    viewMode: "grid",
    onViewModeChange: () => {},
  },
};
