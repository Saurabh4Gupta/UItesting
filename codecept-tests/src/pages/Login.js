const I = actor();

module.exports = {
  fields: {
    okta_username: '#okta-signin-username',
    okta_passwd: '#okta-signin-password',
    okta_login_button: `#okta-signin-submit`,
    agree:'//*[text()="I agree"]',
    acceptCookiesButton: `//span[text()='Accept cookies']`
  },


  login(username, password) {
    I.waitForVisible(this.fields.okta_username,10);
    I.fillField(this.fields.okta_username, username);
    I.waitForVisible(this.fields.okta_passwd,10);
    I.fillField(this.fields.okta_passwd, password);
    I.waitForVisible(this.fields.okta_login_button,10);
    //I.click(this.fields.okta_login_button);
   // pause();
    I.click(this.fields.okta_login_button);

    I.wait(20);
    I.waitForVisible(this.fields.agree,20);
   // pause();
    I.click(this.fields.agree);
    I.wait(20);
    I.waitForVisible(this.fields.acceptCookiesButton,20);
    I.click(this.fields.acceptCookiesButton);


  }


};

