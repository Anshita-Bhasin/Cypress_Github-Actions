const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_username: "lambdatest.Cypress@disposable.com",
  },

  watchForFileChanges: false,
  chromeWebSecurity: false,

  e2e: {
    //specPattern: "cypress/e2e/**/*.test.js",
  },

  defaultCommandTimeout: 6000,
});
