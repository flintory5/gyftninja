# Project Structure

## Overview

This document outlines the organization and structure of the Gyft Ninja web application, explaining the purpose and contents of each directory and key files.

## Root Directory Structure

```
gyftninja/
├── docs/                          # Project-wide documentation
│   └── architecture/              # Architecture standards and guidelines
├── web/                           # Web application (Next.js)
│   ├── __mocks__/                 # Jest mock files
│   ├── __tests__/                 # Root-level test files
│   ├── app/                       # Next.js App Router directory
│   ├── docs/                      # Web-specific documentation
│   ├── public/                    # Static assets
│   ├── reports/                   # Generated reports (coverage, mutation)
│   └── [config files]            # Build and development configuration
└── [git/config files]            # Repository configuration
```

## Web Application Structure (`/web`)

### Core Directories

#### `/app` - Next.js App Router
```
app/
├── __tests__/                     # Component-specific tests
│   └── LandingPage.test.tsx       # Landing page component tests
├── globals.css                    # Global CSS styles
├── layout.tsx                     # Root layout component
├── page.module.css                # Landing page CSS modules
└── page.tsx                       # Landing page component (home route)
```

**Purpose**: Contains the main application code using Next.js 13+ App Router architecture.

- **`layout.tsx`**: Root layout component that wraps all pages, contains metadata and HTML structure
- **`page.tsx`**: Landing page component (maps to `/` route)
- **`globals.css`**: Global styles applied across the entire application
- **`page.module.css`**: Scoped CSS modules for the landing page
- **`__tests__/`**: Component-specific test files co-located with components

#### `/docs` - Web Documentation
```
docs/
├── DESIGN_DECISIONS.md            # Architecture and design rationale
└── PROJECT_STRUCTURE.md           # This file - project organization
```

**Purpose**: Documentation specific to the web application, including design decisions and structure explanations.

#### `/__tests__` - Root Test Directory
```
__tests__/
├── LandingPage.test.tsx           # Landing page integration tests
└── Layout.test.tsx                # Layout component tests
```

**Purpose**: Root-level test files for integration testing and cross-component testing scenarios.

#### `/__mocks__` - Jest Mocks
```
__mocks__/
└── fileMock.js                    # Mock for static assets (images, etc.)
```

**Purpose**: Mock implementations for Jest testing, particularly for handling static assets and external dependencies.

#### `/public` - Static Assets
```
public/
├── next.svg                       # Next.js logo
└── vercel.svg                     # Vercel logo
```

**Purpose**: Static files served directly by Next.js. Future assets like images, icons, and manifest files will be stored here.

#### `/reports` - Generated Reports
```
reports/
└── mutation/                      # Stryker mutation testing reports
    └── mutation.html              # HTML mutation testing report
```

**Purpose**: Auto-generated reports from testing tools, build processes, and code analysis tools.

### Configuration Files

#### Package Management
- **`package.json`**: Dependencies, scripts, and project metadata
- **`package-lock.json`**: Locked dependency versions for reproducible builds

#### TypeScript Configuration
- **`tsconfig.json`**: TypeScript compiler configuration
- **`next.config.js`**: Next.js framework configuration

#### Testing Configuration
- **`jest.config.js`**: Jest testing framework configuration
- **`jest.setup.js`**: Jest setup file for testing environment
- **`stryker.conf.json`**: Stryker mutation testing configuration

#### Code Quality
- **`.eslintrc.json`**: ESLint linting rules and configuration
- **`.prettierrc`**: Prettier code formatting rules
- **`babel.config.js`**: Babel transpilation configuration for tests

#### Development Tools
- **`.gitignore`**: Git ignore patterns
- **`.env.local`**: Local environment variables (not in repo)

## File Naming Conventions

### Components
- **PascalCase**: `LandingPage.tsx`, `Layout.tsx`
- **Co-located tests**: `ComponentName.test.tsx`
- **CSS Modules**: `component.module.css`

### Tests
- **Test files**: `*.test.tsx` or `*.test.ts`
- **Mock files**: `*Mock.js` or `__mocks__/*.js`
- **Setup files**: `*.setup.js`

### Configuration
- **Lowercase with dots**: `jest.config.js`, `next.config.js`
- **RC files**: `.eslintrc.json`, `.prettierrc`

## Import Patterns

### Relative Imports
```typescript
// Same directory
import Component from './Component';

// Parent directory
import Layout from '../layout';

// App directory from tests
import Home from '../app/page';
```

### Module Imports
```typescript
// React and Next.js
import React from 'react';
import Image from 'next/image';

// Testing utilities
import { render, screen } from '@testing-library/react';

// Styles
import styles from './page.module.css';
```

## Testing Organization

### Test File Locations
1. **Component tests**: Co-located in `app/__tests__/`
2. **Integration tests**: Root-level `__tests__/`
3. **Utility tests**: Near the utilities they test

### Test Categories
- **Unit Tests**: Individual component behavior
- **Integration Tests**: Component interaction and data flow
- **Snapshot Tests**: UI regression prevention
- **Mutation Tests**: Test quality validation

## Build Artifacts

### Development
- **`.next/`**: Next.js build cache and development files
- **`node_modules/`**: Installed dependencies

### Testing
- **`coverage/`**: Jest coverage reports
- **`reports/mutation/`**: Stryker mutation testing reports

### Production
- **`.next/`**: Optimized production build
- **`out/`**: Static export (if using `next export`)

## Environment-Specific Files

### Development
- **`.env.local`**: Local development environment variables
- **`.env.development`**: Development-specific variables

### Production
- **`.env.production`**: Production environment variables
- **`.env`**: Shared environment variables

## Future Structure Considerations

### Planned Additions
```
web/
├── components/                    # Reusable UI components
│   ├── ui/                       # Basic UI elements
│   ├── forms/                    # Form components
│   └── layout/                   # Layout components
├── lib/                          # Utility functions and helpers
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── api/                          # API route handlers
└── middleware.ts                 # Next.js middleware
```

### Scalability Patterns
- **Component Library**: Atomic design principles
- **API Routes**: RESTful API organization
- **State Management**: Context providers and custom hooks
- **Utilities**: Pure functions and helpers
- **Types**: Shared TypeScript interfaces

## Best Practices

### File Organization
1. **Co-location**: Keep related files close together
2. **Separation of Concerns**: Clear boundaries between different types of code
3. **Consistent Naming**: Follow established conventions
4. **Logical Grouping**: Group by feature rather than file type

### Import Organization
1. **External libraries first**: React, Next.js, third-party
2. **Internal modules second**: Components, utilities, types
3. **Relative imports last**: Local files and styles
4. **Alphabetical within groups**: Easier to scan and maintain

### Testing Structure
1. **Mirror source structure**: Tests should follow the same organization as source code
2. **Descriptive names**: Test files should clearly indicate what they test
3. **Logical grouping**: Group related tests together
4. **Comprehensive coverage**: Aim for high coverage with meaningful tests

This structure provides a solid foundation for a scalable, maintainable web application while following Next.js best practices and modern development standards. 