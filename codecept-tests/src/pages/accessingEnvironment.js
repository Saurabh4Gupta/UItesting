const I = actor();
const GenericMethods = require('../../factories/GenericFuctions.js');
const chai = require('chai');
const { assert } = chai;

module.exports = {

  overviewFields: {
    divTextHeader: text => `//div[text() = "${text}"]`,
    h3Header: text => `//h3[text() ="${text}"]`,
    pTextComp: text => `//p[text() = "${text}"]`,
    bTextComp: text => `//b[text() = "${text}"]`,
    buttonComp: text => `//span[text()="${text}"]/..`,
    spanTextComp: text => `//span[text()="${text}"]`,
    clientDetail: client => `//span[text()="${client}"]/../../../..//span[text()="View details"]`,
    aTextComp: (text) => `//a[text() = "${text}"]/..`,
    iconLabel: (icon) => `//span[@icon="${icon}"]/..`,
  },

  //============================================= UI-TRD-29 functions ====================================================================

  verifyDivText(text) {
    GenericMethods.waitAndSee(this.overviewFields.divTextHeader(text), 80);
  },

  verifyTitle: function(Title) {
    GenericMethods.waitAndSee(this.overviewFields.h3Header(Title), 20);
  },

  verifySubtext: function(Subtext) {
    GenericMethods.waitAndSee(this.overviewFields.pTextComp(Subtext), 20);
  },

  verifyLabel: function(Label) {
    GenericMethods.waitAndSee(this.overviewFields.bTextComp(Label), 20);
  },

  verifyButton: function(Button) {
    GenericMethods.waitAndSee(this.overviewFields.buttonComp(Button), 20);
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
    GenericMethods.waitAndClick(this.overviewFields.buttonComp(button), 10);
  },

  clickOnViewDetails(client) {
    GenericMethods.waitAndClick(this.overviewFields.clientDetail(client), 20);
  },

  verifySpanText(text) {
    GenericMethods.waitAndSee(this.overviewFields.spanTextComp(text), 20);
  },
};

