# ResultsToolbar

Molécula: contador de resultados + botones vista lista/cuadrícula + botón Exportar.

## Átomos que usa

- Text (contador)
- Button (iconToggle para lista/grid, secondary para Exportar)
- Icon (list, grid, download)

## Props

| Prop             | Tipo     | Default | Descripción        |
|------------------|----------|---------|--------------------|
| resultsCount     | string   | —       | Ej. "24 resultados" |
| viewMode         | "list" \| "grid" | "list" | Vista activa   |
| onViewModeChange | (mode) => void | — | Al cambiar vista |
| onExport         | () => void | —     | Al exportar       |
| className        | string   | —       | Clases Tailwind   |
