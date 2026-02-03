import type { Meta, StoryObj } from "@storybook/react";
import { DataUpdatedAt } from "./DataUpdatedAt";

const meta: Meta<typeof DataUpdatedAt> = {
  title: "Molecules/DataUpdatedAt",
  component: DataUpdatedAt,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataUpdatedAt>;

export const Default: Story = {
  args: { label: "Datos actualizados hace 2 min" },
};
