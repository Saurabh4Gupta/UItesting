Feature: View details for Productivity data request

  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage
    Given User will click on View Details

 #PM-28
 Scenario: User is able to view details of Request
    And able to view Title as "Productivity Q2 2020"
    Then User is able to view header as "Productivity request"

  Scenario: User is able to Edit data request
    Given User able to see "Edit request" button and click on it
    And User will create new data request
      | localMarket | requestName   | briefing                  | reportingYear             | actualData | forecastData | dueDate    | assignTo     |
      | USA         | Data request1 | This is automated request in edit window | April 2021  -  March 2022 | 7 months   | 3 months     | 02/26/2021 | Ryan Killick |
    Then User will click on "Edit" button and Verify request is added and toast notification "Data request updated" will be shown.
     # Then User click on Edit request and edit details
     # And User able to Save edited request

    #PM-150
  Scenario: Verify if request is able to Move to complete
     Given User is able to see "Move to complete" button and click on it
     Then User click on "Yes, continue" and "Data request moved to complete" toast notification is shown

  Scenario: Verify link for Show more
    Given User able to see "Show more" link if char greater than 800
    Then User click on "Show more" and able to see entire briefing
    And User click on "Close" to close the modal
  @smoke
  Scenario: Verify link for Load more for version
    And User able to see "Load more" below version if versions are greater than 10
    Then User click on "Load more" and load more versions

  Scenario: Verify user is able to Upload new file
    Given User is able to see and click on "Upload new file" button
    Then User attach tracker file
    And User click on "Upload" button and "File uploaded" toast notification is shown


  #Scenario: User able to download uploaded file from version history
   # Given User is on Productivity request page
   # And User click on File name under version history
   # Then File is downloaded
