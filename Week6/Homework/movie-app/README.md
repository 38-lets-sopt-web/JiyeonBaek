# Movie App

Week 6 homework project built with Next.js, TypeScript, Tailwind CSS, TanStack Query, Axios, and TMDB.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- TMDB REST API
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` from `.env.example`.

```bash
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_KEY=your_tmdb_api_key
```

## Scripts

```bash
pnpm dev
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm build
```

## Structure

```bash
src/
  app/
  features/
  shared/
  lib/
```

- `src/app`: routes, layouts, and route-level files
- `src/features`: feature-specific code
- `src/shared`: shared UI components
- `src/lib`: shared utilities and clients
