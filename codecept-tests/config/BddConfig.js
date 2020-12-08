// In this file you have to add path of all the page file over here.
const include = {
    I: './steps_file.js',
};

const gherkin = {
    features: './features/*/*/*.feature',
    steps: [
        "./step_definitions/steps.js",
    ],
};

module.exports = {
    include,
    gherkin,
};
