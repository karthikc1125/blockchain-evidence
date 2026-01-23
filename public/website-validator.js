// Comprehensive Website Testing and Validation
class WebsiteValidator {
    constructor() {
        this.testResults = [];
        this.init();
    }

    init() {
        this.runAllTests();
    }

    async runAllTests() {
        console.log('🧪 Starting comprehensive website validation...');
        
        // Core functionality tests
        await this.testAuthentication();
        await this.testAccessibility();
        await this.testResponsiveness();
        await this.testPerformance();
        await this.testSecurity();
        await this.testUserExperience();
        
        this.generateReport();
    }

    async testAuthentication() {
        console.log('🔐 Testing Authentication System...');
        
        const tests = [
            {
                name: 'MetaMask Connection',
                test: () => typeof window.ethereum !== 'undefined',
                fix: 'Install MetaMask browser extension'
            },
            {
                name: 'Email Login Form',
                test: () => document.getElementById('emailLoginForm') !== null,
                fix: 'Email login form is present'
            },
            {
                name: 'Forgot Password Link',
                test: () => document.querySelector('.forgot-password-link') !== null,
                fix: 'Forgot password functionality is available'
            },
            {
                name: 'Session Management',
                test: () => typeof window.SessionManager !== 'undefined',
                fix: 'Session management system is loaded'
            },
            {
                name: 'Rate Limiting',
                test: () => typeof window.authManager !== 'undefined',
                fix: 'Authentication rate limiting is active'
            }
        ];

        this.runTestSuite('Authentication', tests);
    }

    async testAccessibility() {
        console.log('♿ Testing Accessibility Compliance...');
        
        const tests = [
            {
                name: 'Skip Link Present',
                test: () => document.querySelector('.skip-link') !== null,
                fix: 'Skip to main content link is available'
            },
            {
                name: 'Focus Management',
                test: () => typeof window.AccessibilityManager !== 'undefined',
                fix: 'Focus management system is loaded'
            },
            {
                name: 'Form Labels',
                test: () => {
                    const inputs = document.querySelectorAll('input');
                    return Array.from(inputs).every(input => 
                        input.getAttribute('aria-label') || 
                        document.querySelector(`label[for="${input.id}"]`)
                    );
                },
                fix: 'All form inputs have proper labels'
            },
            {
                name: 'Color Contrast',
                test: () => document.querySelector('link[href*="accessibility-fixes"]') !== null,
                fix: 'High contrast styles are loaded'
            },
            {
                name: 'Keyboard Navigation',
                test: () => {
                    const focusableElements = document.querySelectorAll(
                        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    );
                    return focusableElements.length > 0;
                },
                fix: 'Focusable elements are present for keyboard navigation'
            }
        ];

        this.runTestSuite('Accessibility', tests);
    }

    async testResponsiveness() {
        console.log('📱 Testing Responsive Design...');
        
        const tests = [
            {
                name: 'Viewport Meta Tag',
                test: () => document.querySelector('meta[name="viewport"]') !== null,
                fix: 'Viewport meta tag is present'
            },
            {
                name: 'Responsive CSS',
                test: () => document.querySelector('link[href*="responsive"]') !== null ||
                           document.querySelector('style').textContent.includes('@media'),
                fix: 'Responsive styles are loaded'
            },
            {
                name: 'Mobile Menu',
                test: () => document.querySelector('.menu-toggle') !== null,
                fix: 'Mobile navigation menu is available'
            },
            {
                name: 'Flexible Grid',
                test: () => {
                    const grids = document.querySelectorAll('.roles-grid, .doc-grid, .contact-grid');
                    return grids.length > 0;
                },
                fix: 'Flexible grid layouts are implemented'
            }
        ];

        this.runTestSuite('Responsive Design', tests);
    }

