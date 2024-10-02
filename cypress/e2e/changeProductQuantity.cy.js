it('should let add product in chart', () => {
  cy.visit("");

  // Verify that home page is visible successfully
  cy.get('body').should('be.visible');
  cy.contains('Home').should('be.visible');

  // Click 'View Product' for any product on home page
  cy.get("a[href='/products']").click();

  // Click on specific product
  cy.get('a[href="/product_details/1"]').click();

  // Verify product detail is opened
  cy.url().should('include', 'product'); // Patikrinkite, ar URL turi 'product'
  cy.get('h2').should('be.visible'); // Patikrinkite, ar produkto pavadinimas matomas
  cy.get('.product-information').should('be.visible');

  // Increase quantity to 4
  cy.get('input[name="quantity"]').clear().type('4');

  // Click 'Add to cart' button
  cy.get('.cart').click();

  // Verify that product is added to the cart
  cy.get('#cartModal').should('contain', 'Added');

  // Click 'View Cart' button
  cy.contains('View Cart').click();

  // Verify that product is displayed in cart page with exact quantity
  cy.get('.cart_quantity').should('contain.text', '4');
});



