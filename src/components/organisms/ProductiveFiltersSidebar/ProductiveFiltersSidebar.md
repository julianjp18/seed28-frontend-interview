# ProductiveFiltersSidebar

Organism: "PRODUCTIVE FILTERS" block with a toggle (e.g. For heifer / Ease of calving) and a dropdown (e.g. Coat). Uses ToggleFilter and FilterDropdown.

## Molecules used

- ToggleFilter
- FilterDropdown
- Text (section title)

## Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Section heading |
| toggleLabel | string | Toggle main label |
| toggleSubLabel | string | Toggle sublabel |
| toggleChecked | boolean | Toggle state |
| onToggleChange | (checked) => void | Toggle change |
| dropdownLabel | string | Dropdown label |
| dropdownValue | string | Selected value |
| dropdownOptions | { value, label }[] | Options |
| onDropdownChange | (value) => void | Dropdown change |
| className | string | Tailwind classes |
