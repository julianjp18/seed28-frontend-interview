# AppImage

Imagen genérica (no usa `next/image`). Pensada para thumbnails de toros y contenido externo donde no se requiere optimización Next.

## Uso

- Thumbnail del toro en la tarjeta de resultados.
- Cualquier imagen que se pase por URL y no necesite dominio configurado en `next.config`.

## Props

| Prop     | Tipo   | Default | Descripción           |
|----------|--------|---------|-----------------------|
| src      | string | —       | URL de la imagen      |
| alt      | string | —       | Texto alternativo     |
| rounded  | string | "md"    | none \| sm \| md \| lg |
| className| string | —       | Tamaño y Tailwind    |

Estilos con Tailwind. Para optimización y dominios permitidos, usar `next/image` directamente donde aplique.
