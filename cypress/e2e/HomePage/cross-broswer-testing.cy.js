describe("Testing on different browsers", () => {
  it("Open test in Chrome browser", { browser: "chrome" }, () => {
    cy.visit("https://www.lambdatest.com/");
    cy.log("-- Chrome Browser---");
  });

  it("Open test in Firefox browser", { browser: "firefox" }, () => {
    cy.visit("https://www.lambdatest.com/");
    cy.log("-- Firefox Browser---");
  });
  it("Open test in Electron browser", { browser: "electron" }, () => {
    cy.visit("https://www.lambdatest.com/");
    cy.log("-- Electron Browser---");
  });



});



