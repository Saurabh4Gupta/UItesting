const I = actor();
const envURL = require('../../config/EnvConfig');
const loginPage = require('../pages/loginPage');
const genericMethod = require('../../factories/GenericFuctions');
let envStatus = envURL.env === 'int-g1ds' || envURL.env === 'nft-g1ds' || envURL.env === 'stg-g1ds';

// const CryptoJS = require("crypto-js");
// const oktaPass = process.env.OKTA_PASS;
// const oktaKey = process.env.OKTA_KEY;

let table = '';

When('User enter credentials', async () => {
  let user = (!envStatus) ? 'ratemanager.user2@dan-demo.com' : 'Daniel.Diego@dan-demo.com';
  let pass = (!envStatus) ? 'R@tet0ur2' : 'ybRY84{@rh';
  await loginPage.Login(user, pass);
});

// When(/^User login into the App$/, async function() {
//   let user = (!envStatus) ? 'ratemanager.user2@dan-demo.com' : 'Daniel.Diego@dan-demo.com';
//   let pass = (!envStatus) ? 'R@tet0ur2' : 'ybRY84{@rh';
//   await loginPage.tempLogin(user, pass);
// });

Given(/^User is on landing page$/, async () => {
  I.amOnPage('');
});

Then(/^User select client, market and application$/, async (input) => {
  if (envStatus) {
    table = table || genericMethod.transformTable(input);
    await loginPage.selectClientAndMarket(table[0]);
    loginPage.switchToFrame();
  }
});

Then(/^verify user is on landing page$/, function() {
  loginPage.verifyUserOnLandingPage();
});

When(/^User login into the App as "([^"]*)" user$/, async function(type) {
  let user=null,pass=null;
  if (type === 'Global Investment Management') {
    user = (!envStatus) ? 'james.clay@dan-demo.com' : 'barry.styles@dan-demo.com';
    pass = (!envStatus) ? 'aiDR14$@ee' : 'hgKT70!&vd';
  }
  // else if(type===" Investment Management US"){
  //   user = (!envStatus) ? 'ratemanager.user3@dan-demo.com' : 'Daniel.Diego@dan-demo.com';
  //   pass = (!envStatus) ? 'R@tet0ur3' : 'ybRY84{@rh';
  // }
  // else {
  //   user = (!envStatus) ? 'ratemanager.user3@dan-demo.com' : 'Daniel.Diego@dan-demo.com';
  //   pass = (!envStatus) ? 'R@tet0ur3' : 'ybRY84{@rh';
  // }
  await loginPage.tempLogin(user, pass);
  loginPage.switchToFrame();
});
