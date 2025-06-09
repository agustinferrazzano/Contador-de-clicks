/*const { defineConfig } = require("cypress");*/
import { defineConfig } from "cypress";

/*module.exports =*/ export default defineConfig({
  e2e: {
    supportFile: 'tests/cypress/support/e2e.js', // ruta corregida
    specPattern: "test/cypress/e2e/**/*.{js,jsx,ts,tsx,cy.js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});