---
description: Generate structured task lists with embedded complexity analysis
globs: **/*
alwaysApply: false
---
# Rule: Task Generation with Integrated Complexity Assessment

## Goal
Guide AI in creating actionable task lists with embedded complexity analysis that drives practical decisions on task breakdown, model selection, and execution approach.

## Quick Complexity Assessment

**Score each factor (1-4):**
- **Scope**: Components affected (1=single, 2=few, 3=multiple, 4=system-wide)
- **Technical**: Implementation type (1=CRUD, 2=logic, 3=integration, 4=architecture)  
- **Risk**: Breakage potential (1=isolated, 2=connected, 3=shared state, 4=core system)

**Total Score → Decisions:**
- **Low (3-6)**: 2-3 subtasks | Sonnet capable | Parallel-friendly
- **Medium (7-9)**: 4-6 subtasks | Sonnet+planning | Mixed execution
- **High (10-12)**: 7+ subtasks | Consider Opus | Sequential execution

## Parallelization Quick Check
- ✅ **Parallel-Safe**: New components, independent features, separate endpoints
- ❌ **Sequential-Required**: Shared state changes, database schema, core refactoring

## Process

1. **Analyze Requirements**: Read PRD/specifications
2. **Complexity Assessment**: Score scope, technical, risk factors
3. **Execution Strategy**: Determine subtask count, model needs, parallel opportunities
4. **Task Breakdown**: Generate appropriate number of actionable subtasks
5. **File Creation**: Save as `/tasks/tasks-[feature-name].md`

## Task List Structure

```markdown
# Implementation: [Feature Name]
*Based on: [source-document]*

## Complexity Assessment
- **Scope**: [1-4] - [brief reasoning]
- **Technical**: [1-4] - [brief reasoning]  
- **Risk**: [1-4] - [brief reasoning]
- **Total**: [3-12] - [Low/Medium/High]

## Execution Strategy
- **Subtasks**: [count] based on complexity
- **Model**: Sonnet | Sonnet+planning | Consider Opus
- **Parallel**: Yes | Mixed | Sequential
- **Components**: [list of parallel-safe components if applicable]

## Implementation Tasks

### Task 1: [Name]
**Parallel-Safe**: Yes/No | **Dependencies**: [list]

- [ ] 1.1 [Specific subtask]
- [ ] 1.2 [Another subtask]
- [ ] 1.3 [Final subtask]

### Task 2: [Name]  
**Parallel-Safe**: Yes/No | **Dependencies**: [Task 1]

- [ ] 2.1 [Subtask]
- [ ] 2.2 [Subtask]

[Continue based on complexity assessment...]

## Relevant Files
- `path/to/file.ext` - Purpose
- `path/to/another.ext` - Purpose

## Notes
- Follow existing codebase patterns
- Maintain component modularity
- Test coverage required
```

## Guidelines

- **Subtask Sizing**: 2-4 hours each, specific and actionable
- **Parallel Identification**: Mark components that can be built independently  
- **Dependency Mapping**: Clear prerequisites between tasks
- **Model Guidance**: High complexity tasks may benefit from Opus reasoning
- **Validation**: Include testing and acceptance criteria
- **File Planning**: Identify creation/modification targets early