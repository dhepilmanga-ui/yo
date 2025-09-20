# Architecture Overview

## Repository Shape
- `package.json` – npm workspace root with scripts targeting the Launcher scaffold.
- `package-lock.json` – lockfile trimmed to dependencies required for the template shell.
- `apps/Launcher` – minimal React + Vite starter to clone for new modules.
- `shared/` – stubbed utilities, styles, and docs demonstrating the `@shared/*` alias.
- `netlify.toml` – shared redirects/headers suitable for every derived module deployment.
- `_AI_AGENT_PLAYBOOK_/` – automation playbooks and history (this folder).

## Tooling Stack
- TypeScript compiler config aggregated via `tsconfig.base.json`.
- Vite 7 for dev/build (`apps/Launcher/vite.config.ts`).
- ESLint 9 + Prettier 3 for lint/format commands.
- Vitest 3 for tests (no samples yet—add when practical).

## Conventions
- Path alias `@shared/*` resolves to `shared/*` from any workspace.
- Scripts assume Node 20+/npm 10+.
- No Git hooks are configured; linting is manual/CI driven.
- Keep environment examples generic (no secrets).

## Extension Points
- Add more workspaces under `apps/` following the Launcher pattern.
- Populate `shared/` with reusable helpers but keep them domain-agnostic.
- Expand CI to cover additional scripts as they are introduced.

Use this snapshot to maintain structural integrity as the template evolves.
