const pageUrl = "https://automationexercise.com"

describe('User registration flow', () => {
  beforeEach(() => {
    cy.visit(pageUrl);
  });

  it('should display the home page successfully', () => {
    cy.get('body').should('be.visible');
  });

  it('should navigate to the Signup/Login page', () => {
    cy.get("a[href='/login']")
      .should("contain", "Signup / Login")
      .click();
  });

  it('should display the "New User Signup!" section', () => {
    cy.get("a[href='/login']").click();
    cy.contains("New User Signup!").should('be.visible');
  });

  it('should allow user to enter name and email, and proceed to signup', () => {
    cy.get("a[href='/login']").click();
    // Laukiame, kol elementas taps pasiekiamas ir matomas
    cy.get('[data-qa="signup-name"]').should('be.visible').type('Raminta');
    cy.get('[data-qa="signup-email"]').should('be.visible').type('Raminta@blabla.com');
    // Patikriname mygtuko "Signup" buvimą ir jį paspaudžiame
    cy.contains("button", "Signup").click();
  });

  it('should display the "Enter Account Information" page after signup', () => {
    cy.get("a[href='/login']").click();
    cy.get('[data-qa="signup-name"]').should('be.visible').type('Raminta');
    cy.get('[data-qa="signup-email"]').should('be.visible').type('Raminta@blabla.com');
    cy.contains("button", "Signup").click();
    cy.contains("h2", "Enter Account Information").should('be.visible');
  });

})