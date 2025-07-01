Work on project tasks: $ARGUMENTS

Process:
0. **Context Setup** - Review global CLAUDE.md and project CLAUDE.md for rules and context
1. **Task Generation** - Use ./tasks/generate-tasks.md with embedded complexity assessment
2. **Complexity Analysis** - Score scope/technical/risk factors, determine execution strategy
3. **Branch Setup** - Create feature branch: `git checkout -b task-[feature-name]`
4. **Dual Tracking Setup** - Initialize both TodoWrite AND ./tasks/$TASK_NAME.md file  
5. **Execution** - Follow ./tasks/process-tasks.md dual tracking protocol
6. **Sync Maintenance** - Keep TodoWrite and task files synchronized throughout
7. **Completion** - Mark complete in both systems, create PR, archive file to ./tasks/completed/

**Integrated Workflow:**
- Feature branch created for isolated development
- Complexity assessment drives subtask count and model recommendations
- Parallel execution opportunities identified during planning
- TodoWrite provides internal awareness, task files provide project documentation
- Both systems maintained in perfect sync during execution
- PR created for code review, completed tasks archived for project history

Universal task workflow with GitHub integration, embedded complexity analysis and dual tracking system.