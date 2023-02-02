describe("Custom Commands",{tags:'@testing tips'}, () => {
  it("use login method from custom commands", () => {
    cy.login("lambdatest.Cypress@disposable.com", "Cypress1234!!").screenshot();
    cy.get('[name="search"]').eq(0).type("Macbook").screenshot();

    //cy.screenshot("test3", { capture: "fullPage" });

    // cy.screenshot("screen3");

    //cy.get('input#email',{force:true})
  });
});
