import type { Meta, StoryObj } from "@storybook/react";
import { BullCardGrid } from "./BullCardGrid";

const tags = [
  { label: "Own", variant: "default" as const },
  { label: "For heifer", variant: "success" as const },
];

const meta: Meta<typeof BullCardGrid> = {
  title: "Organisms/BullCardGrid",
  component: BullCardGrid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BullCardGrid>;

const defaultArgs = {
  rank: 1,
  imageSrc: "https://picsum.photos/64/64",
  imageAlt: "Bull 992",
  name: "Bull #992",
  subtitle: "Angus . 36 months",
  tags,
  scoreValue: 0.9,
  scoreMax: 100,
  scoreDescription: "Top 1% ease of calving",
  onViewDetails: () => {},
  onToggleFavorite: () => {},
  showCheckbox: true as const,
  onCheckboxChange: () => {},
};

export const Default: Story = {
  args: defaultArgs,
  render: (args) => (
    <div className="max-w-sm">
      <BullCardGrid
        {...args}
        showCheckbox={true}
        onCheckboxChange={args.onCheckboxChange ?? (() => {})}
      />
    </div>
  ),
};

export const Favorite: Story = {
  args: {
    ...defaultArgs,
    isFavorite: true,
    onToggleFavorite: () => {},
    showCheckbox: true,
    onCheckboxChange: () => {},
  },
  render: (args) => (
    <div className="max-w-sm">
      <BullCardGrid
        {...args}
        showCheckbox={true}
        onCheckboxChange={args.onCheckboxChange ?? (() => {})}
      />
    </div>
  ),
};

export const WithoutCheckbox: Story = {
  args: {
    ...defaultArgs,
    showCheckbox: false,
  },
  render: (args) => (
    <div className="max-w-sm">
      <BullCardGrid {...args} />
    </div>
  ),
};
