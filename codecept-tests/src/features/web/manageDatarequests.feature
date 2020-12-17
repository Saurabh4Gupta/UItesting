Feature: As an Amplifi Global Investment team member
  I want to create a new productivity request in the Productivity Manager
  So that I can brief the Local Investment team members on what I need from them


  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage



    ########PM-25 BRP: Create a new productivity data request######

  Scenario: Create new Productivity Data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | USA         | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | Ryan Killick |
    Then User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.

  @sanity @smoke
    #########PM-105BRP: Filter Productivity Requests by Market#####
    Scenario:Filter Productivity Requests by Market
      Given User is able to see subheading as "Productivity data requests"
      And User will select filer and will select first "United Kingdom"
      And User will see requests related to "Microsoft United Kingdom" in Ongoing tab
      And User will click on "Create new data request" button and will see heading as "Create new data request"
      And User will see in Local market field "United Kingdom" and User will click on "Cancel" button
      And User will select filer and will select "All markets" again
      And User will click on "Create new data request" button and will see heading as "Create new data request"
      And User will see in Local market field "Please select" and User will click on "Cancel" button



