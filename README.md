# task_AutomationChallenge

**Author:** Khaled Hamdy  
**Date:** August 2025  
**Scope:** End-to-end testing for user authentication and CRUD functionality  
**Tools Used:** **Cypress + Cucumber** and **API tests** using **Postman/Newman**, **@cypress/code-coverage** all integrated into **GitHub Actions** CI/CD.

---

## 1. 🎯 What is Being Tested for UI and API

- User Registration (Signup) => UI Testing
- User Login / Logout => UI Testing
- Admin CRUD operations (Create, Read, Update, Delete) => UI Testing
- UI field validations and visual integrity => UI Testing
- Code coverage for frontend logic 
- Get list of items (positive) => API Testing
- Unauthorized access (negative – no token or invalid token) => API Testing
- Check that the response is in correct format (e.g., array of objects) => API Testing
- Update existing item with valid data => API Testing
- Invalid ID or item not found => API Testing
- Invalid input data => API Testing





---

## 2. 📌 Test Coverage Areas

### ✅ Authentication
- Valid & invalid login attempts
- Signup validations (empty fields, email format, password length)
- Error messages and redirects
- Successful login and logout flow

### ✅ User Management
- Viewing form field placeholders
- Required field validations
- Adding and viewing users in table
- Updating existing users
- Deleting users
- Success and error alerts

### ✅ Visual Testing
- Snapshot testing using `cypress-image-snapshot`

### ✅ Code Coverage
- Using `nyc` with `@cypress/code-coverage` to track tested code

---

## 3. 🧰 Tools Used and Why

| Tool                      | Purpose                                                                  |
|---------------------------|--------------------------------------------------------------------------|
| **Cypress**               | E2E testing framework with fast browser control                         |
| **Cucumber + Cypress**    | BDD syntax (`Given/When/Then`) for readable scenarios                   |
| **@cypress/code-coverage**| Tracks which frontend code is exercised during tests                    |
| API   | Postman / Newman          | REST API Testing                                                |
| **cypress-image-snapshot**| Detects UI regressions visually                                          |
| **GitHub Actions**        | Runs tests & uploads reports on push and PR                              |

---

## 4. 🚀 How to Run the Tests

### 🔧 Locally

```bash
npm install
npm run dev
# In another terminal
npx cypress open  # or npx cypress run
```

### 🧾 Code Coverage

```bash
npx nyc report
# View HTML report at: coverage/index.html
```

### ⚙️ GitHub Actions CI

Runs on:
- Push to `main`
- Pull Requests to `main`

Artifacts:
- Screenshots
- Code coverage reports
- Snapshot diffs

## ❗ Notes
- Make sure no other process is using port `5173`.
- Visual tests may be skipped if using incompatible Cypress versions.

---

## 5. ⚠️ Assumptions & Limitations

- Visual tests rely on consistent rendering across environments
- Email regex only validates format, not deliverability
- No current tests for responsive/mobile design

---

✅ **Conclusion:**  
Automated E2E suite ensures key user/admin flows are validated with Cypress, Cucumber, visual regression, and code coverage via CI/CD

/*Test Documentation link*/ => https://drive.google.com/file/d/127w3UwxoM-3idAWDo_D1IqrqPOvdUPDi/view?usp=sharing


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
