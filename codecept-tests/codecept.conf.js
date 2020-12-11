require('import-export');
//const hooks = require('./config/Hooks');
const {include, gherkin} = require('./config/bddConfig');
const {WebDriver, REST, GraphQL} = require('./config/webHelpersConfig');
// const browser = ["chrome", "chrome", "chrome", "chrome"];
exports.config = {
  output: './output',
  // multiple: {
  //     default: {grep: "@Sm3", browsers: browser[0]},
  //     group1: {grep: "@Sm1", browsers: browser[1]},
  //     group2: {grep: "@Sm2", browsers: browser[2]},
  //     group3: {grep: "@Sm4", browsers: browser[3]}
  // },
  helpers: {
    WebDriver, REST,
    customHelper: {require: './factories/MyHelper.js'}
  },
  // bootstrapAll: hooks.setBootstrap,
  // teardownAll: hooks.setTeardown,
  // bootstrap: hooks.setBootstrap,
  // teardown: hooks.setTeardown,
  include,
  gherkin,
  plugins: {
    screenshotOnFail: {enabled: true},
    wdio: {
      enabled: true, services: ['selenium-standalone']
    },
    allure: {enabled: true},
  },
  name: 'codecept-test'};
