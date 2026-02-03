# Button

Átomo de botón con variantes para acciones principales, secundarias, filtros y toggles de vista.

## Variantes

| Variante        | Uso                                      |
|-----------------|------------------------------------------|
| primary         | Acciones principales (ej. Exportar)     |
| secondary       | Acciones secundarias (fondo gris)       |
| outline         | Botón con borde (ej. Editar criterios)  |
| filterSelected  | Opción de filtro seleccionada (checkmark) |
| iconToggle      | Vista lista / cuadrícula (estado activo/inactivo) |

## Props

| Prop      | Tipo    | Default   | Descripción                    |
|-----------|---------|-----------|--------------------------------|
| variant   | string  | "primary" | Ver tabla arriba               |
| size      | sm/md/lg| "md"      | Tamaño del botón               |
| active    | boolean | false     | Solo iconToggle: estado activo |
| iconLeft  | string  | —         | Nombre del Icon a la izquierda |
| iconRight | string  | —         | Nombre del Icon a la derecha   |
| disabled  | boolean | false     | Deshabilita el botón           |
| className | string  | —         | Clases Tailwind adicionales    |

Estilos con Tailwind CSS.
