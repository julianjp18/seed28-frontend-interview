import type { Meta, StoryObj } from "@storybook/react";
import { CurrentObjectiveSection } from "./CurrentObjectiveSection";

const meta: Meta<typeof CurrentObjectiveSection> = {
  title: "Organisms/CurrentObjectiveSection",
  component: CurrentObjectiveSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CurrentObjectiveSection>;

export const Default: Story = {
  args: {
    description:
      "Maximize weight gain (weaning) while maintaining ease of calving.",
    onEditClick: () => {},
  },
};

export const WithoutEdit: Story = {
  args: {
    description: "Maximize weight gain while maintaining ease of calving.",
  },
};
