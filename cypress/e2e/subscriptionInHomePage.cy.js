it('should subscribe user successfully', () => {
  cy.visit("");
  cy.get('body').should('be.visible');
  cy.scrollTo('bottom');
  cy.contains('Subscription').should('be.visible');
  cy.get('#susbscribe_email').type('Raminta@BlaBla.com');
  cy.get('#subscribe').click();
  cy.contains('You have been successfully subscribed').should('be.visible');
});



