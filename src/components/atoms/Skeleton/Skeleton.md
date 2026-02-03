# Skeleton

Placeholder animado para estados de carga. Se usa mientras se obtienen datos de la API (lista de toros, etc.).

## Uso

- Filas de la tabla/lista mientras cargan.
- Tarjetas de toros antes de pintar datos.
- Cualquier bloque que espere contenido asíncrono.

## Props

| Prop     | Tipo   | Descripción              |
|----------|--------|--------------------------|
| className| string | Tamaño y forma (Tailwind)|

Ejemplos: `className="h-4 w-32"` para una línea, `className="size-24 rounded-lg"` para un thumbnail. Estilos con Tailwind (`animate-pulse`, `bg-muted`).
