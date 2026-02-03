# ToggleSwitch

Interruptor ON/OFF para filtros (ej. "Para vaquillona", "Facilidad de parto"). Estilo pill con thumb que se desliza.

## Props

| Prop       | Tipo     | Default | Descripción              |
|------------|----------|---------|--------------------------|
| checked    | boolean  | false   | Estado activo            |
| onChange   | (v: boolean) => void | — | Se llama al cambiar      |
| disabled   | boolean  | false   | Deshabilita              |
| aria-label | string   | —       | Accesibilidad (recomendado) |
| className  | string   | —       | Clases Tailwind          |

Estilos con Tailwind. Verde cuando está ON.
