# Checkbox

Átomo de casilla de verificación. Dos formas: **square** (filtros del sidebar) y **circle** (selección en lista de toros).

## Uso

- **square**: Filtros "Origen" (Toros propios, Catálogo, Favoritos). Muestra checkmark cuando está marcado.
- **circle**: Selección a la izquierda de cada fila de toro en la lista.

## Props

| Prop         | Tipo    | Default   | Descripción                    |
|--------------|---------|-----------|--------------------------------|
| shape        | string  | "square"  | "square" \| "circle"           |
| label        | string  | —         | Texto junto al checkbox       |
| checked      | boolean | false     | Estado marcado                 |
| indeterminate| boolean | false     | Estado indeterminado (solo square) |
| disabled     | boolean | false     | Deshabilita                    |
| className    | string  | —         | Clases Tailwind                |

Estilos con Tailwind CSS.
