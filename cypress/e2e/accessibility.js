/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
  it("Navigates to dance page and checks for accessibility violations", () => {
    cy.findAllByText(/dance/i)
      .click({ multiple: true, force: true })
      .checkA11y();
  });
});
