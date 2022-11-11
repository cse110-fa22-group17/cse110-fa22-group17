# CI/CD Pipeline - Phase 1

## Checkpoint 1 - 11/14

## What is currently functional
- Pull Requests
  - Manual code quality via human review
  - Last step before new changes will be officially merged onto the main branch

- ESLint 
  - Static code analysis tool for identifying problematic patterns found in JavaScript code
  - Linting will run on pull requests

- Codacy
  - Automated code analysis/quality tool that helps ship better software, faster
  - Code quality checks will run on pull requests

- Jest
  - JavaScript testing framework 
  - Unit testing will run on pull requests

## What is planned (in progress)
- Jest
  - Implementation might be modified based on lab (Lab Week 8 - Unit & E2E Testing)

- JSDocs
  - Markup language used to annotate JavaScript source code files
  - Documentation would be created on successful merging

## Current pipeline workflow
![Workflow Diagram](./phase1.png)