it('should load and submit the Contact Us form successfully', () => {
  cy.visit("");
  cy.navigateToContactUsPage();

  // Enter name, email, subject and message using data from fixture
  cy.fixture('contactUsData').then((data) => {
    cy.get('[data-qa="name"]').type(data.name),
      cy.get('[data-qa="email"]').type(data.email),
      cy.get('[data-qa="subject"]').type(data.subject),
      cy.get('[data-qa="message"]').type(data.message);
  });
  // Upload file
  cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/example.json');
  cy.get('input[data-qa="submit-button"]').click();

  // Click OK button 
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Your details have been submitted successfully.');
  });

  // Verify success message is visible
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

  // Click 'Home' button and verify that landed to home page successfully
  cy.get('.btn.btn-success').should('contain', 'Home').click();
  cy.get('body').should('be.visible');
});



