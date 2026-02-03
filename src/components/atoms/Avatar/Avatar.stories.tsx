import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {
  args: { className: "size-10" },
};

export const WithImage: Story = {
  args: {
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
    alt: "Usuario",
    className: "size-10",
  },
};

export const WithStatus: Story = {
  args: { showStatus: true, className: "size-10" },
};
