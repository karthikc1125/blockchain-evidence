# 🤝 Contributing to EVID-DGC

Thank you for your interest in contributing to **EVID-DGC - Blockchain Evidence Management System**! 🔐 Your contributions help build a secure, admin-controlled evidence management system with role-based access. Whether you're reporting bugs, suggesting features, or submitting code - you're welcome here! 🚀

---

## 📌 Table of Contents

- [📋 How to Contribute](#-how-to-contribute)
- [🧠 Code Style Guidelines](#-code-style-guidelines)
- [📁 File Naming Conventions](#-file-naming-conventions)
- [✅ PR Review Process](#-pr-review-process)
- [💬 Community & Communication](#-community--communication)
- [📝 Contribution Rules](#-contribution-rules)
- [👥 Project Mentors](#-project-mentors)
- [🛡 Code of Conduct](#-code-of-conduct)

---

## 📋 How to Contribute

### 🐞 Bug Reports

- Open a new issue using the **bug** label
- Include a **clear title** and **detailed description**
- Mention **expected vs actual behavior**
- Provide **steps to reproduce** the issue
- Add **screenshots** or **error logs** if applicable
- Specify which **user role** encountered the issue

### 🌟 Feature Requests / Security Improvements

- Open a new issue using the **enhancement** or **security** label
- Describe the proposed feature and **why it's needed**
- Consider **security implications** for evidence management
- Include **mockups** or **flow diagrams** if applicable
- Ensure compatibility with **role-based access control**

### 🧑‍💻 Code Contributions (Pull Requests)

#### 🔁 Contribution Workflow

1. **Star** and **Fork** the repository

2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/blockchain-evidence.git
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**:
   - Follow project structure
   - Test with different user roles
   - Use descriptive commit messages:
     - `fix: resolve admin dashboard loading issue`
     - `feat: add evidence encryption feature`
     - `security: enhance role validation`

6. **Test your changes**:
   ```bash
   npm test
   npm start  # Test locally
   ```

7. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**:
   - Reference related issues: `Fixes #<issue-number>`
   - Include clear title and description
   - Mention security considerations if applicable

---

## 🧠 Code Style Guidelines

### Frontend (HTML/CSS/JavaScript)
- Use **camelCase** for JavaScript variables and functions
- Use **kebab-case** for CSS classes and IDs
- Component files should be **descriptive**: `admin-dashboard.html`
- Follow consistent indentation (2 spaces)
- Use meaningful variable names (`evidenceData` > `data`)

### Backend (Node.js)
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constructors
- Follow RESTful API conventions
- Include proper error handling
- Add JSDoc comments for functions

### Database
- Use **snake_case** for table and column names
- Include proper indexes for performance
- Follow data normalization principles
- Add appropriate constraints and validations

---

## 📁 File Naming Conventions

- **📄 HTML Files**: kebab-case (`admin-dashboard.html`, `evidence-viewer.html`)
- **🎨 CSS Files**: kebab-case (`admin-styles.css`, `role-badges.css`)
- **⚡ JavaScript Files**: kebab-case (`storage-manager.js`, `role-navigation.js`)
- **📂 Directories**: kebab-case (`/public`, `/database-scripts`)
- **📋 Documentation**: kebab-case (`setup-guide.md`, `api-reference.md`)

---

## ✅ PR Review Process

- **Review Time**: 24-72 hours depending on complexity
- **Security Review**: All security-related changes require thorough review
- **Role Testing**: Changes affecting user roles must be tested across all 8 roles
- **Database Changes**: Require migration scripts and rollback procedures

**Review Criteria**:
- Code quality and security
- Role-based access compliance
- Database integrity
- UI/UX consistency
- Documentation updates

---

## 💬 Community & Communication

**Project Links**:
- 🔗 **GitHub Repository**: https://github.com/Gooichand/blockchain-evidence
- 🌐 **Live Demo**: https://blockchain-evidence.onrender.com/
- 📋 **Issues**: [GitHub Issues](https://github.com/Gooichand/blockchain-evidence/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Gooichand/blockchain-evidence/discussions)

---

## 📝 Contribution Rules

- **Star and Fork** the repository before contributing
- **Browse open issues** and comment to get assigned
- **One PR per issue** - keep changes focused
- **Don't work on unassigned issues**
- **Test with multiple user roles** before submitting
- **Include security considerations** in your PR description
- **Update documentation** if your changes affect user workflows

---

## 👥 Project Mentors

**EVID-DGC (Ewcos-26) Mentorship Team**:

### 1. **CHARU AWASTHI**
- 📧 **Email**: charuawa184@gmail.com
- 🐙 **GitHub**: [@Charu19awasthi](https://github.com/Charu19awasthi)
- 💼 **LinkedIn**: [Charu Awasthi](https://www.linkedin.com/in/charu-awasthi-6312b6293/)

### 2. **Pragati Gaykwad**
- 🐙 **GitHub**: [@PG-bit997](https://github.com/PG-bit997)
- 💼 **LinkedIn**: [Pragati Gaykwad](https://www.linkedin.com/in/pragati-gaykwad/)

**Mentorship Available For**:
- Security best practices
- Role-based access implementation
- Database design and optimization
- Evidence management workflows
- Blockchain integration guidance

---

## 🛡 Code of Conduct

We maintain a professional, inclusive environment focused on building secure evidence management systems. All contributors must:

- Respect security protocols and data privacy
- Follow professional communication standards
- Collaborate constructively on security-sensitive features
- Report security vulnerabilities responsibly

[Full Code of Conduct](CODE_OF_CONDUCT.md)

---

## 🔐 Security Guidelines

**For Security-Related Contributions**:
- **Never commit** sensitive data (API keys, passwords, etc.)
- **Test thoroughly** with all user roles
- **Document security implications** of your changes
- **Follow OWASP guidelines** for web security
- **Report vulnerabilities** privately to maintainers first

---

## 📜 License

By contributing to EVID-DGC, you agree that your contributions will be licensed under the project's license terms.

---

## ✨ Getting Started

**New Contributors**:
1. 🔍 Check [Good First Issues](https://github.com/Gooichand/blockchain-evidence/labels/good%20first%20issue)
2. 📖 Read the [README.md](README.md) for setup instructions
3. 🧪 Create test accounts to understand different user roles
4. 💬 Join discussions to understand project goals

**Quick Setup**:
```bash
git clone https://github.com/Gooichand/blockchain-evidence.git
cd blockchain-evidence
npm install
npm start
```

Let's build a secure, reliable evidence management system together! 🔐⚖️

---

*EVID-DGC - Securing digital evidence with blockchain technology and role-based access control.*