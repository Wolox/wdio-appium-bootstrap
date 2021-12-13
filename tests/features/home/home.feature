Feature: Home Screen
  Scenario Outline: As a user, I see the text <text> in the home screen

    Given launch the app
    When i am in the home screen
    Then i should see a the text <text>
    
    Examples:
      | text |
      | Demo app for the appium-boilerplate |
      | Support |
      | WEBDRIVER | 
