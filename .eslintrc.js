module.exports = {
  root: true,
  env: {
    "es6": true
  },
  extends: [
    "plugin:vue/vue3-essential"
  ],
  parserOptions: {
    ecmaVersion: 2017,
    parse: "@babel/eslint-parser"
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double", {
      "allowTemplateLiterals": false,
      "avoidEscape": false
    }],
    "comma-dangle": ["warn", "only-multiline"]
  }
};
