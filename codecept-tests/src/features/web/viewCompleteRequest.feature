Feature: As an Amplifi Global Investment team member
  I want to view Complete request


  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage
    @smoke
    Scenario: To view Complete request
      Given User is able to see subheading as "Productivity data requests"
      And User will click on "more" button and will click on "Move to complete" option
      Then User will will click on "Yes, continue" button and will see toast notification "Data request moved to complete"
      Then User will go to "Complete" tab
      And User will click on View Details from complete tab
      And User able to see "Complete" label
