const selectClient = require('../pages/selectClientPage');
const genericFunction = require('../../factories/GenericFuctions');
const homepage =require('../../pages/homepage');


Given(/^User will click on "([^"]*)" button and will see heading as "([^"]*)"$/, function(button,Title) {

  homepage.clickOnButton(button)
  homepage.switchToFrame()
  homepage.verifyTitle(Title)
  });


Given(/^User will create new data request$/, function(input) {
  table = genericFunction.transformTable(input);
  homepage.createDataRequest(table[0]);
  });

