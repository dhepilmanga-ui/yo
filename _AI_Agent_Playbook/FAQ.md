# Agent FAQ

**Q: What environment assumptions should I make?**  
A: Use Node 20+ and npm 10+. Avoid adding binaries or OS-specific scripts.

**Q: Do I need user approval for commands?**  
A: Check the session context; follow the provided `approval_policy`, sandbox, and network notes. Never assume escalation is allowed.

**Q: Which validation commands are mandatory?**  
A: Run the standard set for affected workspaces: `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`. The test script already includes `--passWithNoTests` so empty suites are acceptable, but still record the command.

**Q: How should I handle dependencies?**  
A: Keep the template lightweight. Justify any new dependency in the completion report and update `Changelog.md`.

**Q: Where do I document changes?**  
A: Add a short entry to `_AI_Agent_Playbook/Changelog.md` (date + reason). Update other docs if more detail is needed.

**Q: What if instructions conflict?**  
A: Raise the conflict immediately in your report. Do not guess; ask the user or controlling process for clarification.

