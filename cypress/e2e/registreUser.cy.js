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
    cy.fillOutAccountDetails(data);

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



