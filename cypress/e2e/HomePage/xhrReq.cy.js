describe("XHR Request", () => {
  it("XHR Req", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
    cy.get('[id="input-password"]').type("Cypress123!!");
    //cy.get("[placeholder='Search']").type("macbook").focus();
  });
});
