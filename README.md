# Project Overview

The purpose of this project is to automate testing for the website using Cypress. The tests cover key user interactions such as login, registration, navigation between pages, and other critical functionalities like form submission and API responses.

## Installation

To get started with testing the website, follow these steps:

### Prerequisites

Node.js (v12 or later)
npm (comes with Node.js) or Yarn

### Steps

Clone the repository:

git clone https://github.com/your-username/website-testing-with-cypress.git
cd website-testing-with-cypress

### Install dependencies:

npm install

Install Cypress:
Cypress is already listed as a dependency, so it's installed with the above command. You can also run:
npm install cypress --save-dev

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
