---
description: Dual tracking task execution protocol (TodoWrite + file system)
globs: **/*
alwaysApply: false
---
# Task Processing with Dual Tracking

## Dual Tracking System

**CRITICAL**: Maintain both systems simultaneously:
- **TodoWrite**: Internal Claude awareness and progress tracking
- **File System**: Project documentation in `./tasks/$TASK_NAME.md`

## Task Initialization

1. **Create Feature Branch**: `git checkout -b task-[feature-name]` for isolated development
2. **Create TodoWrite Entry**: Initialize internal tracking with subtasks
3. **Create Task File**: Create `./tasks/$TASK_NAME.md` using template below
4. **Sync Initial State**: Ensure both systems reflect same starting point

### Task File Template
```markdown
# Task: [Feature Name]
**Status**: In Progress | Completed
**Complexity**: Low | Medium | High ([score])
**Model Used**: Sonnet | Opus
**Parallel Capable**: Yes | No

## Subtasks
- [ ] 1.1 [Subtask name]
- [ ] 1.2 [Another subtask]
- [ ] 1.3 [Final subtask]

## Progress Notes
[Real-time updates during execution]

## Files Modified/Created
- `path/to/file.ext` - Purpose

## Completion Summary
[Final summary when all subtasks done]
```

## Execution Protocol

### For Each Subtask:

1. **Update TodoWrite**: Mark subtask as in_progress
2. **Update Task File**: Add progress note to file
3. **Execute Work**: Implement the subtask
4. **Dual Completion**:
   - Mark complete in TodoWrite
   - Update task file: `[ ]` → `[x]` and add completion note
5. **Sync Check**: Verify both systems show same progress

### Sub-task Completion Protocol

**When finishing a sub-task:**
1. **Mark in Both Systems**: `[x]` in file AND TodoWrite complete
2. **Update Progress**: Add accomplishment note to task file
3. **Check Dependencies**: Note any unblocked tasks
4. **Ask Permission**: "Ready for next subtask?" (respect step-by-step protocol)

### Parent Task Completion Protocol

**When ALL subtasks complete:**

1. **Pre-Commit Validation**:
   ```bash
   # Run appropriate tests for project
   pytest                # Python
   npm test             # Node.js  
   npm run lint         # Linting
   npm run typecheck    # TypeScript
   ```

2. **Only if tests pass**:
   ```bash
   git add .
   git commit -m "feat: implement [feature name]" \
              -m "- [Brief accomplishment 1]" \
              -m "- [Brief accomplishment 2]" \
              -m "- [Brief accomplishment 3]" \
              -m "Completes Task from [source document]"
   ```

3. **Create Pull Request**:
   ```bash
   git push -u origin task-[feature-name]
   gh pr create --title "feat: [feature name]" --body "Implements [brief description]"
   ```

4. **Complete in Both Systems**:
   - TodoWrite: Mark parent task complete
   - Task File: Update status to "Completed", add completion summary

5. **Archive**: Move `./tasks/$TASK_NAME.md` to `./tasks/completed/`

## File System Sync Requirements

**Always maintain**:
- Task file reflects current TodoWrite status
- Progress notes updated in real-time
- Completion status synchronized
- File modifications list kept current

## Communication Protocol

### Before Each Subtask
"Ready to proceed with [task X.Y]? This will update both TodoWrite and ./tasks/[name].md"

### After Each Subtask  
"✅ Completed [task X.Y] - updated in both TodoWrite and task file. [Brief accomplishment]. Ready for next?"

### File Tracking
Keep `## Files Modified/Created` section current throughout execution.

## Quality Standards

- **Code Quality**: Follow existing patterns, include tests
- **Documentation**: Update both internal tracking and project files
- **Testing**: Full test suite before any commits
- **Sync Integrity**: Never let TodoWrite and files diverge

## Emergency Procedures

### Sync Drift
If TodoWrite and task files get out of sync:
1. Pause execution
2. Manually reconcile differences  
3. Update both to match reality
4. Resume with proper dual tracking

### Test Failures
1. Do NOT commit
2. Do NOT mark tasks complete in either system
3. Fix issues, re-test
4. Only then proceed with dual completion

## Guidelines

- **Atomic Updates**: Change both systems together
- **Real-time Sync**: Don't batch updates
- **Documentation**: Task file is permanent project record
- **Internal Tracking**: TodoWrite for Claude's working memory
- **Archive System**: Completed tasks moved to `./tasks/completed/`
- **Dependency Awareness**: Update both systems when dependencies change