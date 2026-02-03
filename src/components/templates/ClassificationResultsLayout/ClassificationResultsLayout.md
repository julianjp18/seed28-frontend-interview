# ClassificationResultsLayout

Template: page structure for classification results. Two columns (sidebar + main), top bar with logo and user/location. No real content; all areas are slots.

## Structure

- **Top bar:** `topBarLeft` (e.g. HeaderBar), `topBarRight` (e.g. LocationUserSelector).
- **Sidebar (left):** `sidebar` – filters and current objective.
- **Main (right):** `mainHeader` (e.g. MainContentHeader), `children` – results list (BullCards).

## Props

| Prop | Type | Description |
|------|------|-------------|
| topBarLeft | ReactNode | Top bar left slot |
| topBarRight | ReactNode | Top bar right slot |
| sidebar | ReactNode | Left column content |
| mainHeader | ReactNode | Main area header |
| children | ReactNode | Main area content (results) |
| className | string | Tailwind classes |

## Organisms typically used in slots

- topBarLeft: HeaderBar
- topBarRight: LocationUserSelector
- sidebar: ActiveFiltersSidebar, ProductiveFiltersSidebar, SortingSidebar, CurrentObjectiveSection (with Divider between sections)
- mainHeader: MainContentHeader
- children: list of BullCard
