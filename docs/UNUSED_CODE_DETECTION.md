# Unused Code Detection

This project includes comprehensive tooling to detect and clean up unused code, helping maintain a lean codebase and optimize bundle size.

## 🔍 Detection Tools

### 1. Automated Script Detection

The project includes a custom script that analyzes the entire codebase to identify unused files:

```bash
# Quick scan for unused code
npm run detect-unused

# Generate detailed report
npm run detect-unused:report

# Generate cleanup script (use with caution!)
npm run detect-unused:clean
```

### 2. ESLint Rules

Enhanced ESLint configuration with unused code detection:

- `@typescript-eslint/no-unused-vars` - Detects unused variables and imports
- `unused-imports/no-unused-imports` - Automatically detects unused imports
- `unused-imports/no-unused-vars` - Advanced unused variable detection

### 3. TypeScript Compiler Checks

Strict TypeScript configuration enabled:

- `noUnusedLocals: true` - Detect unused local variables
- `noUnusedParameters: true` - Detect unused function parameters
- `strict: true` - Enable all strict type checking options

## 📊 Current Analysis Results

As of the last scan, the project contains:

- **31 unused files** totaling **113.3 KB**
- **29 unused shadcn/ui components** (105.3 KB)
- **1 unused custom component** (8.0 KB)
- **Potential bundle size reduction**: 113.3 KB

### Largest Unused Files:
1. `components/ui/sidebar.tsx` (22.8 KB)
2. `components/ui/chart.tsx` (10.2 KB)
3. `components/AdvancedSearch.tsx` (8.0 KB)
4. `components/ui/menubar.tsx` (7.8 KB)
5. `components/ui/context-menu.tsx` (7.1 KB)

## 🧹 Cleanup Guidelines

### Safe to Remove:
- Unused shadcn/ui components that aren't imported anywhere
- Custom components that aren't referenced
- Utility functions that aren't used

### Keep (Do Not Remove):
- Entry point files (`main.tsx`, `App.tsx`)
- Route components (`Index.tsx`, `NotFound.tsx`)
- Configuration files (`vite-env.d.ts`)
- Utility files that might be used indirectly

### Recommended Cleanup Steps:

1. **Review the analysis report**:
   ```bash
   npm run detect-unused:report
   cat unused-code-report.json
   ```

2. **Remove unused shadcn/ui components**:
   - These are safe to remove as they're from a component library
   - Can easily be re-added if needed later

3. **Evaluate custom components**:
   - Check if `AdvancedSearch.tsx` is needed for future features
   - Remove if not planned for implementation

4. **Verify build still works**:
   ```bash
   npm run build
   npm run lint
   ```

## 🔄 Automation

### Pre-commit Hooks (Recommended)

Add to your `.husky/pre-commit` or similar:

```bash
#!/bin/sh
# Run unused code detection
npm run detect-unused

# Run linting (will catch unused imports/variables)
npm run lint
```

### CI/CD Integration

Add to your GitHub Actions workflow:

```yaml
- name: Check for unused code
  run: |
    npm run detect-unused:report
    # Optionally fail if too much unused code is detected
    if [ $(cat unused-code-report.json | jq '.analysis.totalSize') -gt 51200 ]; then
      echo "Too much unused code detected (>50KB)"
      exit 1
    fi
```

## 🎯 Best Practices

1. **Regular Scans**: Run unused code detection weekly or before releases
2. **Import Discipline**: Only import what you need
3. **Component Audits**: Regularly review and remove unused components
4. **Tree Shaking**: Ensure your bundler supports tree shaking
5. **Lazy Loading**: Consider lazy loading for large components

## 🛠️ Configuration

### ESLint Rules

The project uses these ESLint rules for unused code detection:

```javascript
"@typescript-eslint/no-unused-vars": ["warn", { 
  "argsIgnorePattern": "^_",
  "varsIgnorePattern": "^_",
  "caughtErrorsIgnorePattern": "^_"
}],
"unused-imports/no-unused-imports": "warn",
"unused-imports/no-unused-vars": ["warn", {
  "vars": "all",
  "varsIgnorePattern": "^_",
  "args": "after-used",
  "argsIgnorePattern": "^_"
}]
```

### TypeScript Configuration

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitAny": true,
  "exactOptionalPropertyTypes": true,
  "noImplicitReturns": true,
  "noUncheckedIndexedAccess": true
}
```

## 📈 Monitoring

Track unused code metrics over time:

- Bundle size reduction
- Number of unused files
- Development velocity improvements
- Build performance improvements

## 🔗 Related Tools

- [bundlephobia](https://bundlephobia.com/) - Analyze package sizes
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Bundle analysis
- [source-map-explorer](https://github.com/danvk/source-map-explorer) - Bundle visualization