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
    "comma-dangle": ["warn", "never"]
  }
};