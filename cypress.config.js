const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    testURL:
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    login_username: "lambdatest.Cypress@disposable.com",
  },


  
  watchForFileChanges: false,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
