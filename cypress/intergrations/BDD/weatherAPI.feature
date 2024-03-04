Feature: Get Weather using City

    Scenario: A happy holidaymaker
        Given I like to holiday in Sydney on Thursdays and I look up the weather forecast
        When I receive the weather forecast
        Then Verify response is JSON, city is Sydney and the temperature is warmer than 10 degrees