Feature: Use login credentials to access the Demo Media Ecosystem environment, to then locate and launch Productivity Manager.

  @sanity @smoke
  Scenario: Accessing Environment
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Then User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
