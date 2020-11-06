
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/cms/**/*.js",
    "!src/apollo/**/*.js",
    "!src/config/**/*.js",
    "!src/service-worker.js",
    "!src/constants.js",
    "!src/Routes.js",
    "!src/Shell.js",
    "!src/App.js",
    "!src/**/__mocks__/**/*.js",
    // TODO: convert the following into a proper blob pattern
    // "!.*\\.d\\.{js|jsx}",
  ],
  verbose: true,
  snapshotSerializers: [
    "enzyme-to-json/serializer",
  ],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!(@dentsu-ui)\\/).+\\.(js|jsx|ts|tsx)$",
  ],

  coveragePathIgnorePatterns: [
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.babelrc",
    "/gitignore",
  ],
  testResultsProcessor: "jest-sonar-reporter",
  resolver: "jest-pnp-resolver",

  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx}",
  ],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.full.css$": "identity-obj-proxy",
    "^handsontable": "handsontable",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mock/imageMockFile.js",
    "\\.(css|less|scss)$": "<rootDir>/src/mock/cssStub.js",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
}
process.env = Object.assign(process.env, {
  REACT_APP_IS_FLAGIT_ENABLE: "true",
  REACT_APP_FLAGIT_APP_ID: "testId",
  REACT_APP_FLAGIT_ENV_ID: "testId",
});
