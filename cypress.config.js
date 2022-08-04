const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  e2e: {
    experimentalSessionAndOrigin:true,
    pageLoadTimeout:20000,
    chromeWebSecurity:false,
    baseUrl: 'https://app.staging.intempt.com/',
 
  },
});
