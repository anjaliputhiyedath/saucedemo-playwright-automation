# SauceDemo Playwright Automation

## Project Overview

This project automates end-to-end UI test scenarios for the SauceDemo demo e-commerce application using Playwright with JavaScript. It demonstrates test automation practices using the Page Object Model (POM), data-driven testing, and assertions to validate key shopping workflows.

## Technologies Used

* JavaScript
* Playwright Test
* Node.js
* Page Object Model (POM)
* Git and GitHub

## Test Coverage

* Login functionality with valid and invalid credentials
* Data-driven login testing using external test data
* Product display and sorting by name and price
* Shopping cart operations, including adding and removing products
* Checkout form validation for required fields
* Checkout overview verification, including product details, subtotal, tax, and total
* Order completion and logout

## Project Structure

* `Pages/` - Page Object Model classes and reusable page methods
* `tests/` - Playwright test specification files
* `utiles/` - Test data files

## Prerequisites

* Node.js and npm
* Git
* Visual Studio Code (recommended)

## How to Run the Project

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd saucedemo-playwright-automation
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Run All Tests

```bash
npx playwright test
```

### 4. Run Tests with the Browser Visible

```bash
npx playwright test --headed --project=chromium
```

### 5. View the HTML Test Report

```bash
npx playwright show-report
```

## Learning Objectives

This project demonstrates practical application of Playwright automation using JavaScript, reusable page objects, data-driven testing, UI assertions, and end-to-end testing workflows.

## Author

Created as a Playwright automation practice project to strengthen UI testing skills and demonstrate test automation concepts.
