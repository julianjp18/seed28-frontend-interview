# Bulltrack Pro — Frontend

Frontend del challenge Full-Stack **Bulltrack Pro** (Seed28). Next.js 14+ con App Router y Tailwind CSS.

## Requisitos

- Node.js 18+
- npm (o yarn/pnpm)
- Backend NestJS corriendo (ver `/backend`)

## Cómo ejecutar

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Configurar variables de entorno**

   Copia `env.example` a `.env.local` y ajusta si hace falta:

   ```bash
   cp env.example .env.local
   ```

   Por defecto usa `NEXT_PUBLIC_API_URL=http://localhost:3001` (backend NestJS).

3. **Arrancar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

- **`src/app`** — Rutas (App Router): `/`, `/login`, `/dashboard`
- **`src/components`** — Atomic Design: `atoms`, `molecules`, `organisms`, `templates`
- **`src/hooks`** — Hooks (ej. `useAuth`)
- **`src/services`** — Llamadas a la API (auth, bulls)
- **`src/types`** — Tipos TypeScript (bull, auth)
- **`src/lib`** — Utilidades (ej. `cn`)

## Usuario por defecto (challenge)

- **Email:** `admin@seed28.com`
- **Contraseña:** `seed28`

## Scripts

- `npm run dev` — Desarrollo
- `npm run build` — Build de producción
- `npm run start` — Servidor de producción
- `npm run lint` — ESLint
- `npm run test` — Tests (Jest)
- `npm run storybook` — Storybook (puerto 6006)

## Componentes (Atomic Design)

- **Atoms:** `src/components/atoms/`
- **Molecules:** `src/components/molecules/`
- **Organisms:** `src/components/organisms/`
- **Templates:** `src/components/templates/`
- **Pages:** `src/components/pages/`

Cada componente tiene: `*.types.ts`, `*.test.tsx`, `*.stories.tsx`, `*.md`.

---

## Arquitectura

### Stack

- **Framework:** Next.js 14+ (App Router)
- **Estilos:** Tailwind CSS
- **Tipado:** TypeScript
- **Testing:** Jest + React Testing Library
- **Documentación de componentes:** Storybook

### Diseño de componentes (Atomic Design)

- **Atoms:** Elementos base reutilizables (`Button`, `Text`, `Input`, `Icon`, `Divider`, etc.). Definen variantes (ej. `Button`: primary, secondary, highlight) y tokens de diseño (colores, tipografía).
- **Molecules:** Composición de atoms con lógica acotada (`SearchInputGroup`, `RankingCriteriaLabel`, `BullCardInfo`, etc.).
- **Organisms:** Bloques de UI que orquestan molecules y atoms (`MainContentHeader`, `BullCard`, `ProductiveFiltersSidebar`, etc.).
- **Templates:** Layouts por pantalla (`ClassificationResultsLayout`).
- **Pages:** Páginas que reciben props y ensamblan templates y organisms (`ClassificationResultsPage`). La lógica de datos y estado vive en las rutas de `app/` (ej. `dashboard/page.tsx`), que renderizan estas pages.

### Flujo de datos

- **Rutas (`app/`):** Contienen el estado (useState, datos de API), llaman a servicios y pasan props a las pages.
- **Services:** Llamadas HTTP al backend (auth, bulls). Token y base URL vía env.
- **Hooks:** Lógica reutilizable (ej. `useAuth` para sesión y logout).
- **Pages:** Componentes presentacionales que reciben toda la data por props; no hacen fetch directo.

### Estilos y diseño

- **Tailwind:** Utilidades + clases arbitrarias para valores fijos (ej. `#1C2620`, `#36E27B`). Componentes como `Text` y `Button` exponen variantes/colores para no repetir hex en toda la app.
- **Tipografía:** Inter como fuente principal (`font-inter`). El atom `Text` tiene variantes (heading1, body, label, etc.) y colores (default, dark, white, accent).
- **Colores de referencia:** primary `#1C2620`, secondary `#E6E6E6`, highlight `#36E27B` (10% opacidad en fondos), texto oscuro `#2D2D2D`.

### Ejemplo de estilos por componente

- **RankingCriteriaLabel (título “Criterios del ranking”):** `font-family: Inter`, `font-weight: 700`, `font-size: 16px`, `line-height: 20px`, `color: #2D2D2D` — aplicado vía `Text` con `variant="body"`, `color="dark"` y `className="font-inter text-base font-bold leading-5"`.

---

## Future Improvements

- **Internacionalización (i18n):** Centralizar textos en archivos de idioma (es/en) y usar una lib (ej. next-intl) para rutas y componentes; hoy muchos strings están hardcodeados.
- **Design tokens:** Mover colores y tipografía a variables CSS o tema Tailwind (ej. `--color-primary`, `--font-body`) y consumirlos desde atoms para facilitar temas y consistencia.
- **Tests:** Aumentar cobertura E2E (Playwright/Cypress) para flujos críticos (login, listado, favoritos, acordeón de criterios); mantener y ampliar tests unitarios de componentes y hooks.
- **Accesibilidad:** Revisar contraste (WCAG), foco visible en acordeones y botones, roles ARIA y labels en iconos; asegurar navegación por teclado en modales y sidebars.
- **Performance:** Lazy load de rutas y componentes pesados (modales, detalle de toro); optimizar listados con virtualización si crece el número de cards; cache/estado global (React Query o similar) para datos de toros y filtros.
- **Estado global:** Introducir un store (Zustand, Jotai o Context + reducer) para filtros, criterios expandidos y preferencias de vista si se comparten entre rutas o se persisten.
- **API y errores:** Tipar respuestas del backend de punta a punta; manejo de errores y reintentos en servicios; feedback claro (toasts o mensajes inline) en fallos de red o validación.
- **Documentación:** Documentar en Storybook variantes y props de atoms/molecules; añadir guía de uso de diseño (cuándo usar cada variante de Button/Text) para nuevos desarrolladores.
