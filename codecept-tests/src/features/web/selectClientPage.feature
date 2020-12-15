Feature: US TV rates manager overview - TRD-29
  As a US TV user
  I want to see an 'Overview' on loading the Rates Manager App that lists the Rate cards available to me
  so that I can access Rates information

  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user

  @sanity @smoke
  Scenario: Verify GUI of select client page
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
