const Dash = require('../pages/loginPage');
const Okta= require('../pages/Login');
const homepage= require('../pages/homePage');


const I = actor();

Given('User logged into landing page', async () => {

  await Dash.login(); //url call
  await Okta.login('global.admin1', 'Sh@kazu!u1'); //credentials
});

/*Then('User is on landing page', async () => {

  await Dash.verifyLandingPage();
});


Given(/^User logs in PM application$/, async()=> {
  await Dash.loginToPM();


  });*/


Given(/^Client List page will be displayed$/,  async()=>{
  await Dash.verifyClientPage();
});

Given(/^User will go to Microsoft Client homepage$/, async()=> {
  await Dash.clientHomepage();
});


  Then(/^User will create request and will enter all the details$/, async()=> {
   await homepage.newCreateDataRequest();
});
