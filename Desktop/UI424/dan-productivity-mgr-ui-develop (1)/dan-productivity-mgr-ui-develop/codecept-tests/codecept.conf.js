const { include, gherkin } = require('./config/BddConfig');
const { WebDriver, REST, GraphQL } = require('./config/WebHelpersConfig');
const browser = ['chrome', 'chrome', 'chrome', 'chrome'];
// const hooks = require('./config/BootStrapAndTearDownHooks');
const rptoken = process.env.RP_TOKEN;
const rpendpoint = process.env.RP_ENDPOINT;
const rplaunchname = process.env.RP_LAUNCH_NAME;
const env_name = process.env.ENV_NAME;
const core_env = process.env.CORE_ENV;
const app_name = process.env.APP_NAME;
const rp_test_type = process.env.RP_TEST_TYPE;

exports.config = {
  output: './output',

  multiple: {
    default: { grep: '@Sm3', browsers: browser[0] },
    group1: { grep: '@Sm1', browsers: browser[1] },
    group2: { grep: '@Sm2', browsers: browser[2] },
    group3: { grep: '@Sm4', browsers: browser[3] },
  },

  /* config to support Parallel execution via browser stack */

  /*multiple: {
      basic: {
          grep: "@browserStack",
          outputName: "browserStack",
          browsers: [
              {
                  browser: "Chrome",
                  "desiredCapabilities": {
                      'os': 'Windows',
                      'os_version': '8',
                      'project': 'dan-client-mgt',
                      'browser_version': '79',
                      'build': 'Parallel_UI',
                      'name': 'Parallel Test: Chrome-@browserStack',
                      'browserstack.debug': 'true',
                      'browserstack.networkLogs': 'true'
                  }
              },
              {
                  browser: "Firefox",
                  "desiredCapabilities": {
                      'os': 'Windows',
                      'os_version': '8.1',
                      'project': 'dan-client-mgt',
                      'browser_version': '78',
                      'build': 'Parallel_UI',
                      'name': 'Parallel Test: Firefox-@browserStack',
                      'browserstack.debug': 'true',
                      'browserstack.networkLogs': 'true'
                  }
              }
          ]
      }
  },
*/

  helpers: {
    WebDriver, REST, GraphQL,
    customHelper: { require: './factories/MyHelper.js' },
  },

  // bootstrapAll: hooks.setBootstrap,
  // teardownAll: hooks.setTeardown,
  // bootstrap: hooks.setBootstrap,
  // teardown: hooks.setTeardown,

  include,
  gherkin,
  plugins: {
    screenshotOnFail: { enabled: true },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
      seleniumArgs: {
        drivers: {
          chrome: {
            version: '87.0.4280.20', // Chromedriver version
            arch: process.arch,
          },
          firefox: {
            version: '0.26.0', // Geckodriver version
            arch: process.arch,
          },
        },
      },
      seleniumInstallArgs: {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: {
          chrome: {
            version: '87.0.4280.20',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
          },
          firefox: {
            version: '0.26.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
          },
        },
      },
    },


    allure: { enabled: true },
  },
          reportportal: {
                         enabled: true,
                         require: '@reportportal/agent-js-codecept',
                         token: rptoken,
                         endpoint: rpendpoint,
                         launchName: rplaunchname,
                         launchAttributes: [
                    {
                         'key': 'env',
                         'value': env_name,
                    },
                        {
                          'key': 'app',
                          'value': app_name,
                        },
                   {
                          'key': 'test_type',
                          'value': rp_test_type,
                   },
                   {
                          'key': 'core_env',
                          'value': core_env,
                   },
    ],
    projectName: 'media_ecosystem',
    rerun: false,
    debug: true,
    hasStats: false,
  },
  name: 'Codeceptjs-Skeleton',
};
