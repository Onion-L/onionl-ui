 English | [中文](./CONTRIBUTING-zh.md)
# Contributing Guide

Thank you for considering contributing to Onionl-UI! Here are the guidelines for participating in the project development.

## Code of Conduct

Please ensure your behavior adheres to our code of conduct:
- Maintain respect and inclusivity towards others
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:
- Detailed description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment (OS, browser version, etc.)

### Developing Components

If you want to develop a component, please follow these steps:
1. Check Issues and PR list to ensure no duplicate work
2. Review the [TODO](./TODO.md) file to confirm if the component is in the development plan
3. Create a new Issue describing the component you want to develop
4. Wait for maintainer confirmation and discussion
5. Start development and submit PR

### Proposing New Components

If you have suggestions for new components:
1. First check the issue list to see if it's already proposed
2. Create a new issue with detailed feature description
3. Explain why this feature would be valuable to the project

### Submitting Code

1. Fork the repository

```bash
git clone https://github.com/Onion-L/onionl-ui.git
```

2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m 'add some feature'
```

4. Push to the branch
```bash
git push origin feature/AmazingFeature
```

5. Create a Pull Request

#### Commit Convention

Commit messages should follow this format:
- `feat`: New feature
- `fix`: Bug fix
- `wip`: Work in progress
- `docs`: Documentation changes
- `style`: Code style changes
- `lint`: Lint-related changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test case modifications
- `chore`: Other changes
- `build`: Build-related changes
- `ci`: CI-related changes

Example: `feat: add new component`

### Code Style

- Write code in TypeScript
- Follow the project's established code style
- Ensure code passes ESLint checks
- Write tests for new features
- Keep code concise, following DRY principles

### Development Process

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Run tests:
```bash
npm run test
```

4. Build project:
```bash
npm run build
```

## Pull Request Process

1. Ensure PR description clearly states the changes and reasons
2. Ensure all automated tests pass
3. Update relevant documentation if applicable
4. Request review from at least one maintainer
5. Make modifications based on feedback

## Getting Help

If you need help during the contribution process:
- Check project documentation
- Ask questions in issues
- Contact project maintainers

Thank you again for your contribution!
