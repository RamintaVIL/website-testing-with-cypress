it('should allow the user to add a review for a product', () => {
  cy.visit("");
  cy.navigateToProductsPage();
  cy.navigateToProductDetails();

  // Enter name, email and review
  cy.get('input#name').type('jdnk');
  cy.get('#email').type('jdnk@dsjs.lt');
  cy.get('#review').type('sdfjdhsfjhdsfiuhefiuehfuehf');

  // Click 'Submit' button
  cy.get('#button-review').click();

  // Verify success message 'Thank you for your review.' is visible
  cy.contains('Thank you for your review').should('be.visible');
});



