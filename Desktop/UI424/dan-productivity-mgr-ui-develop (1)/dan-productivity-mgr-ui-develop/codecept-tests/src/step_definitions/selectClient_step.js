const selectClient = require('../pages/selectClientPage');
const genericFunction = require('../../factories/GenericFuctions');

Then(/^User is on "([^"]*)" Page$/, function(header) {
  selectClient.verifyDivText(header);
});

Then(/^User able to see subHeading as "([^"]*)"$/, function(subHeader) {
  selectClient.verifySubtext(subHeader);
});

Then(/^verify list of clients$/, function() {
  let clients = ['Microsoft', 'Massage Envy', 'The Drinking Company 87 LLC', 'The Drinking Company 88 LLC'];
  for (let i = 0; i < clients.length; i++) {
    selectClient.verifySpanText(clients[i]);
  }
});


Then(/^User will go to client "([^"]*)" homepage$/, function(client) {
  selectClient.clickOnViewDetails(client);
});


Then(/^User is able to see subheading as "([^"]*)"$/, function(Title) {

  selectClient.verifyTitle(Title);

});

Then(/^User able to click "([^"]*)"$/, function (text) {
  selectClient.clickOnButton(text);
});
Then(/^verify the subheader "([^"]*)"$/, function (Subtext) {
  selectClient.verifySubtext(Subtext);

});

Given(/^User will click on "([^"]*)" button and will verify "([^"]*)" option$/, function (text,Button ) {
  selectClient.clickOnMore(text);
  selectClient.verifyButton(Button);

});
Then(/^User will click "([^"]*)" and check Notification message "([^"]*)"$/, function (text, Title) {
    selectClient.clickOnButton(text);
    selectClient.verifyTitle(Title);
  } );


Then(/^User will click on "([^"]*)" and verify the task name "([^"]*)"$/, function (text,text1) {
  selectClient.clickOnText(text);
  selectClient.verifytext(text1);
} );

Then(/^User will click on "([^"]*)" and verify the task name in list "([^"]*)"$/, function (text)
{
  selectClient.clickOnText(text);
  selectClient.verifytext(text);
});


