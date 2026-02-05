import type { Meta, StoryObj } from "@storybook/react";
import { BullDetailView } from "./BullDetailView";
import type { Bull } from "@/types/bull";

const mockBull: Bull = {
  id: 1,
  earTag: "992",
  name: "Toro Black Emerald",
  useType: "vaquillona",
  origin: "propio",
  coat: "negro",
  breed: "Angus",
  ageMonths: 36,
  standoutFeature: "Top 1% calving ease",
  bullScore: 80.5,
  stats: {
    growth: 85,
    calvingEase: 98,
    reproduction: 75,
    moderation: 60,
    carcass: 82,
  },
  isFavorite: false,
};

const meta: Meta<typeof BullDetailView> = {
  title: "Organisms/BullDetailView",
  component: BullDetailView,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullDetailView>;

export const Default: Story = {
  args: {
    bull: mockBull,
    imageSrc: "https://picsum.photos/200/200",
  },
};

export const SinDestacado: Story = {
  args: {
    bull: { ...mockBull, standoutFeature: null },
    imageSrc: "https://picsum.photos/200/200",
  },
};

export const Favoritos: Story = {
  args: {
    bull: { ...mockBull, origin: "favoritos", coat: "colorado" },
    imageSrc: "https://picsum.photos/200/200",
  },
};
