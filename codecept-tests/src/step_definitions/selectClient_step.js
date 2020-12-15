const selectClient = require('../pages/selectClientPage');
const genericFunction = require('../../factories/GenericFuctions');

Then(/^User is on "([^"]*)" Page$/, function(header) {
  selectClient.verifyDivText(header)
});

Then(/^User able to see subHeading as "([^"]*)"$/, function(subHeader) {
  selectClient.verifySubtext(subHeader)
});

Then(/^verify list of clients$/, function() {
let clients=["American Express","Burberry","Burger King","General Motors","Kellogg's Company","Microsoft Corporation","Procter & Gamble","The Kraft Heinz Company"];
  for(let i=0;i<clients.length;i++){
    selectClient.verifySpanText(clients[i])
  }
  selectClient.clickOnViewDetails("American Express")
});
