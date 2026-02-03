# LocationUserSelector

Molécula: ubicación + texto + flecha dropdown + avatar. Selector en la barra superior.

## Átomos que usa

- Icon (location, chevronDown/chevronUp)
- Text
- Avatar

## Props

| Prop          | Tipo     | Default | Descripción      |
|---------------|----------|---------|------------------|
| locationLabel | string   | —       | Ej. "La soledad" |
| avatarSrc     | string   | —       | URL avatar       |
| onClick       | () => void | —     | Al hacer clic    |
| isOpen        | boolean  | false   | Dropdown abierto |
| className     | string   | —       | Clases Tailwind  |
