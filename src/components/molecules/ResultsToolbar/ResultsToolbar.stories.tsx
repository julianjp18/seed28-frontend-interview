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
  args: { resultsCount: "24 resultados", onExport: () => {}, onViewModeChange: () => {} },
};

export const ListView: Story = {
  args: {
    resultsCount: "24 resultados",
    viewMode: "list",
    onExport: () => {},
    onViewModeChange: () => {},
  },
};

export const GridView: Story = {
  args: {
    resultsCount: "7 resultados",
    viewMode: "grid",
    onExport: () => {},
    onViewModeChange: () => {},
  },
};
