it('should load test cases page', () => {
  cy.visit("https://automationexercise.com");
  cy.get('body').should('be.visible');
  cy.get("a[href='/products']").should("contain", "Products").click();
  cy.contains('All Products').should('be.visible');
  cy.get('input[name="search"]').type('Jeans');
  cy.get('button[type="button"]').click();
  cy.contains('Searched Products').should('be.visible');
  cy.get('a[href="#Men"]').click();
  cy.get('a[href="/category_products/6"]').type('Jeans');
  cy.get('.features_items')
    .should('have.length.greaterThan', 0)
    .each(($el) => {
      cy.wrap($el).should('be.visible');
    });
});


