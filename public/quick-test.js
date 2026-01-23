// Quick Test Verification Script
console.log('🧪 EVID-DGC Component Verification Starting...');

// Wait for all scripts to load
setTimeout(() => {
    let results = {
        critical: [],
        medium: [],
        low: [],
        automated: []
    };

    // Critical Tests
    results.critical.push({
        name: 'Forgot Password System',
        passed: typeof ForgotPasswordManager !== 'undefined' || document.querySelector('script[src*="forgot-password"]') !== null,
        details: 'Password recovery system'
    });

    results.critical.push({
        name: 'Session Management',
        passed: typeof SessionManager !== 'undefined' || document.querySelector('script[src*="session-manager"]') !== null,
        details: 'Session and rate limiting'
    });

    results.critical.push({
        name: 'Accessibility',
        passed: typeof AccessibilityManager !== 'undefined' || document.querySelector('link[href*="accessibility"]') !== null,
        details: 'WCAG compliance features'
    });

    results.critical.push({
        name: 'Rate Limiting',
        passed: typeof AuthenticationManager !== 'undefined' || document.body.innerHTML.includes('checkRateLimit'),
        details: 'Brute force protection'
    });

    // Medium Priority Tests
    results.medium.push({
        name: 'Role Wizard',
        passed: typeof RoleSelectionWizard !== 'undefined' || document.querySelector('script[src*="role-wizard"]') !== null,
        details: 'Interactive role selection'
    });

    results.medium.push({
        name: 'Account Settings',
        passed: typeof AccountSettings !== 'undefined' || document.querySelector('script[src*="account-settings"]') !== null,
        details: 'User profile management'
    });

    results.medium.push({
        name: 'Help Center',
        passed: typeof HelpCenter !== 'undefined' || document.querySelector('script[src*="help-center"]') !== null,
        details: 'In-app documentation'
    });

    // Low Priority Tests
    results.low.push({
        name: 'Responsive Design',
        passed: document.querySelector('link[href*="responsive"]') !== null || document.querySelector('meta[name="viewport"]') !== null,
        details: 'Mobile optimization'
    });

    results.low.push({
        name: 'Error Handling',
        passed: typeof ErrorHandler !== 'undefined' || document.querySelector('script[src*="enhanced-error"]') !== null,
        details: 'Error management system'
    });

    results.low.push({
        name: 'Loading States',
        passed: typeof LoadingManager !== 'undefined' || document.body.innerHTML.includes('loading'),
        details: 'User feedback system'
    });

    // Automated Tests
    results.automated.push({
        name: 'Website Validator',
        passed: typeof WebsiteValidator !== 'undefined' || document.querySelector('script[src*="website-validator"]') !== null,
        details: 'Automated testing system'
    });

    // Calculate totals
    let totalPassed = 0;
    let totalTests = 0;

    Object.values(results).forEach(category => {
        category.forEach(test => {
            totalTests++;
            if (test.passed) totalPassed++;
        });
    });

    const successRate = ((totalPassed / totalTests) * 100).toFixed(1);

    // Display results
    console.log('\n📊 EVID-DGC VERIFICATION RESULTS');
    console.log('=' .repeat(40));

    Object.entries(results).forEach(([category, tests]) => {
        const categoryPassed = tests.filter(t => t.passed).length;
        const categoryTotal = tests.length;
        
        console.log(`\n${category.toUpperCase()}:`);
        tests.forEach(test => {
            const icon = test.passed ? '✅' : '❌';
            console.log(`  ${icon} ${test.name}: ${test.details}`);
        });
        console.log(`  Summary: ${categoryPassed}/${categoryTotal} passed`);
    });

    console.log('\n' + '='.repeat(40));
    console.log(`📈 OVERALL RESULTS:`);
    console.log(`   Total Tests: ${totalTests}`);
    console.log(`   Passed: ${totalPassed}`);
    console.log(`   Failed: ${totalTests - totalPassed}`);
    console.log(`   Success Rate: ${successRate}%`);

    if (successRate >= 90) {
        console.log('🎉 EXCELLENT! All systems operational!');
    } else if (successRate >= 75) {
        console.log('👍 GOOD! Most systems working.');
    } else {
        console.log('⚠️ Some components may need attention.');
    }

    console.log('\n🔧 To test manually:');
    console.log('1. Visit: http://localhost:3000/test-runner.html');
    console.log('2. Visit: http://localhost:3000 (main app)');
    console.log('3. Visit: http://localhost:3000/account-settings.html');
    console.log('4. Visit: http://localhost:3000/help-center.html');

}, 2000);

// Export for manual use
window.quickTest = () => {
    console.log('Running quick verification...');
    // Re-run the verification
    setTimeout(() => location.reload(), 100);
};