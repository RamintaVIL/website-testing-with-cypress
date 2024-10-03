it('should allow the user to add a review for a product', () => {
  cy.visit("");
  cy.navigateToProductsPage();
  cy.navigateToProductDetails();

  cy.fixture('reviewData').then((data) => {
    // Enter name, email and review using the data from fixture
    cy.get('input#name').type(data.name);
    cy.get('#email').type(data.email);
    cy.get('#review').type(data.review);

    // Click 'Submit' button
    cy.get('#button-review').click();
  });

  // Verify success message 'Thank you for your review.' is visible
  cy.contains('Thank you for your review').should('be.visible');
});



