Feature: Checkout flow for Woolworths website

#Adding products one after another using scenario outline for data driven approach
    Scenario Outline: Woolworths <product> checkout flow
    Given I open Woolworths home Page
    When I search for the products <product> and add to the cart 
    And Validate <product> in the cart
    Then Click on the Checkout button and verify it shows login page
    Examples:
    |product|
    |Fresh Granny Smith Apples Each|
    |Cavendish Bananas Each|
