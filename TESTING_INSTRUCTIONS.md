# 🧪 STEP-BY-STEP TESTING INSTRUCTIONS

## 🚀 **IMMEDIATE TESTING (5 minutes)**

### **Step 1: Check System Status**
```
1. Open browser: http://localhost:3000/status.html
2. Wait for automatic check to complete
3. Should show 8/8 components available (100%)
4. All items should be green checkmarks ✅
```

### **Step 2: Test Main Application**
```
1. Open: http://localhost:3000
2. Check console (F12) - should see validation results
3. Try connecting wallet or email login
4. Verify no JavaScript errors in console
```

### **Step 3: Test Critical Features**
```
1. FORGOT PASSWORD:
   - Click "Email & Password" → "Forgot your password?"
   - Enter any email → Should show success message

2. ACCESSIBILITY:
   - Press Tab key repeatedly → Should navigate through all elements
   - Check focus indicators are visible (blue outlines)

3. ROLE WIZARD:
   - Connect wallet → Role selection wizard should appear
   - Try selecting different roles

4. ACCOUNT SETTINGS:
   - Visit: http://localhost:3000/account-settings.html
   - Should load with 4 tabs (Profile, Security, Sessions, Notifications)

5. HELP CENTER:
   - Visit: http://localhost:3000/help-center.html
   - Try searching for "password" → Should show results
```

---

## 📋 **DETAILED TESTING CHECKLIST**

### ✅ **Critical Issues Testing**

#### **1. Forgot Password System**
- [ ] Login page has "Forgot your password?" link
- [ ] Clicking link opens modal with email input
- [ ] Entering email shows success message
- [ ] Reset page loads: `/reset-password.html?token=xxx`
- [ ] Password reset form works

#### **2. Session Management & Rate Limiting**
- [ ] Try wrong password 6 times → Should block after 5 attempts
- [ ] Successful login creates session
- [ ] Account settings shows active sessions
- [ ] "Logout all sessions" button works

#### **3. WCAG Accessibility Compliance**
- [ ] Tab navigation works through entire site
- [ ] Focus indicators visible on all interactive elements
- [ ] Skip link present and functional
- [ ] Form labels properly associated
- [ ] Screen reader announcements work

#### **4. External Link Security**
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Links to GitHub open in new tab safely

### ✅ **Medium Priority Testing**

#### **5. Role Selection Wizard**
- [ ] Appears after MetaMask connection
- [ ] Shows all 8 roles with descriptions
- [ ] Permission preview works for each role
- [ ] Profile completion form validates
- [ ] Redirects to appropriate dashboard

#### **6. Account Settings Page**
- [ ] Profile tab: Update and save personal info
- [ ] Security tab: Change password with strength indicator
- [ ] Sessions tab: View and manage active sessions
- [ ] Notifications tab: Toggle notification preferences
- [ ] All changes persist after page reload

#### **7. In-App Help Center**
- [ ] Search functionality finds relevant articles
- [ ] All categories load content properly
- [ ] FAQ items expand and collapse
- [ ] Mobile responsive design works
- [ ] Navigation between sections smooth

### ✅ **Low Priority Testing**

#### **8. Mobile Responsive Design**
- [ ] Open DevTools (F12) → Toggle device toolbar
- [ ] Test mobile (375px), tablet (768px), desktop (1200px)
- [ ] Navigation menu collapses on mobile
- [ ] All content readable on small screens
- [ ] Touch targets large enough (44px minimum)

#### **9. Error Handling & Loading States**
- [ ] Disconnect internet → Offline status appears
- [ ] Submit invalid forms → Error messages show
- [ ] Loading spinners appear during operations
- [ ] Network reconnection detected
- [ ] Toast notifications work

#### **10. Performance & UX**
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] Smooth animations and transitions
- [ ] Forms provide immediate feedback
- [ ] All buttons and links work

---

## 🤖 **AUTOMATED TESTING**

### **Console Commands**
```javascript
// Quick verification
quickTest()

// Detailed validation
websiteValidator.runAllTests()

// Specific tests
websiteValidator.runSpecificTest('auth')
websiteValidator.runSpecificTest('accessibility')
```

### **Expected Console Output**
```
📊 EVID-DGC VERIFICATION RESULTS
========================================

CRITICAL:
  ✅ Forgot Password System: Password recovery functionality
  ✅ Session Management: Session and rate limiting
  ✅ Accessibility: WCAG compliance features
  ✅ Rate Limiting: Brute force protection

MEDIUM:
  ✅ Role Wizard: Interactive role selection
  ✅ Account Settings: User profile management
  ✅ Help Center: In-app documentation

LOW:
  ✅ Responsive Design: Mobile optimization
  ✅ Error Handling: Error management system
  ✅ Loading States: User feedback system

AUTOMATED:
  ✅ Website Validator: Automated testing system

📈 OVERALL RESULTS:
   Total Tests: 11
   Passed: 11
   Failed: 0
   Success Rate: 100.0%

🎉 EXCELLENT! All systems operational!
```

---

## 🔧 **TROUBLESHOOTING**

### **If Tests Fail:**

#### **"Components Missing" Error**
```
1. Check if server is running: npm start
2. Clear browser cache: Ctrl+Shift+R
3. Check console for JavaScript errors
4. Verify all files exist in /public folder
```

#### **"Scripts Not Loading" Error**
```
1. Check network tab in DevTools
2. Look for 404 errors on script files
3. Verify file paths are correct
4. Check server is serving static files
```

#### **"Functions Undefined" Error**
```
1. Wait 2-3 seconds for all scripts to load
2. Check script loading order
3. Look for JavaScript syntax errors
4. Verify all dependencies are loaded
```

---

## 🎯 **SUCCESS CRITERIA**

**✅ System is working correctly when:**
- Status page shows 100% success rate
- No console errors in browser
- All manual tests pass
- Mobile responsive design works
- Accessibility features functional
- All pages load without errors

**🏆 Expected Result: 100% success rate with all 25+ issues resolved!**

---

## 📞 **Quick Verification URLs**

Once server is running (`npm start`), test these URLs:

1. **Main App**: `http://localhost:3000`
2. **Status Check**: `http://localhost:3000/status.html`
3. **Test Runner**: `http://localhost:3000/test-runner.html`
4. **Account Settings**: `http://localhost:3000/account-settings.html`
5. **Help Center**: `http://localhost:3000/help-center.html`
6. **Reset Password**: `http://localhost:3000/reset-password.html`

**All URLs should load without errors and show the implemented features!**