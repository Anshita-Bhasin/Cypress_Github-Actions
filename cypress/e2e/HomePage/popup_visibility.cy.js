describe("Verify pop-up on the page", () => {
  it("Verify pop up text if pop up is visible, else print - No pop up", () => {
    cy.visit("https://www.lambdatest.com/");

    cy.scrollTo("bottom");
    cy.scrollTo("center");
    cy.wait(225000);

    cy.get("body").then(($body) => {
      if (
        $body.find(
          'div[style="margin-top:25px;display:flex;justify-content:space-between;padding-left:55px;padding-right:55px"]'
        ).length
      ) {
        cy.log(
          "---length ==",
          $body.find(
            'div[style="margin-top:25px;display:flex;justify-content:space-between;padding-left:55px;padding-right:55px"]'
          ).length
        );
        cy.log("---pop up found---");
      } else {
        cy.log("---no pop up ---");
      }
    });
  });
});
