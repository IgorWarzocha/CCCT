# Claude Code Commands & Tasks (CCCT)

Professional workflow system for Claude Code with universal slash commands and integrated task management.

## 🚀 **Recommended Setup**

**Instead of manual installation, point Claude Code to this GitHub repository and ask it to discuss and set up the system for you. This is much faster and ensures proper configuration.**

Example: *"Please review the CCCT repository at https://github.com/IgorWarzocha/CCCT, discuss what it does, and set it up for me."*

---

## What Are Slash Commands?

Slash commands are custom instructions that extend Claude Code's functionality. They're markdown files containing workflows that Claude follows when you type `/command-name`. 

**Learn more**: [Claude Code Slash Commands Documentation](https://docs.anthropic.com/en/docs/claude-code/slash-commands)

## About This System

This system builds upon excellent foundations from:
- **[claude-task-master](https://github.com/eyaltoledano/claude-task-master)** - Task management concepts
- **[ai-dev-tasks](https://github.com/snarktank/ai-dev-tasks)** - Development workflow patterns

### Installation Options

**Global Commands (Recommended)**: Install once, use everywhere
```bash
cp commands/*.md ~/.claude/commands/
```

**Project Commands**: Install per-project for team-specific workflows  
```bash
cp commands/*.md .claude/commands/
```

## Available Commands

### Core Workflow
- `/setup` - Initialize/update project using your existing global CLAUDE.MD & /explore
- `/prd [feature]` - Create Product Requirements Document with research integration
- `/todo [task]` - Execute tasks with dual tracking and GitHub integration
- `/dev [issue]` - Development workflow with auto-detection and branching

### Development Tools
- `/explore [area]` - Comprehensive codebase exploration
- `/review [code]` - Structured code review workflow
- `/sub [agents]` - Manage multiple AI agents - smaller tasks
- `/parallel [work]` - Coordinate parallel development - bigger tasks

### Utilities
- `/claude` - Refocus on CLAUDE.md context files

## Workflow Overview

**Professional Development Chain:**
```
/setup → /explore → /prd [feature] → /todo [task] → /dev [issues] → /review
```

**Step-by-step:**
1. **`/setup`** - Initialize project with CLAUDE.md and templates
2. **`/explore`** - Deep codebase analysis and documentation
3. **`/prd [feature]`** - Research-driven requirements creation
4. **`/todo [task]`** - Task execution with complexity analysis
5. **`/dev [issues]`** - TDD workflow with GitHub integration  
6. **`/review`** - Structured code review process

## Key Features

### 🎯 **Integrated Complexity Analysis**
- Automatic task breakdown based on scope, technical, and risk factors
- Model recommendations (Sonnet vs Opus)
- Parallel execution identification

### 🔄 **Dual Tracking System**
- TodoWrite for Claude's internal awareness
- File system documentation for project history
- Perfect synchronization between both systems

### 🌐 **GitHub Integration**
- Automatic branch management
- Pull request creation
- Issue tracking and resolution

### 🧠 **AI-First Design**
- Modular component architecture
- Lean and mean implementations
- Research-driven PRD creation

### 📋 **Professional Templates**
- Structured task generation
- Comprehensive PRD framework
- Code review checklists

## Advanced Usage

### Research-Driven PRDs
The `/prd` command generates research prompts for external LLM investigation:
1. Analyzes your feature request
2. Creates comprehensive research prompt
3. You run research in your preferred LLM
4. Claude Code incorporates findings into PRD

### Complexity-Driven Task Breakdown
Tasks are automatically sized based on complexity assessment:
- **Low (3-6)**: 2-3 subtasks, Sonnet capable, parallel-friendly
- **Medium (7-9)**: 4-6 subtasks, Sonnet+planning, mixed execution  
- **High (10-12)**: 7+ subtasks, consider Opus, sequential execution

### Parallel Development Support
- Identifies components that can be built independently
- Coordinates multiple development streams
- Prevents merge conflicts through smart task allocation

## File Structure

```
CCCT/
├── README.md           # System overview and quick start
├── INSTALL.md          # Detailed installation instructions  
├── SUMMARY.md          # Complete system architecture and innovations
├── ACKNOWLEDGMENTS.md  # Credits and inspirations
├── commands/           # 9 Universal slash commands
│   ├── claude.md      # Context refocus
│   ├── dev.md         # Development workflow with branching
│   ├── explore.md     # Codebase exploration
│   ├── parallel.md    # Parallel coordination
│   ├── prd.md         # PRD creation with research integration
│   ├── review.md      # Code review workflow
│   ├── setup.md       # Project initialization
│   ├── sub.md         # Subagent management
│   └── todo.md        # Task execution with dual tracking
└── tasks/             # 3 Integrated task templates
    ├── create-prd.md  # PRD generation with Q&A
    ├── generate-tasks.md # Task breakdown with embedded complexity
    └── process-tasks.md  # Dual tracking execution protocol
```

## Requirements

- Claude Code CLI installed and configured
- **Global CLAUDE.md file** at `~/.claude/CLAUDE.md`
- Git with GitHub CLI (`gh`) installed and authenticated
- Project with `.claude/` directory support

## Cross-Platform Support

**Supported Operating Systems:**
- Linux  
- macOS
- Windows via WSL (Claude Code not yet available natively on Windows)

**Path Conventions:**
- All commands use universal path formats (`~/.claude/`, `./tasks/`)
- **Windows**: Currently requires WSL (Claude Code not yet available natively)
- Relative paths ensure portability across different project structures

## Global CLAUDE.MD

Here's my global CLAUDE.MD if you're brave enough. You'll need to change some things.

```
# Sys
Headless Linux | VS Code via SSH

# Rules
No breadcrumbs: cleanup test scripts
Dev principles: test=ask | new port => chk avail | modularity | MVP focus | no-cost | sudo→ask | simplicity>complexity | TDD: tests→commit→code→iterate→commit | no test mods | no mocks | no inline CSS | use existing test tools
Components: React/Python=small reusable modules | never remove features to simplify | fix code not tests 
AI-first: code for AI not humans, lateral thinking, math/functional, standard hw/sw only
Tools: prefer modern/performance | use existing when poss | sugg new global tools
Tool usage: maximum efficiency: multiple operations = invoke tools simultaneously | sequential use forbidden
Comments: only major sections | max 2-3 words | non-verbose
```

## License

Open source - designed for the Claude Code community.