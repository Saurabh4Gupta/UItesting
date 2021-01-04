const I = actor();
const genericMethods = require('../../factories/GenericFuctions.js');
const { assert } = require('chai');

module.exports = {

  overviewFields: {
    divTextHeader: text => `//div[text() = '${text}']`,
    h3Header: text => `//h3[text() ='${text}']`,
    pTextComp: text => `//p[text() = '${text}']`,
    bTextComp: text => `//b[text() = '${text}']`,
    buttonComp: text => `//span[text()='${text}']/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    clientDetail: client => `//span[text()="${client}"]/../../../..//span[text()="View details"]`,
    aTextComp: text => `//a[text() = '${text}']/..`,
    iconLabel: icon => `//span[@icon='${icon}']/..`,
  },

  //============================================= UI-TRD-29 functions ====================================================================

  verifyDivText(text) {
    genericMethods.waitAndSee(this.overviewFields.divTextHeader(text), 80);
  },

  verifyTitle: function(Title) {
    genericMethods.waitAndSee(this.overviewFields.h3Header(Title), 20);
  },

  verifySubtext: function(Subtext) {
    genericMethods.waitAndSee(this.overviewFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    genericMethods.waitAndSee(this.overviewFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    genericMethods.waitAndSee(this.overviewFields.buttonComp(Button), 20);
  },

  verifyATextComp(text) {
    genericMethods.waitAndSee(this.overviewFields.aTextComp(text), 20);
  },

  clickOnIcon(text) {
    genericMethods.waitAndClick(this.overviewFields.iconLabel(text), 20);
  },

  seeOnIcon(text) {
    genericMethods.waitAndSee(this.overviewFields.iconLabel(text), 20);
  },

  clickOnLinkComp(link) {
    genericMethods.waitAndClick(this.overviewFields.aTextComp(link), 20);
  },

  clickOnButton(button) {
    genericMethods.waitAndClick(this.overviewFields.buttonComp(button), 10);
  },

  clickOnViewDetails(client) {
    genericMethods.waitAndClick(this.overviewFields.clientDetail(client), 20);
  },

  verifySpanText(text) {
    genericMethods.waitAndSee(this.overviewFields.spanTextComp(text), 20);
  },

};
