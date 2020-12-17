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
    dropArea: `//input[@name='dropzone']`,
  },

  //============================================= UI-TRD-29 functions ====================================================================

  verifyDivText(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.divTextHeader(text), 80);
  },

  verifyTitle: function(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.h3Header(text), 20);
  },

  verifySubtext: function(Subtext) {
    GenericMethods.waitAndSee(this.overviewFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    GenericMethods.waitAndSee(this.overviewFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    GenericMethods.waitAndSee(this.viewDetailsFields.buttonComp(Button), 20);
  },

  verifyATextComp(text) {
    GenericMethods.waitAndSee(this.overviewFields.aTextComp(text), 20);
  },

  clickOnIcon(text) {
    GenericMethods.waitAndClick(this.overviewFields.iconLabel(text), 20);
  },

  seeOnIcon(text) {
    GenericMethods.waitAndSee(this.overviewFields.iconLabel(text), 20);
  },

  clickOnLinkComp(link) {
    GenericMethods.waitAndClick(this.overviewFields.aTextComp(link), 20);
  },

  clickOnButton(button) {
    GenericMethods.waitAndClick(this.viewDetailsFields.buttonComp(button), 20);
  },

  clickOnViewDetails(name) {
    GenericMethods.waitAndClick(this.viewDetailsFields.viewDetail(name), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.overviewFields.spanTextComp(text), 20);
  },

  toastNotification(text) {
    GenericMethods.waitAndSee(this.viewDetailsFields.pTextComp(text), 20);
  },

  uploadFile() {
    I.waitForElement(this.viewDetailsFields.dropArea, 20);
    I.attachFile(this.viewDetailsFields.dropArea, './TestFiles/Book1_xls.xls');
  },


};
