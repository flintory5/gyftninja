# Gyft Ninja Web Application

> AI-powered gift recommendation platform built with Next.js 15, TypeScript, and modern testing practices.

## 🎯 Overview

Gyft Ninja is a web application that helps users discover personalized gift ideas through intelligent analysis of recipient personalities, interests, and relationships. The platform uses AI-powered algorithms to suggest the perfect gift for any occasion.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gyftninja.git
   cd gyftninja/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
web/
├── app/                    # Next.js App Router
│   ├── __tests__/         # Component tests
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── page.module.css    # Landing page styles
├── __tests__/             # Integration tests
├── __mocks__/             # Jest mocks
├── docs/                  # Documentation
├── public/                # Static assets
├── reports/               # Generated reports
└── [config files]        # Build configuration
```

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |
| `npm run test:mutation` | Run mutation testing |

### Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes with TDD approach**
   - Write tests first
   - Implement functionality
   - Ensure tests pass

3. **Run quality checks**
   ```bash
   npm run lint
   npm test
   npm run test:mutation
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

## 🧪 Testing

### Test Strategy

We implement a comprehensive testing approach:

- **Unit Tests**: Component behavior and logic
- **Integration Tests**: Component interaction
- **Snapshot Tests**: UI regression prevention
- **Mutation Tests**: Test quality validation

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run mutation testing
npm run test:mutation
```

### Test Coverage Goals

- **Line Coverage**: 85%+ (Current: 91.42%)
- **Mutation Score**: 80%+ (Current: 96.67%)
- **Zero Linting Errors**: Required

### Writing Tests

Tests should be:
- **User-centric**: Test what users see and do
- **Comprehensive**: Cover all component behavior
- **Maintainable**: Clear and well-documented
- **Fast**: Quick execution for rapid feedback

Example test structure:
```typescript
describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    render(<ComponentName />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
```

## 🎨 Styling

### CSS Strategy

- **CSS Modules**: Scoped component styles
- **Global CSS**: Application-wide styles
- **Inline Styles**: Dynamic styling (gradients, etc.)

### Design System

- **Colors**: CSS custom properties for consistency
- **Typography**: Responsive font sizes
- **Spacing**: Consistent margin/padding scale
- **Components**: Reusable design patterns

## 📦 Build & Deployment

### Production Build

```bash
# Create optimized build
npm run build

# Test production build locally
npm run start
```

### Build Optimization

- **Tree Shaking**: Automatic dead code elimination
- **Code Splitting**: Route-based splitting
- **Asset Optimization**: Images, fonts, and static files
- **Bundle Analysis**: Monitor bundle size

### Deployment

The application is configured for deployment on:
- **Vercel**: Recommended (seamless Next.js integration)
- **Netlify**: Alternative static hosting
- **AWS**: Custom deployment setup

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```bash
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### TypeScript Configuration

- **Strict Mode**: Enabled for maximum type safety
- **Path Mapping**: Configured for clean imports
- **Build Validation**: Zero TypeScript errors required

### ESLint & Prettier

- **Code Quality**: ESLint rules for consistency
- **Formatting**: Prettier for automatic formatting
- **Pre-commit**: Quality checks before commits

## 🚦 Quality Gates

### Continuous Integration

All code must pass:
- ✅ TypeScript compilation
- ✅ ESLint linting (zero errors)
- ✅ Jest tests (85%+ coverage)
- ✅ Mutation testing (80%+ score)
- ✅ Build success

### Code Review

- **Peer Review**: All changes reviewed
- **Testing**: Comprehensive test coverage
- **Documentation**: Updated docs for changes
- **Performance**: No regression in metrics

## 📚 Documentation

### Component Documentation

All components include:
- **TSDoc Comments**: Comprehensive API documentation
- **Usage Examples**: Clear implementation examples
- **Props Interface**: TypeScript interfaces
- **Accessibility Notes**: A11y considerations

### Architecture Documentation

- **Design Decisions**: [`docs/DESIGN_DECISIONS.md`](./docs/DESIGN_DECISIONS.md)
- **Project Structure**: [`docs/PROJECT_STRUCTURE.md`](./docs/PROJECT_STRUCTURE.md)
- **API Documentation**: Coming soon

## 🔍 Troubleshooting

### Common Issues

**Development server won't start**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Tests failing after dependency update**
```bash
# Clear Jest cache
npm test -- --clearCache
npm test
```

**TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

**Build failures**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Getting Help

- **Issues**: Create GitHub issue with reproduction steps
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check docs/ directory for guides

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create feature branch
3. Follow development workflow
4. Submit pull request

### Contribution Guidelines

- **Code Style**: Follow ESLint/Prettier configuration
- **Testing**: Maintain 85%+ coverage
- **Documentation**: Update relevant docs
- **Commits**: Use conventional commit format

### Pull Request Process

1. **Quality Checks**: All CI checks must pass
2. **Code Review**: Peer review required
3. **Testing**: Comprehensive test coverage
4. **Documentation**: Updated for changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the excellent React framework
- **Vercel**: For hosting and deployment platform
- **Testing Library**: For user-centric testing utilities
- **TypeScript Team**: For static type checking

---

**Built with ❤️ by the Gyft Ninja team**
