// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Allow any type
      '@typescript-eslint/no-floating-promises': 'warn', // Warn on unhandled promises
      '@typescript-eslint/no-unsafe-argument': 'warn', // Warn on unsafe arguments
      '@typescript-eslint/no-unsafe-assignment': 'warn', // Warn on unsafe assignments
      '@typescript-eslint/no-unsafe-call': 'warn',  // Warn on unsafe calls
      '@typescript-eslint/no-unsafe-member-access': 'warn', // Warn on unsafe member access
      '@typescript-eslint/no-unsafe-return': 'warn',  // Warn on unsafe return values
      '@typescript-eslint/no-unused-expressions': 'warn', // Warn on unused expressions
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-extra-parens': 'warn',
      '@typescript-eslint/no-extra-semi': 'warn',
      '@typescript-eslint/no-invalid-this': 'warn',
      '@typescript-eslint/no-misused-new': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-unused-vars-experimental': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-namespace-keyword': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/prefer-readonly-parameter-types': 'warn',
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/quotes': ['warn', 'single'],
      '@typescript-eslint/semi': ['warn', 'always'],
      '@typescript-eslint/space-before-function-paren': [
        'warn',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
          method: 'never',
          constructor: 'never',
          arrow: 'always',
          function: 'never',
          generator: 'never',
          async: 'always',
        },
      ],
    },
  },
);