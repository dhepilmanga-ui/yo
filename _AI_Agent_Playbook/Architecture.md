# Architecture Overview

## Repository Shape
- `package.json` – npm workspace root with scripts targeting the Launcher scaffold (`Lint`, `Test`, and `CI` commands are launcher-first but cover `apps/*` when present).
- `package-lock.json` – workspace-aware lockfile; regenerated whenever workspaces change.
- `Launcher/` – minimal React + Vite starter to clone for new modules or deploy directly.
- `apps/` – staging area for independent modules derived from `Launcher`.
- `shared/` – stub utilities, styles, and docs demonstrating the `@shared/*` alias.
- `netlify.toml` – shared redirects, headers, and default build configuration for the launcher.
- `_AI_Agent_Playbook/` – automation playbooks, workflows, changelog, and FAQ.

## Tooling Stack
- TypeScript via `tsconfig.base.json`; workspaces extend it with relative paths.
- Vite 7 for dev/build (`Launcher/vite.config.ts`).
- ESLint 9 + Prettier 3 for linting/formatting (`npm run lint` tolerates empty glob matches).
- Vitest 3 for tests (`npm run test` includes `--passWithNoTests`).

## Conventions
- Path alias `@shared/*` resolves to `shared/*` from any workspace.
- Scripts assume Node 20+/npm 10+.
- No Git hooks are configured; linting/testing occurs via manual commands or CI.
- Keep environment examples generic (no secrets), and prefer root-level configs unless a workspace needs overrides.

## Extension Points
- Add more workspaces under `apps/` by cloning `Launcher/`.
- Populate `shared/` with reusable helpers while keeping them domain-agnostic.
- Extend CI to cover new scripts as they are introduced.

Use this snapshot to maintain structural integrity as the template evolves.