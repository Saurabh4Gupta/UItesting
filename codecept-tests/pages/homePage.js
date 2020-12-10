const I = actor();

module.exports = {
  fields: {
      createRequest:'//*[@class=\'dentsu-button__label\'][text()=\'Create new data request\']',
      Market: '//*[@class=\'dentsu-select__value-container dentsu-select__value-container--has-value css-1rkr8u1\']',

  },

  CreateDataRequest:
    {
    localMarket:'//*[@class=\'dentsu-select__input\']/input[@id=\'react-select-36-input\']',
      name:'//*[@name="name"]',
      briefing: '//*[@name="briefing"]',
      reportingYear:'//*[@class=\'dentsu-select__input\']/input[@id=\'react-select-36-input\']',
      actualYear:'//*[@class=\'dentsu-select__input\']/input[@id=\'react-select-5-input\']',
      forcastYear: '//*[@class=\'dentsu-select__input\']/input[@id=\'react-select-6-input\']',
      dragAndDropButton:'//*[@id=\'filepond--drop-label-tsqcd8g4c\']',
      browseArea:'//*[@id=\'filepond--browser-tsqcd8g4c\']',
      browserButton:'//*[@class="filepond--label-action"]',
      dueDate:'//*[@placeholder=\'Date\']',

    },


  login(username, password) {
    I.fillField(this.fields.okta_username, username);
    I.fillField(this.fields.okta_passwd, password);
    I.waitForVisible(this.okta_login_button,10);
    //I.click(this.fields.okta_login_button);
    I.click(this.fields.okta_login_button);
  }


};
