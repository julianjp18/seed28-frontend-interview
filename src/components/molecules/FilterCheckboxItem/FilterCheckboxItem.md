# FilterCheckboxItem

Molécula: checkbox cuadrado con etiqueta. Usado en el sidebar de filtros (Origen: Toros propios, Catálogo, Favoritos).

## Átomos que usa

- Checkbox (shape square)
- Texto (label)

## Props

| Prop          | Tipo     | Descripción                |
|---------------|----------|----------------------------|
| label         | string   | Texto del filtro           |
| checked       | boolean  | Estado controlado          |
| defaultChecked| boolean | Estado inicial no controlado |
| onChange      | (v: boolean) => void | Al cambiar |
| id            | string   | Id del input               |
| className     | string   | Clases Tailwind            |
