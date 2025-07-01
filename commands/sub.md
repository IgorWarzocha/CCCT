Please handle task using multiple parallel subagents concurrently: $ARGUMENTS

Review global CLAUDE.md and project CLAUDE.md for rules and context

Auto-analyze the task complexity and determine optimal number of subagents needed.

**Task Analysis Process:**
1. **Complexity Assessment** - Evaluate scope, dependencies, and parallelizable components
2. **Subagent Planning** - Determine how many subagents needed (2-6 typically optimal)
3. **Work Distribution** - Break task into independent, parallel workstreams
4. **Coordination Strategy** - Plan how subagents will work together without conflicts

**Subagent Allocation Guidelines:**
- **Simple tasks (1-2 files)**: 2 subagents
- **Medium tasks (3-8 files)**: 3-4 subagents  
- **Complex tasks (9+ files)**: 4-6 subagents
- **Research-heavy tasks**: 2-3 subagents (search/analysis/synthesis)
- **Full-stack features**: 4+ subagents (backend/frontend/tests/docs)

**Execution Process:**
1. **Launch subagents concurrently** using Task tool with detailed, independent prompts
2. **Monitor progress** - Track each subagent's work without micromanaging
3. **Coordinate dependencies** - Ensure subagents don't conflict or duplicate work
4. **Synthesize results** - Combine all subagent outputs into cohesive solution
5. **Quality check** - Verify integration and consistency across all work
6. **Present unified results** - Summary of all parallel work completed

**Key Requirements:**
- ALWAYS use multiple subagents concurrently (never sequential)
- Each subagent gets independent, detailed task specification
- Avoid task overlap or conflicts between subagents
- Synthesize all results into coherent final output

Maximize development velocity through intelligent parallel processing.