# Yuzha Template Monorepo

Base tooling for the Yuzha apps without any domain logic. Use this template to spin up new module workspaces that share the same linting, testing, and deployment defaults.

## Prerequisites
- Node.js 20+
- npm 10+

## Getting Started
```bash
npm install
npm run dev
```
The default `dev` command proxies to the Launcher workspace (`apps/Launcher`). Duplicate that folder when creating a new module.

## Available Scripts
- `npm run dev` - start the Launcher workspace in Vite dev mode.
- `npm run build` - build the Launcher workspace.
- `npm run lint` - run ESLint across all workspaces.
- `npm run typecheck` - perform a project-wide TypeScript check.
- `npm run test` - execute the Vitest test suite.

## Monorepo Layout
- `apps/Launcher` - minimal shell app ready to be cloned for new modules.
- `shared/` - placeholder utilities, styles, and storage helpers for cross-app reuse.
- `netlify.toml` - shared redirects and headers for every Netlify deployment.

## Creating a New Module
1. Copy `apps/Launcher` to `apps/<ModuleName>`.
2. Update the new workspace `package.json` name, Vite config ports, and any env declarations.
3. Add workspace-specific scripts (`dev`, `build`, `typecheck`) if they differ from the Launcher defaults.
4. Import shared utilities from `@shared/*` as you implement real features.

## Environment Variables
Global overrides live in `.env.local` (see `env.local.example`). Each workspace can also define its own `.env.local` by copying `.env.local.example` inside the workspace folder.

## Deployment
Netlify sites can reuse `netlify.toml`. Configure each site to build from its workspace directory (e.g., base `apps/Launcher`, build command `npm run build`, publish `apps/Launcher/dist`).
