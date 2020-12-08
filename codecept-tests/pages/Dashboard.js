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
        I.wait(5);
        I.see('Sign In');
        oktaPage.login('global.admin1', 'Sh@kazu!u1');
    },

    verifyLandingPage() {
      I.waitForText('Welcome to the Media Ecosystem');
     }

};
