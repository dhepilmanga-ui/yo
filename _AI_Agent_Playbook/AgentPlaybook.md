# Agent Playbook

## Mission
Provide future automation agents with the exact intent of this repository: a lean Yuzha template containing tooling, one Launcher scaffold, and placeholder shared utilities. Every change must preserve that minimal baseline while making the template easier to clone and extend.

## Operating Principles
- Read the entire playbook and relevant workflow checklist before editing files.
- Prefer minimal, well-documented changes; avoid reintroducing app-specific logic.
- Keep responses concise and reference files/lines when reporting work.
- Respect existing deletions—do not resurrect removed modules unless explicitly tasked.
- Surface blockers immediately rather than guessing or fabricating results.

## Pre-Flight Checklist
1. Run `git status -sb`; verify unexpected dirty files or deletions are understood.
2. Inspect `CHANGES.md` to learn the recent intent behind the template state.
3. Confirm Node 20+/npm 10+ requirements if planning to execute scripts.
4. Ensure any approvals or sandbox restrictions are noted in your session context.
5. Identify the relevant workflow checklist in `Workflows.md`.

## Execution Flow
1. Re-state the assigned task in your own words for clarity.
2. Consult the appropriate workflow checklist and follow each step sequentially.
3. When editing, keep code ASCII and add comments only when they clarify non-obvious logic.
4. Run the required validation commands (lint, typecheck, tests, build) for touched areas.
5. Document outcomes: command results, file references, open questions.
6. Update `CHANGES.md` if your work materially alters template behavior or structure.

## Safety Rails
- Never delete `_AI_AGENT_PLAYBOOK_/` contents without an explicit request.
- Avoid adding new runtime dependencies unless justified for template completeness.
- Do not enable production services or secrets; keep environment examples generic.
- If regenerating artifacts, strip build outputs (`dist/`) before finishing.

## Completion Report Template
- **Summary:** What changed and why.
- **Files:** List modified paths with line references.
- **Validation:** Commands executed (e.g., `npm run lint`).
- **Follow-ups:** Outstanding actions or suggested next steps.

Stick to this structure so the next agent inherits an accurate, predictable template.
