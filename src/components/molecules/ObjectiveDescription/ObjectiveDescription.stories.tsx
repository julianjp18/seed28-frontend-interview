import type { Meta, StoryObj } from "@storybook/react";
import { ObjectiveDescription } from "./ObjectiveDescription";

const meta: Meta<typeof ObjectiveDescription> = {
  title: "Molecules/ObjectiveDescription",
  component: ObjectiveDescription,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ObjectiveDescription>;

export const Default: Story = {
  args: {
    description:
      "Maximizar la ganancia de peso (destete) manteniendo facilidad de parto.",
  },
};
