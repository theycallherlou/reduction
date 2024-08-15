import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    name: 'configuration',
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        ...globals.supabase
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      }
    }
  }
];
