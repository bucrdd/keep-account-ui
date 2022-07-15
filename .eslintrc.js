module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2017,
    parse: "@babel/eslint-parser",
  },
  rules: {
    semi: ["error", "always"],
    quotes: [ "error", "double", {
        allowTemplateLiterals: false,
        avoidEscape: false,
      },
    ],
    // Stylistic Issues
    "max-len": [ "error", {
        code: 120,
        ignoreUrls: true,
      },
    ],
    "comma-dangle": ["warn", "only-multiline"],
    "array-element-newline": ["warn", "consistant"],
    "block-spacing": ["error", "always"],
  },
  overrides: [
    {
      files: ["src/pages/**"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
