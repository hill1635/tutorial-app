import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
const NUMBER_OF_INDENTS = 2;

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'eqeqeq': 'error', // Enforce strict equality to avoid type coercion issues
      'no-eval': 'error', // Disallow the use of eval() for security and performance reasons
      'curly': 'error', // Require curly braces for all control statements for clarity and consistency
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn about unused variables, but allow unused arguments prefixed with _
      'no-console': 'warn', // Warn about console statements to encourage proper logging practices
      'strict': ['error', 'never'], // Disallow strict mode directives as modules are strict by default
      'no-use-before-define': ['error', { 'functions': false, 'classes': true }], // Disallow use of variables before they are defined to prevent hoisting issues
      'no-magic-numbers': ['warn', { 'ignore': [0, 1], 'ignoreArrayIndexes': true }], // Disallow magic numbers to improve code readability and maintainability
      'consistent-return': 'error', // Enforce consistent return statements in functions
      'no-const-assign': 'error', // Disallow modifying variables declared as const
      'no-param-reassign': ['error', { 'props': true }], // Disallow reassigning function parameters to avoid unexpected behavior
      'array-bracket-spacing': ['error', 'never'], // Enforce spacing inside array brackets for readability
      'indent': ['error', NUMBER_OF_INDENTS], // Enforce consistent indentation for better readability
      'quotes': ['error', 'single', { 'avoidEscape': true }], // Enforce single quotes for strings for consistency
      'semi': ['error', 'always'], // Enforce semicolons at the end of statements for clarity
      'no-trailing-spaces': 'error', // Disallow trailing spaces for cleaner code
      'linebreak-style': ['error', 'unix'], // Enforce consistent linebreak style
      'prefer-arrow-callback': 'error', // Require using arrow functions for callbacks for cleaner syntax
      'no-var': 'error', // Disallow the use of var to encourage block-scoped declarations
      'prefer-const': 'error', // Prefer const for variables that are never reassigned
      'keyword-spacing': ['error', { 'before': true, 'after': true }], // Enforce spacing around keywords for readability
      'object-curly-spacing': ['error', 'always'], // Enforce spacing inside object literals for readability
      'no-useless-concat': 'error', // Disallow unnecessary concatenation of strings
      'no-useless-return': 'error', // Disallow redundant return statements
      'space-before-function-paren': ['error', 'never'], // Enforce consistent spacing before function parentheses
      'comma-dangle': ['error', 'always-multiline'],
      'react/prop-types': 'off', // Disable the react/prop-types rule
      'react/no-unescaped-entities': 'off', // Disable the react/prop-types rule
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser }
  },
  pluginReact.configs.flat.recommended,
]);
