const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.woolworths.com.au/',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporterConfig.json',
    },
    specPattern: 'cypress/intergrations/BDD/*.feature',
    setupNodeEvents,

  },
  "env": {
    // Appid will be in environment in root folder and will be local cypress.env.json file to store apiKey. Example : { "appid": "<your ApiKey>" }
    // This cypress.env.json file will be local to machine & gitignored or we can stor in environment variable in the CI provider
    "weatherAPI": "api.openweathermap.org/data/2.5/forecast?lat=-33.865143&lon=151.209900&cnt=1&units=metric&appid=5a37b60f9edbb55c987690259e2e2717"
  },
  
});
