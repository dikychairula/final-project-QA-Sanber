Feature: Manage System Users

  Scenario: search by Username
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I fill the search username
    Then I click search
    And I found the username

  Scenario: search by Role
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I click on dropdown role
    Then I click search
    And I found the role

  Scenario: search by Status
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I click on dropdown status
    Then I click search
    And I found the status
    
  Scenario: search unregistered username
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I fill with unregistered username
    Then I click search button
    And I not found the username

  Scenario: add a new user
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I click on the "Add" button
    And I should see the "Add User" header
    And I fill user role
    And I fill status
    And I fill and choose employee
    And I fill the username
    And I fill the password
    And I fill the confirm password
    Then I click on submit