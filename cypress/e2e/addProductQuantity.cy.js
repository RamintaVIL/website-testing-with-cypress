it('should add a product to the cart successfully', () => {
  const quantityToAdd = 4;

  cy.visit("");
  cy.navigateToProductsPage();

  // Verify product detail is opened
  cy.navigateToProductDetails();
  cy.get('h2').should('be.visible'); // Patikrinkite, ar produkto pavadinimas matomas
  cy.get('.product-information').should('be.visible');

  // Increase quantity to 4
  cy.get('input[name="quantity"]').clear().type(quantityToAdd);

  // Click 'Add to cart' button
  cy.get('.cart').click();

  // Verify that product is added to the cart
  cy.get('#cartModal').should('contain', 'Added');

  // Click 'View Cart' button
  cy.contains('View Cart').click();

  // Verify that product is displayed in cart page with exact quantity
  cy.get('.cart_quantity').should('contain.text', quantityToAdd);
});



