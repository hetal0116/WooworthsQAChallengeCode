# Introduction
This project is to automate the Woolworths checkout and Open Weather Map API

# Getting Started
1. Cypress installation process
    * NodeJs and Npm (most recent LTS version) [download here](https://nodejs.org/en/)
    * run from cmdline / terminal in the local repo: `npm install`

2. Running tests locally
    * to run all the tests from CLI --> from cmd/bash run: npm run cypress:run
    * to open cypress and run/debug tests --> npm run cypress:open

# Framework structure
* integrations  -> All tests go here under the respective feature folders.
    * BDD > checkoutScenario -> Adding two products in cart at once and clicking checkout
    * BDD > checkoutScenarioOutline -> Completing flow with each product one after another using scenario outline and clicking checkout
    * BDD > weatherAPI -> Open weather map API
    * subfolder featureName.feature -> All feature files for respective feature.

* page objects -> All respective pages for ui automation with elements and related methods of the page


# Open Weather map API(change of API):
* http://openweathermap.org/forecast16 --> api.openweathermap.org/data/2.5/forecast/daily? api requires subscription. 
* As a workaround, I have changed API to --> api.openweathermap.org/data/2.5/forecast? 
   * Using forecast API I could achieve verification of the following:
      * response: JSON format --> Verified,
      * City: Sydney --> Verified,
      * Weather > 10 degrees C --> Verified
      * Day couldn't be verified as this new api does not return "day" (if I can get access to original api I can easily verify day in response)
