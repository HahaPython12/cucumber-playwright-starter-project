@foo
Feature: User login

    Feature Description: check if a user login is valid

    As a user
    I want to do login to the page
    So I can buy some items

    Scenario: Login to Rahul Shetty Academy
        Given I navigate to 'Rahul Shetty Academy'
        When I type valid '<username>', '<password>' and click login
        Then I should enter my account-page 'AutomationAutomation Practice'

        Examples:
            | username          | password |
            | hallodu@gmail.com | Aa12345! |