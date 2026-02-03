# SortingSidebar

Organism: "SORTING" block with a score order dropdown (e.g. Score best to worst). Uses FilterDropdown.

## Molecules used

- FilterDropdown
- Text (section title)

## Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Section heading |
| value | string | Selected option value |
| options | SortOption[] | `{ value, label }[]` |
| onChange | (value) => void | When selection changes |
| className | string | Tailwind classes |
