# Agent FAQ

**Q: What environment assumptions should I make?**
A: Use Node 20+ and npm 10+. Avoid adding binaries or system-specific scripts.

**Q: Do I need user approval for commands?**
A: Check the session context; follow the provided `approval_policy` and sandbox notes. Never assume escalation is allowed.

**Q: Which validation commands are mandatory?**
A: At minimum run `npm run lint`, `npm run typecheck`, and `npm run build` for impacted workspaces unless the task explicitly says otherwise. Document what you ran.

**Q: How should I handle dependencies?**
A: Keep the template lightweight. Justify any new dependency in the completion report and update `Changelog.md`.

**Q: Where do I document changes?**
A: Update `_AI_AGENT_PLAYBOOK_/Changelog.md` with a short entry (date + reason). If docs need more detail, add or edit sections in this folder.

**Q: What if instructions conflict?**
A: Raise the conflict in your report immediately. Do not guess—seek clarification from the controlling process or user.