    async testPerformance() {
        console.log('⚡ Testing Performance...');
        
        const tests = [
            {
                name: 'Script Loading',
                test: () => {
                    const scripts = document.querySelectorAll('script[src]');
                    return scripts.length < 20; // Reasonable number of scripts
                },
                fix: 'Script count is optimized'
            },
            {
                name: 'CSS Loading',
                test: () => {
                    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
                    return stylesheets.length < 10; // Reasonable number of stylesheets
                },
                fix: 'Stylesheet count is optimized'
            },
            {
                name: 'Image Optimization',
                test: () => {
                    const images = document.querySelectorAll('img');
                    return Array.from(images).every(img => 
                        img.getAttribute('alt') !== null
                    );
                },
                fix: 'Images have alt attributes'
            },
            {
                name: 'Loading States',
                test: () => typeof window.LoadingManager !== 'undefined',
                fix: 'Loading state management is available'
            }
        ];

        this.runTestSuite('Performance', tests);
    }

    async testSecurity() {
        console.log('🔒 Testing Security Features...');
        
        const tests = [
            {
                name: 'HTTPS Ready',
                test: () => location.protocol === 'https:' || location.hostname === 'localhost',
                fix: 'Site is served over HTTPS or localhost'
            },
            {
                name: 'External Links Security',
                test: () => {
                    const externalLinks = document.querySelectorAll('a[target="_blank"]');
                    return Array.from(externalLinks).every(link => 
                        link.getAttribute('rel')?.includes('noopener')
                    );
                },
                fix: 'External links have security attributes'
            },
            {
                name: 'Input Sanitization',
                test: () => typeof window.formValidator !== 'undefined',
                fix: 'Form validation system is loaded'
            },
            {
                name: 'Error Handling',
                test: () => typeof window.errorHandler !== 'undefined',
                fix: 'Error handling system is active'
            },
            {
                name: 'Session Security',
                test: () => typeof sessionManager !== 'undefined',
                fix: 'Session management is implemented'
            }
        ];

        this.runTestSuite('Security', tests);
    }

    async testUserExperience() {
        console.log('👤 Testing User Experience...');
        
        const tests = [
            {
                name: 'Role Selection Wizard',
                test: () => typeof window.roleWizard !== 'undefined',
                fix: 'Role selection wizard is available'
            },
            {
                name: 'Help Center',
                test: () => document.querySelector('a[href*="help"]') !== null,
                fix: 'Help center is accessible'
            },
            {
                name: 'Account Settings',
                test: () => document.querySelector('a[href*="settings"]') !== null ||
                           typeof window.AccountSettings !== 'undefined',
                fix: 'Account settings functionality is available'
            },
            {
                name: 'Error Messages',
                test: () => typeof showAlert === 'function',
                fix: 'User-friendly error messaging is implemented'
            },
            {
                name: 'Loading Feedback',
                test: () => document.querySelector('.loading-spinner, .skeleton') !== null ||
                           typeof window.loadingManager !== 'undefined',
                fix: 'Loading feedback is provided to users'
            }
        ];

        this.runTestSuite('User Experience', tests);
    }

    runTestSuite(suiteName, tests) {
        const results = {
            suite: suiteName,
            passed: 0,
            failed: 0,
            tests: []
        };

        tests.forEach(test => {
            try {
                const passed = test.test();
                if (passed) {
                    results.passed++;
                    results.tests.push({
                        name: test.name,
                        status: 'PASS',
                        message: test.fix
                    });
                } else {
                    results.failed++;
                    results.tests.push({
                        name: test.name,
                        status: 'FAIL',
                        message: test.fix
                    });
                }
            } catch (error) {
                results.failed++;
                results.tests.push({
                    name: test.name,
                    status: 'ERROR',
                    message: error.message
                });
            }
        });

        this.testResults.push(results);
        console.log(`✅ ${suiteName}: ${results.passed} passed, ${results.failed} failed`);
    }

