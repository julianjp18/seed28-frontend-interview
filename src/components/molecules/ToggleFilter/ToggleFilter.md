# ToggleFilter

Molécula: etiqueta (y subtexto opcional) + ToggleSwitch. Usado en FILTROS PRODUCTIVOS (Para vaquillona, Facilidad de parto).

## Átomos que usa

- Text (label, caption para subLabel)
- ToggleSwitch

## Props

| Prop       | Tipo     | Descripción          |
|------------|----------|----------------------|
| label      | string   | Texto principal      |
| subLabel   | string   | Subtexto opcional    |
| checked    | boolean  | Estado               |
| onChange   | (v: boolean) => void | Al cambiar |
| aria-label | string   | Accesibilidad       |
| className  | string   | Clases Tailwind     |
