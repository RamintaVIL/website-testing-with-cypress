Cypress.Commands.add('navigateToProductsPage', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").click();
    cy.contains('All Products').should('be.visible');
})