const I = actor();

module.exports = {
  fields: {
      createRequest:'//*[@class=\'dentsu-button__label\'][text()=\'Create new data request\']',
      marketFilter: '//*[@class=\'dentsu-select__value-container dentsu-select__value-container--has-value css-1rkr8u1\']',
      ongoingTab: '//*[text()=\'Ongoing\']',
      completeTab:'//*[text()=\'Complete\']',
      clientLogo:'//*[@class=\'Pagestyles__StyledPageThumbnail-snr1bl-20 jLsJpE\']',
      backToClients: '//*[contains(text(),\'Back to Clients\')]',
    //*[text()='dentsu-icon-button__icon']

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
      dueYear:'//*[@class=\'bp3-html-select bp3-minimal bp3-datepicker-year-select\']',
      dueMonth: '//*[@class=\'bp3-html-select bp3-minimal bp3-datepicker-month-select\']',
      dueDay:'//*[@class=\'bp3-datepicker-day-wrapper\'][contains(text(),\'14\')]',
      assignTo:  '//*[@class=\'dentsu-select__input\']/input[@id=\'react-select-13-input\']',
      cancelButton: '//*[text()="Cancel"]',
      createButton: '//*[text()="Create"]',
      crossButton: '//*[@data-icon=\'cross\']'


    },


      newCreateDataRequest(){

    I.waitForVisible(this.fields.createRequest,10);
    I.click(this.fields.createRequest);
    I.waitForText("Create new data request",20);
    I.selectOption(this.CreateDataRequest.localMarket,'USA');
    I.waitForVisible(this.CreateDataRequest.name,5);
    I.fillField(this.CreateDataRequest.name,'This is test request');
    I.waitForVisible(this.CreateDataRequest.briefing,5);
    I .fillField(this.CreateDataRequest.briefing,'This is the automation testing');
    I.waitForVisible(this.CreateDataRequest.reportingYear,5);
    I.selectOption(this.CreateDataRequest.reportingYear,'April 2021  -  March 2022');
    I.waitForVisible(this.CreateDataRequest.actualYear,5);
    I.selectOption(this.CreateDataRequest.actualYear,'7 months');
    I.waitForVisible(this.CreateDataRequest.dueDate,5);
    I.click(this.CreateDataRequest.dueDate);
    I.waitForVisible(this.CreateDataRequest.dueYear,5);
    I.selectOption(this.CreateDataRequest.dueYear,'2021');
    I.waitForVisible(this.CreateDataRequest.dueMonth,5);
    I.selectOption(this.CreateDataRequest.dueMonth,'March');
    I.waitForVisible(this.CreateDataRequest.dueDay,5);
    I.click(this.CreateDataRequest.dueDay);
    I.waitForVisible(this.CreateDataRequest.assignTo,5);
    I.selectOption(this.CreateDataRequest.assignTo,'USA');
    I.click(this.CreateDataRequest.createButton);


      },

  userViewDetails()
  {

  }

}
