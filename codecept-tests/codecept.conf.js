const HOST_URL = process.env.HOST_URL || 'https://gdp-client01-brp-g1ga-media-ecosystem.az.brp.gdpdentsu.net/productivity-manager';

exports.config = {
  output: './output',
  helpers: {

    Puppeteer: {
      url: HOST_URL,
      restart: false,
      waitForNavigation: "networkidle0",
      waitForTimeout: 20000,
      show: false,
      windowSize: '640x480',
      "chrome":{
        "args": ["--no-sandbox"]
      }
    }
  },
  include: {
    Admin:'./pages/loginPage.js',
    Okta:'./pages/Login.js',
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "codecept-tests/reports",
      "inlineAssets": true,
      "reportPageTitle": "iBRP Test Reports",
      "reportTitle": "iBRP Test Reports",
      "reportFilename": "index"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/loginSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  name: 'dentsu-bdd-js'
}
