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
      '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn', // Enforce consistent type imports
      '@typescript-eslint/explicit-function-return-type': 'warn',   // Enforce explicit return types on functions
      '@typescript-eslint/explicit-module-boundary-types': 'warn',   // Enforce explicit return types on module boundaries
      '@typescript-eslint/ban-ts-comment': 'warn', // Warn on @ts-ignore comments
      '@typescript-eslint/ban-types': 'warn', // Warn on banned types
      '@typescript-eslint/no-empty-function': 'warn', // Warn on empty functions
      '@typescript-eslint/no-empty-interface': 'warn', // Warn on empty interfaces
      'no-extra-parens': 'warn', // Warn on extra parentheses
      'no-extra-semi': 'warn', // Warn on extra semicolons
      'no-invalid-this': 'warn', // Warn on invalid this usage
      'no-misused-new': 'warn', // Warn on misused new
      'no-shadow': 'warn', // Warn on shadowed variables
      'no-unused-expressions': 'warn', // Warn on unused expressions
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-use-before-define': 'warn', // Warn on use before define
      'no-useless-concat': 'warn', // Warn on useless concatenation
      'no-useless-escape': 'warn', // Warn on useless escape
      'no-useless-return': 'warn', // Warn on useless return
      'no-var': 'warn', // Warn on var usage
      'prefer-const': 'warn', // Warn on prefer const
      'prefer-destructuring': 'warn', // Warn on prefer destructuring
      'prefer-numeric-literals': 'warn', // Warn on prefer numeric literals
      'prefer-promise-reject-errors': 'warn', // Warn on prefer promise reject errors
      'prefer-regex-literals': 'warn', // Warn on prefer regex literals
      'prefer-rest-params': 'warn', // Warn on prefer rest params
      'prefer-spread': 'warn', // Warn on prefer spread
      'prefer-template': 'warn', // Warn on prefer template literals
      '@typescript-eslint/no-extra-semi': 'warn', // Warn on extra semicolons
      '@typescript-eslint/no-invalid-this': 'warn', // Warn on invalid this usage
      '@typescript-eslint/no-misused-new': 'warn', // Warn on misused new
      '@typescript-eslint/no-non-null-assertion': 'warn', //  Warn on non-null assertions
      '@typescript-eslint/no-shadow': 'warn', // Warn on shadowed variables
      '@typescript-eslint/no-unused-vars-experimental': 'warn', // Warn on unused variables
      '@typescript-eslint/prefer-as-const': 'warn', //  Enforce using as const
      '@typescript-eslint/prefer-namespace-keyword': 'warn', // / Enforce using namespace keyword
      '@typescript-eslint/prefer-readonly': 'warn', // Enforce using readonly
      '@typescript-eslint/prefer-readonly-parameter-types': 'warn', // Enforce using readonly parameter types
      '@typescript-eslint/prefer-regexp-exec': 'warn', //   Enforce using regexp exec
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn', //   Enforce using string starts with and ends with
      'quotes': ['warn', 'single'],     // ✅ Correct
      'semi': ['warn', 'always'],       // ✅ Correct
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