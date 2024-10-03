it('should successfully remove a product from the cart', () => {
  const quantityToAdd = 2;

  cy.visit("");
  cy.navigateToProductsPage();
  cy.addProductToCart(quantityToAdd);

  // Verify that product is added to the cart
  cy.get('#cartModal').should('contain', 'Added');

  // Click 'View Cart' button
  cy.contains('View Cart').click();

  // Click 'X' button corresponding to particular product
  cy.get('i.fa.fa-times').click();

  // Verify that product is removed from the cart
  cy.contains('Cart is empty').should('be.visible');
});



