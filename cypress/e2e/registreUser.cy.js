it('should register a user successfully and delete the account ', () => {
  // Launch browser and navigate to the URL
  cy.visit("");

  // Verify home page is visible
  cy.get('body').should('be.visible');

  // Click on 'Signup / Login' button
  cy.get("a[href='/login']").click();

  // Verify 'New User Signup!' is visible and enter name and email address
  cy.contains("New User Signup!").should('be.visible');
  cy.get('[data-qa="signup-name"]').type('Raminta');
  cy.get('[data-qa="signup-email"]').type('Raminta@gg.com');
  cy.contains("button", "Signup").click();

  // Verify 'Enter Account Information' is visible
  cy.contains("h2", "Enter Account Information").should('be.visible');

  // Fill out account details
  cy.get('#id_gender2').check();
  cy.get('#password').type('1a1a1aqaaa+++');
  cy.get('#days').select('12');
  cy.get('#months').select('September');
  cy.get('#years').select('1989');

  // Select checkboxes for newsletters and offers
  cy.get('#newsletter').check();
  cy.get('#optin').check();

  // Fill out additional details
  cy.get('#first_name').type('Raminta');
  cy.get('#last_name').type('Balalala');
  cy.get('#company').type('Pasaku salis');
  cy.get('#address1').type('Girios g.');
  cy.get('#address2').type('Girios g.');
  cy.get('#country').select('India');
  cy.get('#state').type('bla');
  cy.get('#city').type('bla');
  cy.get('#zipcode').type('12940eee');
  cy.get('#mobile_number').type('1234566777');

  // Click 'Create Account' button and verify 'Account Created!' message
  cy.contains("button", "Create Account").click();
  cy.contains("h2", "Account Created!").should('be.visible');

  // Click 'Continue' button and verify user is logged in
  cy.get('[data-qa="continue-button"]').should("have.text", "Continue").click();
  cy.get('.fa-user').parent().should('contain', 'Logged in as Raminta');

  // Delete the account and verify 'Account Deleted!' message
  cy.get("a[href='/delete_account']").should("contain", "Delete Account").click();
  cy.contains("h2", "Account Deleted!").should('be.visible');

  // Click 'Continue' button
  cy.get('[data-qa="continue-button"]').should("have.text", "Continue").click();
});



