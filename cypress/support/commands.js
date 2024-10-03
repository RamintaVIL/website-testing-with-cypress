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
