it('should load search results for a product', () => {
  cy.visit("");
  cy.get('body').should('be.visible');

  // Click on 'Products' button
  cy.get("a[href='/products']").should("contain", "Products").click();

  // Verify user is navigated to ALL PRODUCTS page successfully
  cy.contains('All Products').should('be.visible');

  // Enter product name in search input and click search button
  cy.get('input[name="search"]').type('Jeans');
  cy.get('button[type="button"]').click();

  // Verify 'SEARCHED PRODUCTS' is visible
  cy.contains('Searched Products').should('be.visible');

  // Verify all the products related to search are visible
  cy.get('.features_items')
    .should('have.length.greaterThan', 0)
    .each(($el) => {
      cy.wrap($el).should('be.visible');
    });
});


