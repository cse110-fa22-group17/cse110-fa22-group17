# CI/CD Pipeline - Phase 2

## Checkpoint 2 - 11/29
## Updated - 12/2

## What is currently functional
- Pull requests: human review
  - Manual code quality via human review
  - Last step before new changes will be officially merged onto the main branch

- ESLint: linting
  - Static code analysis tool for identifying problematic patterns found in JavaScript code
  - Linting will run on pull requests and pushes to main

- Codacy: code analysis
  - Automated code analysis/quality tool that helps ship better software, faster
    - Analyzes each commit or pull request by running all supported static code analysis tools for the languages found in your repository.
    - Codacy dashboard also goes into depth about code analysis.
  - Code quality checks can reflect any branch

- Jest: unit testing
  - JavaScript testing framework 
  - Unit testing will run on pull requests and pushes to main

- GitHub Pages: deployment
  - Continuous deployment, on pushes to main, of webapp hosted on GitHub pages
  - GitHub pages only reflects changes on the main branch

- JSDocs: documentation 
  - Markup language used to annotate JavaScript source code files
  - Documentation will be created on pushes to the main branch