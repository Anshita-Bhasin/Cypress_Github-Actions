describe("Cypress Exception Handling", () => {
  it("Fail on status code by opening url in browser", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1",
      { failOnStatusCode: false }
    );
  });

  it("Fail on status code by calling api", () => {
    cy.request({
      url: "https://ecommerce-playground.lambdatest.io/index.php?route=account/login/1",
      failOnStatusCode: false,
    });
  });

  it("Tc1- Test Failure when trying to find incorrect locator- error Message", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
    cy.get('[id="input-password"]').type("Cypress1234!!");
    cy.get('[value="Login"]').click();
    cy.get(".error-message").should("be.visible");
  });

  it("TC2- Test Failure when trying to find incorrect locator - Password", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
    cy.get('[id="input-password1"]').type("Cypress1234!!");
  });

  it("Uncaught Exception - Due to application error", () => {
    cy.visit("index.html");
    cy.get("button#error").click();
    cy.wait(1000);
  });
});
