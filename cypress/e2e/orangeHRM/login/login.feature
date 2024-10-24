Feature: Login Feature
  
  Scenario: Login with valid Credentials
    Given I visit the URL
    And I should see the homepage
    When I submit the Username
    And I submit the Password
    Then I click the button Login

  Scenario: Login with invalid Username
    Given I visit the URL
    And I should see the homepage
    When I submit the invalid Username
    And I submit the Password
    Then click the button Login
    Then I should see an error message

  Scenario: Login with invalid Password
    Given I visit the URL
    And I should see the homepage
    When I submit the Username
    And I submit the invalid Password
    Then click the button Login
    Then I should see an error message

  Scenario: Login with invalid Username and Password
    Given I visit the URL
    And I should see the homepage
    When I submit the invalid Username
    And I submit the invalid Password
    Then click the button Login
    Then I should see an error message

  Scenario: Login with empty Username and Password
    Given I visit the URL
    And I should see the homepage
    Then click the button Login
    Then I should see an require username message
    Then I should see an require password message