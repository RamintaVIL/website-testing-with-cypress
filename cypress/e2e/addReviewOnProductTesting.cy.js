it('should allow the user to add a review for a product', () => {
  cy.visit("");

  cy.navigateToProductsPage();
  // Click on 'Products' button
  // cy.get('a[href="/products"]').click();

  // Verify user is navigated to ALL PRODUCTS page successfully
  // cy.contains('All Products').should('be.visible');

  // Click on 'View Product' button
  cy.get('a[href="/product_details/1"]').click();

  // Enter name, email and review
  cy.get('input#name').type('jdnk');
  cy.get('#email').type('jdnk@dsjs.lt');
  cy.get('#review').type('sdfjdhsfjhdsfiuhefiuehfuehf');

  // Click 'Submit' button
  cy.get('#button-review').click();

  // Verify success message 'Thank you for your review.' is visible
  cy.contains('Thank you for your review').should('be.visible');
});



