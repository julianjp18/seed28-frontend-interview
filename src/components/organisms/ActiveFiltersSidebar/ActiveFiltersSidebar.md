# ActiveFiltersSidebar

Organism: "ACTIVE FILTERS" block with origin options (All, Own bulls, Catalog, Favorites). Uses FilterCheckboxItem molecules.

## Molecules used

- FilterCheckboxItem (× N)
- Text (section title, subtitle)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | "ACTIVE FILTERS" | Section heading |
| subtitle | string | "Origin" | Subtitle |
| options | OriginFilterOption[] | — | `{ value, label, checked? }` |
| onOptionChange | (value, checked) => void | — | When option changes |
| className | string | — | Tailwind classes |
