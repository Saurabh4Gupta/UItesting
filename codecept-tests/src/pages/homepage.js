const I = actor();
const GenericMethods = require('../../factories/GenericFuctions.js');
const envURL = require('../../config/EnvConfig');
const datePicker = require('../../factories/DatePicker');
const chai = require('chai');
const { assert } = chai;
let envStatus = envURL.env === 'int-g1ds' || envURL.env === 'nft-g1ds' || envURL.env === 'stg-g1ds';

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
      textAreaComp: (label) => `//label[text()="${label}"]/..//textarea`,
    labelDropdownComp: (text) => `(//label[text()="${text}"]/..//input)[1]`,
    labelTextComp: (text) => `(//label[text()='Data request name']/../../../..//input)[3]`,
    dropArea: `//input[@name='dropzone']`,
    frame: `//div[@id='container']//iframe`,
    labelDateComp: (text) => `//label[text()="${text}"]/../../../../..//input[@placeholder="Date"]`,
    optionDateComp: (text) => `//option[text()='${text}']`,
    divDateCOmp: (text) => `(//div[text()='${text}'])[1]`,
    optionText:(fieldname,option)=>`(//label[text()="${fieldname}"]/..//input[@value="${option}"])[1]`,
    filterMarket:(text)=>`//div[text()="${text}"]/../../..//input`,
    market:(field,text) =>`//label[text()="${field}"]/../../../../../..//div[text()="${text}"]`,
    moreIcon:(text)=> `(//span[text()="View details"]/../../../../../..//span[@icon="${text}"])[1]`,
    searchBox:`//input[@type='search']`,
   showFilter:(fieldName,option)=>`//span[text()="${fieldName}"]/../../..//option[text()="${option}"]`,

    show: `(//option[text()="All"]/..//option)[2]`,

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
    I.waitForVisible(this.homepageFields.buttonComp(button), 20);
    I.click(this.homepageFields.buttonComp(button));
  },

  clickOnViewDetails(client) {
    GenericMethods.waitAndClick(this.homepageFields.clientDetail(client), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.homepageFields.spanTextComp(text), 20);
  },
  verifyBTextComp(text){

    GenericMethods.waitAndSee(this.homepageFields.bTextComp(text),20);
  },

  selectDropDown(fieldname, value) {
    I.waitForVisible(this.homepageFields.filterMarket(fieldname, 1), 60);
    I.fillField(this.homepageFields.filterMarket(fieldname, 1), value);
    I.pressKey('Enter');
  },

  enterText(fieldName, text) {
    GenericMethods.waitAndFillField(this.homepageFields.labelTextComp(fieldName), text, 20);
  },

  uploadFile() {
    I.waitForElement(this.homepageFields.dropArea, 20);
    I.attachFile(this.homepageFields.dropArea, './TestFiles/Book1_xls.xls');
  },

  switchToFrame() {
    if (envStatus || envURL.env === 'brp') {
      I.waitForVisible(this.homepageFields.frame, 40);
      I.switchTo(this.homepageFields.frame);
    }
  },

  toastNotification(text) {
    GenericMethods.waitAndSee(this.homepageFields.pTextComp(text), 20);
  },

  enterTextInTextArea(label, text) {
    I.waitForVisible(this.homepageFields.textAreaComp(label), 20);
    I.fillField(this.homepageFields.textAreaComp(label), text);
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

  filter(value){

    //this.selectDropDown('All markets',value);
   I.waitForVisible(this.homepageFields.filterMarket('All markets'),20);
   I.fillField(this.homepageFields.filterMarket('All markets'),value);

   I.pressKey('Enter');
   I.wait(5);



  },
  filter1(value){

    //this.selectDropDown('All markets',value);
    I.waitForVisible(this.homepageFields.filterMarket('United Kingdom'),20);
    I.fillField(this.homepageFields.filterMarket('United Kingdom'),value);

    I.pressKey('Enter');
    I.wait(5);



  },

  verifyOngoingRequests(){
    let requests=["Microsoft United Kingdom","Microsoft United Kingdom","Microsoft United Kingdom"];
    for(let i=0;i<requests.length;i++){
      this.verifyBTextComp(requests[i])
                    }

  },

  verifyLocalMarket(text,button){

   GenericMethods.waitAndSee(this.homepageFields.market('Local market',text),10);
   I.wait(5);
   this.clickOnButton(button);

  },

  moveToComplete(text,option){
    GenericMethods.waitAndClick(this.homepageFields.moreIcon(text),20);
    GenericMethods.waitAndClick(this.homepageFields.spanTextComp(option),10);

  },

  goToCompleteTab(button)
  {
    this.clickOnButton(button);
    I.wait(2);

  },

  verifyCompleteRequests(){
    let requests=["Microsoft United Kingdom"];
    for(let i=0;i<requests.length;i++){
      this.verifyBTextComp(requests[i])
    }

  },

  enterTextInSearch(text){

    I.waitForVisible(this.homepageFields.searchBox,20);
    I.fillField(this.homepageFields.searchBox,text);
  },

  showFilter(option){

    GenericMethods.clearFields(this.homepageFields.searchBox,20);
    I.pressKey('Tab');
    I.pressKey('Enter');
    I.click(`(//option[text()='All']/following-sibling::option)[1]`);
    I.pressKey('Enter');

  }
};
