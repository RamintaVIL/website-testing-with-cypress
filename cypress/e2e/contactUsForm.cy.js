it('should load contact us form and let it fill', () => {
  // Launch browser
  cy.visit("https://automationexercise.com");
  // Verify that home page is visible successfully
  cy.get('body').should('be.visible');
  // Click on 'Contact Us' button
  cy.get('a[href="/contact_us"]').should('contain', 'Contact us').click();
  // Verify 'GET IN TOUCH' is visible
  cy.contains('Get In Touch').should('be.visible');
  // Enter name, email, subject and message
  cy.get('[data-qa="name"]').type('Raminta');
  cy.get('[data-qa="email"]').type('Raminta@blabla');
  cy.get('[data-qa="subject"]').type("aaaaaaa");
  cy.get('[data-qa="message"]').type("asdjasdksjaflksajfklsafjlsfjsl");
  // Upload file
  // cy.get('input[name="upload_file"]').attachFile('your_file_name.txt');
  // Click 'Submit' button
  cy.get('input[data-qa="submit-button"]').click();
  // Click OK button (galite naudoti cy.on() norint užfiksuoti alert)
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Your details have been submitted successfully.');
  });
  // Verify success message is visible
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  // Click 'Home' button and verify that landed to home page successfully
  cy.get('.btn.btn-success').should('contain', 'Home').click();
  cy.get('body').should('be.visible');
});



