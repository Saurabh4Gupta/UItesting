const I = actor();
const oktaPage = require('./Okta');
let faker = require('faker');
var expect = require('chai').expect;
//ensure you set IBRP_PASS environment variable with password on your local machine
var ibrp_pass   = process.env.IBRP_PASS;

var id;

module.exports = {

    fields: {
        menuButton: '//button[starts-with(@class,"styled__AppSwitcherButton")]',
        languageButton: '//select[@name="language"]',
        logoutButton: '//button[starts-with(@class,"ChromeHeader__ChromeHeaderButton")]/svg',
    },

    login() {
        I.amOnPage('');
        I.see('Sign In')
        oktaPage.login('CommercialOwner@dentsuaegis.com', ibrp_pass);
    },

    verifyLandingPage() {
      I.waitForText('Welcome to Integrated BRP');
     },

  verifyMenu() {
    I.waitForElement(this.fields.menuButton)
  },

  verifyLanguageSwitcher() {
    I.waitForElement(this.fields.languageButton)
  },

  verifyLogoutButton() {
    I.waitForElement(this.fields.logoutButton)
  },

  clickOnApp(app){
    I.click("//ul/li[contains(span, '"+app+"')]")
  },

  verifyAppHomePage(app) {
    I.waitForText(app);
   },

  goToHomePage(){
    I.amOnPage('');
    this.verifyLandingPage();
  }
};
