describe("XHR Request", () => {
  it("XHR Req", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    cy.get("input#user-message").type("lambdatest.Cypress@disposable.com");
  });
});
