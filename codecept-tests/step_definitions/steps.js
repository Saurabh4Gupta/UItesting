const Dash = require('../pages/Dashboard');

const I = actor();

Given('I am admin user and login into PM dashboard', () => {
  Dash.login();
});

Then('the dashboard the visible', () => {

  Dash.verifyLandingPage();
});
