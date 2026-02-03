import type { Meta, StoryObj } from "@storybook/react";
import { ClassificationResultsPage } from "./ClassificationResultsPage";
import { BullCard } from "@/components/organisms";

const originOptions = [
  { value: "all", label: "All", checked: true },
  { value: "own", label: "Own bulls" },
  { value: "catalog", label: "Catalog" },
  { value: "favorites", label: "Favorites" },
];

const coatOptions = [
  { value: "all", label: "All" },
  { value: "black", label: "Black" },
  { value: "red", label: "Red" },
];

const sortOptions = [
  { value: "score-desc", label: "Score best to worst" },
  { value: "score-asc", label: "Score worst to best" },
];

const meta: Meta<typeof ClassificationResultsPage> = {
  title: "Pages/ClassificationResultsPage",
  component: ClassificationResultsPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ClassificationResultsPage>;

export const Default: Story = {
  args: {
    locationLabel: "La soledad",
    originOptions,
    productiveToggleLabel: "For heifer",
    productiveToggleSubLabel: "Ease of calving",
    productiveToggleChecked: true,
    coatDropdownLabel: "Coat",
    coatDropdownValue: "all",
    coatDropdownOptions: coatOptions,
    sortValue: "score-desc",
    sortOptions,
    objectiveDescription:
      "Maximize weight gain (weaning) while maintaining ease of calving.",
    updatedAtLabel: "Data updated 2 min ago",
    mainTitle: "Classification results",
    mainDescription:
      "Results are ordered by Bulltrack Score reflecting your production objectives.",
    searchPlaceholder: "Search by ear tag, name or ranch",
    resultsCount: "24 results",
    onOriginOptionChange: () => {},
    onProductiveToggleChange: () => {},
    onCoatDropdownChange: () => {},
    onSortChange: () => {},
    onEditObjectiveClick: () => {},
    onCriteriaToggle: () => {},
    onSearchChange: () => {},
    onViewModeChange: () => {},
    onExport: () => {},
    children: (
      <div className="space-y-3">
        <BullCard
          rank={1}
          imageSrc="https://picsum.photos/64/64"
          imageAlt="Bull 992"
          name="Bull #992"
          subtitle="Angus . 36 months"
          tags={[
            { label: "Own", variant: "default" },
            { label: "For heifer", variant: "success" },
          ]}
          scoreValue={0.9}
          scoreDescription="Top 1% ease of calving"
          onViewDetails={() => {}}
          onToggleFavorite={() => {}}
        />
        <BullCard
          rank={2}
          imageSrc="https://picsum.photos/64/64?2"
          imageAlt="Bull 845"
          name="Bull #845"
          subtitle="Angus . 42 months"
          tags={[
            { label: "Catalog", variant: "secondary" },
            { label: "For cow", variant: "outline" },
          ]}
          scoreValue={0.85}
          onViewDetails={() => {}}
          onToggleFavorite={() => {}}
          isFavorite
        />
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    ...Default.args,
    updatedAtLabel: undefined,
    mainDescription: undefined,
    searchPlaceholder: undefined,
    resultsCount: undefined,
    children: (
      <div className="rounded border border-dashed border-border p-8 text-center text-muted-foreground">
        No results. Apply filters or run a new search.
      </div>
    ),
  },
};
