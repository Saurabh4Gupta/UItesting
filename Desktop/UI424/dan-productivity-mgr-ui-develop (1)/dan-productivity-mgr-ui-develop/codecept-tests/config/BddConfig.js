// In this file you have to add path of all the page file over here.
const include = {
    I: './steps_file.js',
};

const gherkin = {
    features: './src/features/*/*.feature',
    steps: [
        "./src/step_definitions/login_step.js",
        "./src/step_definitions/selectClient_step.js",
      "./src/step_definitions/viewDetails_step.js",
       "./src/step_definitions/dataRequests.js",
      "./src/step_definitions/viewComplete_step.js",
    ],
};

module.exports = {
    include,
    gherkin,
};