# BullCard

Organism: full bull result card with rank, image, name, subtitle, tags, Bull Score bar, score number, radar chart placeholder and action buttons (view, favorite). Composes BullCardInfo, BullTags, BullScoreIndicator, ScoreNumber, BullCardActions.

## Molecules used

- BullCardInfo
- BullTags
- BullScoreIndicator
- ScoreNumber
- BullCardActions
- (Radar chart: placeholder SVG for now)

## Props

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
| showRadarPlaceholder | boolean | Show radar area (default true) |
| className | string | Tailwind classes |
