const viewDetails = require('../pages/viewDetailsPage');
const genericFunction = require('../../factories/GenericFuctions');
const homepage = require('../pages/homepage');
let table = null;

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

Given(/^User will edit data request$/, function(input) {
  table = genericFunction.transformTable(input);
  viewDetails.editDataRequest(table[0]);

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

Given(/^User able to see "([^"]*)" link if char greater than 800$/, function(button) {
  viewDetails.verifyButton(button);
});

Then(/^User click on "([^"]*)" and able to see entire briefing$/, function(button) {
  viewDetails.clickOnButton(button);
  I.wait(5);
});

Then(/^User click on "([^"]*)" to close the modal$/, function(button) {
  viewDetails.clickOnButton(button);
});

Given(/^User able to see "([^"]*)" below version if versions are greater than 10$/, function(button) {
  I.scrollPageToBottom();
  viewDetails.verifyButton(button);
});

Then(/^User click on "([^"]*)" and load more versions$/, function(button) {
  viewDetails.clickOnButton(button);
  I.wait(5);
});

Given(/^User is able to see file with label "([^"]*)"$/, function(button) {
  viewDetails.verifySpanText(button);
});

Then(/^User click on File link with label "([^"]*)" and able to download file$/, function(button) {
  viewDetails.clickOnSpanText(button);
});

Given(/^User able to see "([^"]*)" link$/, function(button) {
  viewDetails.verifyButton(button);
});

Then(/^User click on "([^"]*)" and client homepage is loaded with header "([^"]*)"$/, function(button,text) {
  viewDetails.clickOnButton(button);
  viewDetails.verifyDivText(text);
  I.wait(2);
});
