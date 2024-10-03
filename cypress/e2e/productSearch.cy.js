it('should load search results for a product', () => {
  cy.visit("");
  cy.navigateToProductsPage();

  // Enter product name in search input and click search button
  cy.get('input[name="search"]').type('Jeans');
  cy.get('button[type="button"]').click();

  // Verify 'SEARCHED PRODUCTS' is visible
  cy.contains('Searched Products').should('be.visible');

  // Verify all the products related to search are visible
  cy.get('a[href="#Men"]').click();
  cy.get('a[href="/category_products/6"]').type('Jeans');

  cy.get('.features_items')
    .should('have.length.greaterThan', 0)
    .each(($el) => {
      cy.wrap($el).should('be.visible');
    });
});


