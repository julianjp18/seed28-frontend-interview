# Input

Campo de texto de una línea. Usado en la barra de búsqueda y formularios.

## Uso

- Búsqueda: `placeholder="Busca por caravana, nombre o cabaña"` con `iconLeft="search"`.
- Cualquier formulario (login, filtros, etc.).

## Props

| Prop      | Tipo    | Default | Descripción                |
|-----------|---------|---------|----------------------------|
| error     | boolean | false   | Muestra estado de error    |
| iconLeft  | string  | —       | Nombre del Icon a la izquierda |
| placeholder | string | —     | Texto placeholder         |
| disabled  | boolean | false   | Deshabilita                |
| className | string  | —       | Clases Tailwind            |

Acepta todas las props nativas de `<input>` (type, value, onChange, etc.). Estilos con Tailwind.
