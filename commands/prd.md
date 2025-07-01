Create Product Requirements Document: $ARGUMENTS

Process:
1. **Feature Analysis** - Analyze the requested feature: "$ARGUMENTS"
2. **Research Prompt Generation** - Create deep research prompt for user to run in external LLM
3. **Research Execution** - User runs prompt externally, saves results for Claude Code reference
4. **Clarifying Questions** - Use ./tasks/create-prd.md Q&A process to gather requirements
5. **PRD Generation** - Create comprehensive PRD incorporating research and responses
6. **Save Document** - Save as ./tasks/prd-[feature-name].md
7. **Ready for Tasks** - PRD ready for ./tasks/generate-tasks.md workflow

**Research Prompt:**
Generate comprehensive research prompt covering:
- Market analysis and competitive landscape
- Technical implementation approaches and best practices
- User experience patterns and design considerations
- Potential challenges and edge cases
- Industry standards and accessibility requirements

**Q&A Areas:**
- Problem/Goal the feature solves
- Target users and user stories  
- Core functionality and acceptance criteria
- Scope boundaries and non-goals
- Data requirements and design considerations

**Research Integration:**
User provides research results location for Claude Code to reference during PRD creation.

Structured PRD creation with external research integration and ./tasks/create-prd.md Q&A methodology.