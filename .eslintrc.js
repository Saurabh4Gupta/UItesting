module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ['airbnb'],
  rules: {
    indent: [0, 'tab'],
    'no-tabs': 2,
    'arrow-parens': 0,
    'key-spacing': [0, { mode: 'minimum' }],
    semi: 0,
    'quote-props': 0,
    'import/no-extraneous-dependencies': 0,
    'no-multi-spaces': 0,
    'no-param-reassign': 0,
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 'off',
    'func-names': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_str'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'object-curly-newline': ['error', { consistent: true }],
  },
};
