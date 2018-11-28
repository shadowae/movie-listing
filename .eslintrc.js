// This file enables the airbnb javascript styleguide
// Please add rule changes in alphabetical order
// If you add a rule here, please include a comment stating the reason

module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'always'], // makes anon function with single argument more obvious
    'class-methods-use-this': 'off', // component event handlers might not use `this`, and they cannot be static
    'curly': ['error', 'all'], // prevents errors
    'jsx-a11y/alt-text': 'off', // do not enforce alt tags on images for now
    'jsx-a11y/label-has-for': 'off', // do not enforce htmlFor prop on labels for now
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // allow event listeners on non-interactive elements like <div> and <img> for now
    'jsx-a11y/no-static-element-interactions': 'off', // do not enforce role attributes on static elements with handlers for now
    'linebreak-style': ['error', 'unix'], // enforce unix line ending for EOL
    'import/prefer-default-export': ['off'], // off for now, on multiple imports per javascript file, ideally it should be one import per file
    'react/require-default-props': 'off',
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
  },
  plugins: [
    'jest',
  ],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    '_CONTEXT_PATH_': false,
    '_BUNDLE_VERSION_': false,
    '_DEV_': false,
  },
};
