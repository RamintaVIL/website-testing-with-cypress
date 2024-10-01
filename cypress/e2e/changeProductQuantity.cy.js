const pageUrl = "https://automationexercise.com"

describe('Add products in chart functionality', () => {
  beforeEach(() => {
    cy.visit(pageUrl);
  });

  it('should let add product in chart', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/products']").should("contain", "Products").click();
    cy.get('a[href="/product_details/1"]').click();
    cy.url().should('include', 'product'); // Patikrinkite, ar URL turi 'product'
    cy.get('h2').should('be.visible'); // Patikrinkite, ar produkto pavadinimas matomas
    cy.get('.product-information').should('be.visible');


  });
});


