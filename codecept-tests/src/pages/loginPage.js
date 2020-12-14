const I = actor();
let faker = require('faker');



module.exports = {

  fields: {
    PMLogin: '//div[@class=\'sc-fzpdbB gZFNLC\'][text()=\'Productivity Manager\']',
    ViewDetails: `//*[@class='Imagestyles__StyledImage-a0fump-0 gTXNiP dentsu-image'][@src='abc.ico']`,
    BackToClients: '//*[contains(text(),\'Back to Clients\')]',
    menuButton: '//*[@class=\'dentsu-icon-button__icon\']/span[@icon=\'chevron-down\']',
    logoutButton: '//*[@class=\'Menustyles__StyledMenuLabel-sc-1e9kz8s-9 zbXAV\'][text()=\'Logout\']'
  },

  login() {
    I.amOnPage('');
    I.wait(10);
    I.see('Sign In')

  },

  verifyLandingPage() {
    I.waitForVisible('//h1[text()=\'Welcome to the Media Ecosystem\']', 40);
    I.seeElement('//h1[text()="Welcome to the Media Ecosystem"]');
  },

  loginToPM() {
    I.waitForVisible(this.fields.PMLogin, 10);
    I.click(this.fields.PMLogin);
  },

  verifyClientPage() {
    I.wait(20);

    I.waitForVisible('iframe', 200);
    I.retry(3).switchTo('iframe');

  },

  clientHomepage() {
    I.wait(5);
    I.click(this.fields.ViewDetails);
    I.wait(10);
    I.waitForText('Productivity data requests');
  },


  logOut() {


   // I.waitForVisible('iframe', 200);
   // I.retry(3).switchTo('iframe');

    pause();

    I.click(this.fields.menuButton);
    I.waitForVisible(this.fields.logoutButton, 10);
    I.click(this.fields.logoutButton);

  },
}
