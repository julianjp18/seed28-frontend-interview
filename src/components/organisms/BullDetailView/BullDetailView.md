# BullDetailView

Organism: full bull detail view for the modal. Shows image, name, ear tag, breed, age, tags (origin/use/coat labels), Bull Score bar, standout feature, radar chart and evaluation criteria list (growth, calving ease, reproduction, moderation, carcass). Uses `bullToTags`, `getBullStats` and `bullToRadarData` from `@/lib/bull-utils`.

## Molecules / atoms used

- AppImage
- Text
- BullTags
- BullScoreIndicator
- BullRadarChart

## Props

| Prop      | Type   | Description              |
|-----------|--------|--------------------------|
| bull      | Bull   | Bull entity from API     |
| imageSrc  | string | Image URL for the bull   |

## Usage

Rendered inside a modal when the user clicks "Ver detalles" on a BullCard. The parent passes the selected `Bull` and the image URL (e.g. from `getBullPlaceholderImage(bull)`).
