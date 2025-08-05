#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Portfolio Development Server...\n');

// Start Vite dev server
console.log('📦 Starting Vite development server...');
const viteProcess = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
});

// Start backend server
console.log('🔧 Starting backend server...');
const backendProcess = spawn('node', ['src/utils/server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down development servers...');
    viteProcess.kill('SIGINT');
    backendProcess.kill('SIGINT');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down development servers...');
    viteProcess.kill('SIGTERM');
    backendProcess.kill('SIGTERM');
    process.exit(0);
});

// Handle process errors
viteProcess.on('error', (error) => {
    console.error('❌ Vite server error:', error);
});

backendProcess.on('error', (error) => {
    console.error('❌ Backend server error:', error);
});

console.log('✅ Development servers started!');
console.log('🌐 Frontend: http://localhost:5173');
console.log('🔧 Backend: http://localhost:3001');
console.log('📊 Visitor API: http://localhost:3001/api');
console.log('\n💡 Edit mode password: admin123');
console.log('🔧 Click the gear icon in the top-right to enable edit mode');
console.log('\nPress Ctrl+C to stop servers'); 