const viewDetails = require('../pages/viewDetailsPage');
const genericFunction = require('../../factories/GenericFuctions');
//const homepage = require('../../pages/homepage');

Given(/^User will click on View Details$/, function() {
  viewDetails.clickOnViewDetails("Microsoft United Kingdom");
});

Then(/^able to view Title as "([^"]*)"$/, function(text) {
  viewDetails.verifyDivText(text);
});

Then(/^User is able to view header as "([^"]*)"$/, function(text) {
  viewDetails.verifyTitle(text);
});

Given(/^User able to see "([^"]*)" button and click on it$/, function(button) {
  viewDetails.verifyButton(button);
  viewDetails.clickOnButton(button);
  //homepage.selectLocalMarket()


});
