# BullCardActions

Molécula: botones de acción de la tarjeta (ojo = ver detalles, corazón = favorito).

## Átomos que usa

- Button (iconToggle)
- Icon (eye, heart, heartFilled)

## Props

| Prop            | Tipo     | Default | Descripción        |
|-----------------|----------|---------|--------------------|
| onViewDetails   | () => void | —     | Al clic en ojo     |
| onToggleFavorite| () => void | —     | Al clic en corazón |
| isFavorite      | boolean  | false   | Estado favorito    |
| className       | string   | —       | Clases Tailwind    |
