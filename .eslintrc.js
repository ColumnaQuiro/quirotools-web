const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@antfu',
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    '@intlify/vue-i18n/no-html-messages': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'vue/comma-dangle': 'off'
  },
  plugins: [],
}
