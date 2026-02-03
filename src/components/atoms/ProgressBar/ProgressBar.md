# ProgressBar

Barra de progreso horizontal. Usada para el **BULL SCORE** en las tarjetas de toros (verde).

## Props

| Prop          | Tipo   | Default | Descripción                    |
|---------------|--------|---------|--------------------------------|
| value         | number | —       | Valor actual (0 a max)        |
| max           | number | 1       | Valor máximo (1 = decimal 0–1) |
| className     | string | —       | Clase del contenedor           |
| trackClassName| string | —       | Clase del track (fondo)         |
| fillClassName | string | —       | Clase del fill (progreso)      |

Si `max` es 1, `value` puede ser 0.9 para 90%. Estilos con Tailwind; el fill por defecto es verde (`bg-green-600`).
