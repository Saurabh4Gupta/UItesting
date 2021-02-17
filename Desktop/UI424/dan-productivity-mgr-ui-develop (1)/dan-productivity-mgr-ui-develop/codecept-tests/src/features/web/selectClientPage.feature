Feature: As an Amplifi Global or Local Investment team member
  I want to access the Productivity Manager for a client

  #@sanity @smoke
  Scenario: Access Productivity Manager and Client Page
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft" homepage
    Then User is able to see subheading as "Productivity data requests"




