# Installation Guide

## 🚀 **Recommended: Ask Claude to Set This Up**

Point Claude Code to this repository and ask it to review and install the system. This ensures proper setup and configuration.

---

## Manual Installation

### Prerequisites
- Claude Code CLI installed and configured
- Git with GitHub CLI (`gh`) installed  
- Basic familiarity with [slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- **Global CLAUDE.md configured** - This system assumes you have `~/.claude/CLAUDE.md` with your development principles

### Platform Support
- **Linux**: Native support
- **macOS**: Native support  
- **Windows**: Use WSL (Claude Code not yet available natively)

## Step 1: Download CCCT
```bash
git clone https://github.com/[username]/Claude-Code-Commands-Tasks.git
cd Claude-Code-Commands-Tasks
```

## Step 2: Install Commands

### Option A: Global Installation (Recommended)
Install once, use everywhere:

```bash
# Create global commands directory
mkdir -p ~/.claude/commands

# Copy all commands
cp commands/*.md ~/.claude/commands/
```

### Option B: Project Installation
Install per-project for team-specific workflows:

```bash
# Create project commands directory  
mkdir -p .claude/commands

# Copy all commands
cp commands/*.md .claude/commands/
```

**Verify installation:**
```bash
ls ~/.claude/commands/  # or .claude/commands/ for project install
```
Should show: `claude.md dev.md explore.md parallel.md prd.md review.md setup.md sub.md todo.md`

## Step 3: Install Task Templates (Per Project)
For each project where you want to use CCCT:

```bash
# Navigate to your project directory
cd /path/to/your/project

# Create tasks directory
mkdir -p ./tasks

# Copy task templates
cp /path/to/CCCT/tasks/*.md ./tasks/
```

**Verify project installation:**
```bash
ls ./tasks/
```
Should show: `create-prd.md generate-tasks.md process-tasks.md`

## Step 4: Test Installation
Start Claude Code in your project and test the new initialization workflow:

```bash
claude
```

### **Important: New Initialization Workflow**
**Instead of the default `/init` command, use:**
```
/setup
```
Followed by:
```
/explore
```

This `/setup` + `/explore` combination provides:
- Better project understanding than default `/init`
- Proper CLAUDE.md configuration
- Template installation
- Comprehensive codebase analysis

You should see the project initialization workflow begin with `/setup`.

## Troubleshooting

### Commands not recognized
- Ensure files are in `~/.claude/commands/` not `~/.claude/commands/commands/`
- Check file permissions: `chmod +r ~/.claude/commands/*.md`
- Restart Claude Code

### Task templates not found  
- Ensure templates are in `./tasks/` relative to your project root
- Check the project has a `.claude/` directory for Claude Code integration

### GitHub integration not working
- Install GitHub CLI: `gh auth login`
- Verify git is configured: `git config --global user.name` and `git config --global user.email`

## Customization

### Adding Project-Specific Commands
Create project-specific commands in `.claude/commands/` within your project:
```bash
mkdir -p .claude/commands
echo "Your custom command" > .claude/commands/custom.md
```

### Modifying Templates
Edit templates in `./tasks/` to match your project's specific needs while maintaining the core structure.

## Uninstallation

### Remove Commands
**Global installation:**
```bash
rm ~/.claude/commands/{claude,dev,explore,parallel,prd,review,setup,sub,todo}.md
```

**Project installation:**
```bash
rm .claude/commands/{claude,dev,explore,parallel,prd,review,setup,sub,todo}.md
```

### Remove Project Templates  
```bash
rm ./tasks/{create-prd,generate-tasks,process-tasks}.md
```

## Next Steps
- Read the main README.md for workflow overview
- Try `/setup` in a new project
- Create your first PRD with `/prd [feature-name]`
- Execute tasks with `/todo [task-name]`