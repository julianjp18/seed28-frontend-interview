# MainContentHeader

Organism: main content area header with updated-at label, section title, description, ranking criteria accordion, search bar, results count, view toggles and export button. Composes DataUpdatedAt, SectionHeader, RankingCriteriaLabel, ResultsToolbar, SearchInputGroup.

## Molecules used

- DataUpdatedAt
- SectionHeader
- RankingCriteriaLabel
- ResultsToolbar
- SearchInputGroup

## Props

| Prop | Type | Description |
|------|------|-------------|
| updatedAtLabel | string | Timestamp text |
| title | string | Main heading |
| description | ReactNode | Subtitle |
| showInfoIcon | boolean | Show info icon on title |
| onInfoClick | () => void | Info click |
| criteriaExpanded | boolean | Ranking criteria open |
| onCriteriaToggle | () => void | Toggle criteria |
| searchPlaceholder | string | Search input placeholder |
| searchValue | string | Controlled search value |
| onSearchChange | (e) => void | Search change |
| resultsCount | string | e.g. "24 results" |
| viewMode | "list" \| "grid" | Current view |
| onViewModeChange | (mode) => void | View change |
| onExport | () => void | Export click |
| className | string | Tailwind classes |
