Please coordinate parallel development work: $ARGUMENTS

Refocus on global CLAUDE.md and project CLAUDE.md for context and rules.

Follow these steps:

1. **Create Workspace** - `mkdir -p /parallel/$ARGUMENTS`
2. **Task Breakdown** - Document in `/parallel/$ARGUMENTS/plan.md`
3. **GitHub Worktrees** - Use `gh repo clone` and `git worktree add` for each stream
4. **Coordination** - Create `/parallel/$ARGUMENTS/coordination.md` with:
   - Worktree assignments
   - Dependencies and merge strategy
   - Progress tracking
5. **Execute & Merge** - Work systematically, document in coordination file
6. **Cleanup** - `git worktree remove` but keep documentation

Use GitHub-native worktree management for parallel development.