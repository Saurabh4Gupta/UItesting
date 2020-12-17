Feature: View details for Productivity data request

  Background:
    Given User is on landing page
    When User login into the App as "Global Investment Management" user
    Given User is on "My clients" Page
    Then verify list of clients
    Then User will go to client "Microsoft Corporation" homepage
    Given User will click on View Details
 #@smoke
 #PM-28
 Scenario: User is able to view details of Request
    And able to view Title as "Productivity Q2 2020"
    Then User is able to view header as "Productivity request"
  #@smoke
  Scenario: User is able to Edit data request
    And User able to see "Edit request" button and click on it
     # Then User click on Edit request and edit details
     # And User able to Save edited request
    #smoke
    #PM-150
  Scenario: Verify if request is able to Move to complete
     Given User is able to see "Move to complete" button and click on it
     Then User click on "Yes, continue" and "Data request moved to complete" toast notification is shown

  #Scenario: Verify link for Show more
   # Given User is on Productivity request page
    #And User able to see show more link if char > 800
    #Then User click on Show more and able to see entire briefing
    #Then User click on Close to close the modal

#  Scenario: Verify link for Load more for version
 #   Given User is on Productivity request page
  #  And User able to see load more below version if versions > 10
   # Then User click on load more and load 10 more versions
  @smoke
  Scenario: Verify user is able to Upload new file
   Given User is able to see "Upload new file" button
   # And Click on Browse and select file
   # Then Click on upload and able to upload new file

  #Scenario: User able to download uploaded file from version history
   # Given User is on Productivity request page
   # And User click on File name under version history
   # Then File is downloaded
