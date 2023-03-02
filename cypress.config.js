
const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
    video:false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,

    e2e: {
      specPattern: 'cypress/e2e',
      chromeWebSecurity: false,

      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber())
      },
      testIsolation: false,
    },


});
