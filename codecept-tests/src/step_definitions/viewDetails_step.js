const viewDetails = require('../pages/viewDetailsPage');
const genericFunction = require('../../factories/GenericFuctions');

Given(/^User will click on View Details$/, function() {
  viewDetails.clickOnViewDetails("Microsoft United Kingdom");
});

