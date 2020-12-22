const genericFunction = require('../../factories/GenericFuctions');
const homepage = require('../pages/homepage');
let table = null;
const I = actor();

Given(/^User will click on "([^"]*)" button and will see heading as "([^"]*)"$/, function(button, Title) {
  homepage.clickOnButton(button);
  homepage.verifyTitle(Title);
});

//Scenario1//
Given(/^User will create new data request$/, function(input) {
  table = genericFunction.transformTable(input);
  homepage.createDataRequest(table[0]);
});

Then(/^User will click on "([^"]*)" button and Verify request is added and toast notification "([^"]*)" will be shown\.$/, function(button, text) {
  homepage.clickOnButton(button);
  I.wait(3);
  homepage.toastNotification(text);
});

// Scenario2//

  Given(/^User will select filer and will select first "([^"]*)"$/, function(value) {
    homepage.filter(value);

  });
  Given(/^User will see requests related to "([^"]*)" in Ongoing tab$/, function() {
    homepage.verifyOngoingRequests();
  });
 Given(/^User will see in Local market field "([^"]*)" and User will click on "([^"]*)" button$/, function(text,button) {
  homepage.verifyLocalMarket(text,button);
   homepage.clickOnButton(button);
  });

 Given(/^User will select filer and will select "([^"]*)" again$/, function(value) {

   homepage.filter1(value);
  });

 ////Scenario3//
  Given(/^User will click on "([^"]*)" button and will click on "([^"]*)" option$/, function(text,option) {
    I.wait(5);
    homepage.moveToComplete(text,option);
    I.wait(5)

  });


 Given(/^User will see confirmation alert box heading as "([^"]*)"\/Ongoing\/"([^"]*)"$/, function(Subtext) {
   homepage.verifySubtext(Subtext);

  });
  Then(/^User will will click on "([^"]*)" button and will see toast notification "([^"]*)"$/, function(Button,text) {

    homepage.clickOnButton(Button);
    homepage.toastNotification(text);
  });


 Then(/^User will go to "([^"]*)" tab and will verify requests$/, function(button) {

      homepage.goToCompleteTab(button);
      homepage.verifyCompleteRequests();

  });

  Given(/^User will see confirmation alert box heading as "([^"]*)"$/, function(Subtext) {
  homepage.verifySubtext(Subtext);
  });


 ///Scenario4
  Given(/^User will see confirmation alert box heading as "([^"]*)"$/, function(Subtext) {
  homepage.verifySubtext(Subtext);
  });

  //Scenario5
Given(/^User will enter "([^"]*)" in search box\.$/, function(text) {
   I.wait(5);
    homepage.enterTextInSearch(text);
  });

  Given(/^User will remove search text from search box and User will click on show filter to select "([^"]*)"$/, function() {
    homepage.showFilter();
  });

  Given(/^User will see requests related to "([^"]*)" in Ongoing tab for (\d+) Q1$/, function() {
    homepage.verifyCompleteRequests();

  });

  //Scneario6
Given(/^User will go to "([^"]*)" tab and will see "([^"]*)" numbers of request under complete tab$/, function(button,text) {
      homepage.goToCompleteTab(button);
      homepage.verifyNoOfRequests(text);

  });
  Then(/^User will see "([^"]*)" button under tab\.$/, function() {
    homepage.createNewData();

  });

  Given(/^User will see "([^"]*)" numbers of request under ongoing tab$/, function(text) {
  homepage.verifyNoOfRequests(text);
  });


Then(/^User will click on "([^"]*)" button and will click on "([^"]*)" option\.$/, function(text,option) {

  I.wait(5);
  homepage.moveToOngoing(text,option);
  I.wait(5)
  });
  Then(/^User will see toast notification "([^"]*)"\.$/, function(text) {
    homepage.toastNotification(text);
  });


  Given(/^User will see in Local market field "([^"]*)"$/, function(text) {
    homepage.verifyLocalMarketText(text);

  });
  Then(/^User will check "([^"]*)" is selected in All Market filter$/, function(text) {
   homepage.verifyTextOfComp(text);
  });


Given(/^User will create new data request for selected Market$/, function(input) {
    table = genericFunction.transformTable(input);
    homepage.createDataRequestForSelectedMarket(table[0]);
  });
Given(/^User will create new data request for same Market$/, function(input) {
  table = genericFunction.transformTable(input);
  homepage.createDataRequestForSameMarket(table[0]);
  });


Then(/^User will see requests related to "([^"]*)" in Complete tab$/, function(arg1, callback) {
    homepage.verifyCompleteRequests()
  });
 Then(/^User will see requests related to "([^"]*)" in Complete tab for (\d+) Q1$/, function(

 ) {
   homepage.verifyCompleteRequests()
  });

Then(/^User will enter "([^"]*)" in search box in complete tab\.$/, function(text) {
    homepage.enterTextInCompleteSearch(text)
  });
Then(/^User will remove search text from search box and User will click on show filter in complete tab to select "([^"]*)"$/, function(option) {
    homepage. showFilterInComplete(option)
  });
