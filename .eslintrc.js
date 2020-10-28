module.exports = {
  "env": {
    "browser": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "indent": [0, "tab"],
    "no-tabs": 0,
    "arrow-parens": 0,
    "key-spacing": [0, { "mode": "minimum" }],
    "semi": 0,
    "quote-props": 0,
    "import/no-extraneous-dependencies": 0,
    "no-multi-spaces": 0,
    "no-param-reassign": 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": "off",
    "import/no-named-as-default": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "func-names": ["error", "as-needed"],
    "max-len": [
      "error",
      {
        "code": 150,
        "ignoreComments": true
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id",
          "_str"
        ]
      }
    ],
    "object-curly-newline": ["error", { "consistent": true }]
  }
}
