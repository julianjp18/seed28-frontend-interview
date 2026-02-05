import type { Meta, StoryObj } from "@storybook/react";
import { BullCardSkeleton } from "./BullCardSkeleton";

const meta: Meta<typeof BullCardSkeleton> = {
  title: "Organisms/BullCardSkeleton",
  component: BullCardSkeleton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullCardSkeleton>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: "max-w-2xl",
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <BullCardSkeleton />
      <BullCardSkeleton />
      <BullCardSkeleton />
    </div>
  ),
};
