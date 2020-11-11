module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    '@webpack-contrib/eslint-config-webpack',
    'prettier',
  ],
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'no-now': 0,
    'import/extensions': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-default-prop': 0,
    'func-names': 0,
  },
};
