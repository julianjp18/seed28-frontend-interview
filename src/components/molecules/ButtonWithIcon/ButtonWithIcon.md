# ButtonWithIcon

Molécula: botón con ícono a la izquierda. Usado para "Editar criterios" (flecha izquierda).

## Átomos que usa

- Button (variant outline o secondary)
- Icon (arrowLeft por defecto)

## Props

| Prop     | Tipo   | Default   | Descripción     |
|----------|--------|-----------|-----------------|
| children | string | —         | Texto del botón |
| onClick  | () => void | —      | Al hacer clic   |
| iconLeft | string | "arrowLeft" | Nombre del Icon |
| variant  | "outline" \| "secondary" | "outline" | Estilo |
| className| string | —         | Clases Tailwind |
