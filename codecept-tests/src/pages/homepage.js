const I = actor();
const genericMethods = require('../../factories/GenericFuctions.js');
const datePicker = require('../../factories/DatePicker');
const { assert } = require('chai');

module.exports = {
  homepageFields: {
    divTextHeader: text => `//div[text() = '${text}']`,
    h3Header: text => `//h3[text() ='${text}']`,
    pTextComp: text => `//p[text() = '${text}']`,
    bTextComp: text => `//b[text() = '${text}']`,
    buttonComp: text => `//span[text()='${text}']/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    clientDetail: client => `//span[text()="${client}"]/../../../..//span[text()="View details"]`,
    aTextComp: text => `//a[text() = '${text}']/..`,
    iconLabel: icon => `//span[@icon='${icon}']/..`,
    textAreaComp: label => `//label[text()="${label}"]/..//textarea`,
    labelDropdownComp: text => `(//label[text()="${text}"]/..//input)[1]`,
    labelTextComp: text => `(//label[text()='Data request name']/../../../..//input)[3]`,
    dropArea: `//input[@name='dropzone']`,
    frame: `//div[@id='container']//iframe`,
    labelDateComp: text => `//label[text()="${text}"]/../../../../..//input[@placeholder="Date"]`,
    optionDateComp: text => `//option[text()='${text}']`,
    divDateCOmp: text => `(//div[text()='${text}'])[1]`,
  },

  verifyDivText(text) {
    genericMethods.waitAndSee(this.homepageFields.divTextHeader(text), 80);
  },

  verifyTitle: function(Title) {
    genericMethods.waitAndSee(this.homepageFields.h3Header(Title), 20);
  },

  verifySubtext: function(Subtext) {
    genericMethods.waitAndSee(this.homepageFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    genericMethods.waitAndSee(this.homepageFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    genericMethods.waitAndSee(this.homepageFields.buttonComp(Button), 20);
  },

  verifyATextComp(text) {
    genericMethods.waitAndSee(this.homepageFields.aTextComp(text), 20);
  },

  clickOnIcon(text) {
    genericMethods.waitAndClick(this.homepageFields.iconLabel(text), 20);
  },

  seeOnIcon(text) {
    genericMethods.waitAndSee(this.homepageFields.iconLabel(text), 20);
  },

  clickOnLinkComp(link) {
    genericMethods.waitAndClick(this.homepageFields.aTextComp(link), 20);
  },

  clickOnButton(button) {
    genericMethods.waitAndClick(this.homepageFields.buttonComp(button), 20);
  },

  clickOnViewDetails(client) {
    genericMethods.waitAndClick(this.homepageFields.clientDetail(client), 20);
  },

  verifySpanText(text) {
    genericMethods.waitAndSee(this.homepageFields.spanTextComp(text), 20);
  },

  selectDropDown(fieldName, value) {
    genericMethods.waitAndFillField(this.homepageFields.labelDropdownComp(fieldName, 1), value,60);
    I.pressKey('Enter');
  },

  enterText(fieldName, text) {
    genericMethods.waitAndFillField(this.homepageFields.labelTextComp(fieldName), text, 20);
  },

  uploadFile() {
    I.waitForElement(this.homepageFields.dropArea, 20);
    I.attachFile(this.homepageFields.dropArea, './TestFiles/Book1_xls.xls');
  },

  toastNotification(text) {
    genericMethods.waitAndSee(this.homepageFields.pTextComp(text), 20);
  },

  enterTextInTextArea(label, text) {
    genericMethods.waitAndFillField(this.homepageFields.textAreaComp(label),text,20);
  },

  createDataRequest(table) {
    const {
      localMarket, requestName, briefing, reportingYear, actualData,
      forecastData, dueDate, assignTo,
    } = table;

    this.selectDropDown('Local market', localMarket);
    this.enterText('Data request name', requestName);
    this.enterTextInTextArea('Briefing', briefing);
    this.selectDropDown('Reporting year', reportingYear);
    this.selectDropDown('Actual data', actualData);
    this.selectDropDown('Forecast data', forecastData);
    this.uploadFile();
    datePicker.datePickerInput(dueDate, this.homepageFields.labelDateComp('Due date'));
    this.selectDropDown('Assign to', assignTo);
  },
};
