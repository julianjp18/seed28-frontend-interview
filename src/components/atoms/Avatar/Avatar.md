# Avatar

Imagen circular de usuario. Se usa en el header (selector de ubicación/usuario). Si no hay `src`, muestra un ícono de usuario.

## Props

| Prop       | Tipo    | Default | Descripción              |
|------------|---------|---------|--------------------------|
| src        | string  | —       | URL de la imagen         |
| alt        | string  | ""      | Texto alternativo        |
| showStatus | boolean | false   | Punto verde (estado)      |
| className  | string  | —       | Tamaño (ej. size-10)     |

Estilos con Tailwind. Usa `next/image` cuando hay `src`.
