# Cypress Test Cases for Automation Exercise

Welcome to my portfolio showcasing automated test cases developed using Cypress for the [Automation Exercise](https://automationexercise.com) website. The purpose of these tests is to validate the functionality of various features and ensure a seamless user experience.

## Overview

Automation Exercise is an e-commerce website that provides a variety of products and features. The tests created cover key functionalities to ensure they operate as intended, enhancing the reliability of the application.

## Test Cases

Below are the 8 test cases implemented using Cypress:

1. **Test Case 1: Register User**

    - To verify that a new user can successfully register on the Automation Exercise website.

2. **Test Case 6: Contact Us Form**

    - To ensure that the "Contact Us" form functions correctly and submits user inquiries.

3. **Test Case 7: Verify Test Cases Page**

    - To check that the test cases page loads correctly and displays all necessary test case information.

4. **Test Case 9: Search Product**

    - To validate the search functionality of the website by searching for a specific product.

5. **Test Case 10: Verify Subscription on Home Page**

    - To verify that users can successfully subscribe to the newsletter from the homepage.

6. **UTest Case 13: Verify Product Quantity in Cart**

    - To ensure that the correct product quantity is displayed in the shopping cart..

7. **Test Case 17: Remove Products From Cart**

    - To validate that users can successfully remove products from their shopping cart.

8. **Test Case 21: Add Review on Product**
    - To verify that users can submit a review for a product.

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
