it('should allow user to add a review to a product', () => {
  cy.visit("");
  cy.get('a[href="/products"]').click();
  cy.contains('All Products').should('be.visible');
  cy.get('a[href="/product_details/1"]').click();
  cy.contains('Write Your Review').should('be.visible');
  cy.get('input#name').type('jdnk');
  cy.get('#email').type('jdnk@dsjs.lt');
  cy.get('#review').type('sdfjdhsfjhdsfiuhefiuehfuehf');
  cy.get('#button-review').click();
  cy.contains('Thank you for your review').should('be.visible');
});



