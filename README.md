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
