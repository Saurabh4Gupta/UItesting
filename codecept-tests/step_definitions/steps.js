const Dash = require('../pages/Dashboard');

const I = actor();

Given('I am admin user and login into ibrp dashboard', () => {
  Dash.login();
});

Then('the dashboard the visible', () => {

  Dash.verifyLandingPage();
});

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
