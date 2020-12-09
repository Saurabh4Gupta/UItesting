const I = actor();
const oktaPage = require('./Login');
let faker = require('faker');
var expect = require('chai').expect;
//ensure you set IBRP_PASS environment variable with password on your local machine
var ibrp_pass   = process.env.IBRP_PASS;

var id;

module.exports = {

    fields: {
      logoutButton: '//button[starts-with(@class,"ChromeHeader__ChromeHeaderButton")]/svg',
    },

    login() {
        I.amOnPage('');
       I.see('Sign In')
       oktaPage.login('global.admin1', 'Sh@kazu!u1');
    },

    verifyLandingPage() {
      I.waitForText('Welcome to the Media Ecosystem');
     },

 

  goToHomePage(){
    I.amOnPage('');
    this.verifyLandingPage();
  }
};
