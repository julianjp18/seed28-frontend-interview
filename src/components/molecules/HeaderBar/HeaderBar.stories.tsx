import type { Meta, StoryObj } from "@storybook/react";
import { HeaderBar } from "./HeaderBar";

const meta: Meta<typeof HeaderBar> = {
  title: "Molecules/HeaderBar",
  component: HeaderBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: { title: "Bulltrack Pro" },
};
