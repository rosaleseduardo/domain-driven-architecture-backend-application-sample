import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsdoc from 'eslint-plugin-tsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

/**
 * - Configuration Files
 *
 * Reference: https://eslint.org/docs/latest/use/configure/configuration-files
 *
 * - Custom Configurations:
 *
 * 1. https://eslint.org/docs/latest/rules
 * 2. https://www.npmjs.com/package/eslint-plugin-simple-import-sort
 * 3. https://www.npmjs.com/package/eslint-plugin-import
 * 4. https://www.npmjs.com/package/@typescript-eslint/parser
 * 5. https://www.npmjs.com/package/@eslint/js
 * 6. https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
 * 7. https://www.npmjs.com/package/eslint-plugin-prettier
 */
export default [
  { files: ['**/*.{ts,tsx}'] },
  { ignores: ['coverage', 'eslint.config.mjs'] },
  { 
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.eslint.json',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: pluginImport,
      '@typescript-eslint': pluginTs,
      tsdoc,
      prettier,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginTs.configs.recommended.rules,
      'no-irregular-whitespace': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // ⁠express ⁠ first, then packages starting with a character
            ['^express$', '^[a-z]'],
            // Packages starting with ⁠ @
            ['^@'],
            // Imports starting with ⁠ ../
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports starting with ⁠ ./
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      'max-len': ['error', { code: 80 }],
      'import/no-unresolved': 'off',
      'import/namespace': 'off',
      'import/export': 'off',
      'import/default': 'off',
      'no-undef': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'prefer-arrow-callback': ['error'],
      'func-style': ['error', 'expression'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          arrowParens: 'avoid',
          printWidth: 80,
          traillingComma: 'all',
        },
      ],
      'tsdoc/syntax': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports' },
      ],
    },
  },
];
