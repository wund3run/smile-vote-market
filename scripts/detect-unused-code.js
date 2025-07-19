#!/usr/bin/env node

/**
 * Unused Code Detection Script for React TypeScript Projects
 * 
 * This script identifies unused files and components in the codebase
 * by analyzing import statements and usage patterns.
 * 
 * Usage: node scripts/detect-unused-code.js [--clean] [--report]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UnusedCodeDetector {
  constructor(srcPath) {
    this.srcPath = srcPath;
    this.unusedFiles = [];
    this.analysisResults = {};
  }

  /**
   * Get all TypeScript/JavaScript files recursively
   */
  getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    const files = [];
    
    const traverse = (currentDir) => {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            traverse(fullPath);
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    traverse(dir);
    return files;
  }

  /**
   * Check if a file is being imported/used anywhere in the codebase
   */
  isFileUsed(targetFile, allFiles) {
    const fileName = path.basename(targetFile, path.extname(targetFile));
    
    // Files that should always be kept (entry points and special files)
    const entryFiles = ['main.tsx', 'App.tsx', 'index.ts', 'index.tsx'];
    const specialFiles = ['utils.ts', 'cn.ts', 'globals.css', 'index.css'];
    const pageFiles = ['Index.tsx', 'NotFound.tsx']; // Route components
    
    if (entryFiles.some(entry => targetFile.endsWith(entry)) ||
        specialFiles.some(special => targetFile.includes(special)) ||
        pageFiles.some(page => targetFile.endsWith(page))) {
      return true;
    }
    
    // Check if any file imports this file
    for (const file of allFiles) {
      if (file === targetFile) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for import patterns
        const importPatterns = [
          // Absolute imports with @/
          `from "@/data/${fileName}"`,
          `from "@/components/${fileName}"`,
          `from "@/components/ui/${fileName}"`,
          `from "@/hooks/${fileName}"`,
          `from "@/lib/${fileName}"`,
          `from "@/pages/${fileName}"`,
          
          // Relative imports
          `from "./${fileName}"`,
          `from "../${fileName}"`,
          `from "./ui/${fileName}"`,
          `from "../ui/${fileName}"`,
          `from "./pages/${fileName}"`,
          `from "../pages/${fileName}"`,
        ];
        
        // Special checks for specific files
        if (targetFile.includes('marketplace.ts')) {
          if (content.includes('categories') || content.includes('featuredProducts') || 
              content.includes('trendingProducts') || content.includes('tourismPackages')) {
            return true;
          }
        }
        
        if (targetFile.includes('use-mobile.tsx')) {
          if (content.includes('useIsMobile')) {
            return true;
          }
        }
        
        // Check for page component usage (JSX element usage)
        if (targetFile.includes('pages/')) {
          if (content.includes(`<${fileName}`) || content.includes(`element={<${fileName}`)) {
            return true;
          }
        }
        
        // Check import patterns
        if (importPatterns.some(pattern => content.includes(pattern))) {
          return true;
        }
        
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return false;
  }

  /**
   * Analyze the codebase for unused files
   */
  analyze() {
    console.log('🔍 Analyzing codebase for unused code...\n');
    
    const allFiles = this.getAllFiles(this.srcPath);
    const unusedFiles = [];
    
    for (const file of allFiles) {
      const relativePath = path.relative(this.srcPath, file);
      
      if (!this.isFileUsed(file, allFiles)) {
        const stats = fs.statSync(file);
        unusedFiles.push({
          path: file,
          relativePath: relativePath,
          size: stats.size
        });
      }
    }
    
    // Categorize results
    const categories = {
      'UI Components (shadcn/ui)': unusedFiles.filter(f => f.relativePath.includes('components/ui/')),
      'Custom Components': unusedFiles.filter(f => f.relativePath.includes('components/') && !f.relativePath.includes('ui/')),
      'Hooks': unusedFiles.filter(f => f.relativePath.includes('hooks/')),
      'Utilities': unusedFiles.filter(f => f.relativePath.includes('lib/') || f.relativePath.includes('utils/')),
      'Data/Types': unusedFiles.filter(f => f.relativePath.includes('data/') || f.relativePath.includes('.d.ts')),
      'Other': unusedFiles.filter(f => 
        !f.relativePath.includes('components/') && 
        !f.relativePath.includes('hooks/') && 
        !f.relativePath.includes('lib/') && 
        !f.relativePath.includes('data/') && 
        !f.relativePath.includes('.d.ts')
      )
    };
    
    this.unusedFiles = unusedFiles;
    this.analysisResults = {
      totalFiles: allFiles.length,
      unusedFiles: unusedFiles.length,
      categories: categories,
      totalSize: unusedFiles.reduce((sum, f) => sum + f.size, 0)
    };
    
    return this.analysisResults;
  }

  /**
   * Generate a detailed report
   */
  generateReport() {
    const results = this.analysisResults;
    
    console.log('📋 UNUSED CODE DETECTION REPORT');
    console.log('================================\n');
    
    if (results.unusedFiles === 0) {
      console.log('✅ No unused files detected!');
      return;
    }
    
    console.log('🗑️  UNUSED FILES BY CATEGORY:');
    console.log('==============================');
    
    for (const [category, files] of Object.entries(results.categories)) {
      if (files.length > 0) {
        const categorySize = files.reduce((sum, f) => sum + f.size, 0);
        console.log(`\n📁 ${category} (${files.length} files):`);
        
        for (const file of files) {
          console.log(`   ❌ ${file.relativePath} (${(file.size / 1024).toFixed(1)} KB)`);
        }
        
        console.log(`   📊 Subtotal: ${(categorySize / 1024).toFixed(1)} KB`);
      }
    }
    
    console.log('\n📊 SUMMARY STATISTICS:');
    console.log('=======================');
    console.log(`Total files analyzed: ${results.totalFiles}`);
    console.log(`Unused files found: ${results.unusedFiles}`);
    console.log(`Total unused code size: ${(results.totalSize / 1024).toFixed(1)} KB`);
    
    // Top unused files by size
    const topUnused = this.unusedFiles
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);
    
    if (topUnused.length > 0) {
      console.log('\n🏆 LARGEST UNUSED FILES:');
      console.log('=========================');
      for (const file of topUnused) {
        console.log(`   📦 ${file.relativePath} (${(file.size / 1024).toFixed(1)} KB)`);
      }
    }
    
    console.log('\n💡 RECOMMENDATIONS:');
    console.log('===================');
    console.log('1. Remove unused shadcn/ui components to reduce bundle size');
    console.log('2. Delete unused custom components and utilities');
    console.log('3. Enable stricter ESLint/TypeScript rules for unused imports');
    console.log('4. Consider tree-shaking optimizations in build process');
    console.log('5. Run this script regularly to prevent accumulation of dead code');
  }

  /**
   * Save results to JSON file
   */
  saveReport(filename = 'unused-code-report.json') {
    const reportData = {
      timestamp: new Date().toISOString(),
      analysis: this.analysisResults,
      files: this.unusedFiles.map(f => ({
        path: f.relativePath,
        size: f.size,
        sizeKB: Math.round((f.size / 1024) * 10) / 10
      })),
      recommendations: [
        'Remove unused shadcn/ui components',
        'Delete custom components that are not imported',
        'Enable stricter linting rules for unused code detection',
        'Implement tree-shaking in build process',
        'Add this script to CI/CD pipeline for regular checks'
      ]
    };
    
    fs.writeFileSync(filename, JSON.stringify(reportData, null, 2));
    console.log(`\n📄 Detailed report saved to: ${filename}`);
    
    return reportData;
  }

  /**
   * Generate cleanup script (optional - for manual execution)
   */
  generateCleanupScript(filename = 'cleanup-unused-code.sh') {
    if (this.unusedFiles.length === 0) {
      console.log('No cleanup script needed - no unused files found.');
      return;
    }
    
    const scriptContent = `#!/bin/bash

# Unused Code Cleanup Script
# ⚠️  WARNING: This will delete files permanently!
# ⚠️  Make sure to backup your code before running this script!

echo "🧹 Starting unused code cleanup..."
echo "⚠️  This will delete ${this.unusedFiles.length} unused files (${(this.analysisResults.totalSize / 1024).toFixed(1)} KB)"

read -p "Are you sure you want to continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cleanup cancelled"
    exit 1
fi

# Create backup directory
BACKUP_DIR="./unused-code-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📁 Creating backup directory: $BACKUP_DIR"

# Move files to backup and then delete
${this.unusedFiles.map(file => {
  const backupName = file.relativePath.replace(/\//g, '_');
  return `echo "Backing up ${file.relativePath}..."
cp "${file.path}" "$BACKUP_DIR/${backupName}"
rm "${file.path}"`;
}).join('\n')}

echo "✅ Cleanup complete!"
echo "📁 Backup saved to: $BACKUP_DIR"
echo "💾 Freed up ${(this.analysisResults.totalSize / 1024).toFixed(1)} KB"
echo ""
echo "🔧 Next steps:"
echo "   1. Run 'npm run build' to verify everything still works"
echo "   2. Run 'npm run lint' to check for any issues"
echo "   3. Test your application thoroughly"
`;

    fs.writeFileSync(filename, scriptContent);
    fs.chmodSync(filename, '755'); // Make executable
    
    console.log(`\n🧹 Cleanup script generated: ${filename}`);
    console.log('   ⚠️  Review the script before running it!');
    console.log('   ⚠️  Always backup your code before cleanup!');
  }
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  const shouldClean = args.includes('--clean');
  const shouldGenerateReport = args.includes('--report') || shouldClean;
  
  const srcPath = path.join(__dirname, '..', 'src');
  const detector = new UnusedCodeDetector(srcPath);
  
  // Run analysis
  detector.analyze();
  detector.generateReport();
  
  // Save detailed report if requested
  if (shouldGenerateReport) {
    detector.saveReport(path.join(__dirname, '..', 'unused-code-report.json'));
  }
  
  // Generate cleanup script if requested
  if (shouldClean) {
    detector.generateCleanupScript(path.join(__dirname, '..', 'cleanup-unused-code.sh'));
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { UnusedCodeDetector };