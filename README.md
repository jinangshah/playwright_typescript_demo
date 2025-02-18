# Playwright TypeScript Demo

This repository is a **Playwright + TypeScript** automation framework designed for **end-to-end (E2E) testing** of web applications. It includes best practices for writing, executing, and reporting Playwright tests.

---

## Features
- **Playwright with TypeScript** for robust and scalable test automation.
- **Page Object Model (POM)** structure for maintainability.
- **Headless & UI Mode** execution.
- **HTML Test Reports** for test analysis.
- **Jenkins Pipeline Integration** for CI/CD.
- **Cross-browser testing** (Chromium, Firefox, WebKit).

---

## Installation
Ensure you have **Node.js (latest)** and **npm** installed.

```sh
git clone https://github.com/jinangshah/playwright_typescript_demo.git
cd playwright_typescript_demo
npm install
npx playwright install --with-deps

## Run All Tests
npx playwright test

## Run in UI mode
npx playwright test --ui

## Generating Reports
npx playwright show-report

📦 playwright_typescript_demo
 ┣ 📂 pages              # Page Object Model (POM) files
 ┣ 📂 tests              # Test cases
 ┣ 📂 locators           # Centralized locators
 ┣ 📂 reports            # Test reports
 ┣ 📜 playwright.config.ts  # Playwright configuration
 ┣ 📜 package.json       # Dependencies & scripts
 ┣ 📜 README.md          # Project documentation
 ┗ 📜 Jenkinsfile        # CI/CD pipeline config
