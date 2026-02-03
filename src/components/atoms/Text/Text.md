# Text

Átomo de tipografía. Centraliza títulos, etiquetas, cuerpo y leyendas para mantener consistencia en Bulltrack Pro.

## Uso

- **heading1 / heading2**: Títulos de página o sección (ej. "Resultados de la clasificación").
- **heading4**: Títulos de bloque en mayúsculas (ej. "FILTROS ACTIVOS", "ORDENAMIENTO").
- **label**: Etiquetas de filtros y formularios (ej. "Origen", "Pelaje").
- **body**: Párrafos y descripciones.
- **caption**: Texto secundario (ej. "Datos actualizados hace 2 min").
- **button**: Texto dentro de botones.

## Props

| Prop      | Tipo   | Default  | Descripción                          |
|-----------|--------|----------|--------------------------------------|
| variant   | string | "body"   | heading1, heading2, heading4, label, body, caption, button |
| color     | string | "default"| default, muted, inverse, primary     |
| uppercase | boolean| false    | Aplicar mayúsculas                   |
| as        | string | "span"   | Elemento HTML (span, p, h1, h2, …)    |
| className | string | —        | Clases adicionales (Tailwind)       |

Estilos con Tailwind CSS.
