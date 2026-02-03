import { useState } from "react";
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

const defaultChildren = (
  checked1: boolean,
  setChecked1: (v: boolean) => void,
  checked2: boolean,
  setChecked2: (v: boolean) => void
) => (
  <div className="space-y-3">
    <BullCard
      showCheckbox
      checkboxChecked={checked1}
      onCheckboxChange={setChecked1}
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
      showCheckbox
      checkboxChecked={checked2}
      onCheckboxChange={setChecked2}
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
);

export const Default: Story = {
  render: function DefaultStory(args) {
    const [coatDropdownValue, setCoatDropdownValue] = useState("all");
    const [sortValue, setSortValue] = useState("score-desc");
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
      <ClassificationResultsPage
        {...args}
        coatDropdownValue={coatDropdownValue}
        onCoatDropdownChange={setCoatDropdownValue}
        sortValue={sortValue}
        onSortChange={setSortValue}
      >
        {defaultChildren(checked1, setChecked1, checked2, setChecked2)}
      </ClassificationResultsPage>
    );
  },
  args: {
    locationLabel: "La soledad",
    originOptions,
    productiveToggleLabel: "Para vaquillona",
    productiveToggleSubLabel: "Facilidad de parto",
    productiveToggleChecked: true,
    coatDropdownLabel: "Pelaje",
    coatDropdownOptions: coatOptions,
    sortOptions,
    objectiveDescription:
      "Maximizar la ganancia de peso (destete) manteniendo facilidad de parto.",
    updatedAtLabel: "Datos actualizados hace 2 min",
    mainTitle: "Resultados de clasificación",
    mainDescription:
      "Los resultados están ordenados por Bulltrack Score reflejando tus objetivos de producción.",
    searchPlaceholder: "Buscar por etiqueta, nombre o rancho",
    resultsCountNumber: 24,
    resultsCountLabel: "resultados",
    onOriginOptionChange: () => {},
    onProductiveToggleChange: () => {},
    onCoatDropdownChange: () => {},
    onSortChange: () => {},
    onEditObjectiveClick: () => {},
    onCriteriaToggle: () => {},
    onSearchChange: () => {},
    onViewModeChange: () => {},
    onExport: () => {},
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
