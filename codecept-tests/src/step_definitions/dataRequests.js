const genericFunction = require('../../factories/GenericFuctions');
const homepage = require('../pages/homepage');
let table = null;


Given(/^User will click on "([^"]*)" button and will see heading as "([^"]*)"$/, function(button,Title) {

  homepage.clickOnButton(button);

  homepage.verifyTitle(Title)
  });


Given(/^User will create new data request$/, function(input) {
  table = genericFunction.transformTable(input);
  homepage.createDataRequest(table[0]);
  });


Then(/^Verify request is added and toast notification "([^"]*)" will be shown\.$/, function(text) {

 homepage.toastNotification(text)

  });


