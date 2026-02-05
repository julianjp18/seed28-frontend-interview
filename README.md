# Bulltrack Pro — Frontend

Frontend for the Full-Stack **Bulltrack Pro** challenge (Seed28). Next.js 16 with App Router, React 19 and Tailwind CSS 4.

## Demo

Live demo: **[https://seed28-frontend-interview.onrender.com](https://seed28-frontend-interview.onrender.com)**

Default credentials: `admin@seed28.com` / `seed28`

## Requirements

- Node.js 18+
- npm (or yarn/pnpm)
- NestJS backend running (see `/backend`)

## How to run

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy `env.example` to `.env.local` and adjust if needed:

   ```bash
   cp env.example .env.local
   ```

   By default it uses `NEXT_PUBLIC_API_URL=http://localhost:3001` (NestJS backend).

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                    # App Router
│   ├── (auth)/login/       # Login page
│   ├── (dashboard)/        # Dashboard layout + page
│   ├── api/                # API routes (proxy to backend: auth/login, bulls/*)
│   ├── layout.tsx
│   ├── page.tsx            # Home (redirects)
│   ├── ErrorBoundaryWrapper.tsx
│   └── globals.css
├── assets/                 # SVGs (arrow, Avatar, cloud-sync, download)
├── components/             # Atomic Design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── constants/             # COAT_OPTIONS, SORT_OPTIONS, LOREMFLICKR_BASE, UPDATED_AT_REFRESH_MS
├── hooks/                  # useAuth, useBulls
├── lib/                    # bull-utils, utils (cn)
├── services/               # auth.service, bulls.service, api
└── types/                  # auth, bull
```

## Routes

- **`/`** — Home (redirects to login or dashboard)
- **`/login`** — Login form
- **`/dashboard`** — Classification results (list/grid of bulls, filters, search, favorites)

API routes under `/api` proxy to the backend (e.g. `/api/auth/login`, `/api/bulls`).

## Components (Atomic Design)

### Atoms (`src/components/atoms/`)

AppImage, Avatar, Badge, Button, Checkbox, Divider, Icon, Input, Loader, ProgressBar, Skeleton, Text, ToggleSwitch.

### Molecules (`src/components/molecules/`)

BullCardActions, BullCardInfo, BullRadarChart, BullScoreIndicator, BullTags, ButtonWithIcon, DataUpdatedAt, Drawer, FilterCheckboxItem, FilterDropdown, HeaderBar, LocationUserSelector, Modal, ObjectiveDescription, RankingCriteriaLabel, ResultsToolbar, ScoreNumber, SearchInputGroup, SectionHeader, ToggleFilter.

### Organisms (`src/components/organisms/`)

ActiveFiltersSidebar, BullCard, BullCardGrid, BullCardSkeleton, BullDetailView, CurrentObjectiveSection, ErrorBoundary, MainContentHeader, ProductiveFiltersSidebar, SortingSidebar.

### Templates (`src/components/templates/`)

ClassificationResultsLayout.

### Pages (`src/components/pages/`)

ClassificationResultsPage.

Many components have `*.types.ts`, `*.test.tsx`, `*.stories.tsx` and `*.md`; some (e.g. Loader, BullRadarChart, Drawer, Modal) only have implementation and types.

## Default user (challenge)

- **Email:** `admin@seed28.com`
- **Password:** `seed28`

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run test` | Jest |
| `npm run test:watch` | Jest watch mode |
| `npm run storybook` | Storybook (port 6006) |
| `npm run build-storybook` | Build Storybook static |

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts
- **Typing:** TypeScript
- **Testing:** Jest + React Testing Library
- **Component docs:** Storybook 8 (Vite)

## Architecture

- **Routes (`app/`):** State (useState, API data), services, pass props to pages. Layout wraps children with `ErrorBoundaryWrapper` (ErrorBoundary from organisms).
- **Hooks:** `useAuth` (session, logout), `useBulls` (paginated list, filters, refetch).
- **Services:** HTTP to backend via `NEXT_PUBLIC_API_URL`; token from `useAuth`. API routes in `app/api/` proxy to backend.
- **Pages:** Presentational; receive data via props. Data/state in dashboard page, which renders `ClassificationResultsPage` and bull list (BullCard or BullCardGrid by viewMode).
- **Design:** Primary `#1C2620`, secondary `#E6E6E6`, highlight `#36E27B`. Inter font. Atoms expose variants (Button, Text, etc.).

## Future improvements

- **Internationalization (i18n):** Centralize copy in language files (es/en) and use a lib (e.g. next-intl) for routes and components; many strings are currently hardcoded.
- **Design tokens:** Move colors and typography to CSS variables or Tailwind theme (e.g. `--color-primary`, `--font-body`) and consume them from atoms for easier theming and consistency.
- **Tests:** Increase E2E coverage (Playwright/Cypress) for critical flows (login, list, favorites, criteria accordion); maintain and expand unit tests for components and hooks.
- **Accessibility:** Review contrast (WCAG), visible focus on accordions and buttons, ARIA roles and labels on icons; ensure keyboard navigation in modals and sidebars.
- **Performance:** Lazy load heavy routes and components (modals, bull detail); optimize lists with virtualization if card count grows; cache/global state (React Query or similar) for bulls and filters.
- **Global state:** Introduce a store (Zustand, Jotai or Context + reducer) for filters, expanded criteria and view preferences when shared across routes or persisted.
- **API and errors:** Type backend responses end-to-end; error handling and retries in services; clear feedback (toasts or inline messages) on network or validation failures.
