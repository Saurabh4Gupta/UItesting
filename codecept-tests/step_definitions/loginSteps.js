const Dash = require('../pages/loginPage');
const Okta= require('../pages/Login');

const I = actor();

Given('I am admin user and login into PM dashboard', () => {
  Dash.login();
  Okta.login('global.admin1', 'Sh@kazu!u1');
});

Then('the dashboard the visible', () => {

  Dash.verifyLandingPage();
});

/*
Then('the menu button is present', () => {
  Dash.verifyMenu()
});

Then('logout option is present', () => {
  Dash.verifyLanguageSwitcher()
});

Then('language switcher is present', () => {
  Dash.verifyLogoutButton()
});

When('I click on {string} app from menu pane', (app) => {
  Dash.goToHomePage();
  Dash.clickOnApp(app);
});

Then('{string} home page is displayed', (app) => {
  Dash.verifyAppHomePage(app);
});
*/
