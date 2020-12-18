const viewDetails = require('../pages/viewDetailsPage');
const genericFunction = require('../../factories/GenericFuctions');



//const homepage = require('../../pages/homepage');
const I = actor();

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
  I.wait(10);

});
Given(/^User is able to see "([^"]*)" button and click on it$/, function(button) {
  viewDetails.verifyButton(button);
  viewDetails.clickOnButton(button);
  I.wait(10);
});


Then(/^User click on "([^"]*)" and "([^"]*)" toast notification is shown$/, function(button,text) {
  viewDetails.verifyButton(button);
  viewDetails.clickOnButton(button);
  //I.wait(10);
  viewDetails.toastNotification(text);
});
Given(/^User is able to see and click on "([^"]*)" button$/, function(button) {
  viewDetails.verifyButton(button);
  viewDetails.clickOnButton(button);
  //I.wait(10);

});
Then(/^User attach tracker file$/, function() {
  viewDetails.uploadFile();
  I.wait(10);
});
Then(/^User click on "([^"]*)" button and "([^"]*)" toast notification is shown$/, function(button,text) {
  viewDetails.verifyButton(button);
  viewDetails.clickOnUpload(button);
  viewDetails.toastNotification(text);
  I.wait(5);
});
