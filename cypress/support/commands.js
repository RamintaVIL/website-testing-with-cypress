Cypress.Commands.add('navigateToProductsPage', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").click();
    cy.contains('All Products').should('be.visible');
});

Cypress.Commands.add('navigateToProductDetails', () => {
    cy.get('a[href="/product_details/1"]').click();
});

Cypress.Commands.add('addProductToCart', (quantity) => {
    cy.navigateToProductDetails(); // Eiti į produkto detalių puslapį
    cy.get('h2').should('be.visible'); // Patikrinti, ar antraštė matoma
    cy.get('.product-information').should('be.visible'); // Patikrinti, ar produktų informacija matoma
    cy.get('input[name="quantity"]').clear().type(quantity); // Įvesti kiekį
    cy.get('.cart').click(); // Spustelėti ant krepšelio
});