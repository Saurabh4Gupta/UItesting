Feature: As an Amplifi Global Investment team member
  I want to create a new productivity request in the Productivity Manager
  I want to filter the list of productivity data requests by market
  I want to move an ongoing productivity data to the Complete tab when I'm done working on the data request for the time being
  I want to delete a specific productivity data request
  I want to search or filter a list of productivity data requests
  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then User able to see subHeading as "Choose the client you wish to view"
    Then verify list of clients
    Then User will go to client "Microsoft" homepage
  #@smoke
  Scenario Outline: verify response when user post a new data request for invalid data
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
      | localMarket   | requestName   | briefing   | actualData   | forecastData   | reportingYear   | dueDate   | assignTo   | file   |
      | <localMarket> | <requestName> | <briefing> | <actualData> | <forecastData> | <reportingYear> | <dueDate> | <assignTo> | <file> |
    Then User will click on "Create" button and validation for respective fields "This field cannot be blank" will be shown.
    #Then verify message should be "<msg>"
    Examples:
      | localMarket | briefing                | requestName      | actualData | forecastData | reportingYear | dueDate    | assignTo   | file          |
      | Albania     | Description for request |                  | 0          | 1            | 2021          | 2022-01-19 | James Clay | Book1_xls.xls |
      | Albania     |                         | Name for Request | 0          | 1            | 2021          | 2022-01-19 | James Clay | Book1_xls.xls |
      | Albania     | Description for request | Name for Request |            |              | 2021          | 2022-01-19 | James Clay | Book1_xls.xls |
      | Albania     | Description for request | Name for Request | 4          | 3            |               | 2022-01-19 | James Clay | Book1_xls.xls |
      | Albania     | Description for request | Name for Request | 4          | 3            | 2021          | 2022-01-19 |            | Book1_xls.xls |

  ########PM-25 BRP: Create a new productivity data request######
  #@sanity @smoke
  Scenario: Create a new Productivity Data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo   |
      | Albania     | Data request1 | This is automated request | April 2021  -  March 2022 | 3 months   | 7 months     | 02/26/2021 | James Clay |
    Then User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.

  #@smoke #Validation for Blank name
  Scenario: Create new Productivity Data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will create new data request
      | localMarket | requestName | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo   |
      | Albania     |             | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | James Clay |
    Then User will click on "Create" button and validation for respective fields "This field cannot be blank" will be shown.

  #########PM-105BRP: Filter Productivity Requests by Market####
  #@sanity @smoke
  Scenario:Filter Productivity Requests by Market
    Given User is able to see subheading as "Productivity data requests"
    And User will select filer and will select first "Albania"
    And User will see requests related to "Microsoft Albania" in Ongoing tab
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "Albania" and User will click on "Cancel" button
    And User will select filer and will select "All markets" again
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "Please select" and User will click on "Cancel" button

 #@smoke
  Scenario:Move to Complete
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will click on "Move to complete" option
    #And User will see confirmation alert box heading as "You will not be able to make any more edits to this request unless it is moved back to "/Ongoing/"."
    Then User will will click on "Yes, continue" button and will see toast notification "Data request moved to complete"
    Then User will go to "Complete" tab and will verify requests
    And User will click on "more" button and will click on "Move to ongoing" option.
    Then User will see toast notification "Data request moved to ongoing".
    Then User will go to "Ongoing" tab and will verify requests

  #####PM-30BRP: Delete a productivity data request##
 #@sanity @smoke
  Scenario:Delete productivity request
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will click on "Delete" option
    And User will see confirmation alert box heading as "Once deleted, this data request will no longer be available."
    Then User will will click on "Yes, delete" button and will see toast notification "Data request deleted"

##PM-75-BRP: Search or filter a list of ongoing productivity data requests###
  #@sanity @smoke
  Scenario:Search or filter a list of complete productivity data requests
    Given User is able to see subheading as "Productivity data requests"
    And User will enter "United" in search box.
    And User will see requests related to "Microsoft United Kingdom" in Ongoing tab
    And User will remove search text from search box and User will click on show filter to select "2020 Q1"
    And User will see requests related to "Microsoft United Kingdom" in Ongoing tab for 2020 Q1

##PM-35-BRP: Display Client Page with (empty) Ongoing Productivity Requests#
  #@sanity @smoke
  Scenario:Display Client Page with (empty) Complete Productivity Requests
    Given User is able to see subheading as "Productivity data requests"
   # And User will enter "sunita" in search box.
   #And User will see "0" numbers of request under ongoing tab
   # And User will see "Create new data request" button under tab.
    And User will go to "Complete" tab and will see "0" numbers of request under complete tab
    Then User will see "Create new data request" button under tab.

##M-165BRP: Reset Market Filter if Productivity Request Created for Different Market##
   #@sanity @smoke
  Scenario: Reset Market Filter if Productivity Request Created for Different Market
    Given User is able to see subheading as "Productivity data requests"
    And User will select filer and will select first "Albania"
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "Albania"
    And User will create new data request for selected Market
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | USA         | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2022 | James Clay |
    And User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.
    And User will check "USA" is selected in All Market filter
    And User will click on "Create new data request" button and will see heading as "Create new data request"
    And User will see in Local market field "USA"
    And User will create new data request for same Market
      | localMarket    | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | United Kingdom | Data request1 | This is automated request | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2022| James Clay |
    Then User will click on "Create" button and Verify request is added and toast notification "Data request created" will be shown.
    Then User will check "All markets" is selected in All Market filter

  ##PM-98BRP: Search or filter a list of "Complete" productivity data requests##
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

  Scenario: Back to clients and verfiy My clients
    Given User able to click "Back to clients"
    Then verify the subheader " My clients"

    # SAURABH negative
  @sanity @smoke
  Scenario: Verify Delete productivity request
    Given User is able to see subheading as "Productivity data requests"
    And User will click on "more" button and will verify "Delete" option
    Then User will click "Delete" and check Notification message "Are you sure you want to delete?"
    Then User will click on "No, cancel" and verify the task name "Microsoft Albania"
    And  User will click on "more" button and will click on "Delete" option
    Then User will will click on "Yes, delete" button and will see toast notification "Data request deleted"
