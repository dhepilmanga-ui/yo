# Yuzha Yo Monorepo

Shared tooling for the Yuzha Yo launcher and its future modules. The root `Launcher/` workspace drives local development and can be cloned into `apps/` whenever a new deployable module is needed.

## Prerequisites
- Node.js 20+
- npm 10+

## Quick Start
```bash
npm install
npm run dev
```
`npm run dev` boots the launcher from `Launcher/`. Duplicate that workspace into `apps/<ModuleName>` when you want an additional module.

## Scripts
- `npm run dev` - start the Launcher workspace in Vite dev mode.
- `npm run dev:all` - start the Launcher (port 5000) and Meng POS (port 5001) dev servers together.
- `npm run build` - build the Launcher workspace followed by the Meng module.
- `npm run lint` - lint `Launcher/` and every workspace under `apps/` (ignores missing globs).
- `npm run typecheck` - run a repo-wide TypeScript check via `tsconfig.base.json`.
- `npm run test` - execute Vitest with `--passWithNoTests` so blank templates succeed.
- `npm run clean` - remove build and Vite cache output for all workspaces.

## Workspace Layout
- `Launcher/` - root launcher app; copy this into `apps/` to scaffold new modules.
- `apps/` - reserved for independent modules (`apps/<ModuleName>`). The `apps/meng` module hosts the sample POS cashier (dev port 5001).
- `shared/` - cross-workspace utilities accessed through the `@shared/*` alias.
- `netlify.toml` - shared SPA redirects, headers, and launcher build configuration.
- `_AI_Agent_Playbook/` - automation guidance for agents collaborating on this repo.

## Creating a New Module
1. Copy `Launcher/` to `apps/<ModuleName>`.
2. Update the copied `package.json` name, ports, and env declarations as needed.
3. Wire up workspace-specific scripts if they differ from the launcher defaults.
4. Import shared utilities from `@shared/*` when building features.
5. Add the workspace to any relevant deployment configuration.

## Environment Variables
Global overrides live in `.env.local` (see `env.local.example`). Each workspace can keep its own `.env.local` by copying the example file into that workspace.

## Deployment
Netlify sites can reuse `netlify.toml`. Configure the launcher site with config path `netlify.toml`, command `npm run build:launcher`, and publish directory `Launcher/dist`.

For the Meng POS module, point Netlify at `apps/meng` as the base directory so it picks up `apps/meng/netlify.toml`. That config elevates the build back to the monorepo root (`base = ".."`), runs `npm run build:meng`, and publishes `apps/meng/dist` with the same SPA redirects and headers.