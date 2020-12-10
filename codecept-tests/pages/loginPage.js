const I = actor();
const oktaPage = require('./Login');
let faker = require('faker');
var expect = require('chai').expect;
//ensure you set IBRP_PASS environment variable with password on your local machine

module.exports = {

  fields: {
    PMLogin: '//div[@class=\'sc-fzpdbB gZFNLC\'][text()=\'Productivity Manager\']',
    ViewDetails: '//*[contains(text(),\'Microsoft Corporation\')]',
    BackToClients: '//*[contains(text(),\'Back to Clients\')]',
    menuButton: '//*[@class=\'dentsu-icon-button__icon\']/span[@icon=\'chevron-down\']',
    logoutButton: '//*[@class=\'Menustyles__StyledMenuLabel-sc-1e9kz8s-9 zbXAV\'][text()=\'Logout\']'
  },

  login() {
    I.amOnPage('');
    I.see('Sign In')
    //oktaPage.login('global.admin1', 'Sh@kazu!u1');
  },

  verifyLandingPage() {
    I.waitForText('Welcome to the Media Ecosystem');
  },

  loginToPM() {
    I.waitForVisible(this.fields.PMLogin, 10);
    I.click(this.fields.PMLogin);
  },

  verifyClientPage() {
    I.waitForVisible(this.fields.ViewDetails, 10)
    I.waitForText('My Clients');
  },

  clientHomepage() {
    I.waitForVisible(this.fields.ViewDetails, 10);
    I.click(this.fields.ViewDetails);
  },


  logOut() {
    I.withForVisible(this.fields.BackToClients, 10);
    I.waitForText('Productivity data requests');
    I.click(this.fields.menuButton);
    I.waitForVisible(this.fields.logoutButton, 10);
    I.click(this.fields.logoutButton);

  },
}
