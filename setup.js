#!/usr/bin/env node

/**
 * EVID-DGC Quick Setup Script
 * Fixes common configuration and setup issues
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 EVID-DGC Quick Setup Starting...\n');

// Check if .env exists
if (!fs.existsSync('.env')) {
    console.log('❌ .env file not found');
    console.log('✅ Creating .env from template...');
    
    const envTemplate = `# EVID-DGC Local Development Environment
PORT=3000
NODE_ENV=development
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key-here
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
JWT_SECRET=dev-jwt-secret-change-in-production
ENCRYPTION_KEY=dev-encryption-key-change-in-production
MAX_FILE_SIZE=104857600
UPLOAD_PATH=./uploads
LOG_LEVEL=info`;
    
    fs.writeFileSync('.env', envTemplate);
    console.log('✅ .env file created');
} else {
    console.log('✅ .env file exists');
}

// Check uploads directory
const uploadsDir = './uploads';
if (!fs.existsSync(uploadsDir)) {
    console.log('✅ Creating uploads directory...');
    fs.mkdirSync(uploadsDir, { recursive: true });
} else {
    console.log('✅ Uploads directory exists');
}

// Check logs directory
const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    console.log('✅ Creating logs directory...');
    fs.mkdirSync(logsDir, { recursive: true });
} else {
    console.log('✅ Logs directory exists');
}

// Verify critical files exist
const criticalFiles = [
    'public/index.html',
    'public/app.js',
    'public/config.js',
    'public/styles.css',
    'server.js',
    'package.json'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file} exists`);
    } else {
        console.log(`❌ ${file} missing`);
        allFilesExist = false;
    }
});

console.log('\n🎉 Setup Complete!');

if (allFilesExist) {
    console.log('\n📋 Next Steps:');
    console.log('1. Update .env with your Supabase credentials');
    console.log('2. Run: npm install');
    console.log('3. Run: npm start');
    console.log('4. Open: http://localhost:3000');
} else {
    console.log('\n⚠️  Some critical files are missing. Please check the file structure.');
}

console.log('\n📖 For detailed setup instructions, see README.md');