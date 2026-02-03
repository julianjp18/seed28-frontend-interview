# Componentes Atomic Design — Bulltrack Pro

Documento de referencia de todos los componentes necesarios para el frontend, siguiendo Atomic Design y el diseño Figma del challenge.

---

## Átomos (Atoms)

Componentes UI básicos e indivisibles.

### Texto / tipografía
| Componente | Descripción | Uso |
|------------|-------------|-----|
| Títulos de sección | "FILTROS ACTIVOS", "Resultados de la clasificación" | Headings de bloques |
| Etiquetas de filtros | "Origen", "Todos", "Toros propios" | Labels de filtros |
| Descripciones cortas | "Angus . 36 meses", "Datos actualizados hace 2 min" | Texto secundario |
| Placeholders | "Busca por caravana, nombre o cabaña" | Input placeholder |
| Números | "24 resultados", "0.9" | Contadores y scores |
| Texto de botones | "Exportar", "Editar criterios" | Labels de acciones |
| Texto de tags | "Propio", "Para vaquillona" | Badges |

### Iconos
| Icono | Uso |
|-------|-----|
| Checkmark (✓) | Checkbox, confirmación |
| Lupa | Búsqueda |
| Descarga | Exportar |
| Lista | Vista lista |
| Cuadrícula | Vista cuadrícula |
| Información | Info / criterios |
| Ojo | Ver detalles |
| Corazón | Favorito |
| Localización | Ubicación / establecimiento |
| Flecha abajo | Dropdown |
| Flecha izquierda | Volver / Editar criterios |
| Avatar | Usuario |
| Logo B | Marca Bulltrack |

### Inputs
| Componente | Descripción |
|------------|-------------|
| Checkbox | Cuadrado vacío o con check (filtros Origen, etc.) |
| Toggle Switch | ON/OFF para filtros (ej. "Para vaquillona") |
| Input de texto | Campo de búsqueda |

### Botones
| Componente | Uso |
|------------|-----|
| Botón primario | Acciones principales (Exportar) |
| Botón secundario | Acciones secundarias (Editar criterios) |

### Imágenes
| Componente | Uso |
|------------|-----|
| Imagen de toro | Thumbnail en tarjetas de resultados |
| Avatar de usuario | Header / selector de usuario |

### Elementos gráficos
| Componente | Uso |
|------------|-----|
| Barra de progreso | Bull Score (verde) |
| Gráfico radar/araña | Indicador visual del score |
| Badge / Tag | Rectángulo con texto ("Propio", "Catálogo") |

---

## Moléculas (Molecules)

Grupos de átomos que funcionan como una unidad.

| Componente | Descripción | Átomos que usa |
|------------|-------------|----------------|
| **HeaderBar** | Logo B + texto "Bulltrack" | Logo, texto |
| **FilterCheckboxItem** | Checkbox con etiqueta (ej. "Toros propios") | Checkbox, texto |
| **FilterDropdown** | Etiqueta + select (ej. "Pelaje") | Label, select, flecha |
| **ToggleFilter** | Etiqueta + switch (ej. "Para vaquillona") | Label, Toggle |
| **SearchInputGroup** | Input búsqueda + ícono lupa | Input, ícono lupa |
| **SectionHeader** | Título + descripción + ícono info | Título, texto, ícono |
| **ResultsToolbar** | Contador + botones vista + Exportar | Texto, botones, íconos |
| **BullCardInfo** | Imagen toro + nombre + edad/raza | Imagen, texto |
| **BullTags** | Conjunto de badges de un toro | Badge (x N) |
| **BullScoreIndicator** | "BULL SCORE" + barra + texto descriptivo | Label, barra progreso, texto |
| **ScoreNumber** | Número del score (ej. "0.9") | Texto (número) |
| **BullCardActions** | Ícono ojo + ícono corazón | Botones/íconos |
| **LocationUserSelector** | Ubicación + texto + dropdown + avatar | Ícono, texto, flecha, avatar |
| **DataUpdatedAt** | "Datos actualizados hace X min" | Texto |
| **RankingCriteriaLabel** | "Criterios del ranking" + info + dropdown | Label, ícono, flecha |
| **ObjectiveDescription** | "Objetivo actual" + párrafo | Título, texto |
| **ButtonWithIcon** | "Editar criterios" + flecha izquierda | Botón, ícono |

---

## Organismos (Organisms)

Secciones complejas y autónomas de la interfaz.

| Componente | Descripción | Moléculas que usa |
|------------|-------------|--------------------|
| **SidebarFiltrosActivos** | Bloque "FILTROS ACTIVOS" con opciones Origen | FilterCheckboxItem (x N) |
| **SidebarFiltrosProductivos** | Bloque "FILTROS PRODUCTIVOS" + toggle + Pelaje | ToggleFilter, FilterDropdown |
| **SidebarOrdenamiento** | Bloque "ORDENAMIENTO" + dropdown Score | FilterDropdown |
| **SeccionObjetivoActual** | Objetivo actual + botón editar | ObjectiveDescription, ButtonWithIcon |
| **EncabezadoPrincipal** | Título, descripción, criterios, toolbar, búsqueda | DataUpdatedAt, SectionHeader, RankingCriteriaLabel, ResultsToolbar, SearchInputGroup |
| **BullCard** | Tarjeta completa de un toro en resultados | BullCardInfo, BullTags, BullScoreIndicator, ScoreNumber, Gráfico radar, BullCardActions |

---

## Plantillas (Templates)

Estructura de página sin contenido real.

| Plantilla | Estructura |
|-----------|------------|
| **ClassificationResultsLayout** | Dos columnas: sidebar izquierda (filtros + objetivo) y área principal derecha. Barra superior: HeaderBar + LocationUserSelector. Área principal: EncabezadoPrincipal + zona de lista de resultados (grid/lista de BullCard). |

---

## Páginas (Pages)

Instancias de plantillas con contenido real.

| Página | Descripción |
|--------|-------------|
| **ResultadosClasificacionPage** | ClassificationResultsLayout con datos de API: filtros aplicados, lista de toros con scores y favoritos, objetivo actual. Corresponde a `/dashboard`. |

---

## Mapeo a carpetas del proyecto

```
src/components/
├── atoms/          → Átomos (Button, Input, Badge, Skeleton, Icon*, ProgressBar, etc.)
├── molecules/      → Moléculas (SearchInputGroup, FilterCheckboxItem, BullCardInfo, etc.)
├── organisms/      → Organismos (SidebarFiltrosActivos, BullCard, EncabezadoPrincipal, etc.)
└── templates/      → ClassificationResultsLayout
```

Las páginas viven en `src/app/(dashboard)/dashboard/page.tsx` y usan la plantilla + organismos.

---

## Orden sugerido de implementación

1. **Atoms:** Badge, Button, Input, Checkbox, Toggle, iconos (o set de íconos), ProgressBar, Skeleton (ya existe).
2. **Molecules:** SearchInputGroup, FilterCheckboxItem, FilterDropdown, ToggleFilter, BullCardInfo, BullTags, BullScoreIndicator, BullCardActions, ResultsToolbar, SectionHeader.
3. **Organisms:** SidebarFiltrosActivos, SidebarFiltrosProductivos, SidebarOrdenamiento, SeccionObjetivoActual, EncabezadoPrincipal, BullCard.
4. **Templates:** ClassificationResultsLayout.
5. **Pages:** Componer la página de dashboard con datos de la API.

---

*Documento generado para el challenge Full-Stack Bulltrack Pro (Seed28).*
