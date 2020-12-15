const selectClient = require('../pages/selectClientPage');
const genericFunction = require('../../factories/GenericFuctions');

Then(/^User is on "([^"]*)" Page$/, function(header) {
  selectClient.verifyDivText(header)
});

Then(/^User able to see subHeading as "([^"]*)"$/, function(subHeader) {
  selectClient.verifySubtext(subHeader)
});
