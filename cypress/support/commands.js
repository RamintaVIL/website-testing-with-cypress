Cypress.Commands.add('navigateToProductsPage', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").click();
    cy.contains('All Products').should('be.visible');
});

Cypress.Commands.add('navigateToProductDetails', () => {
    cy.get('a[href="/product_details/1"]').click();
});

