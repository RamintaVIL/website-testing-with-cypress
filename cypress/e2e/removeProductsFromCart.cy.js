it('should successfully remove a product from the cart', () => {
  cy.visit("");
  cy.navigateToProductsPage();

  // Add products to cart
  cy.navigateToProductDetails();
  cy.get('h2').should('be.visible');
  cy.get('.product-information').should('be.visible');
  cy.get('input[name="quantity"]').clear().type('1');
  cy.get('.cart').click();

  // Verify that product is added to the cart
  cy.get('#cartModal').should('contain', 'Added');

  // Click 'View Cart' button
  cy.contains('View Cart').click();

  // Click 'X' button corresponding to particular product
  cy.get('i.fa.fa-times').click();

  // Verify that product is removed from the cart
  cy.contains('Cart is empty').should('be.visible');
});



