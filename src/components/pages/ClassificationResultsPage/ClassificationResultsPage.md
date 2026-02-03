# ClassificationResultsPage

Page: full classification results screen. Uses ClassificationResultsLayout and composes all sidebar and main organisms. Corresponds to the dashboard route (`/dashboard`). Pass real data from API and render BullCards as `children`.

## Template used

- ClassificationResultsLayout

## Organisms used

- HeaderBar, LocationUserSelector (top bar)
- ActiveFiltersSidebar, ProductiveFiltersSidebar, SortingSidebar, CurrentObjectiveSection (sidebar)
- MainContentHeader (main header)
- children: typically a list of BullCard

## Props

All props are passed through to the respective organisms. Main groups:

| Group | Props |
|-------|-------|
| Top bar | headerTitle, locationLabel, locationAvatarSrc, onLocationClick, locationOpen |
| Origin filters | originOptions, onOriginOptionChange |
| Productive filters | productiveToggleLabel, productiveToggleSubLabel, productiveToggleChecked, onProductiveToggleChange, coatDropdownLabel, coatDropdownValue, coatDropdownOptions, onCoatDropdownChange |
| Sorting | sortValue, sortOptions, onSortChange |
| Objective | objectiveDescription, onEditObjectiveClick, editObjectiveButtonLabel |
| Main header | updatedAtLabel, mainTitle, mainDescription, mainShowInfoIcon, onMainInfoClick, criteriaExpanded, onCriteriaToggle, searchPlaceholder, searchValue, onSearchChange, resultsCount, viewMode, onViewModeChange, onExport |
| Content | children (e.g. map bulls to BullCard) |

## Usage

Use in the dashboard page route and pass state from API/hooks:

```tsx
<ClassificationResultsPage
  locationLabel={location?.name ?? "—"}
  originOptions={originOptions}
  sortValue={sortValue}
  sortOptions={sortOptions}
  objectiveDescription={objective?.text ?? ""}
  mainTitle="Classification results"
  resultsCount={`${total} results`}
  // ... other props from state
>
  {bulls.map((bull) => (
    <BullCard key={bull.id} {...toBullCardProps(bull)} />
  ))}
</ClassificationResultsPage>
```
