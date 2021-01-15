Feature: As an Amplifi Global Investment team member
  I want to create a new productivity request in the Productivity Manager
  I want to filter the list of productivity data requests by market
  I want to move an ongoing productivity data to the Complete tab when I'm done working on the data request for the time being
  I want to delete a specific productivity data request
  I want to search or filter a list of productivity data requests

  #TC1 ,TC2
  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User is able to see subheading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage

  #@sanity @UAT TC3
  Scenario: Create new Productivity Data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | USA         | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | Ryan Killick |
    Then User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.

 #@sanity@UAT TC-11
  Scenario:Move to Complete and Move to On-going
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will click on "Move to complete" option
    #And User will see confirmation alert box heading as "You will not be able to make any more edits to this request unless it is moved back to "/Ongoing/"."
    Then User will will click on "Yes, continue" button and will see toast notification "Data request moved to complete"
    Then User will go to "Complete" tab and will verify requests
    And User will click on "more" button and will click on "Move to ongoing" option.
    Then User will see toast notification "Data request moved to ongoing".
    Then User will go to "Ongoing" tab and will verify requests

 # @sanity @smoke TC-12
  Scenario:Delete productivity request
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will click on "Delete" option
    And User will see confirmation alert box heading as "Once deleted, this data request will no longer be available."
    Then User will will click on "Yes, delete" button and will see toast notification "Data request deleted"

  #@sanity @smoke TC-13
  Scenario:Search or filter a list of complete productivity data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will enter "United" in search box.
    And User will see requests related to "Microsoft United Kingdom" in Ongoing tab
    And User will remove search text from search box and User will click on show filter to select "2020 Q1"
    And User will see requests related to "Microsoft United Kingdom" in Ongoing tab for 2020 Q1

  #@sanity @smoke
  Scenario:Display Client Page with (empty) Complete Productivity Requests
    Given User is able to see subheading as "Productivity data requests"
   # And User will enter "sunita" in search box.
   #And User will see "0" numbers of request under ongoing tab
   # And User will see "Create new data request" button under tab.
    And User will go to "Complete" tab and will see "0" numbers of request under complete tab
    Then User will see "Create new data request" button under tab.

    #@sanity @smoke
  Scenario: Reset Market Filter if Productivity Request Created for Different Market
    Given User is able to see subheading as "Productivity data requests"
    And User will select filer and will select first "USA"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "USA"
    And User will create new data request for selected Market
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | USA         | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | Ryan Killick |
    And User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.
    And User will check "USA" is selected in All Market filter
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "USA"
    And User will create new data request for same Market
      | localMarket    | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | United Kingdom | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | Ryan Killick |
    Then User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.
    Then User will check "All markets" is selected in All Market filter

   #@sanity @smoke
  Scenario: Search or filter a list of "Complete" productivity data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will click on "Move to complete" option
    #And User will see confirmation alert box heading as "You will not be able to make any more edits to this request unless it is moved back to "/Ongoing/"."
    Then User will will click on "Yes, continue" button and will see toast notification "Data request moved to complete"
    Then User will go to "Complete" tab and will verify requests
    And User will enter "United" in search box in complete tab.
    And User will see requests related to "Microsoft United Kingdom" in Complete tab
    And User will remove search text from search box and User will click on show filter in complete tab to select "2020 Q1"
    And User will see requests related to "Microsoft United Kingdom" in Complete tab for 2020 Q1

  #@sanity @UAT
  Scenario:Filter Productivity Requests by Market
    Given User is able to see subheading as "Productivity data requests"
    And User will select filer and will select first "United Kingdom"
    And User will see requests related to "Microsoft United Kingdom" in Ongoing tab
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "United Kingdom" and User will click on "Cancel" button
    And User will select filer and will select "All markets" again
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "Please select" and User will click on "Cancel" button
