# Gyft Ninja Project Board Workflow

This board is designed for a single human developer collaborating with multiple AI/automation agents. It provides a clear, simple workflow for tracking all work on the project.

## Board Columns

1. **Backlog**
   - Ideas, future features, and tasks not yet prioritized.
2. **To Do**
   - Prioritized tasks ready to be worked on next.
3. **In Progress (Human)**
   - Tasks the human developer is actively working on.
4. **In Progress (Agent)**
   - Tasks being handled by AI/automation agents.
5. **Review**
   - Work completed and awaiting review/acceptance by the project owner.
6. **Done**
   - Completed and accepted work.

## How to Use This Board
- Move issues from **Backlog** to **To Do** as they are prioritized.
- Assign issues to yourself (human) or label as `agent` for AI/automation tasks.
- Move issues to the appropriate **In Progress** column when work begins.
- When work is complete, move the issue to **Review** for owner acceptance.
- Once accepted, move the issue to **Done**.

## Recommended Labels
- `agent` — Task for an AI/automation agent
- `human` — Task for the human developer
- `needs-review` — Awaiting owner review
- `blocked` — Blocked by another task or dependency
- `priority` — High-priority task
- `documentation` — Documentation-related work
- `bug` — Bug or defect
- `feature` — New feature

## Suggested Automation Rules
- When an issue is closed, automatically move it to **Done**.
- When an issue is assigned to the project owner, move it to **Review**.
- When an issue is labeled `agent`, move it to **In Progress (Agent)**.
- When an issue is labeled `human`, move it to **In Progress (Human)**.
- When an issue is labeled `needs-review`, move it to **Review**.

> Note: Automation can be set up in the board settings (if using GitHub Projects Beta) or with third-party tools/bots for classic boards.

---

For more details on project standards and workflow, see [architecture_standards.md](architecture/architecture_standards.md) and the `.cursor/rules` directory. 