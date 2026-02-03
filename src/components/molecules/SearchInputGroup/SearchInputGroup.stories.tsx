import type { Meta, StoryObj } from "@storybook/react";
import { SearchInputGroup } from "./SearchInputGroup";

const meta: Meta<typeof SearchInputGroup> = {
  title: "Molecules/SearchInputGroup",
  component: SearchInputGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchInputGroup>;

export const Default: Story = {
  args: {},
};

export const WithResultsCount: Story = {
  args: { rightLabel: "24 resultados" },
};
