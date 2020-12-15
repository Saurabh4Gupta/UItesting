const {include, gherkin} = require('./config/BddConfig');
const {WebDriver, REST, GraphQL} = require('./config/WebHelpersConfig');
const browser = ["chrome", "chrome", "chrome", "chrome"];
// const hooks = require('./config/BootStrapAndTearDownHooks');

exports.config = {
    output: './output',

    multiple: {
        default: {grep: '@Sm3', browsers: browser[0]},
        group1: {grep: '@Sm1', browsers: browser[1]},
        group2: {grep: '@Sm2', browsers: browser[2]},
        group3: {grep: '@Sm4', browsers: browser[3]},
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
            }},


        allure: {enabled: true},
    },
    name: 'Codeceptjs-Skeleton'
};
