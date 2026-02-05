# BullCardGrid

Organism: same data and inner components as BullCard, but laid out vertically for a **grid cell**. Used when the user selects the grid view (view mode = grid). Layout: image on top, then rank + checkbox, name/subtitle, tags, score + radar in one row, actions at bottom.

## Molecules used

- BullCardInfo
- BullTags
- BullScoreIndicator
- BullCardActions
- BullRadarChart (Recharts)

## Props

Same as BullCard (see BullCard.types / BullCardProps):

| Prop | Type | Description |
|------|------|-------------|
| rank | string \| number | e.g. 1 or "1" for #1 |
| imageSrc | string | Bull image URL |
| imageAlt | string | Image alt |
| name | string | e.g. "Bull #992" |
| subtitle | string | e.g. "Angus . 36 months" |
| tags | BullTagItem[] | Badges (Own, For heifer, etc.) |
| scoreValue | number | Score 0–1 or 0–scoreMax |
| scoreMax | number | Default 1 |
| scoreDescription | string | e.g. "Top 1% ease of calving" |
| onViewDetails | () => void | View details click |
| onToggleFavorite | () => void | Favorite toggle |
| isFavorite | boolean | Favorite state |
| showRadarChart | boolean | Show radar chart (default true) |
| radarData | BullRadarChartDataPoint[] | Radar data (5 criteria). Optional. |
| showCheckbox | boolean | Show checkbox (default true) |
| checkboxChecked | boolean | Checkbox checked state |
| onCheckboxChange | (checked: boolean) => void | Checkbox change handler |
| favoriteLoading | boolean | Favorite button loading state |
| className | string | Tailwind classes |

## Usage

Rendered inside a CSS grid when `viewMode === "grid"` (e.g. `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`).
