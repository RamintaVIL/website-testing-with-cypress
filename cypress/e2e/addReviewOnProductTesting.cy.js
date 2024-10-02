it('should load test cases page', () => {
  cy.visit("https://automationexercise.com");
  cy.get('body').should('be.visible');

});



