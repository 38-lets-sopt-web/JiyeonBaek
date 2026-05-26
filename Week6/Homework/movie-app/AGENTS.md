<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Guide

This is a Week 6 homework project named `movie-app`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- TMDB REST API
- pnpm

## Commands

Use `pnpm` for package management.

```bash
pnpm dev
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm build
```

## Development Rules

- Keep source code under `src/`.
- Use the App Router under `src/app`.
- Put shared client providers in `src/app/providers.tsx`.
- Put reusable utilities in `src/lib`.
- Put truly shared UI in `src/shared`.
- Use `@/*` imports for files under `src`.
- Do not add a Pages Router unless explicitly requested.
- Do not commit real secrets. Use `.env.local` locally and keep examples in `.env.example`.

## Conventions

### Naming

- Use `PascalCase` for React components.
- Use `camelCase` for variables, functions, hooks, and props.
- Use `SCREAMING_SNAKE_CASE` only for true constants.
- Prefix custom hooks with `use`, for example `useMovies`.
- Use arrow functions for all functions.
- Name files by their main export when possible.
  - Components: `MovieCard.tsx`
  - Hooks: `useMovies.ts`
  - Utilities: `formatDate.ts`
- Use barrel exports with `index.ts` files for shared modules.
  - Example: export shared utilities from `src/lib/index.ts`.
  - Prefer importing from the folder entry when a barrel exists.

### TypeScript

- Prefer explicit types for props and API responses.
- Avoid `any`. Use `unknown` first if the type is unclear, then narrow it.
- Use `type` for object shapes unless an interface is clearly more appropriate.
- Keep nullable values explicit with `null` or `undefined`; do not hide them with loose checks.

### React / Next.js

- Server Components are the default.
- Add `"use client"` only when using hooks, browser APIs, event handlers, or TanStack Query.
- Keep Client Components as small as practical.
- Write React components as arrow functions.
- Put route-level UI in `src/app`.
- Put feature-specific components, hooks, API functions, and types under `src/features/{featureName}`.
- Put common components in `src/shared`.
- Keep route files thin; route files should compose feature modules.

### Styling

- Use Tailwind CSS utilities directly in `className`.
- Use `cn` from `src/lib` when class names are conditional or need merging.
- Keep class names readable and grouped by layout, spacing, typography, color, and state.
- Use responsive utilities intentionally, starting from mobile styles first.
- Avoid inline styles unless the value is dynamic or cannot be expressed cleanly with Tailwind.

### Data

- Put API functions in a feature-specific `api` file.
- Keep query keys stable and descriptive.
- Prefer array query keys, for example `["movies"]` or `["movie", movieId]`.
- Handle loading, error, and empty states when rendering fetched data.

### Git / Quality

- Keep changes focused on the requested task.
- Do not mix unrelated refactors into feature work.
- Run `pnpm lint`, `pnpm format:check`, and `pnpm build` before considering work complete.

## Data Fetching

- Use TanStack Query for client-side async state.
- Use `getApiClient()` from `src/lib/api.ts` for REST requests.
- Keep API configuration in `VITE_API_BASE_URL` and `VITE_API_KEY`.

## Verification

Before finishing code changes, run:

```bash
pnpm lint
pnpm format:check
pnpm build
```
