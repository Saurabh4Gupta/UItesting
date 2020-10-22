Feature: IBRP Dashboard
  In order to manage the GCR applications
  As an admin
  I want to be able to be able to access all the apps under one simple dashboard

  Scenario: Dashboard is visible
    Given I am admin user and login into ibrp dashboard
    Then the dashboard the visible
    And the menu button is present
    And logout option is present
    And language switcher is present
    # And the menu is in expanded state
    # And all the expected links exists

Scenario: Open submodules from menu pane
   When I click on "Taxonomy Manager" app from menu pane
   Then "Taxonomy Manager" home page is displayed
   When I click on "Data Governance" app from menu pane
   Then "Data Governance" home page is displayed
   When I click on "Plan Manager" app from menu pane
   Then "Plan Manager" home page is displayed
   When I click on "Visualisation" app from menu pane
   Then "Visualisation" home page is displayed
