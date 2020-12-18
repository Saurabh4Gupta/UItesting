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
  homepage.verifyLocalMarket(text,button)
  });

 Given(/^User will select filer and will select "([^"]*)" again$/, function(value) {

   homepage.filter1(value);
  });
