# BullCardSkeleton

Organism: skeleton placeholder that mirrors the layout of **BullCard**. Shown while bull list data is loading. Uses `Skeleton` atoms to mimic rank, image, name/subtitle, tags, score area and action buttons. Layout is responsive (column on mobile, row on `md+`) to match BullCard.

## Atoms used

- Skeleton

## Props

| Prop      | Type   | Description                    |
|-----------|--------|--------------------------------|
| className | string | Optional Tailwind classes      |

## Accessibility

- Renders with `aria-hidden` so screen readers skip it during loading.

## Usage

Used in the dashboard (or any list of bulls) while `loading && !result?.data.length`:

```tsx
{loading && !result?.data.length && (
  <div className="space-y-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <BullCardSkeleton key={i} />
    ))}
  </div>
)}
```
