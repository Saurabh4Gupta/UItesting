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
    optionText: (fieldname, option) => `(//label[text()="${fieldname}"]/..//input[@value="${option}"])[1]`,
    filterMarket: (text) => `//label[text()="${text}"]/../../..//input`,
    selectedFilterMarket: (text) => `(//label[text()="${text}"]/../..//input)[1]`,
    globalFilter: (text) => `//div[text()="${text}"]/../..//input`,
    filterMarket1: (fieldname, value) => `//label[text()="${fieldname}"]/../../../../../../../../..//input[@value="${value}"]`,
    market: (text) => `//div[text()="${text}"]/../..//input`,
    market1: (text) => `//div[text()="${text}"]`,
    moreIcon: (text) => `(//span[text()="View details"]/../../../../../..//span[@icon="${text}"])[1]`,
    assignTo: (text) => `(//label[text()="${text}"]/../../../../../../../../..//input)[15]`,


    searchBox: `//input[@type='search']`,
    searchBoxComplete: `(//input[@type='search'])[2]`,
    showFilter: (fieldName, option) => `//span[text()="${fieldName}"]/../../..//option[text()="${option}"]`,

    show: `(//option[text()="All"]/..//option)[2]`,
    completeTabCount: (fieldName, text) => `//span[text()="${fieldName}"]/small[text()="${text}"]`,
    createNewRequest: (fieldName) => `(//span[text()="${fieldName}"])[2]`,
    completeMoreOption: (text) => `(//span[text()='Complete']/../../../../../../../../../../../../../../../..//span[@icon="${text}"])[4]`,


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
  selectDropDownForSelectedMarket(fieldname, value) {
    I.waitForVisible(this.homepageFields.filterMarket1(fieldname, 1), 60);
    I.fillField(this.homepageFields.filterMarket1(fieldname, 1), value);
    I.pressKey('Enter');
  },

  selectDropDownForSameMarket(text, value) {
    I.waitForVisible(this.homepageFields.selectedFilterMarket(text, 1), 60);
    I.fillField(this.homepageFields.selectedFilterMarket(text, 1), value);
    I.pressKey('Enter');
  },
  selectDropDownAssignTo(fieldname, value) {
    I.waitForVisible(this.homepageFields.assignTo(fieldname, 1), 60);
    //I.waitForEnabled(this.homepageFields.assignTo(fieldname,1));
    I.fillField(this.homepageFields.assignTo(fieldname, 1), value);
    I.pressKey('Enter');
  },

  enterText(fieldName, text) {
    GenericMethods.waitAndFillField(this.homepageFields.labelTextComp(fieldName), text, 20);
  },

  uploadFile(filename) {
    I.waitForElement(this.homepageFields.dropArea, 20);
    I.attachFile(this.homepageFields.dropArea, "./TestFiles/"+filename);
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
      forecastData, dueDate, assignTo,file
    } = table;

    this.selectDropDown('Local market', localMarket);
    this.enterText('Data request name', requestName);
    this.enterTextInTextArea('Briefing', briefing);
    this.selectDropDown('Reporting year', reportingYear);
    this.selectDropDown('Actual data', actualData);
    this.selectDropDown('Forecast data', forecastData);
    this.uploadFile(file);
    datePicker.datePickerInput(dueDate, this.homepageFields.labelDateComp('Due date'));
    I.wait(5);
    this.selectDropDownAssignTo('Assign to', assignTo);

  },


  createDataRequestForSelectedMarket(table) {
    const {
      localMarket, requestName, briefing, reportingYear, actualData,
      forecastData, dueDate, assignTo,
    } = table;

    //this.selectDropDownForSelectedMarket('Local market', localMarket);
    this.enterText('Data request name', requestName);
    this.enterTextInTextArea('Briefing', briefing);
    this.selectDropDown('Reporting year', reportingYear);
    this.selectDropDown('Actual data', actualData);
    this.selectDropDown('Forecast data', forecastData);
    this.uploadFile(filename);
    datePicker.datePickerInput(dueDate, this.homepageFields.labelDateComp('Due date'));
    I.wait(5);
    this.selectDropDownAssignTo('Assign to', assignTo);
  },

  createDataRequestForSameMarket(table) {
    const {
      localMarket, requestName, briefing, reportingYear, actualData,
      forecastData, dueDate, assignTo,
    } = table;

    this.selectDropDownForSameMarket('Local market', localMarket);
    this.enterText('Data request name', requestName);
    this.enterTextInTextArea('Briefing', briefing);
    this.selectDropDown('Reporting year', reportingYear);
    this.selectDropDown('Actual data', actualData);
    this.selectDropDown('Forecast data', forecastData);
    this.uploadFile();
    datePicker.datePickerInput(dueDate, this.homepageFields.labelDateComp('Due date'));
    I.wait(5);
    this.selectDropDownAssignTo('Assign to', assignTo);
  },

  filter(value) {
    //this.selectDropDown('All markets',value);
    I.waitForVisible(this.homepageFields.globalFilter('All markets'), 20);
    I.fillField(this.homepageFields.globalFilter('All markets'), value);

    I.pressKey('Enter');
    I.wait(5);
  },

  filter1(value){
    //this.selectDropDown('All markets',value);

    I.waitForVisible(this.homepageFields.market1('Albania'), 20);
    I.waitForEnabled(this.homepageFields.market1('Albania'));
    I.fillField(this.homepageFields.market('Albania'), value);
    I.pressKey('Enter');
    I.wait(5);
  },

  verifyOngoingRequests() {

    I.grabTextFrom(`(//span[contains(text(),'Ongoing')])[1]`);
    //for (let i = 0; i < requests; i++) {
      //this.verifyBTextComp(requests[i]);
    //}
  },

  verifyLocalMarket(text) {

    GenericMethods.waitAndSee(this.homepageFields.market(text), 10);
    I.wait(5);
    // this.clickOnButton(button);
  },

  verifyLocalMarketText(text) {
    GenericMethods.waitAndSee(this.homepageFields.market1(text), 10);
    I.wait(5);
    // this.clickOnButton(button);
  },

  moveToComplete(text, option) {
    GenericMethods.waitAndClick(this.homepageFields.moreIcon(text), 20);
    GenericMethods.waitAndClick(this.homepageFields.spanTextComp(option), 10);
  },

  moveToOngoing(text, option) {
    // pause();
    GenericMethods.waitAndClick(this.homepageFields.completeMoreOption(text), 20);
    GenericMethods.waitAndClick(this.homepageFields.spanTextComp(option), 10);
  },

  goToCompleteTab(button) {
    this.clickOnButton(button);
    I.wait(2);
  },

  verifyCompleteRequests() {
    let requests = ['Microsoft United Kingdom'];
    for (let i = 0; i < requests.length; i++) {
      this.verifyBTextComp(requests[i]);
    }
  },


  enterTextInSearch(text) {
    I.waitForVisible(this.homepageFields.searchBox, 20);
    I.fillField(this.homepageFields.searchBox, text);
  },

  enterTextInCompleteSearch(text) {
    I.waitForVisible(this.homepageFields.searchBoxComplete, 20);
    I.fillField(this.homepageFields.searchBoxComplete, text);
  },

  showFilter(option) {
    GenericMethods.clearFields(this.homepageFields.searchBox, 20);
    I.pressKey('Tab');
    I.pressKey('Enter');
    I.wait(5);
    I.click(`(//option[text()='All']/following-sibling::option)[1]`);
    I.pressKey('Enter');
  },

  showFilterInComplete(option) {
    GenericMethods.clearFields(this.homepageFields.searchBoxComplete, 20);
    I.pressKey('Tab');
    I.pressKey('Enter');
    I.wait(5);
    I.click(`(//option[text()='All']/following-sibling::option)[5]`);
    I.pressKey('Enter');
  },
  verifyNoOfRequests(text) {
    I.waitForVisible(this.homepageFields.completeTabCount('Complete', text), 20);
  },

  createNewData() {
    I.waitForVisible(this.homepageFields.createNewRequest('Create new data request'), 20);
  },

  verifyTextOfComp(text) {
    I.wait(5);
    I.seeElement(this.homepageFields.market1(text));

  },
};
