it('should register a user successfully and delete the account ', () => {
  // Launch browser and navigate to the URL
  cy.visit("");

  // Verify home page is visible
  cy.get('body').should('be.visible');

  // Click on 'Signup / Login' button
  cy.get("a[href='/login']").click();

  // Verify 'New User Signup!' is visible and enter name and email address
  cy.contains("New User Signup!").should('be.visible');

  // Load user data from fixture
  cy.fixture('userData').then((data) => {
    cy.get('[data-qa="signup-name"]').type(data.name);
    cy.get('[data-qa="signup-email"]').type(data.email);
    cy.contains("button", "Signup").click();

    // Verify 'Enter Account Information' is visible
    cy.contains("h2", "Enter Account Information").should('be.visible');

    // Fill out account details
    cy.get('#id_gender2').check();
    cy.get('#password').type(data.password);
    cy.get('#days').select('12');
    cy.get('#months').select('September');
    cy.get('#years').select('1989');

    // Select checkboxes for newsletters and offers
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Fill out additional details
    cy.get('#first_name').type(data.first_name);
    cy.get('#last_name').type(data.last_name);
    cy.get('#company').type(data.company);
    cy.get('#address1').type(data.address1);
    cy.get('#address2').type(data.address2);
    cy.get('#country').select(data.country);
    cy.get('#state').type(data.state);
    cy.get('#city').type(data.city);
    cy.get('#zipcode').type(data.zipcode);
    cy.get('#mobile_number').type(data.mobile_number);

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
});



