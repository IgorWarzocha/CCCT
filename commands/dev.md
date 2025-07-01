Please handle development task with appropriate workflow: $ARGUMENTS

Refocus on global CLAUDE.md and project CLAUDE.md for context and rules.

Auto-detect workflow based on arguments:
- **Bug reports** (contains "bug", "fix", "error") → Create GitHub issue, use TDD to fix
- **Enhancements** (contains "feature", "add", "enhance") → Create GitHub issue, use TDD to implement  
- **TDD requests** (contains "test", "tdd") → Pure TDD workflow
- **General development** → Standard implementation

Process:
1. **Create appropriate GitHub issue** (if not TDD-only)
2. **Branch Management**: Create feature branch `dev-$ARGUMENTS` or `bugfix-$ARGUMENTS`
3. **TDD Workflow**:
   - Write tests first → commit
   - Implement code → iterate → commit
   - No test modifications, no mocks
4. **Documentation** - Create `/dev/$ARGUMENTS/` workspace
5. **Completion** - Create PR, present issue number and commit summary

Single command handling bug/enhancement/TDD workflows intelligently.