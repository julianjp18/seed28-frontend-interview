import type { Meta, StoryObj } from "@storybook/react";
import { BullCard } from "./BullCard";

const tags = [
  { label: "Own", variant: "default" as const },
  { label: "For heifer", variant: "success" as const },
];

const meta: Meta<typeof BullCard> = {
  title: "Organisms/BullCard",
  component: BullCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullCard>;

export const Default: Story = {
  args: {
    rank: 1,
    imageSrc: "https://picsum.photos/64/64",
    imageAlt: "Bull 992",
    name: "Bull #992",
    subtitle: "Angus . 36 months",
    tags,
    scoreValue: 0.9,
    scoreDescription: "Top 1% ease of calving",
    onViewDetails: () => {},
    onToggleFavorite: () => {},
  },
};

export const Favorite: Story = {
  args: {
    ...Default.args,
    isFavorite: true,
    onToggleFavorite: () => {},
  },
};
