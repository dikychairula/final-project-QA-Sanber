Feature: Manage System Users

  Scenario: search by Username
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I fill the search username
    Then I click search
    And I should see what I find

  Scenario: search by Role
    Given I logged in as admin
    When I navigate to the System Users page
    And I should see the "System Users" header
    When I click on dropdown role
    Then I click search
    And should see what I find

