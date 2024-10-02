it('should load test cases page', () => {
  cy.visit("");
  cy.get('body').should('be.visible');
  // cy.get('a[href="/"]').should('contain', 'Home');
  cy.get("a[href='/test_cases']").eq(0).click();
  // cy.url().should('include', '/test_cases');
  cy.get('#form').should('be.visible');
});



