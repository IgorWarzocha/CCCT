---
description: Guide for creating Product Requirements Documents (PRDs)
globs: **/*
alwaysApply: false
---
# Rule: Generating a Product Requirements Document (PRD)

## Goal

To guide an AI assistant in creating a detailed Product Requirements Document (PRD) in Markdown format, based on an initial user prompt. The PRD should be clear, actionable, and suitable for developers to understand and implement the feature.

## Process

1. **Receive Initial Prompt:** The user provides a brief description or request for a new feature or functionality.
2. **Ask Clarifying Questions:** Before writing the PRD, the AI *must* ask clarifying questions to gather sufficient detail. The goal is to understand the "what" and "why" of the feature, not necessarily the "how" (which the developer will figure out). Make sure to provide options in letter/number lists so the user can respond easily with selections.
3. **Generate PRD:** Based on the initial prompt and the user's answers to the clarifying questions, generate a PRD using the structure outlined below.
4. **Save PRD:** Save the generated document as `prd-[feature-name].md` inside the `/tasks` directory.

## Clarifying Questions (Examples)

The AI should adapt its questions based on the prompt, but here are some common areas to explore:

* **Problem/Goal:** "What problem does this feature solve for the user?" or "What is the main goal we want to achieve with this feature?"
* **Target User:** "Who is the primary user of this feature?"
* **Core Functionality:** "Can you describe the key actions a user should be able to perform with this feature?"
* **User Stories:** "Could you provide a few user stories? (e.g., As a [type of user], I want to [perform an action] so that [benefit].)"
* **Acceptance Criteria:** "How will we know when this feature is successfully implemented? What are the key success criteria?"
* **Scope/Boundaries:** "Are there any specific things this feature *should not* do (non-goals)?"
* **Data Requirements:** "What kind of data does this feature need to display or manipulate?"
* **Design/UX Considerations:** "Are there any specific design requirements or user experience considerations?"
* **Technical Constraints:** "Are there any technical limitations or requirements we should be aware of?"
* **Integration Points:** "Does this feature need to integrate with existing systems or external services?"
* **Performance/Scale:** "What are the expected performance requirements or scale considerations?"

## PRD Structure

Generate the PRD using this structure:

```markdown
# Product Requirements Document: [Feature Name]
## [Brief descriptive subtitle]

---

## 1. Introduction/Overview
Brief summary of the feature and its purpose.

## 2. Goals
### Primary Goals
- Goal 1
- Goal 2
- Goal 3

### Success Metrics
- How will success be measured?
- Key performance indicators
- Acceptance criteria

## 3. User Stories
### Primary Users: [User type(s)]

**As a [user type], I want to:**
- User story 1
- User story 2
- User story 3

## 4. Functional Requirements
1. The system must...
2. The system must...
3. The system must...
[Continue numbering for all requirements]

## 5. Non-Goals (Out of Scope)
### MVP Phase Exclusions
- Feature/functionality that won't be included in initial release

### Permanent Exclusions
- Features that are intentionally excluded from this project

## 6. Design Considerations
### UI/UX Requirements
- Design specifications
- User experience considerations
- Accessibility requirements

### Component Standards
- Consistent patterns to follow
- Design system considerations

### Performance Standards
- Performance requirements
- Response time expectations

## 7. Technical Considerations
### Architecture Dependencies
- Required technologies, frameworks, libraries
- Database requirements
- API dependencies

### Integration Requirements
- External system integrations
- Authentication/authorization needs
- Data flow requirements

### Performance Optimization
- Scalability considerations
- Caching strategies
- Optimization requirements

## 8. Success Metrics
### User Experience Metrics
- Usability measures
- User satisfaction indicators

### System Performance Metrics
- Technical performance indicators
- Reliability measures

### Business Impact Metrics
- Business value measurements
- ROI indicators

## 9. Open Questions
### Implementation Priorities
- Q1: [Question about implementation]
- Q2: [Question about technical approach]

### User Experience Decisions
- Q3: [Question about UX]
- Q4: [Question about design]

## Implementation Priority
### Phase 1: MVP Core (Timeline)
- Core functionality to be delivered first

### Phase 2: Enhanced Features (Timeline)
- Additional features for future phases

**Target**: [Summary of delivery goal and timeline]
```

## Guidelines

- Keep requirements explicit and unambiguous
- Target the PRD for junior-to-mid-level developers
- Focus on the "what" and "why" rather than the "how"
- Be thorough but avoid over-specification
- Include realistic timelines and phases
- Consider both technical and business requirements
- Ensure requirements are testable and measurable