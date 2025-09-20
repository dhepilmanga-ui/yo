# Workflow Checklists

Use these task checklists to stay aligned. Always tick items mentally (or in notes) before moving on.

## Create a New Module Workspace
- [ ] Duplicate `apps/Launcher` to `apps/<ModuleName>`.
- [ ] Rename the workspace in `apps/<ModuleName>/package.json` and adjust scripts/ports.
- [ ] Add the new workspace path to the root `package.json` `workspaces` array if needed.
- [ ] Update root scripts if they should reference the new workspace.
- [ ] Copy `.env.local.example` and tailor it for the module.
- [ ] Run `npm install` if package manifests changed.
- [ ] Execute `npm run lint`, `npm run typecheck`, and `npm run build` to confirm success.
- [ ] Document the addition in `_AI_AGENT_PLAYBOOK_/Changelog.md`.

## Update Shared Utilities
- [ ] Identify which shared files under `shared/` must change and why.
- [ ] Keep APIs minimal; if adding helpers, explain usage in code comments or README.
- [ ] Ensure TypeScript path aliases still resolve (`tsconfig.base.json`).
- [ ] Run `npm run typecheck` to catch signature regressions.
- [ ] Update any affected module imports.
- [ ] Note the change in `Changelog.md` with the reason.

## Maintain CI / Tooling
- [ ] Review `.github/workflows/ci.yml` for alignment with available scripts.
- [ ] When modifying scripts, ensure `package.json` and docs stay in sync.
- [ ] Run the workflow commands locally where feasible (lint, test, build).
- [ ] Simplify rather than complicate—this template should stay approachable.
- [ ] Record updates in `Changelog.md` and adjust docs if behavior changed.

Add new sections here as recurring tasks emerge.
