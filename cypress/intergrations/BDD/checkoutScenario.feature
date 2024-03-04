Feature: Checkout flow for Woolworths website

#Adding two products togather using datatable
    Scenario: Woolworths products checkout flow
    Given I open Woolworths home Page
    When I search for the product and I add items to the cart 
    |item|
    |Fresh Granny Smith Apples Each|
    |Cavendish Bananas Each|
    And Validate items in the cart
    |item|
    |Fresh Granny Smith Apples Each|
    |Cavendish Bananas Each|
    Then Click on the Checkout button and verify it shows login 