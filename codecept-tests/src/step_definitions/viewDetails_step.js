const viewDetails = require('../pages/viewDetailsPage');
const genericFunction = require('../../factories/GenericFuctions');
//var { Then } = require('cucumber');

Given(/^User will click on View Details$/, function() {
  viewDetails.clickOnViewDetails("Microsoft United Kingdom");
});

Then(/^User is able to view title as "([^"]*)"$/, function(Title) {
  viewDetails.verifyTitle(Title);
});
