const I = actor();
const GenericMethods = require('../../factories/GenericFuctions.js');
const envURL = require('../../config/EnvConfig');
const datePicker = require('../../factories/DatePicker');
//const chai = require('chai');
//const { assert } = chai;
let envStatus = envURL.env === 'int-g1ds' || envURL.env === 'nft-g1ds' || envURL.env === 'stg-g1ds';
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

module.exports = {

  homepageFields: {
    divTextHeader: text => `//div[text() = '${text}']`,
    h3Header: text => `//h3[text() ='${text}']`,
    pTextComp: text => `//p[text() = '${text}']`,
    bTextComp: text => `//b[text() = '${text}']`,
    buttonComp: text => `//span[text()='${text}']/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    clientDetail: client => `//span[text()="${client}"]/../../../..//span[text()="View details"]`,
    aTextComp: (text) => `//a[text() = '${text}']/..`,
    iconLabel: (icon) => `//span[@icon='${icon}']/..`,
    labelDropdownComp:(text)=> `(//label[text()="${text}"]/..//input)[1]`,
    labelTextComp:text=> `(//label[text()='Data request name']/../../../..//input)[3]`,
    dropArea:`//input[@name='dropzone']`,
    frame: `//div[@id='container']//iframe`,
    labelDateComp:(text)=>`//label[text()="${text}"]/../../../../..//input[@placeholder="Date"]`,
    optionDateComp:(text)=>`//option[text()='${text}']`,
    divDateCOmp:(text)=>`(//div[text()='${text}'])[1]`,


  },



  verifyDivText(text) {
    GenericMethods.waitAndSee(this.homepageFields.divTextHeader(text), 80);
  },

  verifyTitle: function(Title) {
    GenericMethods.waitAndSee(this.homepageFields.h3Header(Title), 20);
  },

  verifySubtext: function(Subtext) {
    GenericMethods.waitAndSee(this.homepageFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    GenericMethods.waitAndSee(this.homepageFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    GenericMethods.waitAndSee(this.homepageFields.buttonComp(Button), 20);
  },

  verifyATextComp(text) {
    GenericMethods.waitAndSee(this.homepageFields.aTextComp(text), 20);
  },

  clickOnIcon(text) {
    GenericMethods.waitAndClick(this.homepageFields.iconLabel(text), 20);
  },

  seeOnIcon(text) {
    GenericMethods.waitAndSee(this.homepageFields.iconLabel(text), 20);
  },

  clickOnLinkComp(link) {
    GenericMethods.waitAndClick(this.homepageFields.aTextComp(link), 20);
  },

  clickOnButton(button) {

    //GenericMethods.waitAndClick(this.homepageFields.buttonComp(button), 10);
  I.waitForVisible(this.homepageFields.buttonComp(button),20);
  I.wait(3);
  I.click(this.homepageFields.buttonComp(button));
  },

  clickOnViewDetails(client) {
    GenericMethods.waitAndClick(this.homepageFields.clientDetail(client), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.homepageFields.spanTextComp(text), 20);
  },



    selectDropDown(fieldName, value){
    I.waitForVisible(this.homepageFields.labelDropdownComp(fieldName, 1), 60);
    I.fillField(this.homepageFields.labelDropdownComp(fieldName, 1), value);
    I.pressKey('Enter');
    // I.waitForVisible(this.fields.inputTextCurrency(value));
    // I.click(this.fields.inputTextCurrency(value), 60);
  },

  enterText(fieldname)
  {
    GenericMethods.waitAndFillField(this.homepageFields.labelTextComp(fieldname),20)
  },


  uploadFile()
  {
    I.attachFile(this.homepageFields.dropArea,"./TestFiles/Book1_xls.xls")

  },
  switchToFrame() {
    if (envStatus||envURL.env === 'brp') {
      I.waitForVisible(this.homepageFields.frame, 40);
      I.switchTo(this.homepageFields.frame);
    }
  },

  toastNotification(text){
    GenericMethods.waitAndSee(this.homepageFields.pTextComp(text),20)
  },




  datePickerInput(date, locator) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const datePick = new Date(date).getDate();
    GenericMethods.waitAndClick(locator, 20);
    I.wait(2);
    GenericMethods.waitAndClick(`(//div[contains(@class,'datepicker')]//select)[2]`, 20);
    GenericMethods.waitAndClick(`//option[text()='${year}']`, 20);
    I.wait(2);
    GenericMethods.waitAndClick(`(//div[contains(@class,'datepicker')]//select)[1]`, 20);
    GenericMethods.waitAndClick(`//option[text()='${months[month]}']`, 20);
    I.wait(2);
    GenericMethods.waitAndClick(`(//div[text()='${datePick}'])[1]`, 20);
  },

  createDataRequest(table)
  {
    const{
      localMarket, requestName, briefing, reportingYear, actualData,
      forecastData, dueDate, assignTo
    }=table;

    this.selectDropDown('Local market', localMarket);
   // pause();
    this.enterText('Data request name',requestName);
    this.enterText('Briefing',briefing);
    this.selectDropDown('Reporting year',reportingYear);
    this.selectDropDown('Actual data',actualData);
    this.selectDropDown('Forecast data',forecastData);
    this.uploadFile();
    I.wait(2);
   // datePicker.datePickerInput(dueDate, this.homepageFields.labelTextComp('Due date')); //not in used

   // this.date(this.homepageFields.labelDateComp(text),); //not in used
    this.datePickerInput(dueDate, this.homepageFields.labelDateComp('Due date'));
    I.wait(2);
    this.selectDropDown('Assign to',assignTo);


  }





};
