#!/usr/bin/env node

/**
 * Deployment Status Checker for Liquid Glass Portfolio
 * Run this script to check the current deployment status
 */

import { execSync } from 'child_process';

console.log('🚀 Liquid Glass Portfolio - Deployment Status Checker\n');

try {
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    console.log(`📍 Current Branch: ${currentBranch}`);
    
    if (currentBranch === 'liquid-glass-portfolio') {
        console.log('✅ Correct branch for deployment');
    } else {
        console.log('⚠️  Please switch to liquid-glass-portfolio branch');
    }
    
    // Check if there are uncommitted changes
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim() === '') {
        console.log('✅ No uncommitted changes');
    } else {
        console.log('⚠️  There are uncommitted changes');
        console.log(status);
    }
    
    // Check if gh-pages branch exists
    try {
        execSync('git show-ref --verify --quiet refs/remotes/origin/gh-pages');
        console.log('✅ gh-pages branch exists');
    } catch (error) {
        console.log('⚠️  gh-pages branch not found - GitHub Actions may not have run yet');
    }
    
    console.log('\n🔗 Important Links:');
    console.log('📊 GitHub Actions: https://github.com/Soham-Chousalkar/Portfolio/actions');
    console.log('⚙️  GitHub Pages Settings: https://github.com/Soham-Chousalkar/Portfolio/settings/pages');
    console.log('🌐 Live Site: https://soham-chousalkar.github.io/Portfolio/');
    
    console.log('\n📋 Next Steps:');
    console.log('1. Check GitHub Actions status');
    console.log('2. Verify GitHub Pages source is set to gh-pages branch');
    console.log('3. Clear browser cache if seeing old version');
    console.log('4. Test live site functionality');
    
} catch (error) {
    console.error('❌ Error checking deployment status:', error.message);
}

console.log('\n✨ Deployment checklist completed!'); 