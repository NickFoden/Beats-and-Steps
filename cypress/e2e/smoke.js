describe("app", () => {
  it("works", () => {
    cy.visit("/");
    cy.findAllByText(/about/i).click({ multiple: true, force: true });
    cy.visit("/about");
    cy.findAllByText(/contact/i).click({ multiple: true, force: true });
    // .findByRole('img', {name: /beats and steps arts academy logo/i});
  });
});
