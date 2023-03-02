Feature: Login to website

    Scenario: I try to login to Website zero bank
        Given I open login page
        When I submit login
        Then I Should see homepage