# FilterDropdown

Molécula: etiqueta + select con flecha. Usado en filtros (Pelaje) y ordenamiento (Score mejor a peor).

## Átomos que usa

- Text (label)
- Icon (chevronDown)
- select nativo estilizado

## Props

| Prop   | Tipo     | Descripción        |
|--------|----------|--------------------|
| label  | string   | Etiqueta del campo |
| value  | string   | Valor seleccionado |
| options| { value, label }[] | Opciones |
| onChange | (value: string) => void | Al cambiar |
| className | string | Clases Tailwind |
