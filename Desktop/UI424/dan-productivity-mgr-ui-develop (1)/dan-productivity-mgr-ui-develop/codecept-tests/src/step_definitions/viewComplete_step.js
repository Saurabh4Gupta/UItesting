const viewDetails = require('../pages/viewCompleteRequestPage');
const genericFunction = require('../../factories/GenericFuctions');
const homepage = require('../pages/homepage');
  const I = actor();


Then(/^User will go to "([^"]*)" tab$/, function(button) {
  homepage.goToCompleteTab(button);

});


Then(/^User will click on View Details from complete tab$/, function() {
  I.scrollPageToBottom();
  viewDetails.clickOnViewDetails("Microsoft United Kingdom");
});
Then(/^User able to see "([^"]*)" label$/, function(text) {
  viewDetails.verifySpanText(text);
  I.wait(2);
});
