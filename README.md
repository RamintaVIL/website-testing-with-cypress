# Cypress Test Cases for Automation Exercise

Welcome to my portfolio showcasing automated test cases developed using Cypress for the [Automation Exercise](https://automationexercise.com) website. The purpose of these tests is to validate the functionality of various features and ensure a seamless user experience.

## Overview

Automation Exercise is an e-commerce website that provides a variety of products and features. The tests created cover key functionalities to ensure they operate as intended, enhancing the reliability of the application.

## Test Cases

Below are the 8 test cases implemented using Cypress:

1. **Verify Home Page Loads Successfully**

    - Check if the home page of the website loads correctly.

2. **Verify Product Categories**

    - Ensure all product categories are displayed and accessible from the homepage.

3. **Add Product to Cart**

    - Validate the process of adding a product to the shopping cart.

4. **Verify Cart Functionality**

    - Confirm that users can view, update, and delete items in the shopping cart.

5. **User Registration**

    - Test the user registration process and validate that new users can sign up.

6. **User Login**

    - Check the login functionality for registered users.

7. **Search Functionality**

    - Verify the search feature by searching for specific products.

8. **Checkout Process**
    - Test the end-to-end checkout process, ensuring users can complete a purchase.

## Installation

To get started with testing the website, follow these steps:

### Prerequisites

-   Node.js (v12 or later)
-   npm (comes with Node.js) or Yarn

### Steps

Clone the repository:

git clone https://github.com/RamintaVIL/website-testing-with-cypress
cd website-testing-with-cypress

npm install -y

### Running Tests

Interactive Mode
To run Cypress tests in interactive mode, where you can see the browser executing your test steps:

npx cypress open

This will launch the Cypress Test Runner. You can click on individual test files to run them and observe the actions in the browser.

Headless Mode
To run all Cypress tests in headless mode (without opening the browser), use:

npx cypress run

Authors

RamintaVIL: Github

License

Distributed under the ISC License. See LICENSE.txt for more information.
