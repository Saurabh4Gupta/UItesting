const Dash = require('../pages/loginPage');
const Okta= require('../pages/Login');

const I = actor();

Given('User logged into landing page', async () => {
 await Dash.login();
  await Okta.login('global.admin1', 'Sh@kazu!u1');
});

Then('User is on landing page', async () => {

  await Dash.verifyLandingPage();
});


Given(/^User logs in PM application$/, async()=> {
  await Dash.loginToPM();


  });


Given(/^Client List page will be displayed$/,  async()=>{
    await Dash.verifyClientPage();
  });

  Given(/^User will go to Microsoft Client homepage$/, async()=> {
    await Dash.clientHomepage();
  });

  Given(/^User can see Microsoft Client homepage and will logout from system$/, async()=> {
    await Dash.logOut();
  });


