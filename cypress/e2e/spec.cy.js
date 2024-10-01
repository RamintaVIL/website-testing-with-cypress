const pageUrl = "https://automationexercise.com"

describe('User registration flow', () => {
  beforeEach(() => {
    cy.visit(pageUrl);
  });

  it('should display ', () => {
    cy.get('body').should('be.visible');
    cy.get("a[href='/login']").should("contain", "Signup / Login").click();
    cy.contains("New User Signup!").should('be.visible');
    cy.get('[data-qa="signup-name"]').type('Raminta');
    cy.get('[data-qa="signup-email"]').type('Raminta@dd.com');
    cy.contains("button", "Signup").click();
    cy.contains("h2", "Enter Account Information").should('be.visible');
    cy.get('#id_gender2').should('be.visible').check();
    cy.get('#name').should('be.visible').type('Raminta');
    cy.get('#password').should('be.visible').type('1a1a1aqaaa+++');
    cy.get('#days').should('be.visible').select('12');
    cy.get('#months').should('be.visible').select('September');
    cy.get('#years').should('be.visible').select('1989');
    cy.get('#newsletter').check();
    cy.get('#newsletter').should('be.checked');
    cy.get('#optin').check();
    cy.get('#optin').should('be.checked');
    cy.get('#first_name').should('be.visible').type('Raminta');
    cy.get('#last_name').should('be.visible').type('Balalala');
    cy.get('#company').should('be.visible').type('Pasaku salis');
    cy.get('#address1').should('be.visible').type('Girios g.');
    cy.get('#address2').should('be.visible').type('Girios g.');
    cy.get('#country').should('be.visible').select('India');
    cy.get('#state').should('be.visible').type('bla');
    cy.get('#city').should('be.visible').type('bla');
    cy.get('#zipcode').should('be.visible').type('12940eee');
    cy.get('#mobile_number').should('be.visible').type('1234566777');
    cy.contains("Create Account").should('be.visible');
    cy.contains("button", "Create Account").click();
    cy.contains("h2", "Account Created!").should('be.visible');
    cy.get('[data-qa="continue-button"]').should("have.text", "Continue").click();
    cy.get('.fa.fa-user').parent().should('contain', 'Logged in as Raminta');
    cy.get("a[href='/delete_account']").should("contain", "Delete Account").click();
    cy.contains("h2", "Account Deleted!").should('be.visible');
    cy.get('[data-qa="continue-button"]').should("have.text", "Continue").click();
  });
});