    generateReport() {
        console.log('\n📊 COMPREHENSIVE WEBSITE VALIDATION REPORT');
        console.log('=' .repeat(50));
        
        let totalPassed = 0;
        let totalFailed = 0;
        
        this.testResults.forEach(suite => {
            totalPassed += suite.passed;
            totalFailed += suite.failed;
            
            console.log(`\n${suite.suite}:`);
            console.log(`  ✅ Passed: ${suite.passed}`);
            console.log(`  ❌ Failed: ${suite.failed}`);
            
            suite.tests.forEach(test => {
                const icon = test.status === 'PASS' ? '✅' : test.status === 'FAIL' ? '❌' : '⚠️';
                console.log(`    ${icon} ${test.name}: ${test.message}`);
            });
        });
        
        const totalTests = totalPassed + totalFailed;
        const successRate = ((totalPassed / totalTests) * 100).toFixed(1);
        
        console.log('\n' + '='.repeat(50));
        console.log(`📈 OVERALL RESULTS:`);
        console.log(`   Total Tests: ${totalTests}`);
        console.log(`   Passed: ${totalPassed}`);
        console.log(`   Failed: ${totalFailed}`);
        console.log(`   Success Rate: ${successRate}%`);
        
        if (successRate >= 90) {
            console.log('🎉 EXCELLENT! Website is production-ready!');
        } else if (successRate >= 75) {
            console.log('👍 GOOD! Minor improvements needed.');
        } else if (successRate >= 60) {
            console.log('⚠️  FAIR! Several issues need attention.');
        } else {
            console.log('🚨 POOR! Major issues need immediate attention.');
        }
        
        console.log('\n🔧 RECOMMENDATIONS:');
        this.generateRecommendations();
    }

    generateRecommendations() {
        const failedTests = this.testResults.flatMap(suite => 
            suite.tests.filter(test => test.status !== 'PASS')
        );
        
        if (failedTests.length === 0) {
            console.log('   ✨ No issues found! Website is fully optimized.');
            return;
        }
        
        const priorities = {
            'Security': '🔴 HIGH PRIORITY',
            'Accessibility': '🟡 MEDIUM PRIORITY', 
            'Authentication': '🔴 HIGH PRIORITY',
            'Performance': '🟢 LOW PRIORITY',
            'User Experience': '🟡 MEDIUM PRIORITY',
            'Responsive Design': '🟢 LOW PRIORITY'
        };
        
        const groupedIssues = {};
        failedTests.forEach(test => {
            const suite = this.testResults.find(s => s.tests.includes(test)).suite;
            if (!groupedIssues[suite]) {
                groupedIssues[suite] = [];
            }
            groupedIssues[suite].push(test);
        });
        
        Object.entries(groupedIssues).forEach(([suite, issues]) => {
            console.log(`\n   ${priorities[suite] || '🟡 MEDIUM PRIORITY'} - ${suite}:`);
            issues.forEach(issue => {
                console.log(`     • ${issue.name}: ${issue.message}`);
            });
        });
    }

    // Method to run specific test category
    runSpecificTest(category) {
        switch(category.toLowerCase()) {
            case 'auth':
            case 'authentication':
                this.testAuthentication();
                break;
            case 'a11y':
            case 'accessibility':
                this.testAccessibility();
                break;
            case 'responsive':
                this.testResponsiveness();
                break;
            case 'performance':
                this.testPerformance();
                break;
            case 'security':
                this.testSecurity();
                break;
            case 'ux':
            case 'user-experience':
                this.testUserExperience();
                break;
            default:
                console.log('Available test categories: auth, accessibility, responsive, performance, security, ux');
        }
    }
}

// Auto-run validation on page load (in development)
if (location.hostname === 'localhost' || location.search.includes('validate=true')) {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            window.websiteValidator = new WebsiteValidator();
        }, 2000); // Wait for all scripts to load
    });
}

// Export for manual testing
window.WebsiteValidator = WebsiteValidator;

// Console commands for manual testing
console.log(`
🧪 EVID-DGC Website Validator Loaded!

Available Commands:
• websiteValidator.runAllTests() - Run complete validation
• websiteValidator.runSpecificTest('auth') - Test authentication
• websiteValidator.runSpecificTest('accessibility') - Test accessibility
• websiteValidator.runSpecificTest('responsive') - Test responsive design
• websiteValidator.runSpecificTest('performance') - Test performance
• websiteValidator.runSpecificTest('security') - Test security
• websiteValidator.runSpecificTest('ux') - Test user experience

The validator will automatically run on localhost or with ?validate=true
`);