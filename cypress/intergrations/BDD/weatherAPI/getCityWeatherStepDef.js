import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor"

//Positive Scenario
Given('I like to holiday in Sydney on Thursdays and I look up the weather forecast',()=>{
  cy.request('GET',Cypress.env('weatherAPI')).as('getResponse')
})

When('I receive the weather forecast',() => {
  cy.get('@getResponse').then((response) => {
  expect(response.status).to.eq(200)
})
})
  
Then('Verify response is JSON, city is Sydney and the temperature is warmer than 10 degrees',() => {
  cy.get('@getResponse').then((response) => {
  const header = response.headers['content-type']
  expect(header).to.contain('application/json')
  const cityName=response.body.city.name
  expect(cityName).to.contain('Sydney')
  const temp=response.body.list[0].main.temp
  expect(temp).to.greaterThan(10)
})
})
  