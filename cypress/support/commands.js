Cypress.Commands.add('navigateToProductsPage', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").click();
    cy.contains('All Products').should('be.visible');
});

Cypress.Commands.add('navigateToProductDetails', () => {
    cy.get('a[href="/product_details/1"]').click();
});

Cypress.Commands.add('addProductToCart', (quantity) => {
    cy.navigateToProductDetails();
    cy.get('h2').should('be.visible');
    cy.get('.product-information').should('be.visible');
    cy.get('input[name="quantity"]').clear().type(quantity);
    cy.get('.cart').click();
});

Cypress.Commands.add('navigateToContactUsPage', () => {
    // Verify that home page is visible successfully
    cy.get('body').should('be.visible');
    // Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').should('contain', 'Contact us').click();
    // Verify 'GET IN TOUCH' is visible
    cy.contains('Get In Touch').should('be.visible');
});

Cypress.Commands.add('fillOutAccountDetails', (data) => {
    cy.get('#id_gender2').check();
    cy.get('#password').type(data.password);
    cy.get('#days').select('12');
    cy.get('#months').select('September');
    cy.get('#years').select('1989');

    // Select checkboxes for newsletters and offers
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Fill out additional details
    cy.get('#first_name').type(data.first_name);
    cy.get('#last_name').type(data.last_name);
    cy.get('#company').type(data.company);
    cy.get('#address1').type(data.address1);
    cy.get('#address2').type(data.address2);
    cy.get('#country').select(data.country);
    cy.get('#state').type(data.state);
    cy.get('#city').type(data.city);
    cy.get('#zipcode').type(data.zipcode);
    cy.get('#mobile_number').type(data.mobile_number);
});

