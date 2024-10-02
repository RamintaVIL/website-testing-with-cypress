it('should successfully remove a product from the cart', () => {
  cy.visit("");
  cy.get('body').should('be.visible');

  // Add products to cart
  cy.get('a[href="/product_details/1"]').click();
  cy.url().should('include', 'product'); // Patikrinkite, ar URL turi 'product'
  cy.get('h2').should('be.visible'); // Patikrinkite, ar produkto pavadinimas matomas
  cy.get('.product-information').should('be.visible');
  cy.get('input[name="quantity"]').clear().type('1');
  cy.get('.cart').click();

  // Verify that product is added to the cart
  cy.get('#cartModal').should('contain', 'Added');

  // Click 'View Cart' button
  cy.contains('View Cart').click();

  // Verify that cart page is displayed
  // cy.url().should('include', 'view_cart'); // Patikrinkite, ar esate krepšelio puslapyje

  // Click 'X' button corresponding to particular product
  cy.get('i.fa.fa-times').click();

  // Verify that product is removed from the cart
  cy.contains('Cart is empty').should('be.visible');
});



