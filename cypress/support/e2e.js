// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.on("fail", (e, runnable) => {
  console.log("error", e);
  console.log("runnable", runnable);
  console.log("message", e.message);
  if (
    e.name === "AssertionError" &&
    !e.message.includes(
      "Timed out retrying after 4000ms: Expected to find element: `.error-message`, but never found it."
    )

  ) {
    throw e;
  }
});

Cypress.on("uncaught:exception", (e, runnable) => {
  console.log("error", e);
  console.log("error message", e.message);
  console.log("runnable", runnable);
  if (e.message.includes("Things went bad")) {
    return false;
  }
});
