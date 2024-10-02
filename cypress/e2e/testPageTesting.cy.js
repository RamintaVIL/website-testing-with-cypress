it('should load test cases page', () => {
  cy.visit("");
  cy.get('body').should('be.visible');
  cy.get("a[href='/test_cases']").eq(0).click();
  cy.get('#form').should('be.visible');
});



