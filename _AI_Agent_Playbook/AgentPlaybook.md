# Agent Playbook

## Mission
Preserve the Yuzha Yo template as a lean baseline: one root launcher workspace, optional modules under `apps/`, and lightweight shared tooling. Every change should make the template easier to clone or maintain without adding domain logic.

## Operating Principles
- Read this playbook and the relevant workflow checklist before editing files.
- Prefer minimal, well-documented changes; keep responses concise with file + line references.
- Respect existing deletions; do not restore removed modules unless explicitly instructed.
- Surface blockers immediately rather than guessing or fabricating results.
- Use ASCII for new content; add comments only when they clarify non-obvious logic.

## Pre-Flight Checklist
1. Run `git status -sb`; understand any unexpected dirty files or deletions.
2. Review `Changelog.md` to learn the latest intent behind the template state.
3. Confirm Node 20+/npm 10+ requirements before executing scripts.
4. Note approval policy, sandbox mode, and network access from the session context.
5. Locate the applicable workflow in `Workflows.md`.

## Execution Flow
1. Restate the assigned task in your own words for clarity.
2. Follow the workflow checklist steps in order; update the plan tool when required.
3. Keep edits scoped and reversible; stage related changes together.
4. Run validation commands for affected workspaces: `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` when appropriate. Remember the test script already uses `--passWithNoTests`.
5. Record command outcomes, file references, and open questions in the completion report.
6. Update `Changelog.md` when behavior or structure changes materially.

## Safety Rails
- Never delete `_AI_Agent_Playbook/` contents without explicit instruction.
- Avoid adding runtime dependencies unless the template truly requires them.
- Do not enable production services or secrets; keep environment examples generic.
- Strip build artifacts (e.g., `dist/`) before handing the repo back.

## Completion Report Template
- **Summary:** What changed and why.
- **Files:** Modified paths with line references.
- **Validation:** Commands executed (e.g., `npm run lint`).
- **Follow-ups:** Outstanding actions or suggested next steps.

Use this playbook to keep the template predictable for the next agent.



