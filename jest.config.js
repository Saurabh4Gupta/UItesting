module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.babelrc',
    '/gitignore',
  ],

  transformIgnorePatterns: [
    "/node_modules/",
  ],

  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.jsx?$',
};
