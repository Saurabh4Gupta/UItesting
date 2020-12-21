const I = actor();
const GenericMethods = require('../../factories/GenericFuctions.js');
const chai = require('chai');
const envURL = require('../../config/EnvConfig');
const datePicker = require('../../factories/DatePicker');
let envStatus = envURL.env === 'int-g1ds' || envURL.env === 'nft-g1ds' || envURL.env === 'stg-g1ds';

module.exports = {

  viewDetailsFields: {
    divTextHeader: text => `//div[text() = "${text}"]`,
    h3Header: text => `//h3[text() ="${text}"]`,
    pTextComp: text => `//p[text() = "${text}"]`,
    bTextComp: text => `//b[text() = "${text}"]`,
    buttonComp: text => `//span[text()="${text}"]/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    viewDetail: name => `(//b[text()="${name}"]/../../../..//span[text()="View details"])[1]`,
    aTextComp: (text) => `//a[text() = "${text}"]/..`,
    iconLabel: (icon) => `//span[@icon="${icon}"]/..`,
    textAreaComp: (label) => `//label[text()="${label}"]/..//textarea`,
    dropArea: `//input[@name='dropzone']`,
    uploadbutton: text => `(//span[text()="Upload"]/..)[2]`,
    labelDropdownComp: (text) => `(//label[text()="${text}"]/..//input)[1]`,
    labelTextComp: text => `(//label[text()='Data request name']/../../../..//input)[3]`,
    frame: `//div[@id='container']//iframe`,
    labelDateComp: (text) => `//label[text()="${text}"]/../../../../..//input[@placeholder="Date"]`,
    optionDateComp: (text) => `//option[text()='${text}']`,
    divDateCOmp: (text) => `(//div[text()='${text}'])[1]`,
    optionText:(fieldname,option)=>`(//label[text()="${fieldname}"]/..//input[@value="${option}"])[1]`,
    filterMarket:(text)=>`//div[text()="${text}"]/../../..//input`,
    market:(field,text) =>`//label[text()="${field}"]/../../../../../..//div[text()="${text}"]`,
    filterEdit: (text) => `(//div[text()="${text}"]/../../..//input)[1]`,
    editReporting:(text)=> `(//label[text()="${text}"]/../../..//input)[1]`,
  },

  //============================================= UI-TRD-29 functions ====================================================================

  verifyDivText(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.divTextHeader(text), 80);
  },

  verifyTitle: function(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.h3Header(text), 20);
  },

  verifySubtext: function(Subtext) {
    GenericMethods.waitAndSee(this.viewDetailsFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    GenericMethods.waitAndSee(this.viewDetailsFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    GenericMethods.waitAndSee(this.viewDetailsFields.buttonComp(Button), 20);
  },

  verifyATextComp(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.aTextComp(text), 20);
  },

  clickOnIcon(text) {
    GenericMethods.waitAndClick(this.viewDetailsFields.iconLabel(text), 20);
  },

  seeOnIcon(text) {
    GenericMethods.waitAndSee(this.overviewFields.iconLabel(text), 20);
  },

  clickOnLinkComp(link) {
    GenericMethods.waitAndClick(this.viewDetailsFields.aTextComp(link), 20);
  },

  clickOnButton(button) {
    GenericMethods.waitAndClick(this.viewDetailsFields.buttonComp(button), 20);
  },

  clickOnUpload(button){
    GenericMethods.waitAndClick(this.viewDetailsFields.uploadbutton(button),20);
  },

  clickOnViewDetails(name) {
    GenericMethods.waitAndClick(this.viewDetailsFields.viewDetail(name), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.spanTextComp(text), 20);
  },

  clickOnSpanText(text){
    GenericMethods.waitAndClick(this.viewDetailsFields.spanTextComp(text),20);
  },

  toastNotification(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.pTextComp(text), 10);
  },

  uploadFile() {
    I.waitForElement(this.viewDetailsFields.dropArea, 20);
    I.attachFile(this.viewDetailsFields.dropArea, './TestFiles/Book1_xls.xls');
  },

  editDataRequest(table) {
    const {
      localMarket, requestName, briefing, reportingYear, actualData,
      forecastData, dueDate, assignTo,
    } = table;

    this.selectDropDown('United Kingdom', localMarket);
    this.enterText('Data request name', requestName);
    this.enterTextInTextArea('Briefing', briefing);
    this.selectReportingYear('Reporting year', reportingYear);
    this.selectActualForecast('Actual data', actualData);
    this.selectActualForecast('Forecast data', forecastData);
    this.uploadFile();
    //datePicker.datePickerInput(dueDate, this.viewDetailsFields.labelDateComp('Due date'));
    this.selectActualForecast('Assign to', assignTo);
  },

  selectDropDown(fieldname, value) {
    I.waitForVisible(this.viewDetailsFields.filterMarket(fieldname, 1), 60);
    I.fillField(this.viewDetailsFields.filterMarket(fieldname, 1), value);
    I.pressKey('Enter');
  },

  selectReportingYear(text, value){
    I.waitForVisible(this.viewDetailsFields.editReporting(text, 1), 60);
    I.fillField(this.viewDetailsFields.editReporting(text, 1), value);
    I.pressKey('Enter');
  },

  selectActualForecast(text,value){
    I.waitForVisible(this.viewDetailsFields.labelDropdownComp(text, 1), 60);
    I.fillField(this.viewDetailsFields.labelDropdownComp(text, 1), value);
    I.pressKey('Enter');
  },

  enterText(fieldName, text) {
    GenericMethods.waitAndFillField(this.viewDetailsFields.labelTextComp(fieldName), text, 20);
  },
  enterTextInTextArea(label, text) {
    I.waitForVisible(this.viewDetailsFields.textAreaComp(label), 20);
    I.fillField(this.viewDetailsFields.textAreaComp(label), text);
  },
};
