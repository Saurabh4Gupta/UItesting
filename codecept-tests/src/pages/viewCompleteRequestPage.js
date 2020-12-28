const I = actor();
const GenericMethods = require('../../factories/GenericFuctions.js');
const chai = require('chai');
const envURL = require('../../config/EnvConfig');
const datePicker = require('../../factories/DatePicker');
let envStatus = envURL.env === 'int-g1ds' || envURL.env === 'nft-g1ds' || envURL.env === 'stg-g1ds';

module.exports = {

  viewCompleteDetailsFields: {
    divTextHeader: text => `//div[text() = "${text}"]`,
    h3Header: text => `//h3[text() ="${text}"]`,
    pTextComp: text => `//p[text() = "${text}"]`,
    bTextComp: text => `//b[text() = "${text}"]`,
    buttonComp: text => `//span[text()="${text}"]/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    viewDetail: name => `(//b[text()="${name}"]/../../../..//span[text()="View details"])[3]`,
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
    optionText: (fieldname, option) => `(//label[text()="${fieldname}"]/..//input[@value="${option}"])[1]`,
    filterMarket: (text) => `//div[text()="${text}"]/../../..//input`,
    market: (field, text) => `//label[text()="${field}"]/../../../../../..//div[text()="${text}"]`,
    filterEdit: (text) => `(//div[text()="${text}"]/../../..//input)[1]`,
    editReporting: (text) => `(//label[text()="${text}"]/../../..//input)[1]`,
  },
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

  clickOnUpload(button) {
    GenericMethods.waitAndClick(this.viewDetailsFields.uploadbutton(button), 20);
  },

  clickOnViewDetails(name) {
    GenericMethods.waitAndClick(this.viewCompleteDetailsFields.viewDetail(name), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.viewCompleteDetailsFields.spanTextComp(text), 20);
  },

  clickOnSpanText(text) {
    GenericMethods.waitAndClick(this.viewDetailsFields.spanTextComp(text), 20);
  },
};
