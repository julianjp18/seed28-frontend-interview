import type { Meta, StoryObj } from "@storybook/react";
import { MainContentHeader } from "./MainContentHeader";

const meta: Meta<typeof MainContentHeader> = {
  title: "Organisms/MainContentHeader",
  component: MainContentHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MainContentHeader>;

export const Full: Story = {
  args: {
    updatedAtLabel: "Data updated 2 min ago",
    title: "Classification results",
    description:
      "Results are ordered by Bulltrack Score reflecting your production objectives.",
    showInfoIcon: true,
    onInfoClick: () => {},
    criteriaExpanded: false,
    onCriteriaToggle: () => {},
    searchPlaceholder: "Search by ear tag, name or ranch",
    resultsCount: "24 results",
    viewMode: "list",
    onViewModeChange: () => {},
    onExport: () => {},
  },
};

export const Minimal: Story = {
  args: {
    title: "Classification results",
    description: "Results ordered by score.",
  },
};
