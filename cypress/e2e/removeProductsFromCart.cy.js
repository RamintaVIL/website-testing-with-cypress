it('should allow user to add a review to a product', () => {
  cy.visit("https://automationexercise.com");
  cy.contains('body').should('be.visible');
  cy.get('a[href="/product_details/1"]').click();
  cy.url().should('include', 'product'); // Patikrinkite, ar URL turi 'product'
  cy.get('h2').should('be.visible'); // Patikrinkite, ar produkto pavadinimas matomas
  cy.get('.product-information').should('be.visible');
  cy.get('input[name="quantity"]').clear().type('1');
  cy.get('.cart').click();
  cy.get('#cartModal').should('contain', 'Added');
  cy.contains('View Cart').click();
  cy.get('i.fa.fa-times').click();
  cy.contains('Cart is empty').should('be.visible');
});



