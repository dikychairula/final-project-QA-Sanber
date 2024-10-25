Feature: Forgot Password
  
  Scenario: Forgot Password
    Given I visit the URL
    And I should see the homepage
    When I click on the "Forgot Password" link
    Then I should see the Reset Password page
    When I submit my username
    And I click the submit button
    Then I should see the message "Reset Password link sent successfully"