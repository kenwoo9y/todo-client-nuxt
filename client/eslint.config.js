import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';
import js from '@eslint/js';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/node_modules/**', '**/.*/**'],
  },
  ...compat.config({
    extends: ['eslint:recommended'],
  }),
  eslintConfigPrettier,
  {
    plugins: {
      vue: eslintPluginVue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
