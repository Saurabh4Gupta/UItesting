Feature: As an Amplifi Global or Local Investment team member
  I want to access the Productivity Manager for a client


  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage

  @sanity @smoke

  Scenario: Manage Productivity Data requests

    Given User is able to see subheading as "Productivity data requests"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
    |localMarket|requestName  |briefing                 |reportingYear            |actualData|forecastData|dueDate   |assignTo    |
    |USA        |Data request1|This is automated request|April 2021  -  March 2022|7 months  |3 months    |25/02/2021|Ryan Killick|
    Then Verify request is added and toast notification "Data request created" will be shown.

